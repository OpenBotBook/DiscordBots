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
