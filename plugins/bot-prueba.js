import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'

var handler = async (m, { conn, command, args, text, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *іᥒgrᥱsᥱ ᥱᥣ ᥒ᥆mᑲrᥱ ძᥱ ᥙᥒ ᥎іძᥱ᥆ ძᥱ ᥡ᥆ᥙ𝗍ᥙᑲᥱ*\n\n[ 💡 ] ᥱȷᥱm⍴ᥣ᥆, !${command} New West - Those Eyes`,  m, fake, )
m.react(rwait)

try {


if (!text) return m.reply('Ejemplo, play photograph')
const search = await yts(`${text}`)
const ytMsg = `Título: ${search.all[0].title}\nVistas: ${search.all[0].views}\nUrl: ${search.videos[0].url}`
const testZ = generateWAMessageFromContent(from, { viewOnceMessage: { message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, interactiveMessage: proto.Message.InteractiveMessage.create({ body: proto.Message.InteractiveMessage.Body.create({ text: '' }), footer: proto.Message.InteractiveMessage.Footer.create({ text: 'Zam' }), header: proto.Message.InteractiveMessage.Header.create({ title: ytMsg, subtitle: 'Zam', hasMediaAttachment: false }), nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ buttons: [ { "name": "quick_reply", "buttonParamsJson": `{"display_text":"Audio 🔊","id":".play2 ${text}"}` }, { "name": "quick_reply", "buttonParamsJson": `{"display_text":"Video 📺","id":".play3 ${text}"}` } ], })})}}}, {})
client.relayMessage(testZ.key.remoteJid, testZ.message, { messageId: testZ.key.id }, {quoted: m})

}

handler.help = ['play', 'play2']
handler.tags = ['descargas']
handler.command = /^play2?$/i

handler.register = true
handler.limit = true

export default handler