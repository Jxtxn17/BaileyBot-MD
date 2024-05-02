var handler = async (m, { conn, args, text, usedPrefix, command }) => {

let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
let nom = conn.getName(m.sender)
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱs𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ ᥱs𝗍ᥲ rᥱs𝗍rіᥒgіძ᥆*`, fkontak, m) 
if (!text) throw `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 іᥒgrᥱsᥱ ᥱᥣ ᥒᥙ́mᥱr᥆ ძᥱ ᥣᥲ ⍴ᥱrs᥆ᥒᥲ 𝗊ᥙᥱ 𝗊ᥙіᥱrᥱ ᥲᥒ̃ᥲძіr*\n\n [ 💡 ] ᥱȷᥱm⍴ᥣ᥆\n*${usedPrefix + command}* 52999999999`
if (text.includes('+')) throw  `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 іᥒgrᥱsᥱ ᥱᥣ ᥒᥙ́mᥱr᥆ 𝗍᥆ძ᥆ ȷᥙᥒ𝗍᥆ sіᥒ ᥱᥣ (+)*`
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
await conn.reply(text+'@s.whatsapp.net', `*💌 Hola! soy BaileyBot-MD, Una ⍴ᥱrs᥆ᥒᥲ 𝗍ᥱ ᥲ іᥒ᥎і𝗍ᥲძ᥆ ᥲ sᥙ grᥙ⍴᥆.*\n\n* ᥣіᥒk*\n${link}`, m, {mentions: [m.sender]})
m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱᥒ᥎іᥲᥒძ᥆ іᥒ᥎і𝗍ᥲᥴі᥆́ᥒ ᥲᥣ ⍴rі᥎ᥲძ᥆ ძᥱ {nom}*\n\n*📅 ${fecha}*\n⏰ *${tiempo}*`) 

}
handler.help = ['add']
handler.tags = ['grupo']
handler.command = /^(add|agregar|invitar|invite|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
 
