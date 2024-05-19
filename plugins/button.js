let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let text = `❤️ Ese es mi propietario.`
await conn.sendButton(m.chat, text, `🧸 ¿Comó estás? ` + nombre, foto,[
['ꨄ Menú completo', '!allmenu'],
['ꨄ 𝑨𝒏𝒂𝒃𝒊𝑩𝒐𝒕-𝑴𝑫', '!sc'],
['ꨄ Desarrolladores', '#owner'],
['ꨄ 𝐇𝐚𝐧𝐚𝐛𝐢𝐁𝐨𝐭', '!bot Hola']], null, [
['ꨄ Canal Oficial', `${channel}`]], m)}
handler.customPrefix = /Enzito|Enzo/i;
handler.command = new RegExp;
export default handler;