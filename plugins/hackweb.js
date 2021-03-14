
let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix, command }) => {
        let [l, r,a,b] = text.split `|`

    if (!l) return conn.reply(m.chat, 'Silahkan masukan parameter text1', m)
    if (!r) return conn.reply(m.chat, 'Silahkan masukan parameter text2', m)
if (!a) return conn.reply(m.chat, 'Silahkan masukan parameter text3', m)
    if (!b) return conn.reply(m.chat, 'Silahkan masukan parameter text4', m)

let link = `${b}`
conn.sendMessage(m.chat, {
 text: link,
 canonicalUrl: `${a}`,
 matchedText: link,
 title: `${r}`,
 description: `${l}`,
 jpegThumbnail: await (await fetch(await conn.getProfilePicture(m.sender))).buffer()
}, 'extendedTextMessage', { detectLinks: false })
	

}
handler.help = ['hackweb [title]|[desk]|[wm]|[url]']
handler.tags = ['tools']
handler.command = /^(hackweb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
