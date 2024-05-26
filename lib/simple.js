/*
* Zam: Pretendan asegurar que todas las funciones
* del simple robado que van a pegar aqui
* sean similares a las que tiene el actual simple 
* de no ser así van a joder todo
*/

import path from 'path'
import { toAudio } from './converter.js'
import chalk from 'chalk' 
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import fs from 'fs'
import util from 'util'
import { fileTypeFromBuffer } from 'file-type'
import { format } from 'util'
import { fileURLToPath } from 'url'
import store from './store.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * @type {import('@whiskeysockets/baileys')}
 */
const {
    default: _makeWaSocket,
    makeWALegacySocket,
    proto,
    downloadContentFromMessage,
    jidDecode,
    areJidsSameUser,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    WAMessageStubType,
    extractMessageContent, 
    prepareWAMessageMedia
} = (await import('@whiskeysockets/baileys')).default

export function makeWASocket(connectionOptions, options = {}) {
    /**
     * @type {import('@whiskeysockets/baileys').WASocket | import('@whiskeysockets/baileys').WALegacySocket}
     */
    let conn = (global.opts['legacy'] ? makeWALegacySocket : _makeWaSocket)(connectionOptions)

    let sock = Object.defineProperties(conn, {
        chats: {
            value: { ...(options.chats || {}) },
            writable: true
        },
        decodeJid: {
            value(jid) {
                if (!jid || typeof jid !== 'string') return (!nullish(jid) && jid) || null
                return jid.decodeJid()
            }
        },
        logger: {
            get() {
                return {
                    info(...args) {
                        console.log(
                            chalk.bold.bgRgb(51, 204, 51)('INFO '),
                            `[${chalk.rgb(255, 255, 255)(new Date().toUTCString())}]:`,
                            chalk.cyan(format(...args))
                        )
                    },
                    error(...args) {
                        console.log(
                            chalk.bold.bgRgb(247, 38, 33)('ERROR '),
                            `[${chalk.rgb(255, 255, 255)(new Date().toUTCString())}]:`,
                            chalk.rgb(255, 38, 0)(format(...args))
                        )
                    },
                    warn(...args) {
                        console.log(
                            chalk.bold.bgRgb(255, 153, 0)('WARNING '),
                            `[${chalk.rgb(255, 255, 255)(new Date().toUTCString())}]:`,
                            chalk.redBright(format(...args))
                        )
                    },
                    trace(...args) {
                        console.log(
                            chalk.grey('TRACE '),
                            `[${chalk.rgb(255, 255, 255)(new Date().toUTCString())}]:`,
                            chalk.white(format(...args))
                        )
                    },
                    debug(...args) {
                        console.log(
                            chalk.bold.bgRgb(66, 167, 245)('DEBUG '),
                            `[${chalk.rgb(255, 255, 255)(new Date().toUTCString())}]:`,
                            chalk.white(format(...args))
                        )
                    }
                }
            },
            enumerable: true
        },
        getFile: {
            /**
             * getBuffer hehe
             * @param {fs.PathLike} PATH 
             * @param {Boolean} saveToFile
             */
            async value(PATH, saveToFile = false) {
                let res, filename
                const data = Buffer.isBuffer(PATH) ? PATH : PATH instanceof ArrayBuffer ? PATH.toBuffer() : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
                if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
                const type = await fileTypeFromBuffer(data) || {
                    mime: 'application/octet-stream',
                    ext: '.bin'
                }
                if (data && saveToFile && !filename) (filename = path.join(__dirname, '../tmp/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
                return {
                    res,
                    filename,
                    ...type,
                    data,
                    deleteFile() {
                        return filename && fs.promises.unlink(filename)
                    }
                }
            },
            enumerable: true
        },
        waitEvent: {
            /**
             * waitEvent
             * @param {String} eventName 
             * @param {Boolean} is 
             * @param {Number} maxTries 
             */
            value(eventName, is = () => true, maxTries = 25) { //Idk why this exist?
                return new Promise((resolve, reject) => {
                    let tries = 0
                    let on = (...args) => {
                        if (++tries > maxTries) reject('Max tries reached')
                        else if (is()) {
                            conn.ev.off(eventName, on)
                            resolve(...args)
                        }
                    }
                    conn.ev.on(eventName, on)
                })
            }
        },
        sendFile: {
            /**
             * Send Media/File with Automatic Type Specifier
             * @param {String} jid
             * @param {String|Buffer} path
             * @param {String} filename
             * @param {String} caption
             * @param {import('@whiskeysockets/baileys').proto.WebMessageInfo} quoted
             * @param {Boolean} ptt
             * @param {Object} options
             */
            async value(jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) {
                let type = await conn.getFile(path, true)
                let { res, data: file, filename: pathFile } = type
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } }
                    catch (e) { if (e.json) throw e.json }
                }
                const fileSize = fs.statSync(pathFile).size / 1024 / 1024
                if (fileSize >= 1800) throw new Error(' ✳️  El tamaño del archivo es demasiado grande\n\n')
                let opt = {}
                if (quoted) opt.quoted = quoted
                if (!type) options.asDocument = true
                let mtype = '', mimetype = options.mimetype || type.mime, convert
                if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
                else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
                else if (/video/.test(type.mime)) mtype = 'video'
                else if (/audio/.test(type.mime)) (
                    convert = await toAudio(file, type.ext),
                    file = convert.data,
                    pathFile = convert.filename,
                    mtype = 'audio',
                    mimetype = options.mimetype || 'audio/ogg; codecs=opus'
                )
                else mtype = 'document'
                if (options.asDocument) mtype = 'document'

                delete options.asSticker
                delete options.asLocation
                delete options.asVideo
                delete options.asDocument
                delete options.asImage

                let message = {
                    ...options,
                    caption,
                    ptt,
                    [mtype]: { url: pathFile },
                    mimetype,
                    fileName: filename || pathFile.split('/').pop()
                }
                /**
                 * @type {import('@whiskeysockets/baileys').proto.WebMessageInfo}
                 */
                let m
                try {
                    m = await conn.sendMessage(jid, message, { ...opt, ...options })
                } catch (e) {
                    console.error(e)
                    m = null
                } finally {
                    if (!m) m = await conn.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
                    file = null // releasing the memory
                    return m
                }
            },
            enumerable: true
        },
                  sendTextUrl: {
    async value(jid, text = '', buffer, title, body, url, quoted, options) {
    if (buffer) try { (type = await conn.getFile(buffer), buffer = type.data) } catch { buffer = buffer }
        let prep = generateWAMessageFromContent(jid, { extendedTextMessage: { text: text, contextInfo: { externalAdReply: { title: title, body: body, thumbnail: buffer, sourceUrl: url }, mentionedJid: await conn.parseMention(text) }}}, { quoted: quoted })
    return conn.relayMessage(jid, prep.message, { messageId: prep.key.id })
}
},

sendButtonImg: {
    async value (jid, buffer, contentText, footerText, button1, id1, quoted, options) {
            let type = await conn.getFile(buffer)
            let { res, data: file } = type
            if (res && res.status !== 200 || file.length <= 65536) {
            try { throw { json: JSON.parse(file.toString()) } }
            catch (e) { if (e.json) throw e.json }
            }
            const buttons = [
            { buttonId: id1, buttonText: { displayText: button1 }, type: 1 }
            ]

            const buttonMessage = {
                image: file,
                fileLength: 100,
                caption: contentText,
                footer: footerText,
                mentions: await conn.parseMention(contentText + footerText),
                ...options,
                buttons: buttons,
                headerType: 4
            }

            return await conn.sendMessage(jid, buttonMessage, { quoted, ephemeralExpiration: global.ephemeral, contextInfo: { mentionedJid: conn.parseMention(contentText + footerText) }, ...options })
        }
    },

sendLoad: {
value(jid, text = '', fakeJid = this.user.jid, fakeText = '', fakeGroupJid, options) {
return conn.reply(jid, text, { key: { fromMe: areJidsSameUser(fakeJid, conn.user.id), participant: fakeJid, ...(fakeGroupJid ? { remoteJid: fakeGroupJid } : {}) }, message: { conversation: fakeText }, ...options })
}},
         sendUrl: {
            value(jid, text = '', quoted, options) {
                let content = generateWAMessageFromContent(jid, { extendedTextMessage: {  contextInfo: { ...options }, text }}, { quoted, ...options })
                return conn.relayMessage(jid, content.message, { messageId: content.key.id })
            },
            writable: true,
        },

        resize: {
                value(buffer, ukur1, ukur2) {
                return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer)
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
       })
      }
    },   
        sendContact: {
            /**
             * Send Contact
             * @param {String} jid 
             * @param {String[][]|String[]} data
             * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted 
             * @param {Object} options 
             */
            async value(jid, data, quoted, options) {
                if (!Array.isArray(data[0]) && typeof data[0] === 'string') data = [data]
                let contacts = []
                for (let [number, name] of data) {
                    number = number.replace(/[^0-9]/g, '')
                    let njid = number + '@s.whatsapp.net'
                    let biz = await conn.getBusinessProfile(njid).catch(_ => null) || {}
                    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name.replace(/\n/g, '\\n')};;;
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}${biz.description ? `
X-WA-BIZ-NAME:${(conn.chats[njid]?.vname || conn.getName(njid) || name).replace(/\n/, '\\n')}
X-WA-BIZ-DESCRIPTION:${biz.description.replace(/\n/g, '\\n')}
`.trim() : ''}
END:VCARD
        `.trim()
                    contacts.push({ vcard, displayName: name })

                }
                return await conn.sendMessage(jid, {
                    ...options,
                    contacts: {
                        ...options,
                        displayName: (contacts.length >= 2 ? `${contacts.length} kontak` : contacts[0].displayName) || null,
                        contacts,
                    }
                }, { quoted, ...options })
            },
            enumerable: true
        },
        reply: {
            /**
             * Reply to a message
             * @param {String} jid
             * @param {String|Buffer} text
             * @param {import('@whiskeysockets/baileys').proto.WebMessageInfo} quoted
             * @param {Object} options
             */
            value(jid, text = '', quoted, options) {
                return Buffer.isBuffer(text) ? conn.sendFile(jid, text, 'file', '', quoted, false, options) : conn.sendMessage(jid, { ...options, text }, { quoted, ...options })}
            },
        sendContactArray: {
            async value(jid, data, quoted, options) {
                if (!Array.isArray(data[0]) && typeof data[0] === 'string') data = [data]
                let contacts = []
                for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
                    number = number.replace(/[^0-9]/g, '')
                    let njid = number + '@s.whatsapp.net'
                    let biz = await conn.getBusinessProfile(njid).catch(_ => null) || {}
                    // N:;${name.replace(/\n/g, '\\n').split(' ').reverse().join(';')};;;
                    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:📧 Email
item3.ADR:;;${isi3};;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim()
                    contacts.push({ vcard, displayName: name })
                }
                return await conn.sendMessage(jid, {
                    contacts: {
                        displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
                        contacts,
                    }
                },
                    {
                        quoted,
                        ...options
                    })
            }
        },
       // sendButton: {
            /**
             * send Button
             * @param {String} jid
             * @param {String} text
             * @param {String} footer
             * @param {Buffer} buffer
             * @param {String[] | String[][]} buttons
             * @param {import('@whiskeysockets/baileys').proto.WebMessageInfo} quoted
             * @param {Object} options
             */
         /*   async value(jid, text = '', footer = '', buffer, buttons, quoted, options) {
                let type
                if (Array.isArray(buffer)) (options = quoted, quoted = buttons, buttons = buffer, buffer = null)
                else if (buffer) try { (type = await conn.getFile(buffer), buffer = type.data) } catch { buffer = null }
                if (!Array.isArray(buttons[0]) && typeof buttons[0] === 'string') buttons = [buttons]
                if (!options) options = {}
                let message = {
                    ...options,
                    [buffer ? 'caption' : 'text']: text || '',
                    footer,
                    buttons: buttons.map(btn => ({
                        buttonId: !nullish(btn[1]) && btn[1] || !nullish(btn[0]) && btn[0] || '',
                        buttonText: {
                            displayText: !nullish(btn[0]) && btn[0] || !nullish(btn[1]) && btn[1] || ''
                        }
                    })),
                    ...(buffer ?
                        options.asLocation && /image/.test(type.mime) ? {
                            location: {
                                ...options,
                                jpegThumbnail: buffer
                            }
                        } : {
                            [/video/.test(type.mime) ? 'video' : /image/.test(type.mime) ? 'image' : 'document']: buffer
                        } : {})
                }

                return await conn.sendMessage(jid, message, {
                    quoted,
                    upload: conn.waUploadToServer,
                    ...options
                })
            },
            enumerable: true
        },*/
        //---
                //-- new
sendButton: {
    async value(jid, text = '', footer = '', buffer, buttons, copy, urls, quoted, options) {
        let img, video


        if (/^https?:\/\//i.test(buffer)) {
            try {
                // Obtener el tipo MIME de la URL
                const response = await fetch(buffer)
                const contentType = response.headers.get('content-type')
                if (/^image\//i.test(contentType)) {
                    img = await prepareWAMessageMedia({ image: { url: buffer } }, { upload: conn.waUploadToServer })
                } else if (/^video\//i.test(contentType)) {
                    video = await prepareWAMessageMedia({ video: { url: buffer } }, { upload: conn.waUploadToServer })
                } else {
                    console.error("Tipo MIME no compatible:", contentType)
                }
            } catch (error) {
                console.error("Error al obtener el tipo MIME:", error)
            }
        } else {

            try {
                const type = await conn.getFile(buffer)
               if (/^image\//i.test(type.mime)) {
                    img = await prepareWAMessageMedia({ image: { url: buffer } }, { upload: conn.waUploadToServer })
                } else if (/^video\//i.test(type.mime)) {
                    video = await prepareWAMessageMedia({ video: { url: buffer } }, { upload: conn.waUploadToServer })
                }
            } catch (error) {
                console.error("Error al obtener el tipo de archivo:", error);
            }
        }

        const dynamicButtons = buttons.map(btn => ({
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
                display_text: btn[0],
                id: btn[1]
            }),
        }));


        if (copy && (typeof copy === 'string' || typeof copy === 'number')) {
            // Añadir botón de copiar
            dynamicButtons.push({
                name: 'cta_copy',
                buttonParamsJson: JSON.stringify({
                    display_text: 'Copy',
                    copy_code: copy
                })
            });
        }

        // Añadir botones de URL
        if (urls && Array.isArray(urls)) {
            urls.forEach(url => {
                dynamicButtons.push({
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: url[0],
                        url: url[1],
                        merchant_url: url[1]
                    })
                })
            })
        }


        const interactiveMessage = {
            body: { text: text },
            footer: { text: footer },
            header: {
                hasMediaAttachment: true,
                imageMessage: img ? img.imageMessage : null,
                videoMessage: video ? video.videoMessage : null
            },
            nativeFlow