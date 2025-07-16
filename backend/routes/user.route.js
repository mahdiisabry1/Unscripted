import express from "express";
import {
  getUserSavedPosts,
  savePost,
  userCreatedPosts,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:usePostId", userCreatedPosts);
router.get("/saved", getUserSavedPosts);
router.patch("/save", savePost);


export default router;
