var handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, '*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱ𝗍і𝗊ᥙᥱ𝗍ᥱ ᥆ rᥱs⍴᥆ᥒძᥲ ᥱᥣ mᥱᥒsᥲȷᥱ ᥲ ᥣᥲ ⍴ᥱrs᥆ᥒᥲ 𝗊ᥙᥱ 𝗊ᥙіᥱrᥱ ᥱᥣіmіᥒᥲr*\n\n [ 💡 ] ᥱȷᥱm⍴ᥣ᥆:\n*${usedPrefix + command} @${global.owner[0][0]}*', m);
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';

    if (user === conn.user.jid) {
        return conn.reply(m.chat, '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 No puedo eliminar el bot del grupo', m);
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 No puedo eliminar al propietario del grupo', m);
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 No puedo eliminar al propietario del bot', m);
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};

handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = /^(kick|echar|hechar|sacar|ban)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
