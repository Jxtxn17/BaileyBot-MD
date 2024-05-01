import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()

conn.sendPresenceUpdate('composing', m.chat)

let media = await (uploader)(buffer)
let json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json()

conn.sendMessage(m.chat, { text: json.result }, { quoted: m })

} else return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 mᥲᥒძᥲ ᥙᥒᥲ іmᥲgᥱᥒ ᥴ᥆ᥒ ᥱᥣ ᥴ᥆mᥲᥒძ᥆ ᥡ ᥱᥣ 𝗍ᥱ᥊𝗍᥆ ᥲ ᑲᥙsᥴᥲr*\n\n[ 💡 ]Ejemplo, !bardimg ძᥲmᥱ іᥒ𝖿᥆rmᥲᥴі᥆́ᥒ s᥆ᑲrᥱ ᥣ᥆ 𝗊ᥙᥱ ᥲ⍴ᥲrᥱᥴᥱ ᥱᥒ ᥣᥲ іmᥲgᥱᥒ`, m, fake, )

}
handler.help = ['bardimg']
handler.tags = ['ai']
handler.command = /^(bardimg|bardimage)$/i

handler.limit = true

export default handler
