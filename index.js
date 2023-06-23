import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config'

const token = process.env.TELEGRAM_BOT_TOKEN;
const fromChat = process.env.FROM_CHAT_ID;
const toChat = process.env.TO_CHAT_ID;

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    if (chatId == fromChat && msg.text) {
        bot.sendMessage(toChat, msg.text)
    }
});