let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter Text', m)

    if (text > 10) return conn.reply(m.chat, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)

    let link = 'https://api.zeks.xyz/api/bneon?apikey=apivinz&text=' + text

    conn.sendFile(m.chat, link, 'bokehtext.png', '*Ambil Aja Ambil*', m)
    conn.fakeReply(m.chat, '*Silahkan tunggu sambil ngopi*☕','0@s.whatsapp.net',
'Sedang membuat gambar text, Sabar ngab...')
}
handler.help = ['neon'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(neon)$/i
handler.owner = false 
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
module.exports = handler  