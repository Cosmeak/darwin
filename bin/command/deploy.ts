import { bot } from "../../src/bot.ts";
import { importDirectory } from "../../src/helpers.ts";
import { commands } from "../../src/commands/index.ts";

bot.logger.info("Loading command...");
importDirectory("./src/commands/");

bot.logger.info("Updating commands...");
await bot.helpers.upsertGlobalApplicationCommands(commands.array());

bot.logger.info("Done!");

Deno.exit();
