import ImageKit from "imagekit";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const query = {}; // Initialize an empty query object

  const cat = req.query.cat;
  const author = req.query.author;
  const search = req.query.search;
  const sort = req.query.sort;
  const featured = req.query.featured;

  if (cat) {
    query.category = cat; // Filter by category
  }

  if (search) {
    query.title = { $regex: search, $options: "i" }; // Search by title
  }

  if (author) {
    const user = await User.findOne({ username: author }).select("_id");
    if (!user) {
      return res.status(404).json("User not found");
    }
    query.user = user._id; // Filter by author
  }

  let sortObj = { createdAt: -1 };
  if (sort) {
    switch (sort) {
      case "latest":
        sortObj = { createdAt: -1 }; // Sort by latest
        break;
      case "oldest":
        sortObj = { createdAt: 1 }; // Sort by oldest
        break;
      case "popular":
        sortObj = { visit: -1 }; // Sort by most popular
        break;
      case "trending":
        sortObj = { visit: -1, createdAt: -1 }; // Sort by trending
        break;
    }
  }

  if (featured) {
    query.featured = true; // Filter by featured posts
  }

  const posts = await Post.find()
    .populate("user", "username")
    .sort(sortObj)
    .limit(limit)
    .skip((page - 1) * limit);

  const totalPosts = await Post.countDocuments();
  const hasMore = page * limit < totalPosts;

  res.status(200).send({ posts, hasMore });
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate(
    "user",
    "username img"
  );
  res.status(200).send(post);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("Not Authenticated");
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json("User not found");
  }

  let slug = req.body.title.replace(/ /g, "-").toLowerCase();
  let existingPost = await Post.findOne({ slug });
  let counter = 2;

  while (existingPost) {
    slug = `${slug}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });
  const post = await newPost.save();

  user.createdPosts.push(post._id);
  await user.save();

  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated");
  }

  const user = await User.findOne({ clerkUserId });

  const deletedPost = await Post.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletedPost) {
    return res.status(403).json("You can't delete this!");
  }
  user.createdPosts = user.createdPosts.filter(
    (postId) => postId.toString() !== deletedPost._id.toString()
  );
  await user.save();
  return res.status(200).json("Post deleted");
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
