const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content.startsWith('!poll')) {
        const args = message.content.slice(6).split(' ');
        const question = args.join(' ');
        const reactions = ['👍', '👎'];

        message.channel.send(question + '\n' + reactions.join(' '))
            .then(sentMessage => {
                reactions.forEach(reaction => sentMessage.react(reaction));
            });
    }
});

client.login('YOUR_TOKEN_HERE');

////////////////////////////////
//        Bot Details
// DiscordBots/pull-bot/discord.js 
// Version: 1.0
////////////////////////////////
//        Copy Right Details
// © OpenBotBook
// https://github.com/OpenBotBook
// Apache License
// Version 2.0, January 2004
// http://www.apache.org/licenses/
////////////////////////////////
