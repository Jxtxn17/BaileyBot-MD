let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let text = `❤️ Waoz Ese Es Mi Propietario. 🌼`
await conn.sendButton(m.chat, text, `👋🏻 ¡Hola! ` + nombre, foto, [
['🎋 Menu De Bailey', '!allmenu'],
['🌻 Botsito', '!sc'],
['❤️ Axx', '#owner'],
['🌼 BaileyBot', '!bot Hola']], null, [
['🌹 Canal Oficial', `${channel}`]], m)}
handler.customPrefix = /Diego|diego/i;
handler.command = new RegExp;
export default handler;