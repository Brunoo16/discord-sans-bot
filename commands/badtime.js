const discord = require('discord.js');
const canvas = require('canvas');
const { commandPrefix } = require('./../config.js');

module.exports.executeCommand = async (client, message, params) => {
    if(message.channel == message.author.dmChannel) {
        return;
    }

    if(message.mentions.members.size) {
        const badTimeCanvas = canvas.createCanvas(429, 387);
        const context = badTimeCanvas.getContext('2d');

        const background = await canvas.loadImage('./assets/badtime.png')
            .catch(error => console.log(error));

        context.drawImage(background, 0, 0, badTimeCanvas.width, badTimeCanvas.height);

        const memberName = message.mentions.members.first().displayName;

        context.font = '30px arial';
        context.textBaseline = 'middle';
        context.textAlign = 'center';
         
        context.fillStyle = '#ffffff';
        context.fillText(memberName, badTimeCanvas.width / 2.05, badTimeCanvas.height / 3.8);

        const attachment = new discord.MessageAttachment(badTimeCanvas.toBuffer(), 'badtime.png');

        message.channel.send(`${message.mentions.members.first()}`, attachment)
            .catch(error => console.log(error));
    } 
    else {
        message.channel.send(`${this.config.usage}\n${this.config.desc}`)
            .catch(error => console.log(error));
        return;
    }
}

module.exports.config = {
    commandName: 'badtime',
    usage: `Syntax: ${commandPrefix}badtime [@user]`,
    desc: 'Description: Gives a bad time.'
};