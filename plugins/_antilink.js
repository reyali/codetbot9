let handler = async function(m, { conn ,participants}) {
let user = m.sender

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = m => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) m.reply('Hapus!!')
  await conn.groupRemove(m.chat, [user])
}

handler.help = ['antilink']
handler.tags = ['group']
handler.command = new RegExp
handler.admin = false
handler.botAdmin = true 
handler.fail = null 

  return true
}

module.exports = handler
