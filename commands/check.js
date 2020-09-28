const discord = require('discord.js');
const characters = require('./../characters.js');
const { commandPrefix } = require('./../config.js');

module.exports.executeCommand = async (client, message, params) => {
    if(message.channel == message.author.dmChannel) {
        return;
    }

    if(params.length) {
        const data = characters.findCharacter(params);

        if(typeof data !== 'undefined') {
            const embed = new discord.MessageEmbed();

            embed.setTitle('Character stats.')
                .setColor(0xFCB5D0)
                .addField('Name', data.name, true)
                .addField('Location', data.location, true)
                .addField('Health', data.health, true)
                .addField('Attack', data.attack, true)
                .addField('Defense', data.defense, true)
                .attachFiles(`./assets/characters/${data.file}`)
                .setThumbnail(`attachment://${data.file}`);

            message.channel.send(embed)
                .catch(error => console.log(error));
        }
        else {
            message.channel.send('Character not found.')
                .catch(error => console.log(error));
        }
    }
    else {
        message.channel.send(`${this.config.usage}\n${this.config.desc}`)
            .catch(error => console.log(error));
    }
}

module.exports.config = {
    commandName: 'check',
    usage: `Syntax: ${commandPrefix}check [character name]`,
    desc: `Description: Shows an undertale character's stats.`
};