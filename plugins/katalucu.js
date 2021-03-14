let handler  = async (m, { conn, command }) => {
  conn.reply(m.chat,`${pickRandom(global.lucu)}_-\n_hihihi jngn lupa ketawa_` m)
}
handler.help = ['faktalucu']
handler.tags = ['new']
handler.command = /^(faktalucu)$/i
handler.owner = false 
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false
module.exports = handler  
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/ 
global.lucu = [
 "panggil aku mantan. Sebut saja aku alumni. Siapa tahu kita bisa reuni.",
 "Motivator dan pembicara tak dapat membuatku rajin bekerja. Hanya cicilan dan tagihan yang mampu.",
"Manusia boleh berencana, tapi saldo juga yang menentukan.",
"Manusia itu emang susah nyalahin diri sendiri. Leher pegal dibilang salah bantal.",
 "Mungkin kamu perlu makan makeup. Biar kamu bisa cantik dari dalam juga.",
"Jika seseorang melemparmu dengan batu, balaslah dengan bunga sekalian dengan potnya.",
"Hidup ini singkat. Tersenyumlah selagi kamu masih memiliki gigi",
"Jodoh memang enggak ke mana. Tapi saingannya di mana-mana.",
 "Mimpi adalah jawaban hari ini dan pertanyaan untuk hari esok.",
"Jangan mau dipanggil 'Say' Bisa jadi itu bukan 'Sayang', tapi 'Saython'.",
 "Biarpun katanya nggak higienis, tapi makan di pinggir jalan masih jauh lebih sehat daripada makan di tengah jalan.",
 "Meskipun kamu gendut, kamu tetap muat kok masuk di hatiku.",
"Hargai kedua orang tuamu, mereka berhasil lulus dari sekolah tanpa bantuan Google.",
 "Dibalik dompet yang sehat terdapat cinta yang kuat.",
 "Jika kamu pikir kamu terlalu kecil untuk membuat perbedaan, cobalah tidur dengan nyamuk.",
"Gue cakep kalau tanjakan, kalau turunan jelek lagi..",
 "Aku terjebak antara Aku harus nabung dan Aku cuma hidup sekali",
"Tunda lapar, makan indomie hati menggelepar cintapun bersemi.",
"Hidup itu seperti sebuah acara televisi yang sangat panjang tanpa remote control.",
 "Jika dengan menyakitiku, kamu dapat duit banyak, lakukanlah habis itu bagi dua ya."
]