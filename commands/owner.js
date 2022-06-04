const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, Client} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("owner")
    .setDescription("Replies with Owner's Name"),

    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    
    async execute(interaction) {
        interaction.reply({content: `Ulric is my owner!`})
    }
};