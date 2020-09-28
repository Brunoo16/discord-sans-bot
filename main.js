const discord = require('discord.js');
const requireAll = require('require-all');

const { botToken } = require('./config.js');

const client = new discord.Client();
client.commands = new Map();

client.removeAllListeners();

const eventFiles = requireAll( {
    dirname: __dirname + '/events',   
    filter: /^(?!-)(.+)\.js$/            
});

const commandFiles = requireAll( {
    dirname: __dirname + '/commands',
    filter: /^(?!-)(.+)\.js$/
});

for (let eventFileName in eventFiles) {
    const event = eventFiles[eventFileName];                                  
    client.on(eventFileName, event.bind(null, client));
    console.log(`Event loaded: ${eventFileName}`);
}

for (let cmdName in commandFiles) {
    const command = commandFiles[cmdName];
    client.commands.set(command.config.commandName, command);
    console.log(`Command loaded: ${command.config.commandName}`);
}

client.login(botToken);