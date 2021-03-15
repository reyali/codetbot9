let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

conn.reply(m.chat, `[ *Grup Link Detected* ] _Hmmm Sudah Ku Bilang. Jangan Kirim Link Groub Whatasapp!_\n\n_Dah lah:)_\n\n*Babay*....`, m)
await conn.groupRemove(m.chat, [user])
}

  return true
}

module.exports = handler
handler.admin = false
handler.botAdmin = true 
handler.fail = null