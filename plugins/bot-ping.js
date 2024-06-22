import { totalmem, freemem } from 'os'
import os from 'os'
import util from 'util'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
//import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'
const format = sizeFormatter({ std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })

var handler = async (m, { conn }) => {

let timestamp = speed()
let latensi = speed() - timestamp

let _muptime = process.uptime() * 1000
let muptime = clockString(_muptime)

let chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])


let texto = `┏━━━━━━━━━━━${wm}━━━━━━━━━━
┃ *🚀 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝*
┃ • ${latensi.toFixed(4)}

┃ *⏰ 𝐀𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝*
┃ • ${muptime}

┃ *💌 𝐂𝐡𝐚𝐭𝐬*
┃ • ${chats.length} *Chats privados*
┃ • ${groups.length} *Grupos*

┃ *💻 𝐒𝐞𝐫𝐯𝐢𝐝𝐨𝐫*
┃ • *Ram:* ${format(totalmem() - freemem())} / ${format(totalmem())}
┗━━━━━━━━━━━━${wm}━━━━━━━━━━━`.trim()

conn.sendMessage(m.chat, { text: texto, contextInfo: { externalAdReply: { title: '', body: '𝐁𝐀𝐈𝐋𝐄𝐘 - 𝐁𝐎𝐓 - 𝐌𝐃', thumbnailUrl: 'https://telegra.ph/file/459f2784f2ef05a1fdbe0.jpg', sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})

}
handler.help = ['ping']
handler.tags = ['bot']
handler.command = ['ping', 'speed']

handler.register = true

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
