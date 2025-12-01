import express from "express";
import "./bot/bot";
import "./cron/scheduler";
import { bot } from "./bot/bot";

const app = express();
app.use(express.json());

// Webhook endpoint
app.post(`/webhook/${process.env.TELEGRAM_BOT_TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Start server
app.listen(3000, () => {
  console.log("Server running...");
});
