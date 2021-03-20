let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {
  	
  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `	

	await m.reply(`╭─ ➡️*DOMPET*
┃
├─ ✅ Username: ${username}
├─ ✅ Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
├─ ✅ Nama: *${name}*
├─ ✅ Status: ${registred}
├─ ✅ Exp Kamu: *${exp}* Exp
├─ ✅ Coin Kamu: *${limit}* Coin
┗━ 
🏆 Leaderboard/level: *Kamu berada diposisi ${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}*
Note: Perhitungan Exp ke coin adalah 
100 Exp = 1 Coin
`)
	
}
handler.help = ['dompet']
handler.tags = ['xp']
handler.command = /^dompet$/i

handler.owner = false 
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false
module.exports = handler  