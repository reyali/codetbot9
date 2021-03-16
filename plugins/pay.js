let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = `0@s.whatsapp.net`
  if (user.registered === false) throw `User belum terdaftar`
    let link = 'https://i.imgur.com/5hJCG2f.jpg'

  conn.fakeReply(m.chat,'', who,'','0-1609905229@g.us')
  }
handler.help = ['pay @user <amount>']
handler.tags = ['xp']
handler.command = /^pay$/
handler.rowner = false
handler.limit = true
handler.register =true
module.exports = handler

