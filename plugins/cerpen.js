const axios = require('axios')

let handler = async function(m, { conn, text }) {
	    new Promise((reject) => {
        

        axios.get('https://masgi.herokuapp.com/api/cerpen')
                    .then(async (res) => await this.reply(m.chat, res.data.data, m))
            })
            .catch((err) => {
                reject(err)
            })
    
}

handler.help = ['cerpen']
handler.tags = ['new']
handler.command = /^cerpen$/i
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