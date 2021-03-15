let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Hai👋

Kamu butuh bantuan yang di menu apa?

Untuk menu *[ Marker ]*
Ketik *#helpmarker*

Untuk menu *[ Kerang Ajaib ]*
Ketik *#helpkerang*

Untuk menu *[ Muslim ]*
Ketik *#helpmuslim*

Untuk menu *[ Quotes ]*
Ketik *#helpquotes*

Untuk menu *[ group ]*
Ketik *#helpgroup*

Untuk menu *[ Internet ]*
Ketik *#helpinternet*

Untuk menu *[ Downloader ]*
Ketik *#helpdownload*#

Untuk menu *[ Fun ]*
Ketik *#helpfun*

Untuk menu *[ Exp & Limit ]*
Ketik *#helpexp*



`.trim(), m)
}

handler.command = /^(helptools)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

