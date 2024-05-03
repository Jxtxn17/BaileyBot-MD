var handler = async (m, { conn, command }) => {

let str = `Hola, Eres gay`

conn.reply(m.chat, str, m, fake, )

}
handler.help = ['donar', 'donate', 'donasi']
handler.tags = ['info']
handler.command = /^ola|hola|Hola$/i

handler.register = true

export default handler