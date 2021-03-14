let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter Text', m)

    if (text > 10) return conn.reply(m.chat, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)

    let link = 'https://videfikri.com/api/textmaker/coffeecup/?text=' + text

    conn.sendFile(m.chat, link, 'bokehtext.png', '*Colong aja gpp:v*', m)
    conn.fakeReply(m.chat, '*Silahkan tunggu sambil ngopi*☕','0@s.whatsapp.net',
'Sedang memuat gambar...')
}
handler.help = ['bokehtext'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(coffe)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler