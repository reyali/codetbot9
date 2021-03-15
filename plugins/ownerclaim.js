let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 9999999999999999999999999999999999
    m.reply('Exp kamu Bertambah +9999999999999999999999999999999999 XP✅')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 0
  } else m.reply('Anda sudah mengklaim klaim harian hari ini')
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(odaily|oclaim)$/i
handler.owner = true
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.registred = false
handler.admin = false
handler.botAdmin = true

handler.fail = null
handler.exp = 9999999999999999999999999999999999

module.exports = handler