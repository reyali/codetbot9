let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter Text', m)

    if (text > 10) return conn.reply(m.chat, '*Teks Terlalu Panjang!*\n_Maksimal 10 huruf!_', m)

    let link = 'https://api.zeks.xyz/api/gplaybutton?text=' + text + '&apikey=apivinz'
    
    conn.sendFile(m.chat, link, 'bokehtext.png', '*Colong aja gpp:v*', m)
    conn.fakeReply(m.chat, '*_Sedang membuat..bawa ngopi aja dulu:v_*','0@s.whatsapp.net',
'cieee nungguin ya...:))')
}
handler.help = ['gplaybutton'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(gplaybutton)$/i
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