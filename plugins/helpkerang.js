let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
  *[ Kerang ajaib ]

1. *#apakah* Apakah adalah perintah untuk menggunakan fitur Kerang ajaib yang akan menjawab pertanyaan kamu. 
Cara menggunakan nya kamu cukup ketik petintah *#apakah* lalu tulis pertanyaan kamu
Contoh: *#apakah saya ganteng?
Nanti bot akan menjawab pertanyaan kamu

2 *#kapan* Kapan adalah perintah untuk menggunakan fitur Kerang ajaib yang akan menjawab pertanyaan kamu. 
Cara menggunakan nya kamu cukup ketik petintah *#apakah* lalu tulis pertanyaan kamu
Contoh: *#kapan saya menikah?
Nanti bot akan menjawab pertanyaan kamu

Penting! Perlu kamu ketahui bahwa jawaban Bot bukan lah kenyataan atau sesuai faktanya. Ini hanya lah fitur buat have fun saja. Semua jawaban yg d berikan oleh bot di pilih secara acak. 



`.trim(), m)
}

handler.command = /^(helpkerang)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler