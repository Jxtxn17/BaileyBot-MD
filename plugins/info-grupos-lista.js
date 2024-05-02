const handler = async (m, { conn }) => {
  let txt = '';
try {    
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
  const totalGroups = groups.length;
  for (let i = 0; i < groups.length; i++) {
    const [jid, chat] = groups[i];
    const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
    const participants = groupMetadata.participants || [];
    const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
    const isBotAdmin = bot?.admin || false;
    const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
    const participantStatus = isParticipant ? '𝚄𝙽𝙸𝙳𝙾' : '𝚂𝙰𝙻𝙸𝙳𝙾';
    const totalParticipants = participants.length;
    txt += `*📝 𝙶𝚁𝚄𝙿𝙾 ${i + 1}*
    *◉ 𝙽𝙾𝙼𝙱𝚁𝙴:* ${await conn.getName(jid)}
    *◉ 𝙸𝙳:* ${jid}
    *◉ 𝙰𝙳𝙼𝙸𝙽:* ${isBotAdmin ? '✅' : '❌'}
    *◉ 𝙴𝚂𝚃𝙰𝙳𝙾:* ${participantStatus}
    *◉ 𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝙼𝙸𝙴𝙼𝙱𝚁𝙾𝚂:* ${totalParticipants}
    *◉ 𝙴𝙽𝙻𝙰𝙲𝙴:* ${isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(jid) || '❗ 𝙴𝚁𝚁𝙾𝚁'}` : '◉ 𝙽𝙾 𝚃𝙴𝙽𝙶𝙾 𝙰𝙳𝙼𝙸𝙽'}\n\n`;
  }
  conn.reply(m.chat, `📝 *𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂*\n\n◉ *𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂* ${totalGroups}

${txt}`, m, fake, )
} catch {
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
  const totalGroups = groups.length;
  for (let i = 0; i < groups.length; i++) {
    const [jid, chat] = groups[i];
    const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
    const participants = groupMetadata.participants || [];
    const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
    const isBotAdmin = bot?.admin || false;
    const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
    const participantStatus = isParticipant ? '𝚄𝙽𝙸𝙳𝙾' : '𝚂𝙰𝙻𝙸𝙳𝙾';
    const totalParticipants = participants.length;    
    txt += `*📝 𝙶𝚁𝚄𝙿𝙾 ${i + 1}*
    *◉ 𝙽𝙾𝙼𝙱𝚁𝙴:* ${await conn.getName(jid)}
    *◉ 𝙸𝙳:* ${jid}
    *◉ 𝙰𝙳𝙼𝙸𝙽:* ${isBotAdmin ? '✅' : '❌'}
    *◉ 𝙴𝚂𝚃𝙰𝙳𝙾:* ${participantStatus}
    *◉ 𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝙼𝙸𝙴𝙼𝙱𝚁𝙾𝚂:* ${totalParticipants}
    *◉ 𝙴𝙽𝙻𝙰𝙲𝙴:* ${isBotAdmin ? '❗ 𝙴𝚁𝚁𝙾𝚁' : '◉ 𝙽𝙾 𝚃𝙴𝙽𝙶𝙾 𝙰𝙳𝙼𝙸𝙽'}\n\n`;
  }
 conn.reply(m.chat, `📝 *𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂*\n\n◉ *𝚃𝙾𝚃𝙰𝙻 𝙶𝚁𝚄𝙿𝙾𝚂:* ${totalGroups}

${txt}`, m, fake, )
 }    
};
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i

handler.register = true
export default handler;
