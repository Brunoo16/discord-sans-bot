const discord = require('discord.js');
const { commandPrefix } = require('./../config.js');

module.exports.executeCommand = async (client, message, params) => {
    if(message.channel == message.author.dmChannel) {
        return;
    }

    const embed = new discord.MessageEmbed();

    if(message.mentions.members.size) {
        embed.setTitle(`${message.mentions.members.first().displayName}'s avatar.`)
            .setColor(message.mentions.members.first().displayHexColor)
            .setImage(message.mentions.members.first().user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }));
    } 
    else {
        if(!params.length) {
            embed.setTitle(`${message.author.username}'s avatar.`)
                .setColor(message.guild.member(message.author.id).displayHexColor)
                .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 }));
        } 
        else {
            message.channel.send(`${this.config.usage}\n${this.config.desc}`)
                .catch(error => console.log(error));
            return;        
        }
    }
    message.channel.send(embed)
        .catch(error => console.log(error));
}

module.exports.config = {
    commandName: 'avatar',
    usage: `Syntax: ${commandPrefix}avatar [@user]`,
    desc: `Description: Shows somebody's avatar.`
};