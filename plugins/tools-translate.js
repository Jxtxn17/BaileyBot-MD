import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {args, usedPrefix, command}) => {
  const msg = `_USO DEL COMANDO DE FORMA CORRECTA:_\n\n*${usedPrefix + command} (idioma) (texto)*\n*EJEMPLO:*\n*${usedPrefix + command} es Created by GL YT MX*\n\n*PUEDES VER UNA LISTA CON CODIGOS DE TODOS LOS IDIOMAS:*\n*- https://cloud.google.com/translate/docs/languages*`;
  if (!args || !args[0]) return m.reply(msg);
  let lang = args[0];
  let text = args.slice(1).join(' ');
  const defaultLang = 'es';
  if ((args[0] || '').length !== 2) {
    lang = defaultLang;
    text = args.join(' ');
  }
  if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
  try {
    const result = await translate(`${text}`, {to: lang, autoCorrect: true});
    await m.reply('*TRADUCCION:* ' + result.text);
  } catch {
    try {
      const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
      const loll = await lol.json();
      const result2 = loll.result.translated;
      await m.reply('*Traducción:* ' + result2);
    } catch {
      await m.reply('*❗ ERROR AH OCURRIDO UN ERROR*');
    }
  }
};
handler.command = /^(translate|traducir|trad)$/i;
export default handler;
