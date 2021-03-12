let handler = async function(m, { conn ,participants}) {
let user = m.sender

  conn.reply(m.chat, `[ *Grup Link Detcted* ] _Sudah Ku Bilang Jangan Ngirim Link Groub Whatsapp!....._`, m)
  conn.reply(m.chat, `Dah lah Babay👋👋`
await conn.groupRemove(m.chat, [user])
}
 
handler.help = ['antilink']
handler.tags = ['group']
handler.customPrefix = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.command = new RegExp
handler.admin = false
handler.botAdmin = true 
handler.fail = null

module.exports = handler