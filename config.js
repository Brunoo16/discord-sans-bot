const environment = require('dotenv');

environment.config();

module.exports = {
    botToken: process.env.BOT_TOKEN,
    commandPrefix: process.env.COMMAND_PREFIX,
};