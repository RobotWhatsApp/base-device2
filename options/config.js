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
global.name = 'Andi Saputra (Owner)', // GNTI NAMA LU!
global.creator = '𝐀𝐧𝐝𝐢𝐆𝐚𝐧𝐬' // GANTI NAMA BOT LU BANH!
global.owner = ['6285725220424', '6285643115199'] // GNTI NOMOR LU!
global.premium = ['15622625999', '15622625854']
 // ADD PREM YG LU MAU BANH!!
global.quotes = 'Kehidupan itu seperti roda, kadang diatas kadang di bawah' // Ganti Quotes, Tapi Trsrh Klian
global.pulsa = ['085923730473'] // UBAH NOMOR YG AKTIF!
global.botname = 'SOFTBOTS' // GNTI NAMA BOT LU!
global.packname = 'Stiker Bot by' // TRSERAH MO GANTI AP!
global.author = 'AndiGansBrebes' // GNTI NMA LU!
global.fake = 'SOFTBOTS VERIFIED' // GNTI NMA BOT LU BANH!
global.prefa = ['','!','.','/','#','$']
global.sp = '⭔' // JGN DI UBAH²! NTR EROR
global.mess = {
success: '*[SUCCESS]* SUKSES PERMINTAAN ANDA TERKIRIM!',
admin: 'Fitur Ini Khusus Untuk Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
prem: 'Fitur Ini Khusus Untuk Premium',
owner: 'Fitur Ini Khusus Untuk Owner Bot',
group: 'Fitur Ini Digunakan Hanya Untuk Group!',
private: 'Fitur Ini Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Ini Khusus Pengguna Nomor Bot',
user: 'Maaf Anda Belum Terdaftar Ke Database\n\nSilahkan Daftar Terlebih Dahulu\nKetik .register',
wait: 'Proses Ngab...',
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
