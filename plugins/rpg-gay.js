let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu2.jpg'

let love = `
┌─────⊱◈◈◈⊰─────
┃🚩 Nombre: ${name} 
┃🏳‍🌈: *${Math.floor(Math.random() * 100)}%* Gay
└─────⊱◈◈◈⊰─────`

conn.sendMessage(m.chat, {text: love, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 Error Del Sistema*`, m, fake, )

}
handler.help = ['love']
handler.tags = ['juegos']
handler.command = /^(gei|gay|Gay)$/i

handler.register = true

export default handler