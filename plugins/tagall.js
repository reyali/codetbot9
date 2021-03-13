let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
     let [l, r] = text.split `|`
         if (!l) return conn.reply(m.chat, 'Silahkan masukan nama anda\ncontoh: *#tagall Adji.Sini Nimbrung*', m)
    if (!r) return conn.reply(m.chat, 'Silahkan masukan pesan anda', m)

  let users = participants.map(u => u.jid)
  conn.reply(m.chat, '╭─ ➡️「 *TAG SEMUA MEMBER* 」\n│\n├ ➡️ *Tukanh Tag:* ' + l +  '\n├ ➡️ *Pesan:* ' + r +'\n│\n' + users.map(v => '├ 👉 @' + v.replace(/@.+/, '')).join`\n`, m, {
    contextInfo: { mentionedJid: users }
 
  
})
}
handler.help = ['tagall <nama.pesan>']
handler.tags = ['group']
handler.command = /^tagall$/i
handler.owner = false 
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

