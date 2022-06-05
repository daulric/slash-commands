const { SlashCommandBuilder } = require('@discordjs/builders')
const { CommandInteraction } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('dm')
    .setDescription('Send a DM to a user')
    .addUserOption((option) =>
        option
        .setName("user")
        .setDescription("The user to send a DM to")
        .setRequired(true)
    )

    .addStringOption((option) =>
        option
        .setName("message")
        .setDescription("The message to send")
        .setRequired(true)
    ),

    async execute (interaction) {
        const user = interaction.options.getUser("user")
        const message = interaction.options.getString("message")

        await user.send(message)
        await interaction.reply({ content: `Sent a DM to ${user.username}`, ephemeral: true })
    }
}