import express from "express";
import {
  getUser,
  getUserSavedPosts,
  savePost,
  userCreatedPosts,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/user/me/:id", getUser);
router.get("/:usePostId", userCreatedPosts);
router.get("/saved", getUserSavedPosts);
router.patch("/save", savePost);


export default router;
