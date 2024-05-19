import { sticker } from '../lib/sticker.js'
//import uploadFile from '../lib/uploadFile.js'
//import uploadImage from '../lib/uploadImage.js'
//import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let stiker = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let autor = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''

if (!/webp|image|video/g.test(mime) && !text) return m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫*\n *rᥱs⍴᥆ᥒძᥱ ᥲ ᥙᥒᥲ іmᥲgᥱᥒ ᥆ ᥎іძᥱ᥆ ᥴ᥆ᥒ ${usedPrefix + command}*`)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('*🚫 𝐄𝐑𝐑𝐎𝐑 🚫*\n *ᥱᥣ ᥎іძᥱ᥆ ᥒ᥆ ⍴ᥙᥱძᥱ ძᥙrᥲr mᥲ́s ძᥱ 7 sᥱgᥙᥒძ᥆s*')

if (/webp|image|video/g.test(mime)) {
let img = await q.download?.()
let out
stiker = await sticker(img, false, global.packname, global.author)
await conn.reply(m.chat, `_Calmᥲ ᥴrᥲᥴk ᥱs𝗍᥆ᥡ haciendo 𝗍ᥙ s𝗍іᥴkᥱrs 👏_\n\n_*Recuerdᥲ ᥣ᥆s s𝗍іᥴkᥱrsgі𝖿 s᥆ᥒ ძᥱ 6 sᥱgᥙᥒძ᥆s*_\n\n_*by DiablaBot*_`, m)

if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)

if (!stiker) errorMessage = 'ERROR'
}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('*🚫 𝐄𝐑𝐑𝐎𝐑 🚫\n ᥱᥣ ᥱᥒᥣᥲᥴᥱ / ᥙrᥣ / ᥣіᥒk ᥒ᥆ ᥱs ᥎ᥲᥣіძ᥆*')}

if (stiker) {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
} else {
console.log(stiker)
}}

handler.command = /^(s(tickers?)?(image|video|gif|img)?)$/i
handler.help = ['s', 'stickers']
handler.tags = ['sticker']
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
