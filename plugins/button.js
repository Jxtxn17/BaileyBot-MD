let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let text = `❤️ Ese es mi propietario.`
await conn.sendButton(m.chat, text, `🧸 ¿Comó estás? ` + nombre, foto,[
['ꨄ 𝐌𝐞𝐧𝐮 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐨 🌸', '!allmenu'],
['ꨄ 𝐃𝐢𝐚𝐛𝐥𝐚𝐁𝐨𝐭-𝐌𝐃 🌹', '!sc'],
['ꨄ 𝐃𝐞𝐬𝐚𝐫𝐫𝐨𝐲𝐚𝐝𝐨𝐫𝐞𝐬 ✨', '#owner'],
['ꨄ 𝐃𝐢𝐚𝐛𝐥𝐚𝐁𝐨𝐭 💥', '.bot Hola']], null, [
['ꨄ Canal Oficial', `${channel}`]], m)}
handler.customPrefix = /Enzito|Enzo/i;
handler.command = new RegExp;
export default handler;