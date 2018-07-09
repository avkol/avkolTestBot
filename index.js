// учимся создавать телеграм бота по уроку: https://www.youtube.com/watch?v=IuUY-OJ0GXE

const TelegramBot = require('node-telegram-bot-api');

const token = '572769275:AAEmfiIr-opFqke6s1q-6XlSxCdPbJ1kSqg'; //avkolTestBot - Бот-испытатель-2

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) =>{
	bot.sendMessage(msg.chat.id, `Hi, ${msg.from.first_name} from my bot!`)
});