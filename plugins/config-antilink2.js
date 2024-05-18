const channel = /https:/i;
export async function before(m, {conn, isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const channel = `https://whatsapp.com/channel`;
  if (isAdmin && chat.antiLink2 && m.text.includes()) return m.reply('🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *Hey!! el anti link esta activo pero eres admin, ¡salvado!*');
  if (chat.antiLink2 && isGroupChannel && !isAdmin) {
    if (isBotAdmin) {
      const linkThisChannel = `https://whatsapp.com/channel/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisChannel)) return !0;
    }
    await this.sendMessage(m.chat, {text: `🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *¡Enlace detectado!, Mandaste un enlace prohibido por lo cual seras eliminado*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *No soy admin, no puedo eliminar intrusos*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫 *¡Esta característica esta desactivada!*');
  }
  return !0;
}
