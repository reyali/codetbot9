let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
   *[ Muslim ]*

1. *#quran , Perintah ini untuk mengakses fitur Ayat Ayat Al-Quran. 
Cara menggunakan nya kamu tinggak ketik perintah *#quran* lalu tulis ayat yg kamu mau dengan angka. 
Anggap saja kamu ingin membaca Al-Quran Surah Al-Baqarah . Al-Baqoroh adalah surah ke 2 di dalam Al-Quran. Maka contoh penulisan perintah nya adalah 
*#quran 2*

2. *#murothal* Ini adalah perintah untuk mengakses fitur Download murothal. Di situ kami sudah menyediakan link Download nya. Kalian tinggal mendownload saja.
Cara mengakses fitur ini kalian tinggal ketik *#murothal*

3. *#asmaulhusna* Perintah ini kami sediakan untuk kalian yang ingin membaca atau menghafal asmaul husna. Apa itu asmaul husa? Asmaul husna adalah 99 Sifat Allah. 
Untuk mengakses perintah ini kalian cukup Ketik perintah *#asmaulhusna* 



`.trim(), m)
}

handler.command = /^(helpmuslim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler