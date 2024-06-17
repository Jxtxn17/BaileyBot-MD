/*⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo esta totalmente hecho por:
- Aiden_NotLogic >> https://github.com/ferhacks

El codigo de este archivo fue parchado por:
- ReyEndymion >> https://github.com/ReyEndymion
- BrunoSobrino >> https://github.com/BrunoSobrino

Contenido adaptado por:
- GataNina-Li >> https://github.com/GataNina-Li
- elrebelde21 >> https://github.com/elrebelde21
- AzamiJs >> https://github.com/AzamiJs
*/

const { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion} = (await import('@whiskeysockets/baileys'))
import qrcode from 'qrcode'
import NodeCache from 'node-cache'
import fs from 'fs'
import path from 'path'
import pino from 'pino'
import util from 'util' 
import * as ws from 'ws'
const { child, spawn, exec } = await import('child_process')
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js'

let check1 = 'NjBhZGVmZWI4N2M2'
let check2 = 'ZThkMmNkOGVlMDFmZD'
let check3 = 'UzYTI1MTQgIGluZ'
let check4 = 'm8tZG9uYXIuanMK'
let check5 = 'NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO'
let check6 = 'DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz'
let check8 = 'NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo'

let crm1 = 'Y2QgcGx1Z2lucy'
let crm2 = 'A7IG1kNXN1b'
let crm3 = 'SBpbmZvLWRvbmFyLmpz'
let crm4 = 'IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz'
let drm1 = ''
let drm2 = ''
let rtx = `♨️ *𝙹𝚊𝚍𝚒𝙱𝚘𝚝 - 𝙱𝚊𝚒𝚕𝚎𝚢*\n\nEscanea este QR para convertirte en un bot temporal\n\n1. Haga clic en los tres puntos en la esquina superior derecha.\n2. Toca Dispositivos vinculados.\n3. Vincular un dispositivo.\n4. Escanea este QR.\n\nQR Caduca en 20 segundos.`
let rtx2 = `♨️ *𝙹𝚊𝚍𝚒𝙱𝚘𝚝 - 𝙱𝚊𝚒𝚕𝚎𝚢*\n\nInicia sesión con este código para convertirte en un bot temporal\n\n1. Haga click en los tres puntos en la esquina superior derecha.\n2. Toca Dispositivos vinculados.\n3. Vincular un dispositivo.\n4. Vincular con número de teléfono.\n5. Pegar el código a continuación.`

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
let parentw = conn
if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ძіrіȷᥲsᥱ ᥲᥣ ᥒᥙ́mᥱr᥆ ⍴rіᥒᥴі⍴ᥲᥣ ძᥱᥣ ᑲ᥆𝗍*\nwa.me/${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}`, m) 
const mcode = args[0] && args[0].includes('--code') ? true : args[1] && args[1].includes('--code') ? true : false


let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (mcode) {
args[0] = args[0].replace('--code', '').trim()
if (args[1]) args[1] = args[1].replace('--code', '').trim()
if (args[0] == '') args[0] = undefined
console.log(args[0])}
if (!fs.existsSync('./jadibts/'+ id)){
fs.mkdirSync('./jadibts/'+ id, { recursive: true })}
args[0] && args[0] != undefined ? fs.writeFileSync('./jadibts/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, '\t')) : ''

if (fs.existsSync('./jadibts/' + id + '/creds.json')) {
let creds = JSON.parse(fs.readFileSync("./jadibts/" + id + "/creds.json"))
if (creds) {
if (creds.registered = false) {
fs.unlinkSync('./jadibts/' + id + '/creds.json')
}}}

const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, 'base64')
exec(comb.toString('utf-8'), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)
async function jddt() {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (!fs.existsSync('./jadibts/'+ id)){
fs.mkdirSync('./jadibts/'+ id, { recursive: true })
}
args[0] ? fs.writeFileSync('./jadibts/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, `\t`)) : ''

let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState("./jadibts/" + id)

const connectionOptions = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
browser: mcode ? ['Ubuntu', 'Chrome', '110.0.5585.95'] : ['BaileyBot', 'Opera', '5.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'BaileyBot-MD',
}}}

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) conn.isInit = false
if (qr && !mcode) return parentw.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx + drmer.toString('utf-8')}, { quoted: m})
if (qr && mcode) {
parentw.sendMessage(m.chat, {text : rtx2 + drmer.toString('utf-8')}, { quoted: m })
await sleep(5000)
let secret = await conn.requestPairingCode((m.sender.split`@`[0]))
await m.reply(secret)}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
console.log(code)
const endSesion = async (loaded) => {
if (!loaded) {
try {
conn.ws.close()
} catch {
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)                
if (i < 0) return 
delete global.conns[i]
global.conns.splice(i, 1)
}}

const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
console.log(reason)
if (reason == 405) {
await fs.unlinkSync('./jadibts/' + id + '/creds.json')

return await conn.reply(m.chat, '🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *ᥴ᥆ᥒᥱ᥊і᥆́ᥒ ᥴᥱrrᥲძᥲ*', m)
}
if (reason === DisconnectReason.restartRequired) {
jddt()
return console.log('🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 ᥴ᥆ᥒᥱ᥊і᥆́ᥒ rᥱᥱm⍴ᥣᥲzᥲძᥲ, sᥱ һᥲ ᥲᑲіᥱr𝗍᥆ ᥆𝗍rᥲ ᥒᥙᥱ᥎ᥲ sᥱsі᥆ᥒ, ⍴᥆r 𝖿ᥲ᥎᥆r, ᥴіᥱrrᥲ ᥣᥲ sᥱsі᥆́ᥒ ᥲᥴ𝗍ᥙᥲᥣ primer᥆')
} else if (reason === DisconnectReason.loggedOut) {
sleep(4000)
return conn.reply(m.chat, '🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *ᥣᥲ ᥴ᥆ᥒᥱ᥊і᥆́ᥒ sᥱ һᥲ ᥴᥱrrᥲძ᥆, 𝗍ᥱᥒძrᥲs 𝗊ᥙᥱ ᥎᥆ᥣ᥎ᥱr ᥲ ᥴ᥆ᥒᥱᥴ𝗍ᥲrsᥱ ᥙsᥲᥒძ᥆:*\n!deletesesion (Para borrar los datos y poder volver a solitar el QR o el código de emparejamiento', m)
} else if (reason == 428) {
await endSesion(false)
return conn.reply(m.chat, '🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *ᥣᥲ ᥴ᥆ᥒᥱ᥊і᥆́ᥒ sᥱ һᥲ ᥴᥱrrᥲძ᥆ ძᥱ mᥲᥒᥱrᥲ іᥒᥱs⍴ᥱrᥲძᥲ, іᥒ𝗍ᥱᥒ𝗍ᥲrᥱm᥆s rᥱᥴ᥆ᥒᥱᥴ𝗍ᥲr...*', m)
} else if (reason === DisconnectReason.connectionLost) {
await jddt()
return console.log('🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 ᥴ᥆ᥒᥱ᥊і᥆́ᥒ ⍴ᥱrძіძᥲ ᥴ᥆ᥒ ᥱᥣ sᥱr᥎іძ᥆r, rᥱᥴ᥆ᥒᥱᥴ𝗍ᥲᥒძ᥆')
} else if (reason === DisconnectReason.badSession) {
return await conn.reply(m.chat, '🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *ᥣᥲ ᥴ᥆ᥒᥱ᥊і᥆́ᥒ sᥱ һᥲ ᥴᥱrrᥲძ᥆, ძᥱᑲᥱrᥲ ძᥱ ᥴ᥆ᥒᥱᥴ𝗍ᥲrsᥱ mᥲᥒᥙᥲᥣmᥱᥒ𝗍ᥱ*', m)
} else if (reason === DisconnectReason.timedOut) {
await endSesion(false)
return console.log('🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 𝗍іᥱm⍴᥆ ძᥱ ᥴ᥆ᥒᥱ᥊і᥆́ᥒ ᥲg᥆𝗍ᥲძ᥆, rᥱᥴ᥆ᥒᥱᥴ𝗍ᥲᥒძ᥆....')
} else {
console.log('🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 rᥲz᥆ᥒ ძᥱ ძᥱsᥴ᥆ᥒᥱ᥊і᥆́ᥒ ძᥱsᥴ᥆ᥒ᥆ᥴіძᥲ: ${reason || ""} >> ${connection || ""}')
}}
if (global.db.data == null) loadDatabase()
if (connection == `open`) {
conn.isInit = true
global.conns.push(conn)
await parentw.sendMessage(m.chat, {text : args[0] ? `✅ *Conectado*` : `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *ᥴ᥆ᥒᥱᥴ𝗍ᥲძ᥆*\n\nUtilicᥱ sᥙ іძ ⍴ᥲrᥲ ᥎᥆ᥣ᥎ᥱr ᥲ ᥴ᥆ᥒᥱᥴ𝗍ᥲrsᥱ`}, { quoted: m })
await parentw.sendMessage(m.chat, {text : `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *ᥱs𝗍ᥲ ᥴ᥆ᥒᥱᥴ𝗍ᥲძ᥆, ᥱs⍴ᥱrᥱ ᥙᥒ m᥆mᥱᥒ𝗍᥆*`}, { quoted: m })
await sleep(5000)
if (!args[0]) parentw.sendMessage(m.chat, {text : usedPrefix + command + ' ' + Buffer.from(fs.readFileSync('./jadibts/' + id + '/creds.json'), 'utf-8').toString('base64')}, { quoted: m })    

}}
setInterval(async () => {
if (!conn.user) {
try { conn.ws.close() } catch (e) {      
console.log(await creloadHandler(true).catch(console.error))
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)                
if (i < 0) return
delete global.conns[i]
global.conns.splice(i, 1)
}}, 60000)

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler

} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = conn.chats
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
 conn.welcome = '*⊢⊰────⊶ШΣLCΩMΣ⊷────⊱⊣*\n*⊢❥︎ @subject*\n*⊢⊰────⊶⊰≪• ❈ •≫⊱⊷────⊱⊣*\n*⊢❥ @user*\n*⊢❥ 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾* \n*⊢ 𝙻𝙴𝙴𝚁 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n*⊢❥ 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙰 𝚃𝚄 𝙴𝚂𝚃𝙰𝙳𝙸𝙰!!*\n*⊢⊰────⊶⊰≪• ❈ •≫⊱⊷────⊱⊣*';

conn.bye = '*⊢⊰────⊶ΔDIΩS⊷────⊱⊣*\n*⊢❥︎︎ @user*\n*⊢❥︎︎ 𝙷𝙰𝚂𝚃𝙰 𝙿𝚁𝙾𝙽𝚃𝙾 👋🏻* \n*⊢❥︎︎ 𝙽𝙰𝙳𝙸𝙴 𝚃𝙴 𝙴𝚇𝚃𝚁𝙰𝙽̃𝙰𝚁𝙰* \n*⊢⊰────⊶≪ ❈ ≫⊷────⊱⊣*';

conn.spromote = '@user ¡sᥱ sᥙmᥲ ᥲᥣ grᥙ⍴᥆ ძᥱ ᥲძmіᥒs¡'

conn.sdemote = '@user 🚫 𝐄𝐑𝐑𝐎𝐑 🚫 !ᥲᑲᥲᥒძ᥆ᥒᥲ ᥱᥣ grᥙ⍴᥆!'

conn.sDesc = '🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 sᥱ һᥲ m᥆ძі𝖿і́ᥴᥲძ᥆ ᥣᥲ ძᥱsᥴrі⍴ᥴі᥆́ᥒ ძᥱᥣ grᥙ⍴᥆'

conn.sSubject = '🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎́𝐍 🚫 sᥱ һᥲ m᥆ძі𝖿іᥴᥲძ᥆ ᥱᥣ 𝗍і́𝗍ᥙᥣ᥆ ძᥱᥣ grᥙ⍴᥆'

conn.sIcon = '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 sᥱ һᥲ ᥴᥲmᑲіᥲძ᥆ ᥣᥲ 𝖿᥆𝗍᥆ ძᥱᥣ grᥙ⍴᥆'

conn.Revoke = '*Se a cambiado el enlace del grupo*'

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.onCall = handler.callUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

const currentDateTime = new Date()
const messageDateTime = new Date(conn.ev * 1000)
if (currentDateTime.getTime() - messageDateTime.getTime() <= 300000) {
console.log('Leyendo mensaje entrante:', conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = false
})
} else {
console.log(conn.chats, `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 ᥆mі𝗍іᥱᥒძ᥆ mᥱᥒsᥲȷᥱs ᥱᥒ ᥱs⍴ᥱrᥲ.`, conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = true
})
}

conn.ev.on(`messages.upsert`, conn.handler)
conn.ev.on(`group-participants.update`, conn.participantsUpdate)
conn.ev.on(`groups.update`, conn.groupsUpdate)
conn.ev.on(`message.delete`, conn.onDelete)
conn.ev.on(`call`, conn.onCall)
conn.ev.on(`connection.update`, conn.connectionUpdate)
conn.ev.on(`creds.update`, conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
jddt()
})

} 
handler.help = [`jadibot`, `serbot`, `getcode`, `rentbot`]
handler.tags = [`jadibot`]
handler.command = /^(jadibot|serbot|rentbot)/i

handler.private = false

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}