import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {

        if (!text) throw `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 іᥒgrᥱsᥲ ᥱᥣ 𝗍і́𝗍ᥙᥣ᥆ ძᥱ ᥙᥒᥲ ᥴᥲᥒᥴі᥆́ᥒ\n\n[ 📌 ] ᥱȷᥱm⍴ᥣ᥆ *${usedPrefix + command}* Lil Peep hate my life`
        let res = await yts(text)
        let vid = res.videos[0]
        if (!vid) throw `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 ᥎і́ძᥱ᥆/ᥲᥙძі᥆ ᥒ᥆ ᥱᥒᥴ᥆ᥒ𝗍rᥲძ᥆`
        let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
        //const url = 'https://www.youtube.com/watch?v=' + videoId
        m.react('🎧')
        let play = `Menu de BaileyBot-MD
> pruebassssssssss`
 await conn.sendButton(m.chat, play, thumbnail, [
    ['🍧 MenuCompleto', `${usedPrefix}allmenu ${url}`],
    ['🍿 Script', `${usedPrefix}sc ${url}`]
  ], m)
}
handler.help = ['bot']
handler.tags = ['descargas']
handler.command = ['play', 'hh']
//handler.disabled = true

export default handler