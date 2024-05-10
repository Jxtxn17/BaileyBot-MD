let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let multi = `🌳 Llamas a mi creador?`
await conn.sendButton(m.chat, multi, `🦝 Como éstas` + nombre, foto, [
['☄️ Completo Menú', '!allmenu'],
['🍧 BaileyBot', '!sc'],
['🧸 Creador', '#owner'],
['🍫 Hola Bot', '!bot como estás']], m)}
handler.customPrefix = /Axx|axx|ax|Ax/i;
handler.command = new RegExp;
export default handler;
