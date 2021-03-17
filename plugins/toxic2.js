let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^ontol|ntl|eler|elr|bi|abi|jg|njing|njim|jinc|eki|emek|mk|ngsat|gst|ngsad|gsd|ncok|tod|td|ingan|gn|blok|lk|ego|egok$/i, '')
  conn.reply(m.chat, `
Jangan Toxic ya kak☺️


handler.command = /^ontol|ntl|eler|elr|bi|abi|jg|njing|njim|jinc|eki|emek|mk|ngsat|gst|ngsad|gsd|ncok|tod|td|ingan|gn|blok|lk|ego|egok$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler