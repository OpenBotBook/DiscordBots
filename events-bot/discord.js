const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!create_event') {
        let event_name = msg.content.split(" ")[1];
        let event_time = msg.content.split(" ")[2];
        let event_channel = msg.guild.channels.cache.get(channel_id);
        event_channel.send(`Event "${event_name}" has been created at ${event_time}.`)
            .then(message => {
                message.react('👍');
                message.react('👎');
            });
    }
});

client.login('your_bot_token_goes_here');
