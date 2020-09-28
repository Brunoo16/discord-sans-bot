const quotes = require('./../quotes.js');
const { commandPrefix } = require('./../config.js');
const discord = require('discord.js');

module.exports = async (client, message) => {
    if(message.channel != message.author.dmChannel) {
        if(message.content.startsWith(commandPrefix)) {
            let commandName = message.content.split(' ', 1)[0].slice(1);
            let params = message.content.slice(commandPrefix.length + commandName.length + 1);
            let command = client.commands.get(commandName);
            
            if (command) {
                command.executeCommand(client, message, params)
                    .catch(error => console.log(error));
            }
        }
        else {
            if(message.mentions.members.has(client.user.id)) {
                message.channel.send(quotes.getQuote())
                    .catch(error => console.log(error));
            }
        }
    }
};