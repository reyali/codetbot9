let handler = async m => m.reply(`
Alhmdulilah kalau mau donasi, Kalu tidak juga Tidak Apa-Apa,
Tidak Ada Paksaan Sama Sekali🤗

╭─「 Donasi • Pulsa 」
│ • Telkomsel [082252420439]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
