let handler  = async (m, { conn, command }) => {
	
  conn.reply(m.chat,`“${pickRandom(global.ilham)}”`, m)
}
handler.help = ['katailham']
handler.tags = ['quotes']
handler.command = /katailham/i
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
module.exports = handler  

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.ilham = [
  "Nggak ada yang peduli denganmu di sosmed kecuali kamu cakep - Kata ilham",
 "Sesimpel ini deh sibuk itu palsu, semua tergantung prioritas - kata ilham",
"Dia hanya menghargaimu bukan mencintaimu - kata ilham.",
" Keadilan sosial hanya berlaku bagi warna negara yang good looking - kata ilham.",
"jangan jadi pelangi untuk orang yang buta warna - kata ilham.",
"dia yang tertidur nyenyak setelah mematahkan hatimu tidak pantas untuk kamu ingat - kata ilham.",
"dia cuman bercanda, harusnya kamu ketawa, bukan malah jatuh cinta - kata ilham.",
" Mencintaimu adalah seni menyakiti diri - kata ilham.",
" Dia gak jahat, bapermu aja yang salah tempat - katailham.",
 " Jika tidak bisa mewarnai hidup seseorang, maka jangan pudarkan warna aslinya - kata ilham.",
" Cukup tahu namaku, jangan rupaku - kata ilham,",
" Sesuatu akan terasa berharga jika sudah kehilangan- kata ilham.",
" Jangan pernah mengeluh ketika kopimu dingin, ia pernah hangat, namun kau diamkan - kata ilham."
]