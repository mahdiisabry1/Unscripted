import { Router } from "express";
import { exec } from "child_process";
const router = Router();

router.post("/summarize", (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  const escapedContent = sanitizedContent.replace(/"/g, '\\"');

  // Call the Python script
  exec(
    `python summarize.py "${escapedContent}"`,
    { timeout: 30000 },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return res.status(500).json({ error: "Failed to summarize text" });
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return res.status(500).json({ error: "Failed to summarize text" });
      }

      // Send the summary back to the client
      const summary = stdout.trim();
      res.json({ summary });
    }
  );
});

export default router;
