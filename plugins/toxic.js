

const xpperlimit = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^ontol|ntl|eler|elr|bi|abi|jg|nijing|njim|jinc|eki|emek|mk|ngsat|gst|ngsad|gsd|ncok|tod|td|ingan|gn|blok|lk|ego|egok$/i, '')
  
  if (global.DATABASE._data.users[m.sender].exp >= xpperlimit * count) {
    global.DATABASE._data.users[m.sender].exp -= xpperlimit * count
    global.DATABASE._data.users[m.sender].limit += count
conn.reply(m.chat, `Jangan Toxic!, Tobat ngab`, m)








handler.command = /^ontol|ntl|eler|elr|bi|abi|jg|nijing|njim|jinc|eki|emek|mk|ngsat|gst|ngsad|gsd|ncok|tod|td|ingan|gn|blok|lk|ego|egok$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler