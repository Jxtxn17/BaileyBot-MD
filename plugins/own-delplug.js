import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => {

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `[❗] *_𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴𝙻 𝚄𝚂𝙾:_*\n*#deleteplugin menu-menu*`
    if (!ar1.includes(args[0])) return m.reply(`*💾 ᑎO ᗴᑎᑕOᑎTᖇᗩᗪO!*\n•••••••••••••••••••••••••••••••••••••••••••••••••••••••\n\n${ar1.map(v => ' ' + v).join`\n`}`)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
conn.reply(m.chat, `[⚠] *_𝙴𝙻 𝙿𝙻𝚄𝙶𝙸𝙽 "plugins/${args[0]}.js" 𝚂𝙴 𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 𝙲𝙾  𝙴𝚇𝙸𝚃𝙾._*`, m)

}
handler.help = ['deleteplugin *<nombre>*']
handler.tags = ['owner']
handler.command = /^(deleteplugin|dp|deleteplu)$/i

handler.mods = true

export default handler