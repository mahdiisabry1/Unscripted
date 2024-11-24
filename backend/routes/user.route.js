import express from "express";

const router = express.Router();

router.get("/anothertest", (req, res) => {
  res.status(200).send("This is a user router test");
});

export default router;
