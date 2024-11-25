import postModel from "../models/post.model.js";

export const getPosts = async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json(posts);
};

export const getPost = async (req, res) => {
  const post = await postModel.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

export const createPost = async (req, res) => {
  const newPost = new postModel(req.body);
  const post = await newPost.save();
  res.status(200).json(post);
};

export const deletePost = async (req, res) => {
  const post = await postModel.findByIdAndDelete(req.params.id);
  res.status(200).json("Post has been deleted");
};
