var handler = async (m, { conn, text, usedPrefix, command }) => {

let poin = 500
let poin2 = 20

if (!text) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *sᥱᥣᥱᥴᥴі᥆ᥒᥱ ⍴іᥱძrᥲ/⍴ᥲ⍴ᥱᥣ/𝗍іȷᥱrᥲ*\n\n[ 💡 ] ᥱȷᥱm⍴ᥣ᥆, !${command} papel`, m, fake, )

var astro = Math.random()

if (astro < 0.34) {
astro = 'piedra'
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera'
} else {
astro = 'papel'
}

if (text == astro) {
global.db.data.users[m.sender].exp += 100
global.db.data.users[m.sender].diamond += 5

conn.reply(m.chat, `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *Empate*\n\n> Tú: ${text}\n> El Bot: ${astro}\n\n(±)100 XP ✨\n(±)5 Diamantes 💎`, m, fake, )
} else if (text == 'piedra') {
if (astro == 'tijera') {
  
global.db.data.users[m.sender].exp += 300
global.db.data.users[m.sender].diamond += 10

conn.reply(m.chat, `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *Ganaste*\n\n> Tú: ${text}\n> El Bot: ${astro}\n\n+${poin} XP ✨\n+${poin2} Diamantes 💎`, m, fake, )
} else {
global.db.data.users[m.sender].diamond -= 10
global.db.data.users[m.sender].exp -= 300

conn.reply(m.chat, `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *Perdiste*\n\n> Tú: ${text}\n> El Bot: ${astro}\n\n-${poin} XP ✨\n-${poin2} Diamantes 💎`, m, fake, )
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].diamond += 20
global.db.data.users[m.sender].exp += 500

conn.reply(m.chat, `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *Ganaste*\n\n> Tú: ${text}\n> El Bot: ${astro}\n\n+${poin} XP ✨\n+${poin2} Diamantes 💎`, m, fake, )
} else {
global.db.data.users[m.sender].diamond -= 15
global.db.data.users[m.sender].exp -= 150

conn.reply(m.chat, `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *Perdiste*\n\n> Tú: ${text}\n> El Bot: ${astro}\n\n-${poin} XP ✨\n-${poin2} Diamantes 💎`, m, fake, )
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].diamond += 25
global.db.data.users[m.sender].exp += 600

conn.reply(m.chat, `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *Ganaste*\n\n> Tú: ${text}\n> El Bot: ${astro}\n\n+${poin} XP ✨\n+${poin2} Diamantes 💎`, m, fake, )
} else {
global.db.data.users[m.sender].diamond -= 10
global.db.data.users[m.sender].exp -= 300
conn.reply(m.chat, `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *Perdiste*\n\n> Tú: ${text}\n> El Bot: ${astro}\n\n-${poin} XP ✨\n-${poin2} Diamantes 💎`, m, fake, )
}

} else {
return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *sᥱᥣᥱᥴᥴі᥆ᥒᥱ ⍴іᥱძrᥲ/⍴ᥲ⍴ᥱᥣ/𝗍іȷᥱrᥲ*\n\n[ 💡 ] ᥱȷᥱm⍴ᥣ᥆, !${command} papel`, m, fake, )
}

}
handler.help = ['ppt']
handler.tags = ['juegos']
handler.command = ['ppt']

handler.register = true

export default handler
