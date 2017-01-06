'use strict';

const config = require('../config');
const bot = require('./bot');

bot.on('message', require('./on_message'));
bot.sendMessage(config.main_chat_id, `Reiniciado ${new Date().toISOString()}`);

console.log('Bot preparado');
