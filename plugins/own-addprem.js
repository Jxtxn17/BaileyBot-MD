let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*🤍 ꙰ Etiqueta a la persona que será usuario premiumIP*`
if (global.prems.includes(who.split`@`[0])) throw `*🍧 Este usuario ya es Premium*`
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `*@${who.split`@`[0]} Ahora se convirtió en usuario Premium, no tendrá límites en BaileyBot-MD 👑*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = false
export default handler