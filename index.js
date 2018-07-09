// учимся создавать телеграм бота по уроку: https://www.youtube.com/watch?v=IuUY-OJ0GXE

const http = require('http');

const TelegramBot = require('node-telegram-bot-api');

const token = '572769275:AAEmfiIr-opFqke6s1q-6XlSxCdPbJ1kSqg'; //avkolTestBot - Бот-испытатель-2

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) =>{
	bot.sendMessage(msg.chat.id, `Здравствуйте, ${msg.from.first_name}! Вы написали мне "${msg.text.toString()}", но я не знаю, что это значит :(`)
});

http.createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('');