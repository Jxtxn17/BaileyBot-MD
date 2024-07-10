import { search, download } from 'aptoide-scraper'
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `*Error*\n[ 💡 ] Ejemplo ${usedPrefix + command} WhatsApp Plus`
try {
const searchResult = await search(text)
const data = await download(searchResult[0].id)
if (data.size.includes('GB') || parseFloat(data.size.replace(' MB', '')) > 300) {
return await conn.sendMessage(m.chat, { text: '*El archivo es demasiado pesado por lo que no se enviará.*' }, { quoted: m })
}
await conn.sendMessage(m.chat, { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null }, { quoted: m })
} catch {
}}
handler.command = /^(apk)$/i
handler.limit = 5
export default handler