import fetch from 'node-fetch'; 
 const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => { 
   if (usedPrefix == 'a' || usedPrefix == 'A') return; 
   try { 
     const pp = imagen1; 
     // let vn = './media/menu.mp3' 
     const img = './Menu2.jpg'; 
     const d = new Date(new Date + 3600000); 
     const locale = 'es'; 
     const week = d.toLocaleDateString(locale, {weekday: 'long'}); 
     const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'}); 
     const _uptime = process.uptime() * 1000; 
     const uptime = clockString(_uptime); 
     const user = global.db.data.users[m.sender]; 
     const {money, joincount} = global.db.data.users[m.sender]; 
     const {exp, limit, level, role} = global.db.data.users[m.sender]; 
     const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length; 
     const more = String.fromCharCode(8206); 
     const readMore = more.repeat(850); 
     const url = global.md 
     const taguser = '@' + m.sender.split('@s.whatsapp.net')[0]; 
     const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document']; 
     const document = doc[Math.floor(Math.random() * doc.length)]; 
     const str = `┏━━━━━━━━━━━━━━━━━━ 
 ┣┅⟣✦ 𝘽𝙖𝙞𝙡𝙚𝙮𝗕𝗼𝘁-𝗠𝗗 
 ┣┅⟣✦ 𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿𝗲𝘀(𝗦𝘁𝗮𝗳𝗳) 
 ┗━━━━━━━━━━━━━━━━━━┛ 
 ━━━━━━━━━━━━━━━━━━━━ 
 ┣┅⟣✦𝗥𝗲𝗽𝗼𝘀𝗶𝘁𝗼𝗿𝗶𝗼𝘀 𝗚𝗶𝘁𝗵𝘂𝗯 
  
 ┣𝘼𝙭𝙚𝙡|𝗚𝗶𝘁𝗵𝘂𝗯:https://github.com/Jxtxn17/BaileyBot-MD 
  
 ┣𝗔𝘇𝗮𝗺𝗶|𝗚𝗶𝘁𝗵𝘂𝗯: https://github.com/Azamijs/Curiositybot-MD 
  
 ┣𝗛𝗮𝗰𝗵𝗲𝗷𝗼𝘁𝗮|𝗚𝗶𝘁𝗵𝘂𝗯: https://github.com/HACHEJOTA/Hachiko-bot-MD 
  
 ┣𝙀𝙣𝙙𝙚𝙧|𝗚𝗶𝘁𝗵𝘂𝗯: https://github.com/EnderJs-CreatorGL/Lobo-Bot-Lite
  
 ┣𝗘𝗱𝗲𝗿|𝗚𝗶𝘁𝗵𝘂𝗯:https://github.com/Aleixon127271 
  
 ┣┅⟣✦𝗡𝘂𝗺𝗲𝗿𝗼𝘀  
 ┣𝘼𝙭𝙚𝙡:+51 929 972 576
 ┣𝗔𝘇𝗮𝗺𝗶:+52 729 488 8993 
 ┣𝗛𝗮𝗰𝗵𝗲𝗷𝗼𝘁𝗮:+52 443 786 3111 
 ┣𝙀𝙣𝙙𝙚𝙧:+505 5812 4470
 ┣𝗘𝗱𝗲𝗿:+57 310 6040746 
 ┗━━━━━━━━━━━━━━━━━━┛ 
  `.trim(); 
     if (m.isGroup) { 
       // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true}) 
       const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}; 
       conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m}); 
     } else { 
       // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true}) 
       const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}; 
       conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2}); 
     } 
   } catch { 
     conn.reply(m.chat, '[❕] 𝗔𝗹𝗴𝗼 𝘀𝗮𝗹𝗶𝗼 𝗺𝗮𝗹, 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗲𝗹𝗼 𝗮𝗹 𝗦𝘁𝗮𝗳𝗳', m); 
   } 
 }; 
 handler.command = /^(colab|colaboradores)$/i; 
 handler.exp = 50; 
 handler.fail = null; 
 export default handler; 
 function clockString(ms) { 
   const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000); 
   const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60; 
   const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60; 
   return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':'); 
       }