const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('getinfo')
    .setDescription('Get information about a user')
    .addUserOption((option) =>
        option
        .setName('member')
        .setDescription('Choose a member to get information about')
        .setRequired(true)
    ),
        
     /**
    * 
    * @param {CommandInteraction} interaction 
    */


    async execute (interaction) {
        const member = interaction.options.getMember("member")
        const serverInfo = interaction.options.getString("server")

        if (member ) {  
            const activities = member.presence?.activities || []

             const focusActivity = activities.find(x => x.assets)

             const UserEmbed = new MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
            .setThumbnail(member.user.displayAvatarURL())
            .setDescription(activities.map((x, i) => `**${x.type}**: \`${x.name || "None"} : ${x.details || "None"} : ${x.state || "None"}\``).join("\n"))
            .addField("JoinedAt", member.joinedAt.toLocaleString(), true)
            .addField("Account Created At", member.user.createdAt.toLocaleString(), true)
            .addField("Common Information", [
                `Display Name: \`${member.displayName}\``,
                `Pending Member: \`${member.pending ? 'Yes' : 'No'}\``,
                `Booster: \`${member.premiumSince ? 'since ' + member.premiumSince.toLocaleString() : 'Nope'}\``
            ].join("\n"))

            await interaction.reply({embeds: [UserEmbed]})
        }
       
    }

}