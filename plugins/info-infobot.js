import { generateWAMessageFromContent } from '@whiskeysockets/baileys' 
 import os from 'os' 
 import util from 'util' 
 import sizeFormatter from 'human-readable' 
 import MessageType from '@whiskeysockets/baileys' 
 import fs from 'fs' 
 import { performance } from 'perf_hooks' 
 let handler = async (m, { conn, usedPrefix }) => { 
 let _uptime = process.uptime() * 1000 
 let uptime = clockString(_uptime)  
 let totalreg = Object.keys(global.db.data.users).length 
 const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats) 
 const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
 const groups = chats.filter(([id]) => id.endsWith('@g.us')) 
 const used = process.memoryUsage() 
 const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {} 
 const { autoread, gconly, pconly, self } = global.opts || {} 
 let old = performance.now() 
 let neww = performance.now() 
 let pp = './storage/logos/Menu1.jpg' 
 let speed = neww - old 
 let info = `┏━━━━━━━━━━━━━━━━━
┃ ꨄ *CREADOR* 
┃ *Jxtxn17*
 
┃  ꨄ *CONTACTO*  
┃  *${ig}*

┃ ꨄ *VERSIÓN ACTUAL* 
┃  ${vs} 
 
┃ ꨄ *PREFIJO* 
┃ *${usedPrefix}* 

┃  ꨄ *CHATS PRIVADOS* 
┃  *${chats.length - groups.length}* 
 
┃  ꨄ *CHATS GRUPALES* 
┃ *${groups.length}*  
 
┃ ꨄ *CHATS EN TOTAL* 
┃ *${chats.length}*  

┃  ꨄ *ACTIVIDAD* 
┃ *${uptime}* 
 
┃ ꨄ *USUARIOS* 
┃ *${totalreg}*  
 
┃  ꨄ *VELOCIDAD:* 
┃  *${speed}* 
 
┃ ꨄ *AUTOREAD:* 
┃ ${autoread ? '*Habilitado ✅*' : '*Deshabilitado ❌*'} 
 
┃  ꨄ *RESTRICT:* 
┃ ${restrict ? '*Habilitado ✅*' : '*Deshabilitado ❌*'}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()  
  conn.sendMessage(m.chat, { text: info, contextInfo: { externalAdReply: { title: '', body: 'BaileyBot-MD 🗿', thumbnail: imagen2, sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})
 } 
 handler.help = ['infobot', 'speed'] 
 handler.tags = ['main'] 
 handler.command = /^(infobot|Infobot)$/i 
 export default handler 
  
 function clockString(ms) { 
 let h = Math.floor(ms / 3600000) 
 let m = Math.floor(ms / 60000) % 60 
 let s = Math.floor(ms / 1000) % 60 
 console.log({ms,h,m,s}) 
 return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
