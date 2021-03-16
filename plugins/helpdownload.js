let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
 *[ Downloader ]*

1. *#play* Perintah ini fungsinya adalah untuk mendownload lagu.
Cara menggunakan nya juga sangat lah mudah.
Kamu tinggak ketik perintah *#play masukin nama band dan judul lagu
Contoh: *#play Drive Bersama bintang*
Nanti bot akan otomatis menguriimkan lagu via audio di whatsapp dan juga link untuk mendownload lagu nya.

2. *#ytmp4* Perintah ini di gunakan untuk mendownload video youtub. 
Cara menggunakan nya adalah ketik perintah *#ytmp4* lalu masukan link youtube yg ingin kamu download. 
Contoh: *#ytmp4 https://youtu.be/e86IKCyEswM*
Ga tau cara ambil link youtube nya? Caranya adalah buka youtube kamu, lalu buka video yang ingin kamu download, kemudian tap *Bagikan* lalu pilih salin link/salin url.

3. *#ytmp3* Perintah ini di gunakan untuk menjadikan video youtube  ke mp3
Cara menggunakan nya adalah ketik perintah *#ytmp3* lalu masukan link youtube yg ingin kamu download Lagunya,
Contoh: *#ytmp3 https://youtu.be/e86IKCyEswM*
Ga tau cara ambil link youtube nya? Caranya adalah buka youtube kamu, lalu buka video yang ingin kamu download, kemudian tap *Bagikan* lalu pilih salin link/salin url.

4. *#ytv* Hmm kurang lebih fungsinya sama Dengan #ytmp4, hanya saja ini dindownload melalui y2mate.
Cara menggunakan nya juga sama ya.



`.trim(), m)
}

handler.command = /^(helpdownload)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler