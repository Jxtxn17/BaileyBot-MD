var handler = async (m, { conn, command }) => {

let aviso = `¡Usa el comando .play!`

conn.reply(m.chat, aviso, m, fake, )

}
handler.help = ['aviso']
handler.tags = ['info']
handler.command = /^aviso|play2|$/i

handler.register = true

export default handler
