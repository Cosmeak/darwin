import { createBot, Intents } from "npm:@discordeno/bot";
import "jsr:@std/dotenv/load";
import { importDirectory } from "./helpers.ts";

export const bot = createBot({
  token: Deno.env.get("TOKEN") as string,
  intents: Intents.Guilds | Intents.GuildMembers | Intents.GuildMessages,
  events: await importDirectory("./src/events/"),
});
