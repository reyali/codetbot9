let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
 *[ Marker ]*

1. *#attp* Attp adalah perintah untuk membuat stiker text animasi berkedip Warna. Untuk menggunakan fitur ini kamu  bisa ketik perintah *#attp* lalu tulis apa yg ingin kamu buat sticker animasi berkedip nya. 
Contoh : *#attp* Hai Selamat siang*
Lalu tunggu hingga bot akan mengirim kan sticker kamu.

2. *#sticker* Sticker adalah perintah untuk membuat sticker Foto sesuai yang kamu mau. 
Untuk menggunakan Fitur ini kamu harus mengirim Foto yang ingin kamu buat sticker terlebih dahulu, lalu tag/reply foto kamu dengan mengetik perintah *#sticker*
Lalu tunggu hingga bot mengirim kan sticker kamu.

3. *#toimg* Toimg adalah perintah untuk mengubah sticker menjadi sebuah Foto. 
Untuk menggunakan fitur ini kamu reply atau tag sticker yang ingin kamu jadikan Foto dengan mengetik perintah *#toimg* 
Lalu tunggu hingga bot mengirimkan Foto.

4. *#ttp* Ttp adalah perintah untuk membuat sticker text. 
Untuk menggunakan fitur ini kamu ketik perintah *#ttp* lalu masukan text apa yg ingin kamu buat sticker.
Contoh: *#ttp Hai Selamat Siang*
Lalu tunggu hingga bot mengirim kan sticker kamu.

5. *#glitch* Glitch adalah fitur yang kami sediakan untuk kamu yang ingin membuat Foto Text dengan Efek Glitch.
Cara memnggunakan fitur ini kamu ketik perintah *#glitch* lalu Tulis apanya yg ingin kamu jadikan Text Foto Glitch nya
Perlu kamu ketahui kamu harus memasukan 2 text. Jadi cara nya adalah *#glitch text1|text2 harus menggunakan symbol | untuk pembatas antara text1 dan text2.
Contoh: *#glitch Cabe|Squad* 
Lalu tunggu hingga bit mrngirim foto nya.

6. *#coffe* Coffe adalah perintah untuk membuat tulisan di atas secangkir kopi.
Cara menggunakan fitur ini sangat mudah. Kamu hanya perlu mengetik perintah *#coffe* lalu masukan text yg kamu inginkan
Cintoh: *#coffe Selamat Pagi*

7. *#nulis* Nulis adalah perintah untuk membuat gsmbar tulisan di atas buku layak nya tulisan tangan biasa. 
Untuk menggunakan fitur ini kamu harus ketik *#nulis* lalu masukan text yg ingin kamu tulis di dalam kertas buku tsb.
Contoh: *#nulis Aku cinta kamu*

8. *#style* Style adalah perintah untuk menggunakan fitur Font atau Text Generator, biasanya ini di gunakan untuk membuat nick nane game Mobile Legend atau Pubg Mobile atau game lainya. 
Cara menggunakan Fitur ini kamu Ketik perintah #style lalu masukan Text yang kamu mau.
Contoh: *#style Adji*
Lalu bot akan mengirimkan Font Unik Buat kamu

9. *#tts* Tts adalah perintah untuk menggunakan fitur mengubah text menjadi suara Google. 
Cara menggunakan nya sangat mudah. Kamu tinggal ketik perintah *#tts* lalu masukan text yg ingin kamu jadikan suara google.
Contoh: *#tts Hai selamat siang kamu*
Tunggu hingga bot akan mengirim kan suara google sesuai text yang kamu tulis tadi.
Lalu tunggu hingga bit mengirimkan foto.



`.trim(), m)
}

handler.command = /^(helpmarker)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler