let handler = async (m, { text }) => {
	let user = global.DATABASE._data.users[m.sender]
	let { name, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[m.sender]
	  let sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
	let usersExp = sortedExp.map(v => v[0])
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (user.registered === false) throw `Lu blm daftar bego ketik #daftar dulu`
count = Math.floor(Math.random() * 20000) +1
  buah = ['✅','✅',] // Versi Simpel
          satu = buah[Math.floor(Math.random() * (buah.length))]	
          dua = buah[Math.floor(Math.random() * (buah.length))]	
          tiga = buah[Math.floor(Math.random() * (buah.length))]	
if (satu === dua && dua === tiga)
	await m.reply(`╭─ ❏ *ATM*
┃
├─ ❏ Nama: *${name}*
├─ ❏ Jumlah uang: *Rp.${exp}* *rupiah*
├─ ❏ limit: *${limit} limit*
┗━ ❏ Leaderboard/level: *Kamu berada diposisi ${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}*
`)
	
}
handler.help = ['dompet']
handler.tags = ['xp']
handler.command = /^(dompet|limit|exp)$/i

handler.owner = false 
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
module.exports = handler  