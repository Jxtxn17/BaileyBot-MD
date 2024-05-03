var handler = async (m, { conn, command }) => {

let str = `Hola, Eres gay`

conn.fakeReply(m.chat, ${wm}, '0@s.whatsapp.net', '🏳‍🌈 *Que Gay Eres 🏳‍🌈 - 🌳 BaileyBot* 🌳', 'status@broadcast' )
m.react('🏳‍🌈')

}
handler.help = ['donar', 'donate', 'donasi']
handler.tags = ['info']
handler.command = /^ola|hola|Hola$/i

handler.register = true

export default handler