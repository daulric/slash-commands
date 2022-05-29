const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, CommandInteraction } = require('discord.js');
const moment = require('moment');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Replies with user info')
    .addStringOption((option) => 
        option
        .setName("message")
        .setDescription("The member to get info on")
        .setRequired(true)
    ),

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     */
        

    async execute (interaction) {
        const input = interaction.options.getString("message");
        return interaction.reply(input)
    }
}