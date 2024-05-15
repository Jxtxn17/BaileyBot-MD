var handler = async (m, { conn, command }) => {

await conn.sendButton = generateWAMessageFromContent(from, { viewOnceMessage: { message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, interactiveMessage: proto.Message.InteractiveMessage.create({ body: proto.Message.InteractiveMessage.Body.create({ text: '' }), footer: proto.Message.InteractiveMessage.Footer.create({ text: 'By CuriosityBot' }), header: proto.Message.InteractiveMessage.Header.create({ title: cTxt.text1, subtitle: 'Ax es Uke de Zam', hasMediaAttachment: false }), nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ buttons: [ { "name": "cta_url", "buttonParamsJson": "{\"display_text\":\"Git\",\"url\":\"https://github.com/AzamiJs\",\"merchant_url\":\"https://www.google.com\"}" }, { "name": "cta_url", "buttonParamsJson": "{\"display_text\":\"Channel/Canal\",\"url\":\"https://whatsapp.com/channel/0029VaB4w2ZFHWpwgyEe3w2k\",\"merchant_url\":\"https://www.google.com\"}" }, { "name": "quick_reply", "buttonParamsJson": `{"display_text":"Actualizar 🍿","id":".update"}` }, { "name": "quick_reply", "buttonParamsJson": `{"display_text":"Unreg","id":".unreg"}` }, { "name": "quick_reply", "buttonParamsJson": `{"display_text":"Gemini","id":".gemini"}` }, { "name": "quick_reply", "buttonParamsJson": `{"display_text":"Registrarse","id":".Reg Curiosity.23"}` }, {"name": "quick_reply", "buttonParamsJson": `{"display_text":"Ping ","id":".ping"}` }, {"name": "quick_reply", "buttonParamsJson": `{"display_text":"Estado","id":".status"}` } ], })})}}}, {})

conn.reply(m.chat, str, m, fake, )

}
handler.help = ['donar', 'donate', 'donasi']
handler.tags = ['info']
handler.command = /^donar|minimenu|donasi$/i

handler.register = true

export default handler