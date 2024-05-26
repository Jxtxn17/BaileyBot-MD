var handler = async (m, { conn, command }) => {

let str = `⬡ *Creador del bot*
wa.me/51929972576

_Puedes apoyar el bot dando tu estrellita en nuestro repositorio_
https://github.com/Jxtxn17/BaileyBot-MD`

conn.reply(m.chat, str, m, fake, )

}
handler.help = ['donar', 'donate', 'donasi']
handler.tags = ['info']
handler.command = /^donar|donate|donasi$/i

handler.register = true

export default handler
