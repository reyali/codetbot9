let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*[ Internet ]*

1. *#brainly* Ini adalah perintah untuk menggunakan fitur  mengerjakan tugas sekolah kamu. Fitur ini akan otomatis mencarikan jawaban untuk soal yang kamu minta.
Cara menggunakan fitur ini adalah Ketik perintah *#brainly* lalu masukan soal kamu.
Contoh: *#brainly a²x(5²-6²)=...*

2. *#google* Perintah ini di gunakan untuk mencari pencarian di google. 
Cara menggunakan nya sangat mudah. Kamu tinggal ketik perintah *#google* masukan pencarian kamu.
Contoh: *#google spesifikasi samsung m21*
Nanti google akan membuka situs yg terkait dengan pencarian kamu.

3. *#hackweb* Sebenarnya ini adalah fitur buat fun fun saja atau untuk prank. Fitur ini di gunakan untuk Memanipulasi Link asli, Emmmm kaya memperpendek link gitu fungsinya kurang lebih . Kamu coba sendiri aja deh.
Cara menggunakan nya adalah ketik perintah *#hackweb* masukan keterangan web|masukan judul web|masukan link asli|masukan link palsu.
Contoh: *#hackweb skandal dia dengan selingkuhan|Skandal Dia|yotube.com/wih6sgga75b|skandal.com*

Dah lah mo mandi :)


`.trim(), m)
}

handler.command = /^(helpinternet)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
