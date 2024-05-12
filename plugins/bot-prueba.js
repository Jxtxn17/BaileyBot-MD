
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {

        if (!text) throw `✳🚫 𝐄𝐑𝐑𝐎𝐑 🚫 іᥒgrᥱsᥲ ᥱᥣ 𝗍і́𝗍ᥙᥣ᥆ ძᥱ ᥙᥒᥲ ᥴᥲᥒᥴі᥆́ᥒ\n\n[ 📌 ] ᥱȷᥱm⍴ᥣ᥆ *${usedPrefix + command}* Lil Peep hate my life`
        let res = await yts(text)
        let vid = res.videos[0]
        if (!vid) throw `✳🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 ᥎і́ძᥱ᥆/ᥲᥙძі᥆ ᥒ᥆ ᥱᥒᥴ᥆ᥒ𝗍rᥲძ᥆`
        let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
        //const url = 'https://www.youtube.com/watch?v=' + videoId
        m.react('🎧')
        let play = `
        ≡ ${wm}
> ┌──────────────
> 📌 *Título* : ${title}
> 📆 *Publicado:* ${ago}
> ⌚ *Duración:* ${timestamp}
> 👀 *Vistas:* ${views}
> └──────────────`
 await conn.sendButton(m.chat, play, fkontak, thumbnail, [
    ['🎶 MP3', `${usedPrefix}fgmp3 ${url}`],
    ['🎥 MP4', `${usedPrefix}fgmp4 ${url}`]
  ], m, fake)
}
handler.help = ['bot']
handler.tags = ['prueba']
handler.command = ['prueba2000', 'playqq']
//handler.disabled = true

export default handler