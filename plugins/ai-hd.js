import FormData from 'form-data'
import Jimp from 'jimp'
  
var handler = async (m, { conn, usedPrefix, command }) => {

conn.hdr = conn.hdr ? conn.hdr : {}
if (m.sender in conn.hdr)
return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 𝗍᥆ძᥲ᥎і́ᥲ һᥲᥡ ᥙᥒᥲ s᥆ᥣіᥴі𝗍ᥙძ ᥱᥒ ⍴r᥆ᥴᥱs᥆, sᥱᥲ ⍴ᥲᥴіᥱᥒ𝗍ᥱ*`, m, fake, )

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ""
if (!mime)

return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱ𝗍і𝗊ᥙᥱ𝗍ᥱ ᥲ ᥙᥒᥲ 𝖿᥆𝗍᥆*`, m, fake, )
if (!/image\/(jpe?g|png|mp4)/.test(mime))

return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 mі́mіᥴᥲ ${mime} ᥒ᥆ soportada*`, m, fake, )
else conn.hdr[m.sender] = true

conn.reply(m.chat, '🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎́𝐍 🚫 ᥱs⍴ᥱrᥱ ᥙᥒ m᥆mᥱᥒ𝗍᥆', m, fake, )
let img = await q.download?.()

let error
try {
const This = await processing(img, "enlace")
conn.sendFile(m.chat, This, '', '🧃 *𝗍᥆mᥲ 𝗍ᥙ 𝖿᥆𝗍᥆*\n\n' + cred.toString('utf-8'), m)
} catch (er) {
error = true
} finally {
if (error) {
return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥆ᥴᥙrrі᥆ ᥙᥒ 𝖿ᥲᥣᥣ᥆*`, m, fake, )
}
delete conn.hdr[m.sender]
}}
  
handler.help = ['hd']
handler.tags = ['ai']
handler.command = /^(hd)$/i

handler.register = true
handler.limit = true
  
export default handler
  
async function processing(urlPath, method) {
return new Promise(async (resolve, reject) => {
let Methods = ['enhance', 'recolor', 'dehaze']
Methods.includes(method) ? (method = method) : (method = Methods[0])
let buffer,
Form = new FormData(),
scheme = 'https' + '://' + 'inferenceengine' + '.vyro' + '.ai/' + method
Form.append('model_version', 1, {
'Content-Transfer-Encoding': 'binary',
contentType: 'multipart/form-data; charset=uttf-8',
}) 
Form.append('image', Buffer.from(urlPath), {
filename: 'enhance_image_body.jpg',
contentType: 'image/jpeg',
})
Form.submit(
{
url: scheme,
host: 'inferenceengine' + '.vyro' + '.ai',
path: '/' + method,
protocol: 'https:',
headers: {
'User-Agent': 'okhttp/4.9.3',
Connection: 'Keep-Alive',
'Accept-Encoding': 'gzip',
},
}, 
function (err, res) {
if (err) reject()
let data = []
res
.on('data', function (chunk, resp) {
data.push(chunk)
})
.on('end', () => {
resolve(Buffer.concat(data))
})
res.on('error', (e) => {
reject()
})})})}
