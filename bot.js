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
// Enable graceful stop

const { Telegraf } = require('telegraf')
const fs = require('fs')
require('dotenv')

const bot = new Telegraf(process.env.BOT_TOKEN)

// TLS options
const tlsOptions = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),
  ca: [
    // This is necessary only if the client uses a self-signed certificate.
    fs.readFileSync('client-cert.pem')
  ]
}

// Set telegram webhook
// The second argument is necessary only if the client uses a self-signed
// certificate. Including it for a verified certificate may cause things to break.
bot.telegram.setWebhook('https://server.tld:8443/secret-path', {
  source: 'server-cert.pem'
})

// Start https webhook
bot.startWebhook('/secret-path', tlsOptions, 8443)

// Http webhook, for nginx/heroku users.
bot.startWebhook('/secret-path', null, 5000)