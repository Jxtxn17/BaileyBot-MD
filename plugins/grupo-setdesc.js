var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
await conn.groupUpdateDescription(m.chat, text)
m.reply(`*✅ 𝙎𝙀 𝘼 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊́𝙉*`)
} else throw '*[❗𝐈𝐍𝐅𝐎❗]𝙌𝙐𝙀 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊́𝙉 𝙋𝙊𝙉𝙂𝙊?*'

}
handler.help = ['setdesc']
handler.tags = ['grupo']
handler.command = /^set(desk)?(desc)$/i
handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler
