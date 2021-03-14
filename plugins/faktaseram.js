let fetch = require('node-fetch')

let handler = async function(m, { conn, args }) {
	                   fetch('https://raw.githubusercontent.com/TheSploit/CreepyFact/main/creepy.txt')
                .then((res) => res.text())
                    .then(async (body) => {
                        let creepyx = body.split('\n')
                        let creepyz = creepyx[Math.floor(Math.random() * creepyx.length)]
                        await this.reply(m.chat, creepyz, m)
        })
        .catch(() => {
            conn.reply(m.chat, 'Ada yang Error!', m)
        })
}
handler.help = ['faktaseram']
handler.tags = ['new']
handler.command = /^(faktaseram|seramfakta)$/i
handler.owner = false 
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
module.exports = handler  