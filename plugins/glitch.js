let handler = async(m, { conn, text }) => {
	m.reply('_⏳Sedang mencari Jawaban Soal..._\n*Silahkan tunggu Sambil Ngopi* ☕')
    let [l, r] = text.split `|`

    if (!l) return conn.reply(m.chat, 'Silahkan masukan parameter text1', m)
    if (!r) return conn.reply(m.chat, 'Silahkan masukan parameter text2', m)

    if (l > 10) return conn.reply(m.chat, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)
    if (r > 10) return conn.reply(m.chat, '*Teks2 Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)

    let link = 'https://api.zeks.xyz/api/gtext?text1=' + l + '&text2=' + r + '&apikey=apivinz'

    conn.sendFile(m.chat, link, 'glitchtext.png', '*Nah ambil*', m)
    conn.fakeReply(m.chat, '*_Sedang membuat..bawa ngopi aja dulu:v_*','0@s.whatsapp.net',
'cieee nungguin ya...:))')
}
handler.help = ['glitch'].map(v => v + ' <teks|teks>')
handler.tags = ['maker']
handler.command = /^(glitchtext|glitch)$/i
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