const xpperlimit = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^ontol|ntl|eler|elr|bi|abi|jg|nijing|njim|jinc|eki|emek|mk|ngsat|gst|ngsad|gsd|ncok|tod|td|ingan|gn|blok|lk|ego|egok$/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.DATABASE._data.users[m.sender].exp >= xpperlimit * count) {
    global.DATABASE._data.users[m.sender].exp -= xpperlimit * count
    global.DATABASE._data.users[m.sender].limit += count
    conn.reply(m.chat, `-${xpperlimit * count} XP\n+ ${count} Limit`, m)
  } else conn.reply(m.chat, `Jangan Toxic Ya kak☺️`, m)
}
handler.help = ['buy<jumlah limit>', 'buy <jumlah limit>', 'buyall']
handler.tags = ['xp']
handler.command = /^ontol|ntl|eler|elr|bi|abi|jg|nijing|njim|jinc|eki|emek|mk|ngsat|gst|ngsad|gsd|ncok|tod|td|ingan|gn|blok|lk|ego|egok$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.register =true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler