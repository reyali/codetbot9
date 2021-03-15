let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
 *[ Group ]*

1. *#akick* Perintah ini Di gunakan untuk mengkick user di dalam grub. Perlu kamu ketahui bahwa perintah ini hanya bisa di gunakan oleh admin grub. Cara menggunakan fitur ini adalah dengan cara mengetik perintah *#akick trus tag siapa yang mau kamu kick.
Contoh: *#akick @manusia* . Maka bot akan otomatis meng kick user/ member yang kamu tag.

2. *#aadmin* Seperi nama perintahnya kamu pasti udah tau perintah ini buat apa. Ya,  Perintah ini Di gunakan untuk menjadikan member menjadi admin di dalam grub. Perlu kamu ketahui bahwa perintah ini hanya bisa di gunakan oleh admin grub. Cara menggunakan fitur ini adalah dengan cara mengetik perintah *#aadmin* trus tag siapa yang mau kamu jadikan admin.
Contoh: *#aadmin @manusia* . Maka bot akan otomatis menjadikan orang kamu tag tadi sebagai admin.

3. *#amember* Seperi nama perintahnya kamu pasti udah tau perintah ini buat apa. Ya,  Perintah ini Di gunakan untuk menjadikan admin menjadi member di dalam grub. Perlu kamu ketahui bahwa perintah ini hanya bisa di gunakan oleh admin grub. Cara menggunakan fitur ini adalah dengan cara mengetik perintah *#amember* lalu tag siapa yang mau kamu jadikan member.
 Contoh: *#amember @manusia* . Maka bot akan otomatis menjadikan orang kamu tag tadi turun dari admin ke member.

4. *#linkgroub*  Ya ya ya. Ini adalah perintah untuk menunjukan Link Grup yang kamu tempati.
Cara menggunakan sangat mudah. Tinggal ketik aja *#linkgroup* Di dalam grup itu ya ngetik nya. Maka bot akan mengirimkan link undangan Group tersebut.

5. *#listonline* Perintah ini di gunakan untuk mengetahui siapa saja teman teman di grub kamu yg sedang online. 
Cara menggunakan nya kamu tinggal ketik perintah *#listonline*

6. *#tagall* Yap, Perintah ini di gunakan untuk meng tag semua member yang ada di dalam grub tersebut. 
Cara menggunakan fitur ini kamu Ketik perintah
*#tagall* nama kamu|tujuan kamu ngetag.
Contoh: *#tagall bayu|sini woi sepi* 
Perlu di ingat pembatas nama dan tujuan tag adalah memakai symbol *|* .

7. *#enable *#disable* Perintah ini di gunakan untuk menghidupkan dan mematikan fitur welcome di grub kamu. Ini fungsi nya adalah untuk menyambut otomatis member yang masuk dan yang keluar group.
Cara menggunakan fitur ini kamu Hanya tinggal ketik perintah
 *#enable welcome* untuk menghidupkan Sambutan otomatis
 *#disable welcome* untuk mematikan sambutan otomatis.




`.trim(), m)
}

handler.command = /^(helpgroup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler