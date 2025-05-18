import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';

var handler = async (m, { text, conn, args, usedPrefix, command }) => {
    if (!args[0]) {
        return conn.reply(m.chat, '*🍇 Ingresa un enlace de YouTube válido.*', m);
    }

    let youtubeLink = '';
    if (args[0].includes('you')) {
        youtubeLink = args[0];
    } else {
        const index = parseInt(args[0]) - 1;
        if (index >= 0) {
            if (Array.isArray(global.videoList) && global.videoList.length > 0) {
                const matchingItem = global.videoList.find(item => item.from === m.sender);
                if (matchingItem) {
                    if (index < matchingItem.urls.length) {
                        youtubeLink = matchingItem.urls[index];
                    } else {
                        return conn.reply(
                            m.chat,
                            `*🍓 No se encontró un enlace para ese número. Ingresa un número del 1 al ${matchingItem.urls.length}.*`,
                            m
                        );
                    }
                } else {
                    return conn.reply(
                        m.chat,
                        `*🥑 Usa el comando \`${usedPrefix}playlist <texto>\` para buscar vídeos y luego selecciona un número.*`,
                        m
                    );
                }
            } else {
                return conn.reply(
                    m.chat,
                    `*🍉 Usa el comando \`${usedPrefix}playlist <texto>\` para buscar vídeos y luego selecciona un número.*`,
                    m
                );
            }
        }
    }

    conn.reply(m.chat, `*🎶 Cargando... Por favor, espera unos segundos.*`, m);

    try {
        // BaileysBot
        let q = '128kbps';
        const yt = await youtubedl(youtubeLink).catch(async _ => await youtubedlv2(youtubeLink));
        const dl_url = await yt.audio[q].download();
        const ttl = await yt.title;
        const size = await yt.audio[q].fileSizeH;
        await conn.sendFile(m.chat, dl_url, `${ttl}.mp3`, null, m, false, { mimetype: 'audio/mp4' });
    } catch (error) {
        console.error('Error con youtubedl:', error);

        try {
            //BaileysBot
            const apiResponse = await fetch(`https://api.vreden.my.id/api/ytmp3?url=${url}`); //test
            const apiData = await apiResponse.json();

            if (apiData.status === 'success') {
                const title = apiData.result.title || 'audio';
                const audioUrl = apiData.result.audio_url;
                await conn.sendMessage(m.chat, { audio: { url: audioUrl }, fileName: `${title}.mp3`, mimetype: 'audio/mp4' }, { quoted: m });
            } else {
                throw new Error('La API no devolvió un resultado exitoso.');
            }
        } catch (secondError) {
            console.error('Error con la nueva API:', secondError);

            try {
                // BaileysBot
                const searchResults = await yts(youtubeLink);
                const video = searchResults.all.find(v => v.type === 'video');
                if (!video) throw new Error('No se encontró el video.');

                const info = await ytdl.getInfo(video.url);
                const format = ytdl.chooseFormat(info.formats, { filter: 'audioonly' });
                await conn.sendMessage(m.chat, { audio: { url: format.url }, fileName: `${video.title}.mp3`, mimetype: 'audio/mp4' }, { quoted: m });
            } catch (thirdError) {
                console.error('Error con ytdl-core:', thirdError);
                await conn.reply(m.chat, '*❌ Error: No se pudo procesar el audio.*', m);
            }
        }
    }
};

handler.help = ['yta'];
handler.tags = ['descargas'];
handler.command = /^audio|fgmp3|dlmp3|getaud|yt(a|mp3)$/i;

handler.register = true;

export default handler;