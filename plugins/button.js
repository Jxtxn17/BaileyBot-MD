let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let multi = `🌳 Es Mi Creador ⚡️`
await conn.sendButton(m.chat, multi, `🌼 ¡Hello! ` + nombre, foto, [
['☄️ Comoleto Menú', '!allmenu'],
['💚 BaileyBot', '!sc'],
['⌨️ Creador', '#owner'],
['🛑 Hola Bot', '!bot Hey Wue Mas']], m, fake)}
handler.customPrefix = /axx|Axx|ax|Ax/i;
handler.command = new RegExp;
export default handler;
