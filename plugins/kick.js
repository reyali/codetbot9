let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 99999999999999999999999999999999999999999
    m.reply('+99999999999999999999999999999999999999999 XP')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Anda sudah mengklaim klaim harian hari ini')
}
handler.help = [''oclaim']
handler.tags = ['xp']
handler.command = /^(oclaim)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false
handler.register =false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler