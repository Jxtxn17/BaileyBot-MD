let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let text = `❤️ Ese es mi propietario.`
await conn.sendButton(m.chat, text, `🧸 ¿Comó estás? ` + nombre, foto,m, fake[
['ꨄ Menú completo', '!allmenu'],
['ꨄ BaileyBot-MD', '!sc'],
['ꨄ Desarrolladores', '#owner'],
['ꨄ BaileyBot', '!bot Hola']], null, [
['ꨄ Canal Oficial', `${channel}`]], m)}
handler.customPrefix = /Axx|Ax/i;
handler.command = new RegExp;
export default handler;