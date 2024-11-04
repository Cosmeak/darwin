import { bot } from "./bot.ts";
import { deployCommands } from "./helpers.ts";

await deployCommands();
await bot.start();
