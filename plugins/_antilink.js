let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} else if(args[0] == 'on') {
		let cek = global.DATABASE._data.chats[m.chat].nolink
	if(cek) return conn.reply(m.chat, `*Anti-Link telah aktif pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nolink = true
		conn.reply(m.chat, `*Anti-Link berhasil diaktifkan.*`, m)
	} else if(args[0] == 'off') {
		let cek = global.DATABASE._data.chats[m.chat].nolink
	if(!cek) return conn.reply(m.chat, `*Anti-Link telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nolink = false
		conn.reply(m.chat, `*Anti-Link berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} 
}
let handler = async function(m, { conn ,participants}) {
let user = m.sender

  conn.reply(m.chat, `[ *Grup Link Detected* ] _Hmmm Sudah Ku Bilang. Jangan Kirim Link Groub Whatasapp!_\n\n_Dah lah:)_\n\n*Babay*....`, m)
await conn.groupRemove(m.chat, [user])
}
 
handler.help = ['antilink']
handler.tags = ['group']
handler.customPrefix = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.command = new RegExp
handler.admin = true
handler.botAdmin = true 
handler.fail = null

module.exports = handler