// https://discordjs.guide/#/creating-your-bot/adding-more-commands
// https://discord.js.org/#/docs/main/stable/class/Guild
const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config/config');

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
	if(message.content.startsWith(`${prefix}ping`) ) {
		message.channel.send('Pong!');
	} else if(message.content.startsWith(`${prefix}bing`) ) {
		message.channel.send('Bong!');
	} else if(message.content === `${prefix}server` ) {
		message.channel.send(`Server name: ${message.channel.name}\nTotal members: ${message.guild.memberCount}`);
	}
});

// login to Discord with your app's token
client.login(token);