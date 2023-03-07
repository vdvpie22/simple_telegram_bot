const TeleBot = require('telebot');

const bot = new TeleBot({
    token: process.env.TELEGRAM_TOKEN, // Required. Telegram Bot API token.
    polling: {
        interval: 1000, 
        timeout: 0, 
        limit: 100, 
        retryTimeout: 5000, 
    },
});

bot.on('text', (msg) => {
    if (msg.text.toLowerCase() == '/getid') {
        msg.reply.text(msg.chat.id)        
    } else {
    msg.reply.text(msg.text)
    }
});

bot.start();