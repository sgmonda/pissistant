const bot = require('./bot');

module.exports = (data) => {
  console.log('DATA RECEIVED', data);
  var chatId = data.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
};
