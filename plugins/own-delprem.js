const handler = async (m, {conn, text, usedPrefix, command}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  const user = global.db.data.users[who];
  if (!who) throw `🏓 Ingresa un @tag el que quiera quitarle el premium`;
  if (!user) throw `*🍟 Ese humano no está en mi base de datos*`;
  if (user.premiumTime = 0) throw '*🍧 Este usuario no es Premium*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();

  user.premiumTime = 0;

  user.premium = false;

  const textdelprem = `* 🍥 @${who.split`@`[0]} ya no es/será Premium en BaileyBot-MD*`;
  m.reply(textdelprem, null, {mentions: conn.parseMention(textdelprem)});
};
handler.help = ['delprem <@user>'];
handler.tags = ['owner'];
handler.command = /^(delprem|-|del)premium$/i;
handler.group = true;
handler.rowner = true;
export default handler;