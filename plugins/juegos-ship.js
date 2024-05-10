var handler = async (m, { conn, command, text }) => {

if (!text) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥱsᥴrіᑲᥱ ᥱᥣ ᥒ᥆mᑲrᥱ ძᥱ ძ᥆s ⍴ᥱrs᥆ᥒᥲs ⍴ᥲrᥲ ᥴᥲᥣᥴᥙᥣᥲr sᥙ ᥲm᥆r*`, m, fake, )
let [text1, ...text2] = text.split(' ')

text2 = (text2 || []).join(' ')
if (!text2) return conn.reply(m.chat, `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *ᥱsᥴrіᑲᥱ ᥱᥣ ᥒ᥆mᑲrᥱ ძᥱ ᥣᥲ sᥱgᥙᥒძᥲ ⍴ᥱrs᥆ᥒᥲ*`, m, fake, )
let love = `❤️ *${text1}* tu oportunidad de enamorarte de *${text2}* es de *${Math.floor(Math.random() * 100)}%* 👩🏻‍❤️‍👨🏻`

m.reply(love, null, { mentions: conn.parseMention(love) })

}
handler.help = ['ship']
handler.tags = ['juegos']
handler.command = /^(ship)$/i

handler.register = true

export default handler
