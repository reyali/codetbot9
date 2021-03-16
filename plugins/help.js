let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Hai 👋 

Agar bisa menggunakan Bot ini Dan mengakses menu, Kamu harus Daftar Dulu. 
Dengan Cara ketik #daftar Nama.Umur
Contoh: #daftar Adji.18

Perintah Bot ini menggunakan *#* *!* Atau *.*
*Perhatikan!* Setiap Penulisan perintah jangan sampai salah walau 1 huruf, jika salah 1 huruf saja, bot tidak akan merespon!

Ingat Selalu menggunakan *#* *!* Atau *.* Dalam setiap Perintah.

Jika kamu ingin mengakses menu kamu bisa mengetik perintah dengan ketik #menu atau #menu atau .menu.
Jika kamu Paham cara menggunakan Bot ini, Dan Sudah Mendaftar,
Silahkan menuju ke *#menu* 
Silahkan ketik *#menu*

Jika kamu masih bingung cara menggunakan bot ini silahkan menuju *#helptools*
Silahkan ketik *#helptools*



`.trim(), m)
}

handler.command = /^(help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
