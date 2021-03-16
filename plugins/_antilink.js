let handler = async function(m, { conn ,participants}) {
let user = m.sender

  conn.reply(m.chat, `[ *Grup Link Detected* ] _Hmmm Sudah Ku Bilang. Jangan Kirim Link Groub Whatasapp!_\n\n_Dah lah:)_\n\n*Babay*....`, m)
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