import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {        
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = 'storage/logos/Menu2.jpg'
//let pp = gataVidMenu.getRandom()
await conn.sendMessage(m.chat, {
        text: `✰【𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐄𝐥 𝐌𝐞𝐧𝐮】✰ . . .*`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m })

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `╭─ - ＵＳＵＡＲＩＯ ----- •♫•♬••♬•♫•
│✰【𝐁𝐚𝐢𝐥𝐞𝐲𝐁𝐨𝐭-𝐌𝐃】✰
│╭─────────────────
││◉ *Nombre:* ${name}
││◉ *Limite:* ${joincount}
││◉ *Nivel:* ${level}
││◉ *Rango* ${role}
││◉ *Xp:* ${exp}
│╰─────────────────
╰─ დ.•* 🦦 *””*.დ ----- დ.•* 🍌 *””*.დ ---

╭─ - ＩＮＦＯＢＯＴ ----- .•♫•♬••♬•♫•. ╴╴╴
│╭─────────────────
││◉ *Creador:* Jxtxn17 / Ax
││◉ *Usuarios En Total:* ${totalreg}
││◉ *Usuarios Registrados:* ${rtotalreg}
││◉ *Tiempo activo:* ${uptime}
│╰─────────────────
╰─ დ.•* 🦦 *””*.დ ----- დ.•* 🍭 *””*.დ ---

╭─ - ＨＯＹ ----- .•♫•♬• •♬•♫•. ---
│╭─────────────────
││📅 *Fecha:* ${date}
│╰─────────────────
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ --

╭─ - info ----- .•♫•♬• •♬•♫•. --- 
│○ 📝 .groups
│○ 📝 .grouplist
│○ 📝 .infinity
│○ 📝 .host
│○ 📝 .hosting
│○ 📝 .database
│○ 📝 .user
│○ 📝 .horario
│○ 📝 .script
│○ 📝 .setcmd
│○ 📝 .delcmd
│○ 📝 .listcmd
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - anime ----- .•♫•♬• •♬•♫•. --- 
│○ 🔰 .otakusearch
│○ 🔰 .animelink
│○ 🔰 .animeinfo
│○ 🔰 .lolice
│○ 🔰 .meme
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - nsfw ----- .•♫•♬• •♬•♫•. --- 
│○ 🔞 .labiblia
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - downloader ----- .•♫•♬• •♬•♫•. --- 
│○ 🛸 .xnxxsearch <query>
│○ 🛸 .tiktokrandom
│○ 🛸 .tiktoksearch
│○ 🛸 .fb
│○ 🛸 .gitclone
│○ 🛸 .mediafire
│○ 🛸 .apkmod
│○ 🛸 .play
│○ 🛸 .play2
│○ 🛸 .tiktok
│○ 🛸 .yta
│○ 🛸 .ytv
│○ 🛸 .tiktokslide
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ --

╭─ - ai ----- .•♫•♬• •♬•♫•. --- 
│○ ✈️ .bard
│○ ✈️ .dalle
│○ ✈️ .dall2
│○ ✈️ .hd
│○ ✈️ .gimage <query>
│○ ✈️ .imagen <query>
│○ ✈️ .pinterest <keyword>
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - audio ----- .•♫•♬• •♬•♫•. --- 
│○ 🔊 .bass
│○ 🔊 .blown
│○ 🔊 .deep
│○ 🔊 .earrape
│○ 🔊 .fast
│○ 🔊 .fat
│○ 🔊 .nightcore
│○ 🔊 .reverse
│○ 🔊 .robot
│○ 🔊 .slow
│○ 🔊 .smooth
│○ 🔊 .tupai
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - internet ----- .•♫•♬• •♬•♫•. --- 
│○ 📱 .fetch <url>
│○ 📱 .get <url>
│○ 📱 .yts <pencarian>
│○ 📱 .ytsearch <pencarian>
│○ 📱 .githubsearch
│○ 📱 .tiktokxd
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - nable ----- .•♫•♬• •♬•♫•. --- 
│○ ✅ .enable
│○ ❌ .disable
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - fix ----- .•♫•♬• •♬•♫•. --- 
│○ 🗿 .fixmsgespera
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - frases ----- .•♫•♬• •♬•♫•. --- 
│○ 🧸 .consejo
│○ 🧸 .oracion
│○ 🧸 .piropo
│○ 🧸 .refran
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - grupo ----- .•♫•♬• •♬•♫•. --- 
│○ ⚙️ .add
│○ ⚙️ .admins
│○ ⚙️ .aprobar
│○ ⚙️ .group open / close
│○ ⚙️ .grupo abrir / cerrar
│○ ⚙️ .demote
│○ ⚙️ .hidetag
│○ ⚙️ .idgc
│○ ⚙️ .infogrupo
│○ ⚙️ .kick
│○ ⚙️ .link
│○ ⚙️ .promote
│○ ⚙️ .revoke
│○ ⚙️ .setbye
│○ ⚙️ .setdesc
│○ ⚙️ .setname
│○ ⚙️ .setwelcome
│○ ⚙️ .simulate
│○ ⚙️ .tagall
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - implementos ----- .•♫•♬• •♬•♫•. --- 
│○ 🛠 .acortar
│○ 🛠 .delete
│○ 🛠 .dropmail
│○ 🛠 .fake
│○ 🛠 .nowa
│○ 🛠 .qrcode
│○ 🛠 .spoiler
│○ 🛠 .readqr
│○ 🛠 .style
│○ 🛠 .traducir
│○ 🛠 .readviewonce
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - tools ----- .•♫•♬• •♬•♫•. --- 
│○ 💡 .calc <expression>
│○ 💡 .npmsearch
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - jadibot ----- .•♫•♬• •♬•♫•. --- 
│○ 🤖 .token
│○ 🤖 .gettoken
│○ 🤖 .serbottoken
│○ 🤖 .jadibot
│○ 🤖 .serbot
│○ 🤖 .getcode
│○ 🤖 .rentbot
│○ 🤖 .berhenti
│○ 🤖 .stop
│○ 🤖 .listjadibot
│○ 🤖 .bots
│○ 🤖 .subsbots
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - juegos ----- .•♫•♬• •♬•♫•. --- 
│○ 🎭 .acertijo
│○ 🎭 .delttt
│○ 🎭 .doxear
│○ 🎭 .gay
│○ 🎭 .los10
│○ 🎭 .mates
│○ 🎭 .personalidad
│○ 🎭 .ppt
│○ 🎭 .pregunta
│○ 🎭 .reto
│○ 🎭 .simi
│○🎭 .slot
│○ 🎭 .sorteo
│○ 🎭 .tictactoe
│○ 🎭 .adventure
│○ 🎭 .berburu
│○ 🎭 .tagme
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - rpg ----- .•♫•♬• •♬•♫•. --- 
│○ 🎪 .afk *<razón>*
│○ 🎪 .bal
│○ 🎪 .daily
│○ 🎪 .levelup
│○ 🎪 .minar
│○ 🎪 .minar
│○ 🎪 .myns
│○ 🎪 .pepon
│○ 🎪 .profile [@user]
│○ 🎪 .saquear [@user]
│○ 🎪 .buy
│○ 🎪 .buyall
│○ 🎪 .transfer [tipo] [cantidad] [@tag]
│○ 🎪 .unreg <numero de serie>
│○ 🎪 .unregister <numero de serie>
│○ 🎪 .reg <nombre.edad>
│○ 🎪 .work
│○ 🎪 .limit [@user]
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - sticker ----- .•♫•♬• •♬•♫•. --- 
│○ 🚀 .qc
│○ 🚀 .s
│○ 🚀 .stickers
│○ 🚀 .wm <packname>|<author>
│○ 🚀 .toimg (reply)
│○ 🚀 .tourl <reply image>
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - transformador ----- .•♫•♬• •♬•♫•. --- 
│○ 🛰 .toanime
│○ 🛰 .togifaud
│○ 🛰 .tomp3
│○ 🛰 .tovn
│○ 🛰 .tovideo
│○ 🛰 .tts
│○ 🛰 .topdf
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - owner ----- .•♫•♬• •♬•♫•. --- 
│○ 💻 . enable
│○ 💻  .disable
│○ 💻 .delbailey / ds
│○ 💻 .join [chat.whatsapp.com]
│○ 💻  .reporte <teks>
│○ 💻 .request <teks>
│○ 💻 .reunionstaff
│○ 💻 .add1 @numero
│○ 💻 .blocklist
│○ 💻 .broadcast <teks>
│○ 💻 .bc <teks>
│○ 💻 .broadcastchats <teks>
│○ 💻  .bcchats <teks>
│○ 💻  .creategroup
│○ 💻  .deleteplugin *<nombre>*
│○ 💻 .delprem <@user>
│○ 💻.getplugin
│○ 💻  .inspect
│○ 💻 .spamgp
│○ 💻 .enlace1
│○ 💻 .renameplugin *<nombre viejo> | <nombre nuevo>*
│○ 💻 .saveplugin *<nombre>*
│○ 💻 .setbotname <teks>
│○ 💻 .setprefix [prefix]
│○ 💻 .spamwa <number>|<mesage>|<no of messages>
│○ 💻 .unbanchat
│○ 💻 .unbanuser
│○ 💻 .addprem <@user>
│○ 💻 .banchat
│○ 💻 .cleartmp
│○ 💻 .restart
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---`.trim()
//conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
let img = await (await fetch(`https://telegra.ph/file/7981c55ad62c4344530e2.jpg`)).buffer()  
await conn.sendMessage(m.chat, {
text: menu,
contextInfo: { 
mentionedJid: [m.sender],
forwardingScore: 9, 
externalAdReply: {
title: '✰【𝐁𝐚𝐢𝐥𝐞𝐲-𝐁𝐨𝐭-𝐌𝐃】✰',
body: 'fake',
//body: 'Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ',
thumbnail: img,
sourceUrl: 'https://whatsapp.com/channel/0029VaDRDk2CBtxBVex2vB0Y',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await m.react('🤖')        
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${usedPrefix + command} ❗❗`)
console.log(e)        
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu2|allmenu|herramientas|menú|comandos|allm\?)$/i
handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}