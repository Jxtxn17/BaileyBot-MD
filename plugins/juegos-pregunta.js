var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *іᥒgrᥱsᥱ ᥙᥒ 𝗍ᥱ᥊𝗍᥆᥆ ᥲ ⍴rᥱgᥙᥒ𝗍ᥲr*\n\n[ 💡 ] ᥱȷᥱm⍴ᥣ᥆, !${command} Hoy va llover?`, m, fake, )
m.react('❔')
await delay(1000 * 1)
m.react('❓')
await delay(1000 * 1)
m.react('❔')
await delay(1000 * 1)

conn.reply(m.chat, `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *Preguntas - Bailey*\n\n⬡ *Pregunta:* ${text}\n⬡ *Respuesta:* ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible','Por que haces estas preguntas','Por eso te dejo','Para que quieres saber','No te dire la respuesta'].getRandom()}`, m, fake, )

}
handler.help = ['pregunta']
handler.tags = ['juegos']
handler.command = /^pregunta|preguntas|apakah$/i

handler.register = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
