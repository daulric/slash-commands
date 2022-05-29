const { CommandInteraction, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    
    data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Replies with server info'),

    /**
    * 
    * @param {CommandInteraction} interaction 
    */
    execute(interaction) {
        const { guild } = interaction;

        const { createdTimestamp, ownerId, description, members, memberCount, channels } = guild;

        const Embed = new MessageEmbed()
        .setColor("PURPLE")
        .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .addFields(
            {
                name: 'GENERAL',
                value: 
                `
                Name: ${guild.name}
                Created: <t:${parseInt(createdTimestamp / 1000)}:R>
                Owner: <@${ownerId}>
                Description: ${description}
                `
            },
            {
                name: '💡 | USERS',
                value: `
                - Members: ${members.cache.filter((m) => !m.user.bot).size}
                - Bots: ${members.cache.filter((m) => m.user.bot).size}
                Total: ${memberCount}
                `
            },
            {
                name: '📙 | Channels',
                value: 
                `
                - Text: ${channels.cache.filter((c) => c.type === "GUILD_TEXT").size}
                - Voice: ${channels.cache.filter((c) => c.type === "GUILD_VOICE").size}
                - Threads: ${channels.cache.filter((c) => c.type === "GUILD_NEWS_THREAD" && "GUILD_PRIVATE_THREAD" && "GUILD_PUBLIC_THREAD").size}
                - Categories: ${channels.cache.filter((c) => c.type === "GUILD_CATEGORY").size}
                - Stages: ${channels.cache.filter((c) => c.type === "GUILD_STAGE_VOICE").size}
                - News: ${channels.cache.filter((c) => c.type === "GUILD_NEWS").size}

                Total: ${channels.cache.size}

                `
            },
            {
                name: '💫 | Nitro Statistics',
                value: 
                `
                    - Tier: ${guild.premiumTier.replace("TIER_", "")}
                    - Boosts: ${guild.premiumSubscriptionCount}
                    - Boosters: ${members.cache.filter((m) => m.premiumSince).size}
                
                `
            }

        )
        .setFooter("Last Checked: ").setTimestamp();

        interaction.reply({embeds: [Embed]});

    }
}