import { Bot } from "./services/Bot.js";
import { config } from "dotenv";
config();

// Check Node versionning
if (process.versions.node < 18) {
  throw new Error("Your node version need to be at least v18");
}

// Generate and launch Bot
const bot = new Bot();
bot.run();
