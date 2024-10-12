import {
  EmbedBuilder,
  SlashCommandBuilder,
  PermissionFlagsBits,
} from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("example")
    .setDescription("An example command")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("An example command")
      .setDescription(
        `This is an example command provide by the template, if you need to see more or improve this template please visit the github repository or contribute to it. https://github.com/Cosmeak/template.discord-bot`,
      )
      .setTimestamp()
      .setColor("Blurple");
    return interaction.reply({ embeds: [embed] });
  },
};
