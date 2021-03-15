let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: SugarDady/Reyali Adjidiningrat
Developer : Nurutomo


*Thanks To :*
Allah SWT :)
Nurutomo
SugarDady
Reyali Adjidiningrat
X-team

➡️ Ingin Menggunakan Bot ini ke grub kamu Silahkan hubungi *Owner*
https://wa.me/6282252420430

`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

