let handler  = async (m, { conn, command }) => {
  conn.reply(m.chat,`${pickRandom(global.bucin)}- _:Dilan1990_`, m)
}
handler.help = ['katadilan']
handler.tags = ['quotes']
handler.command = /^(katadilan)$/i
handler.owner = false 
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
module.exports = handler  


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Biarpun Bagaimanapun tidak ada yang akan baik-baik saja tentang sebuah perpisahaan..",
  "Kalau kamu bohong, itu hak kamu Asal jangan aku yang bohong ke kamu.",
  "Jika hujan aku tak akan memberimu jaket sebab jika aku sakit lalu siapa yang akan menjagamu ?",
"Dia baik jadi aku takut menyakitinya.",
"Aku rindu kamu! Itu akan selalu.",
"Kalau suatu saat nanti kamu rindu padaku maukah kamu memberitahuku ?. Agar aku bisa langsung berlari menemuimu.",
"Kalau mencintaimu adalah kesalahan. Yasudah biar aku salah terus saja.",
"Milea kamu cantik tapi aku belum mencintaimu gk tahu kalau sore, tunggu saja",
"Nanti kalau kamu mau tidur. prcayalah aku sedang mengucapkan selamat tidur dari jauh namun kamu gak akan denger.",
"Malam ini kalau tidur jangan ingat aku, ya! Tapi kalau mau silahkan.",
"Jangan datang ke perempuan untuk membuat dia mau tetapi datanglah ke perempuan untuk membuar dia senang. Kalau kamu tidak setuju, tetapi aku begitu.",
"Selamat ulang tahun Milea. Ini hadiah untukmu, cuma TTS tapi sudah ku isi semua. Aku sayang kamu. Aku tidak mau kamu pusing karena harus mengisinya.",
"Sekarang kamu tidur jangan begadang Dan jangan rindu kenapa? Berat kamu gak akan kuat biar aku saja.",
"Terkadang rindu hadir di luar nalar Ingin segera berlari dan terbang menghampiri",
"Aku mencintaimu Biarlah, ini urusanku Bagaimana engkau kepadaku terserah itu urusanmu.",
"Cemburu itu hanya untuk orang-orang yang tidak percaya diri. “Jadi”, ya sekarang aku sedang tidak percaya diri.",
"Meskipun, perasaan cemburu itu normal di dalam sebuah hubungan, aku tidak ingin terjebak oleh itu karena aku sangat benci merasa cemburu.",
"Dia tidak hebat, tidak, malah mungkin biasa saja. Tapi dia bisa membuatku senang hanya dengan hal sederhana.",
"Jangan menangis, karena kamu adalah alasan seseorang tersenyum.",
"prku adalah merindukanmu lebih kuat dari matematika lebih luas dari fisika lebih kerasa dari bologi",
"Jangan bilang ke aku ada yang menyakitimu. Nanti  besoknya, orang itu akan hilang.",
"Terima kasih, Dilan. Kamu pernah mau kepadaku. Dan kini, biarkan aku kalau selalu ingin tahu kabarmu.",
"walau tubuhku di situ, tetapi pikiranku terus mengembara ke dilan. sungguh, aku tidak pernah berpikir akan mencintai orang lain selain Dilan. aku hanya ingin Dilan.",
"Bolehkan aku punya pendapat. Ini tentang dia yang ada di bumi. Ketika Tuhan menciptakan dirinya, kukira dia ada maksud mau pamer.",
"Aku gak pandai cemburu. Malahan, kalau kamu ninggalin aku, aku gak bisa apa-apa. Bisaku cuma mencintaimu.",
"Dan tetaplah denganku, sampai engkau terbiasa bersama semua hal yang berkaitan denganku.",
"Aku sedang berbohong jika aku mengatakan bahwa aku tidak kecewa, tapi aku tidak ingin memiliki pikiran yang buruk tentang hubungan cinta yang putus.",
"tolong sampein ke bunda terima kasih udah lahirin orang yang aku cinta",
"hidup itu misterius, kita tidak akan pernah benar-benar mengerti mengapa kenyataan harus berakhir seperti itu aku harus bisa menerimanya",
"Aku merindukannya dan tidak bisa mendapatkan dia keluar dari pikiranku, jujur aku tidak bisa melupakannya.",
"Memang tidak salah untuk berharap, tapi aku harus tahu kapan berhenti",
"Aku merasa terjebak di dalam keadaan yang mengambang. Terus memandang keluar jendela mobilku dan semua yang kulihat adalah kenangan.",
"Tapi biar bagaimanapun, itu adalah harinya, di mana dan kapan pun, setiap aku mengingatnya, aku akan langsung tersenyum.",
"Dik jangan pergi jauh-jauh kan ada darahku di tubuhmu",
"Dia bukan gadis yang harus nampak mewah agat terlihat keren oleh isi dunia dan tidak merasa harus memiliki apa-apa yang tidak dia butuhkan hanya agar bisa sama dengan yang lain.",
"Kalau kamu ninggalin aku, itu hak kamu, asal jangan aku yang ninggalin kamu. Aku takut kamu kecewa.",
"Dulu, segala sesuatu tampak indah, Sama sekali aku tidak pernah berpikir bahwa akhirnya kita harus berpisah. Sulit untuk dipercaya, tetapi itulah yang terjadi.",
"biar bagaimanapun tidak ada yang akan baik-baik saja tentang sebuah perpisahan",
"aku tidak cemburu. Dia adalah bagian diriku. Dia adalah teritorialku, wilayah yang sudah menjadi milikku.",
"Dan masa lalu bukan untuk diperdebatkan",
"Walau bagaimanapun, tempat itu menjadi salah satu saksinya untuk banyak kenangan yang pernah aku alami bersama ayah.",
"Masa lalu adalah masa lalu, tak usah dihindari atau kau tolak. Masa lalu akan menjadi penasihat yang baik. Tidak ada gunanya kau sesali. biarlah itu hadir sebagai aliran yang membawamu peergi ke tujuan yang lebih baik.",
"Tidak akan ada satupun orang yang terbiasa dengan kehilangan.",
"Dan sekarang, yang tetap dalam diriku adalah kenangan di sanalah kamu selalu.",
"tenang saja, perpisahan tak menyedihkan, yang menyedihkan adalah bila habis itu saling lupa"
]
