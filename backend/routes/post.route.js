import express from "express";

const router = express.Router();

router.get("/anotherpost", (req, res) => {
  res.status(200).send("This is a post router test");
});

export default router;
