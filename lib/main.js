'use strict';

const bot = require('./bot');

bot.on('message', require('./on_message'));

//const config = require('../config');
//bot.sendMessage(config.main_chat_id, 'tick');
