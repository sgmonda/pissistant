const bot = require('./bot');
const NodeWebcam = require('node-webcam');
const webcam = NodeWebcam.create({
  width   : 1280,
  height  : 720,
  delay   : 0,
  quality : 100,
  output  : 'jpeg',
  verbose : true,
});

module.exports = (data) => {

  console.log('DATA RECEIVED', data);

  const chatId = data.chat.id;

  if (/wifi|foto/i.test(data.text)) {

    bot.sendMessage(chatId, 'Has pedido una foto. Procesando...');
    webcam.capture('picture', (filename) => {
      bot.sendPhoto(chatId, filename);
    });

  } else {

    bot.sendMessage(chatId, 'Mensaje recibido. Nada que hacer.');
  }
};
