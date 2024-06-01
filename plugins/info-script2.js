import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://api.github.com/repos/Diego-YL-177/YoshikoBot-MD');
   const json = await res.json();
   let txt = `         `*乂  B O T  -  S C R I P T*\n\n◦ *Nombre* : ${json.name}\n◦ *Visitantes* : ${json.watchers_count}\n◦ *Peso* : ${(json.size / 1024).toFixed(2)} MB\n◦ *Actualizado* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n◦ *Url* : ${json.html_url}\n\n	   ${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues\n\n> By BaileyBot-MD`
await conn.sendUrl(m.chat, git, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen2, thumbnailUrl: imagen1, title: '\t\t\t\t\t\t᭡͡ᩬ🍧✩̣̣̣̣̣ͯ𝐁𝐚𝐢𝐥𝐞𝐲𝑩𝒐𝒕-𝑴𝑫᭡͡ᩬ🍧✩̣̣̣̣̣ͯ', }})
 
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(sc|scbot|aa|script)$/i;
export default handler;
