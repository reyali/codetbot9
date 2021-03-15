let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
  *[ Quotes ]* 
 
Kamu tau lah apa itu quotes. Masa iya ga tau emm.

Btw Masa kamu ga tau cara menggunakan fitur ini? 
Mudah kok tinggal ketik sesuai perintah nya.
Tinggal ketik Perintah nya aja si.

*#bucin*
*#katadilan*
*#katailham*
*#gombal*
*#faktaseram* 
Nnti bot akan mengirim kan quotes sesuai perintah yg kamu ketik.




`.trim(), m)
}

handler.command = /^(helpgroup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler