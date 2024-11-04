import { walk } from "jsr:@std/fs/walk";
import { commands } from "./commands/index.ts";
import { bot } from "./bot.ts";

export const importDirectory = async (folder: string) => {
  const files = {};
  for await (const entry of walk(folder)) {
    if (!entry.isFile) continue;
    const file = await import(`./${entry.path}`.replace("/src", ""));
    files[Object.keys(file)[0]] = Object.values(file)[0];
  }
  return files;
};

export const deployCommands = async () => {
  bot.logger.info("Loading command...");
  importDirectory("./src/commands/");

  bot.logger.info("Updating commands...");
  await bot.helpers.upsertGlobalApplicationCommands(commands.array());

  bot.logger.info("Done!");
};
