let handler = async function(m, { conn}) {
    conn.reply(m.chat,`“${pickRandom(global.gombal)}”`, m)
}
 
handler.help = ['gombal']
handler.tags = ['quotes']
handler.command = /^gombal$/i
handler.admin = false
handler.botAdmin = false
handler.fail = null 
handler.limit = true
handler.register =false

module.exports = handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.gombal = [

"Eh, pinjem flashdisk dong, aku pengen transfer data cintaku buat kamu.",

"Kamu tau gak? Kenapa kalau aku menghafal lihatnya ke atas? Soalnya kalau merem langsung kebayang wajahmu.",

"Kamu itu mirip kayak bendera, bayang-bayang kamu selalu berikibar di hatiku.",

"Sayangku tadi pagi aku gak bisa makan karena merindukanmu. Siangnya juga nggak makan karena mikirin kamu. Dan malamnya aku juga nggak bisa tidur karena kelaparan.",


"Kamu tuh kayak warteg, sederhana tapi berkualitas.",

"Cintaku ke kamu tuh kaya kecoa. Ga punah dimakan zaman",

"Kamu pesulap, ya? Soalnya pas aku lihat kamu, orang-orang di sekitar kita jadi menghilang.",

"Aku bakalan berhenti cinta sama kamu kalo gajah udah bisa terbang sendiri.",

"Maaf, apa saya kenal kamu? Soalnya kamu mirip pacar saya selanjutnya.",

"Kamu itu di ibaratkan seperti upil dan aku adalah kelingking, aku akan mencari kamu sampai dapat.",

"Kamu itu hampir sempurna, tetapi hanya 1 kekuranganmu. Kurang aku dipelukanmu.",

"Enak ya jadi kamu, kalau mau liat bidadari, tinggal liat di kaca.",

"Cintaku padamu bagai diare. Tak bisa kutahan, terus keluar begitu saja.",

"Jangan GR, deh. Aku kangen kamu sedikit aja kok. Sedikit berlebihan maksudnya.",

"Kalo jadi superhero, kamu bisa tebak aku mau jadi apa? Jadi YourMan.",

"Cinta dan sayangku ke kamu itu kaya kuku. Meskipun dipotong, tetep tumbuh terus.",

"Hari Minggu itu weekend, tapi kalau cinta kita will never end.",

"Kalo kamu wajan, aku itu margarine. Deket kamu aku meleleh.",

"Ada 3 hal di dunia ini yang tidak bisa kuhitung, jumlah bintang di langit, ikan di laut dan cintaku kepada kamu.",

"Aku tahu kita tak seumuran, tapi aku ingin seumur hidup dengan kamu",

"Kalau disuruh melupakanmu, aku akan ke kelurahan dulu. Minta surat keterangan tidak mampu.",

"Orangtuamu pengrajin bantal, ya? Karena terasa nyaman jika di dekatmu.",

"Cintaku padamu seperti utang. Awalnya kecil, didiemin, tau-tau gede sendiri.",

"Lihat kebunku penuh dengan bunga, lihat dirimu aku berbunga-bunga.",

"Kamu itu seperti garam di lautan, tidak terlihat tapi akan selalu ada untuk selamanya.",

"Cintaku padamu seperti ban kereta api, tidak pernah kempes.",

"Angkutan kota jauh dekat 3 ribu, kalau kamu jauh dekat ya di hatiku.",

"Ngemil apa yang paling enak? Ngemilikin kamu sepenuhnya.",

"Meskipun kurus, kamu adalah hal terberat yang ada di hatiku.",

"Rasa sayangku ke kamu kaya pas power rangers waktu gak ada monster, nggak berubah."
]

 