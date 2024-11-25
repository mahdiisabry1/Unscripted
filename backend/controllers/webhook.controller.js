export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("WebHook Secret needed");
  }

  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(secret);
  let msg;
  try {
    msg = wh.verify(payload, headers);
  } catch (err) {
    res.status(400).json({
      message: "webhook verification failed",
    });
  }

  if (msg.type === "user.created") {
    const newUser = new UserActivation({
        
    })
  }
};
