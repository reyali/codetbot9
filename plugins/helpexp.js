let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
  *[ Exp & Limit ]*

Apa itu exp? Exp di sini adalah sebut saja uang virtual kamu atau coin virtual kamu. Fungsinya apa ni? Funginya adalah untuk membeli limit.

Perhutungan nya adalah: 350Exp = 1 Limit

Sejak pemakaian bot kamu akan di beri 1000 Exp Dan 10 limit

Limit di sini di gunakan untuk mengakses fitur yang di batasi. 
1 kali pemakaian fitur yang di batasi, Limit kamu akan berkurang 1. 

Bagaimana kalau limit saya habis?
Kamu bisa membeli atau menukar limit dengan Exp yang kamu punya.

Bagaimana cara nya ? 
Caranya ketik perintah *#buy* jumlah limit. Atau langsung *#buyall untuk membeli atau menukar semua exp kamu ke dalam limit.
Contoh: *#buy 3* atau *#buyall* 

Bagaimana kalau Exp saya Habis?
Kamu bisa claim harian Exp kamu. 
Cara claim nya dengan mengetik perintah *#claim*

Bagaimana jika claim harian sudah saya ambil dan tidak bisa mengklaim Exp lagi?
Kamu hubungi *owner bot* untuk menambah Exp dan menukar nya ke Limit.
Cara menghubungi owner kamu cukup ketik perintah *#owner* maka bot akan mengirimkan Kontak *Owner*.






`.trim(), m)
}

handler.command = /^(helpexp)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler