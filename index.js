// require the discord.js module
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config/config');

// when the client is ready, run this code
// this event will trigger whenever your bot:
// - finishes logging in
// - reconnects after disconnecting
client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
	console.log(message.content);
});

// login to Discord with your app's token
client.login(config.TOKEN);