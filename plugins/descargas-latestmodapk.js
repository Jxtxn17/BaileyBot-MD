import fetch from 'node-fetch'

var handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *іᥒgrᥱsᥱ ᥱᥣ ᥣіᥒk ძᥱ m᥆ძᥣᥲ𝗍ᥱs𝗍 ȷᥙᥒ𝗍᥆ ᥲᥣ ᥴ᥆mᥲᥒძ᥆*`, m, fake, )
if (!args[0].match(/latestmodapks/gi)) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥱᥒᥣᥲᥴᥱ іᥒᥴ᥆rrᥱᥴ𝗍᥆*`, m, fake, )

try {
  
let res = await fetch(`https://api.akuari.my.id/downloader/dlmod?link=${args[0]}`)
let json = await res.json()
await conn.reply(m.chat, `*📁 Peso:* ${json.respon.size}\n🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 ᥱs⍴ᥱrᥱ ᥙᥒ m᥆mᥱᥒ𝗍᥆`, m, fake, )
let { linkdl, size } = json.respon
    
conn.sendMessage(m.chat, { document: { url: linkdl }, mimetype: 'application/videos.android.package-archive', fileName: `Apk modlatest.apk` }, { quoted: m })
} catch {
return conn.reply(m.chat, '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *᥆ᥴᥙrrі᥆ ᥙᥒ 𝖿ᥲᥣᥣ᥆*', m, fake, )}

}
handler.help = ['dlmodlatest']
handler.tags = ['descargas']
handler.command = ['dllatest', 'dlmodlatest'] 

handler.register = true
handler.limit = true

export default handler
