require('dotenv').config();
const { Client, IntentsBitField, ActivityType, messageLink, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online.`);

    client.user.setActivity({
        name: 'Levin´s Feet pics💞',
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=podoFBFOhtc'
    })
});



client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'fn') {
        const embed = new EmbedBuilder()
            .setTitle("komm fortnite (mit Rizz)")
            .setImage('https://cdn.discordapp.com/attachments/1081195504219734036/1098349689868398625/a.jpg')

        interaction.reply({ embeds: [embed] });
    }

    if (interaction.commandName === 'fn2') {
        const embed = new EmbedBuilder()
            .setTitle("komm fortnite (mit Baby Rizz)")
            .setImage('https://cdn.discordapp.com/attachments/992102783778029580/1098356292373971014/27b7483b8d56cf4c6ece4df78cd03257c5_720x720.png')

        interaction.reply({ embeds: [embed] });
    }

    if (interaction.commandName === 'fn3') {
        const embed = new EmbedBuilder()
            .setTitle("komm fortnite auf 21 Basis (Drake dick sucking rizz)")
            .setImage('https://cdn.discordapp.com/attachments/1081195504219734036/1098357009281192016/FUCK_YEAH_DRAAAKE_shared_by_Carmen_on_We_Heart_It.jpg')
            .setURL('https://www.youtube.com/watch?v=q2nT-pXGfYI')
            .setDescription('drück oben auf das blaue')
        interaction.reply({ embeds: [embed] });

    }
});


client.login(process.env.TOKEN);