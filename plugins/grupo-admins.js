var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/menus/Menu2.jpg'
let groupAdmins = participants.filter(p => p.admin)
let listaAdmins = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
let owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'

if (!text) return m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥴ᥆ᥣ᥆𝗊ᥙᥱ ᥱᥣ m᥆𝗍і᥎᥆ ⍴ᥲrᥲ іᥒ᥎᥆ᥴᥲr ᥲ ᥣ᥆s ᥲძmіᥒs*`)
if (text.length < 10) return m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱᥣ m᥆𝗍і᥎᥆ ᥱs mᥙᥡ ᥴ᥆r𝗍᥆, mіᥒіm᥆ 10 ᥴᥲrᥲᥴ𝗍ᥱrᥱs*`)
let mensaje = args.join` `
let yo = `*📢 mᥱᥒsᥲȷᥱ:* ${text}`
let texto = `*༺ іᥒ᥎᥆ᥴᥲᥒძ᥆ ᥲძmіᥒs ༻*

${yo}

*❗ s𝗍ᥲ𝖿𝖿 ძᥱᥣ grᥙ⍴᥆❗*
${listaAdmins}`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', texto, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['admins']
handler.tags = ['grupo']
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true

export default handler
