var handler = async (m, {conn, args, usedPrefix, command}) => {

const isClose = {
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
'desbloquear': 'unlocked',
'bloquear': 'locked',
}[(args[0] || '')];
if (isClose === undefined) {
throw `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 𝖿᥆rmᥲ𝗍᥆ ᥱrr᥆́ᥒᥱ᥆*\n\n [ 💡 ] ᥱȷᥱm⍴ᥣ᥆:
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ *○ ${usedPrefix + command} abrir*

┃ *○ ${usedPrefix + command} cerrar*

┃ *○ ${usedPrefix + command} bloquear*

┃ *○ ${usedPrefix + command} desbloquear*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()
}
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 grᥙ⍴᥆ ᥴᥱrrᥲძ᥆, s᥆ᥣ᥆ ᥲძmіᥒs ⍴ᥙᥱძᥱᥒ ᥱsᥴrіᑲіr.*')}

}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['grupo']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true

export default handler
