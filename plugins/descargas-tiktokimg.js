import fetch from 'node-fetch'

var handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *іᥒgrᥱsᥱ ᥙᥒ ᥱᥒᥣᥲᥴᥱ ძᥱ 𝗍іk𝗍᥆k 𝗊ᥙᥱ ᥴ᥆ᥒ𝗍ᥱᥒgᥲ іmᥲ́gᥱᥒᥱs*`, m, fake, )
m.react(rwait)
if (!(text.includes('http://') || text.includes('https://'))) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥱs𝗍ᥱ ᥱᥒᥣᥲᥴᥱ ᥒ᥆ ᥴ᥆ᥒ𝗍іᥱᥒᥱ http:// ni https://*`, m, fake, )
m.react(error)
if (!text.includes('tiktok.com')) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥙrᥣ ᥱrr᥆́ᥒᥱᥲ*`, m, fake, )
m.react(error)

try {

let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkeysapi}&url=${text}`)
let anu = await res.json()
if (anu.status != '200') throw Error(anu.message)
anu = anu.result
if (anu.length == 0) throw Error('Error : no data')
let c = 0
for (let x of anu) {
if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *sᥱ һᥲ ᥱᥒ᥎іᥲძ᥆ 1 ძᥱ ${anu.length} іmᥲ́gᥱᥒᥱs.*\n_Eᥣ rᥱs𝗍᥆ ⍴᥆ძrᥲ sᥱr ᥎іsіᑲᥣᥱ ᥱᥒ ᥱᥣ ᥴһᥲ𝗍 ⍴rі᥎ᥲძ᥆ ძᥱᥣ bot_` }, { quoted : m })
else await conn.sendMessage(m.sender, { image: { url: x } }, { quoted : m })
c += 1
}
m.react(done)
} catch (e) {
console.log(e)
m.react(error)
return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *᥆ᥴᥙrrі᥆́ ᥙᥒ 𝖿ᥲᥣᥣ᥆*`, m, fake, )
}

}
handler.help = ['tiktokslide']
handler.tags = ['descargas']
handler.command = /^((tt|tiktok)imagen)$/i

export default handler