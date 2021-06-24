const { Telegraf } = require('telegraf')

const bot = new Telegraf('1892294968:AAEOtn5AzL9ByY_MRn9sQWwI1MxKjIh9VkA')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('hola botgmail', (ctx) => ctx.reply('Hola como estas en que te puedo ayudar'))
bot.hears('necesito saber cuantos correos tengo pendiente', (ctx) => ctx.reply('en el correo notificacionesempresas2021@gmail.com registrado en este bot hay 3 correos pendientes'))
bot.hears('muchas gracias botgmail', (ctx) => ctx.reply('con gusto, saludos'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))