const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
    .setName("owner")
    .setDescription("Replies with Owner's Name"),

    async execute(interaction) {
        interaction.reply({content: " @Ulric is the Owner of the Server"})
    }
};