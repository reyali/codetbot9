let handler = async m => m.reply(`

وقال صلى الله عليه وسلم: {الصَّدَقَةُ تَسُدُّ سَبْعِيْنَ بَابًا مِنَ السُّوءِ}.

Nabi SAWbersabda : "Sedekah itu bisa menutup 70 pintu keburukan”
.
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082252420430]
╰───

Tidak Ada paksaan untuk donasi, Jika kamu memberikan donasi, Saya berterimakasih kepada mu dan bersyukur kepada Allah.Swt

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
