import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

 global.owner = [
['50248975917', '🍧 tímido 🥵🍧', true],
['5493795319022'],
['5493794297363'],
['5493795319022']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['50236495131']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['50248975917'], */ ['50248975917'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470'], ['573012482597']]

global.packname = 'ᥫ᭡𝘽𝙖𝙞𝙡𝙚𝙮𝘽𝙤𝙩-𝙈𝘿ꨄ'
global.author = 'timido'
global.wm = '𓆩𝐁𝐚𝐢𝐥𝐞𝐲𝐁𝐨𝐭-𝐌𝐃𓆪'
global.wm2 = '✦𝘽𝙖𝙞𝙡𝙚𝙮-𝗯𝗼𝘁-𝗠𝗗✦'
global.jxtxn = 'timidl'
global.cb = '⏤͟͟͞͞ＢａｉｌｅｙＢｏｔ-ＭＤ'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'ʙʏ sin.tetas-no-hay-paraiso'
global.devnum = '+50236495141'

global.cmenut = '╭━━━━━━『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━━━━━━━๑\n';
global.cmenua = '\n⌕ ೋ❀❀ೋ═══ ❀ ═══ೋ❀❀⌕\n     ';
global.dmenut = '*❖━━━╾━━*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅╼─╾━━━━━━*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
