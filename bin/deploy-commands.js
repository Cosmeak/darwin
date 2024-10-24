import { REST, Routes } from "discord.js";
import fs from "node:fs";
import path from "node:path";
import {Logger} from "../src/services/Logger.js";
import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const commands = [];
  const commandsPath = path.join(__dirname, "..", "src", "commands");
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = await import(filePath);
    commands.push(command.default.data.toJSON());
  }
  const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);
  try {
    Logger.log(
      `Started refreshing ${commands.length} application (/) commands`,
    );
    const data = await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID,
      ),
      { body: commands },
    );
    Logger.success(
      `Successfully reloaded ${data.length} application (/) commands.`,
    );
  } catch (error) {
    Logger.error(error);
  }
})();
