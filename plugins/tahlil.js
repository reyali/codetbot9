const axios = require('axios')

let handler = async(m, { conn, text }) => {

    new Promise((reject) => {
      

        axios.get(`http://zekais-api.herokuapp.com/tahlil`)
            .then((res) => {
                // console.log(res.data.result)
                
                conn.reply(m.chat,`*arab*: ${res.data.arabic}\n*terjemah*: ${res.data.translate}`,m)
              
            })
            conn.fakeReply(m.chat, '*Silahkan tunggu*','0@s.whatsapp.net',
'Sedang Mendownload data...')
            .catch((err) => {
                reject(err)
            })
    })
}
handler.help = ['tahlil']
handler.tags = ['new']
handler.command = /^tahlil$/i
handler.owner = false 
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false
module.exports = handler  