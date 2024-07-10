import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch' 
import yts from 'yt-search'
import ytdl from 'ytdl-core'

var handler = async (m, { text, conn, args, usedPrefix, command }) => {

if (!args[0]) conn.reply(m.chat, '*🍇 Ingres@ un vídeo + un enlace de YouTube*',  m, fake, )

let youtubeLink = ''
if (args[0].includes('you')) {
youtubeLink = args[0]
} else {
const index = parseInt(args[0]) - 1
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender)
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index]
} else {
return conn.reply(m.chat, `*🍓 No se encontró un enlace para ese número ingresa un número del 1 al ${matchingItem.urls.length}*`,  m, fake, )
}} else {
return conn.reply(m.chat, `*🥑 Para poder usar este comando de la manera ${usedPrefix + command} <numero>), realiza la búsqueda de vídeo con {usedPrefix}playlist <texto>*`,  m, fake, )
}} else {
return conn.reply(m.chat, `*🍉 Para usar este comando de la manera {usedPrefix + command} <numero>), realiza la búsqueda con{usedPrefix}playlist <texto>*`,  m, fake, )
}}} 
 conn.reply(m.chat, `*𝙱𝚢 𝙱𝚊𝚒𝚕𝚎𝚢𝙱𝚘𝚝-𝙼𝙳 - 𝙲𝚊𝚛𝚐𝚊𝚗𝚍𝚘 𝚎𝚜𝚙𝚎𝚛𝚎..*`, m, fake, )

try {

let q = '128kbps'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
  
try {

let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`)
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
m.react(done)
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
} catch {

try {

let searchh = await yts(youtubeLink)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
m.react(done)
conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
} catch {
m.react(error)
await conn.reply(m.chat, '*「👑」 ᥱrr᥆r, ᥒ᥆ sᥱ ⍴ᥙძ᥆ ᥱᥒ᥎іᥲr ᥱᥣ ᥲᥙძі᥆*', m, fake, )}
}}

}
handler.help = ['yta']
handler.tags = ['descargas']
handler.command = /^audio|fgmp3|dlmp3|getaud|yt(a|mp3)$/i

handler.register = true
handler.limit = true

export default handler
