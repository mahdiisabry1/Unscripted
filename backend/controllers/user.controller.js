import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const userCreatedPosts = async (req, res) => {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
        return res.status(401).json("Not Authenticated");
    }

    const user = await User.findOne({ clerkUserId });
    if (!user) {
        return res.status(404).json("User not found");
    }  

    const createdPosts = await Post.find({ user: user._id })
        .populate("user", "username img email")

    res.status(200).json(createdPosts);
}

export const getUserSavedPosts = async (req, res) => {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
        return res.status(401).json("Not Authenticated");
    }

    const user = User.findOne({ clerkUserId });
    res.status(200).json(user.savedPosts);
}
export const savePost = async (req, res) => {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
        return res.status(401).json("Not Authenticated");
    }


}