/* 
NOTE : JGN HPS DIBAWAH INI!!
RECODE : RAHMXBOT X RAHMAN GNTENG:V
WHATSAPP : 085821676621
NOMOR BOT : 085821369324
NOTE : JGN HPS AUTHORNYA!!!

DONASI LAH BANG BIAR 
ADMINNYA UPDATE LAGI

Kalau Mau Donasi Silahkan Pilih Yah
Payment : Ovo/Gopay/Dana
Number Payment : Chat Owner Wa nya Di Atas
Pulsa : 081528965381
*/

const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
liaacans: 'https://zenzapis.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zenzapis.xyz': 'b6084a1b49',
}

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
global.thumb = fs.readFileSync('./image/thumbnail.jpg') // JGN DI UBAH!
global.error = fs.readFileSync('./image/error.jpg')
global.daftar = fs.readFileSync('./image/daftar.jpg')
global.profil = fs.readFileSync('./image/profil.jpg')
global.name = 'Andi Saputra (Owner)', // GNTI NAMA LU!
global.creator = '𝐀𝐧𝐝𝐢𝐆𝐚𝐧𝐬' // GANTI NAMA BOT LU BANH!
global.owner = ['6285725220424', '6285643115199'] // GNTI NOMOR LU!
global.premium = ['15622625999', '15622625854']
 // ADD PREM YG LU MAU BANH!!
global.quotes = 'Kehidupan itu seperti roda, kadang diatas kadang di bawah' // Ganti Quotes, Tapi Trsrh Klian
global.pulsa = ['085923730473'] // UBAH NOMOR YG AKTIF!
global.botname = 'SOFTBOTS' // GNTI NAMA BOT LU!
global.packname = 'Stiker Bot by\nnomor bot :' // TRSERAH MO GANTI AP!
global.author = 'AndiGansBrebes\n085643115199' // GNTI NMA LU!
global.fake = 'SOFTBOTS VERIFIED' // GNTI NMA BOT LU BANH!
global.prefa = ['','!','.','/','#','$']
global.sp = '⭔' // JGN DI UBAH²! NTR EROR
global.mess = {
success: '[ ✓ ] 𝐒𝐮𝐤𝐬𝐞𝐬 𝐍𝐠𝐚𝐛𝐛𝐛!',
admin: '[ ! ] 𝐊𝐡𝐮𝐬𝐮𝐬 𝐀𝐝𝐦𝐢𝐧 𝐍𝐠𝐚𝐛!',
botAdmin: '[ ! ] 𝐁𝐨𝐭 𝐁𝐮𝐤𝐚𝐧 𝐀𝐝𝐦𝐢𝐧 𝐍𝐠𝐚𝐛!',
prem: '[ ! ] 𝐊𝐡𝐮𝐬𝐮𝐬 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐂𝐨𝐤𝐤',
owner: '[ ! ] 𝐊𝐡𝐮𝐬𝐮𝐬 𝐆𝐰 𝐍𝐠𝐚𝐛',
group: '[ ! ] 𝐊𝐡𝐮𝐬𝐮𝐬 𝐆𝐫𝐮𝐩 𝐍𝐠𝐚𝐛𝐛!',
private: '[ ! ] 𝐊𝐡𝐮𝐬𝐮𝐬 𝐏𝐫𝐢𝐛𝐚𝐝𝐢 𝐂𝐡𝐚𝐭 𝐍𝐠𝐚𝐛𝐛!',
bot: '[ ! ] 𝐊𝐡𝐮𝐬𝐮𝐬 𝐆𝐰 𝐘𝐞𝐤𝐚𝐧 :𝐯',
user: '𝐃𝐚𝐟𝐭𝐚𝐫 𝐃𝐮𝐥𝐮 𝐍𝐠𝐚𝐛, 𝐕𝐞𝐫𝐢𝐟𝐢𝐤𝐚𝐬𝐢 𝐁𝐚𝐡𝐰𝐚 𝐀𝐧𝐝𝐚 𝐁𝐮𝐤𝐚𝐧 𝐁𝐮𝐝𝐢',
wait: '[ ♲︎︎︎ ] 𝐋𝐨𝐚𝐝𝐢𝐧𝐠...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Unlimited",
free: 10
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
