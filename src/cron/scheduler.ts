import cron from "node-cron";
import { sendDailyPoll } from "../bot/polls";
import { reportBookReaders, reportSalawat } from "../bot/report";

const GROUP_CHAT_ID = Number(process.env.GROUP_CHAT_ID);

// Daily at 8 AM
cron.schedule("* * * * *", async () => {
  await sendDailyPoll();
  await reportSalawat(GROUP_CHAT_ID, "daily");
});

// Weekly on Sunday at 8 AM
cron.schedule("* * * * *", async () => {
//   await sendWeeklyPoll();
  await reportBookReaders(GROUP_CHAT_ID, "weekly");
});
