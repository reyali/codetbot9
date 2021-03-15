let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Hai 👋 

Untuk menggunakan Bot ini Kamu harus mengetik perintah yang telah kami sediakan.
Perintah Bot ini menggunakan  *#*   *!* Atau   *.*

Jika kamu ingin mengakses menu kamu bisa mengetik perintah dengan ketik #menu atau #menu atau .menu.

Jika kamu masih bingung cara menggunakan bot ini silahkan menuju *#helptool*

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