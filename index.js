// учимся создавать телеграм бота по уроку: https://www.youtube.com/watch?v=IuUY-OJ0GXE

const http = require('http');

const TelegramBot = require('node-telegram-bot-api');

const token = '572769275:AAEmfiIr-opFqke6s1q-6XlSxCdPbJ1kSqg'; //avkolTestBot - Бот-испытатель-2

const bot = new TelegramBot(token, {polling: true});

/**

bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Welcome");
    
});

*/

bot.on('message', (msg) =>{
	
	if (msg.text == "/start"){
	bot.sendMessage(msg.chat.id, `Здравствуйте, ${msg.from.first_name}! Рад Вас приветствовать! 
	Позвольте представиться, я - бот-испытатель и моя задача состоит в том, чтобы тестировать функции бота в телеграме. `)
	}
	
	else{
	bot.sendMessage(msg.chat.id, `${msg.from.first_name}, прошу прощения! Вы написали мне "${msg.text.toString()}", но я не знаю, что это значит :(`)
	}
});

/**
http.createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('Hello, world!');
	*/
	
	

var server = http.createServer(function(req, res){

   var reloaded = '<script>var reload = function(){window.location.reload(true)}; setInterval(reload(), 5000)</script>';
   var arrayOfGrittings = ['One','Two','Three','Four'];	
   function getRandomInt(min, max) {
             return Math.floor(Math.random() * (max - min)) + min;
             };
   var rand = getRandomInt(0, 4);
   var greeting = arrayOfGrittings[rand];	
   
	res.writeHead(200, {"Content-type":"Text/html"});
	res.end(reloaded+'<center><h1>Hello World <script>document.write(greeting)</script></h1></center>');
});

server.listen(process.env.PORT, function(){console.log('Server is running')});
	
