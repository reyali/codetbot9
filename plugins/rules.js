let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Syarat dan Ketentuan Bot *KAMI*

1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!
7. Jangan Telpon Atau Vc pada kontak/Nomor bot ini.
8. Kami Akan meblokir Siapapun Telpon/Vc Pada bot ini.
9. Gunakan Bot ini secara bijak.
10. Izin Kepada Owner Jika Ingin memasukan Bot ini Ke dalam Group kamu.


Thanks !
2021¬©SugarDady
`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

