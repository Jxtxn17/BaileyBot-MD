import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import moment from 'moment-timezone' 
import { platform } from 'process'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

//Imagenes
global.imagen1 = fs.readFileSync('./storage/logos/Menu1.jpg')
global.imagen2 = fs.readFileSync('./storage/logos/Menu2.jpg')
global.imagen3 = fs.readFileSync('./storage/logos/Menu3.jpg')
global.imagen4 = fs.readFileSync('./storage/logos/Menu4.jpg')

global.config = fs.readFileSync('./storage/imagenes/configuraciones.jpg')
global.suerte = fs.readFileSync('./storage/imagenes/suerte.jpg')
global.oracion = fs.readFileSync('./storage/imagenes/oracion.jpg')
global.rosas = fs.readFileSync('./storage/imagenes/rosas.jpg')
global.refran = fs.readFileSync('./storage/imagenes/refran.jpg')
global.linksjpg = fs.readFileSync('./storage/imagenes/Links.jpg')

global.img = 'https://telegra.ph/file/814e64f578d98e4244a3d.jpg'
global.img1 = 'https://telegra.ph/file/74b7c003d04dec5875ba0.jpg'
global.img2 = 'https://telegra.ph/file/9223caecc3e7b731073e2.jpg'
global.img3 = 'https://telegra.ph/file/7deef65f6a53ecdd51cdd.jpg'
global.img4 = 'https://telegra.ph/file/4f023f918af2bde72c839.jpg'
global.img5 = 'https://telegra.ph/file/a34ebad4c9b5963c82f1a.jpg'
global.img6 = 'https://telegra.ph/file/4e69f6c48d99f6c1174a9.jpg'
global.img7 = 'https://telegra.ph/file/951275803faa754aff010.jpg'
global.img8 = 'https://telegra.ph/file/9f765ea386a9dd1a5f8e5.jpg'
global.img9 = 'https://telegra.ph/file/011be97f80f19286ee4c7.jpg'
global.img10 = 'https://telegra.ph/file/98bec3c66149fee093a3f.jpg'
global.img11 = 'https://telegra.ph/file/d3c4150200fcba6fb15af.jpg'
global.img12 = 'https://telegra.ph/file/fd775e4753173ecdf950a.jpg'
global.img13 = 'https://telegra.ph/file/0476f5da331e1a1712df9.jpg'
global.img14 = 'https://telegra.ph/file/2bda19dcfa7472089a3a3.jpg'
global.ImgAll = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]

//Enlaces
global.yt = 'https://www.youtube.com/@Azami_Mods'
global.ig = 'https://www.instagram.com/b.jxtxn17'
global.md = 'https://github.com/Jxtxn17/BaileyBot-MD'
global.paypal = '+51929972576'
global.git = 'https://github.com/Jxtxn17'
global.nn = 'https://chat.whatsapp.com/IA4POOxfwFN9iO1e9I2Qns' //Grupo ofc
global.Curiosity = 'https://chat.whatsapp.com/LCAUbkf5kUz7jSxO6FADMU' //Curiosity OFC
global.hachiko = 'https://chat.whatsapp.com/LRQdtS7nKt89NBUPWJDjzh' //Hachiko OFC
global.Lobo = 'https://chat.whatsapp.com/Li46EUQhA5tJqXEENfKPJd' //Lobo OFC
global.nnn = 'https://chat.whatsapp.com/ENP021x0aR5HWvG1HpvlCo' //Bailey global
global.channel = 'https://whatsapp.com/channel/0029VaDRDk2CBtxBVex2vB0Y' //BaileyBot-MD
global.nnnn = 'https://chat.whatsapp.com/KLpYFsitkgzJ15YQxZrBqO' //colaboración multi bots
global.fgig = Sigue nuestro Canal apretando las mini letras azules!!
global.linkSity = [yt, ig, md, paypal, git, nn]

//Raíz
global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz//+aniD
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.raiz = './storage/logos/Menu1.jpg'

//Reacciones De Comandos.!
global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//Cargando
global.wait = '*■□□□□ 20%*'
global.waitt = '*■■■□□ 60%*'
global.waittt = '*■■■■□ 90%*'
global.waitttt = '*■■■■■ 100%*'

//fake
global.fsizedoc = '999999'
global.fpagedoc = '9999'

//Apis
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = {
amel: 'https://melcanz.com',
bx: 'https://bx-hunter.herokuapp.com',
nrtm: 'https://nurutomo.herokuapp.com',
xteam: 'https://api.xteam.xyz',
nzcha: 'http://nzcha-apii.herokuapp.com',
bg: 'http://bochil.ddns.net',
fdci: 'https://api.fdci.se',
dzx: 'https://api.dhamzxploit.my.id',
bsbt: 'https://bsbt-api-rest.herokuapp.com',
zahir: 'https://zahirr-web.herokuapp.com',
zeks: 'https://api.zeks.me',
hardianto: 'https://hardianto-chan.herokuapp.com',
pencarikode: 'https://pencarikode.xyz',
LeysCoder: 'https://leyscoders-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
lol: 'https://api.lolhuman.xyz',
fgmods: 'https://api-fgmods.ddns.net',
pencarikode: 'https://pencarikode.xyz',
Velgrynd: 'https://velgrynd.herokuapp.com',
rey: 'https://server-api-rey.herokuapp.com',
hardianto: 'http://hardianto-chan.herokuapp.com',
shadow: 'https://api.reysekha.xyz',
apialc: 'https://api-alc.herokuapp.com',
botstyle: 'https://botstyle-api.herokuapp.com',
neoxr: 'https://neoxr-api.herokuapp.com',
ana: 'https://anabotofc.herokuapp.com/',
kanx: 'https://kannxapi.herokuapp.com/',
dhnjing: 'https://dhnjing.xyz'
},

global.APIKeys = {
'https://api-alc.herokuapp.com': 'ConfuMods',
'https://api.reysekha.xyz': 'apirey',
'https://melcanz.com': 'F3bOrWzY',
'https://bx-hunter.herokuapp.com': 'Ikyy69',
'https://api.xteam.xyz': '5bd33b276d41d6b4',
'https://zahirr-web.herokuapp.com': 'zahirgans',
'https://bsbt-api-rest.herokuapp.com': 'benniismael',
'https://api.zeks.me': 'apivinz',
'https://hardianto-chan.herokuapp.com': 'hardianto',
'https://pencarikode.xyz': 'pais',
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
'https://server-api-rey.herokuapp.com': 'apirey',
'https://api.lolhuman.xyz': 'GataDios',
'https://botstyle-api.herokuapp.com': 'Eyar749L',
'https://neoxr-api.herokuapp.com': 'yntkts',
'https://anabotofc.herokuapp.com/': 'AnaBot'
}

//Rpg
global.multiplier = 200 // Cuanto más alto, más difícil subir de nivel

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🏆', limit: '💎', exp: '✨',
health: '❤️',
money: '💵',
potion: '🥤',
pickaxe: '⛏️' 
}

let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)
  

//No muevas nada de aqui
let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellowBright('Se actualizo el archivo store.js'))
import(`${file}?update=${Date.now()}`)
})
