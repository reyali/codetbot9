let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
 
 *[ Fun ]*

Ya ya yaaaaa. Ini adalah fitur buat have fun saja.
Fungsi dari perintah ini adalah untuk mengubah kata menjadi A,I,U,E,O

Misalkan  perintah
*#halah* Aku cinta kamu
Maka google akan mengirimkan balasan *Aka canta kama*
*#hilih* Aku cinta kamu
Maka google akan mengirimkan balasan *Iki cinti kimi*
*#huluh* Aku cinta kamu 
Maka google akan mengirimkan balasan  *Uku cuntu kumu*
*#heleh* Aku cinta kamu
Maka google akan mengirimkan balasan *Eke cente keme*
*#holoh* Aku cinta kamu
Maka google akan mengirimkan balasan *Oko conto komo*

Dah lah mau ek ek :(




`.trim(), m)
}

handler.command = /^(helpfun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler