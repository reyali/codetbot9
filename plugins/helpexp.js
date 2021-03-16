let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
  *[ Exp & Limit ]*

Apa itu exp? Exp di sini  sebut saja uang virtual kamu. Fungsinya apa ni? Funginya adalah untuk menukar ke dalam coin.
Apa itu Coin? Coin di sini di gunakan untuk mengakses fitur yang di batasi. 
1 kali pemakaian fitur yang di batasi, Coin kamu akan berkurang 1. 

Perhutungan nya adalah: 100Exp = 1 Coin

Sejak pemakaian bot kamu akan di beri 1000 Exp Dan 10 Coin.

Bagaimana kalau Coin saya habis?
Kamu bisa membeli atau menukar Coin dengan Exp yang kamu punya.

Bagaimana cara nya ? 
Caranya ketik perintah *#buy* jumlah Coin, Atau langsung *#buyall* untuk membeli atau menukar semua exp kamu ke dalam Coin.
Contoh: *#buy 3* atau *#buyall* 

Bagaimana kalau Exp saya Habis?
Kamu bisa claim harian Exp kamu. 
Cara claim nya dengan mengetik perintah *#claim*

Bagaimana jika claim harian sudah saya ambil dan tidak bisa mengklaim Exp lagi?
Kamu hubungi *owner bot* untuk menambah Exp Agar Bisa membeli coin.
Cara menghubungi owner kamu cukup ketik perintah *#owner* maka bot akan mengirimkan Kontak *Owner*.
lalu Kamu chat ownernya. Utamakan Salam
P= Anak Dajjal :v






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
