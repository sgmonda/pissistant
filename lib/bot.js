const config = require('../config');
const TelegramBot = require('node-telegram-bot-api');

module.exports = new TelegramBot(config.bot_token, {polling: true});
