var handler = async (m, { conn, command }) => {

let str = `¡Usa el comando .Play!`

conn.reply(m.chat, str, m, fake, )

}
handler.help = ['aviso']
handler.tags = ['info']
handler.command = /^aviso|play2$/i

handler.register = true

export default handler
