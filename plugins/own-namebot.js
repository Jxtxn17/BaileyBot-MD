let handler = async (m, { conn, text, usedPrefix, command }) => { 
   if (!text) throw `¿𝙲𝚄𝙰𝙻 𝙴𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝚀𝚄𝙴 𝚃𝙴𝙽𝙳𝚁𝙴?` 
   try { 
     await conn.updateProfileName(text) 
     m.reply('𝙻𝙸𝚂𝚃𝙾, 𝙽𝙾𝙼𝙱𝚁𝙴 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾🪁!') 
   } catch (e) { 
     console.log(e) 
     throw `[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝙰𝙼𝙱𝙸𝙰𝚁 𝙴𝙻 𝙽𝙰𝙼𝙴` 
   } 
 } 
 handler.help = ['setbotname <teks>'] 
 handler.tags = ['owner'] 
 handler.command = /^(setbotname|cambianombre)$/i 

 handler.owner = true 

 export default handler