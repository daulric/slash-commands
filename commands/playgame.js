const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('playgame')
        .setDescription('play a game!')
        .addStringOption(option => 
            option
                .setName("game")
                .setRequired(true)
                .setDescription('The animal you want to send')
                .addChoices(
                    {
                        name: 'bullet hell',
                        value: 'bullethell'
                    },
                    {
                        name: 'rotops',
                        value: 'rotops'
                    }
                )
            ),


    async execute(interaction) {
        const choices = interaction.options.getString('game');
        
        if (choices === 'bullethell') {
            await interaction.reply({ content: 'https://www.roblox.com/games/9664261461' });
        }
        
        if (choices === 'rotops') {
            await interaction.reply({ content: 'https://www.roblox.com/games/8301773648' });
        }

    }
}
