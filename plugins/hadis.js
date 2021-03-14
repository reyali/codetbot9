             const axios = require('axios')
let handler = async (m, { text, args, usedPrefix}) => {
	        
	    if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan ${usedPrefix}hadis\nSilahkan ketik: ${usedPrefix}hadis [query] [nomor]\nContoh: ${usedPrefix}hadis bukhari 1\n\nquery yang tersedia:\n, darimi\nahmad \nbukhari\nmuslim\nmalik\nnasai\ntirmidzi\nibnumajah\nabudaud`, m)
	if (!text) return conn.reply(m.chat, 'hadis nomor berapa ?', m)
      if (args[0] === 'darimi') {
                        const hdar = await axios.get(`https://api.hadith.sutanlab.id/books/darimi/${args[1]}`)
                        conn.reply(m.chat, `${hdar.data.data.contents.arab}\n${hdar.data.data.contents.id}\n\n*H.R. Darimi*`, m)
                    } else if (args[0] === 'ahmad') {
                        const hmad = await axios.get(`https://api.hadith.sutanlab.id/books/ahmad/${args[1]}`)
                        conn.reply(m.chat, `${hmad.data.data.contents.arab}\n${hmad.data.data.contents.id}\n\n*H.R. Ahmad*`, m)
                    } else if (args[0] === 'bukhari') {
                        const hbukh = await axios.get(`https://api.hadith.sutanlab.id/books/bukhari/${args[1]}`)
              conn.reply(m.chat, `${hbukh.data.data.contents.arab}\n${hbukh.data.data.contents.id}\n\n*H.R. Bukhori*`, m)
                    } else if (args[0] === 'muslim') {
                        const hmus = await axios.get(`https://api.hadith.sutanlab.id/books/muslim/${args[1]}`)
                        conn.reply(m.chat, `${hmus.data.data.contents.arab}\n${hmus.data.data.contents.id}\n\n*H.R. Muslim*`, m)
                    } else if (args[0] === 'malik') {
                        const hmal = await axios.get(`https://api.hadith.sutanlab.id/books/malik/${args[1]}`)
                        conn.reply(m.chat, `${hmal.data.data.contents.arab}\n${hmal.data.data.contents.id}\n\n*H.R. Malik*`, m)
                    } else if (args[0] === 'nasai') {
                        const hnas = await axios.get(`https://api.hadith.sutanlab.id/books/nasai/${args[1]}`)
                        conn.reply(m.chat, `${hnas.data.data.contents.arab}\n${hnas.data.data.contents.id}\n\n*H.R. Nasa'i*`, m)
                    } else if (args[0] === 'tirmidzi') {
                        const htir = await axios.get(`https://api.hadith.sutanlab.id/books/tirmidzi/${args[1]}`)
                        conn.reply(m.chat, `${htir.data.data.contents.arab}\n${htir.data.data.contents.id}\n\n*H.R. Tirmidzi*`, m)
                    } else if (args[0] === 'ibnumajah') {
                        const hibn = await axios.get(`https://api.hadith.sutanlab.id/books/ibnu-majah/${args[1]}`)
                        conn.reply(m.chat, `${hibn.data.data.contents.arab}\n${hibn.data.data.contents.id}\n\n*H.R. Ibnu Majah*`, m)
                    } else if (args[0] === 'abudaud') {
                        const habud = await axios.get(`https://api.hadith.sutanlab.id/books/abu-daud/${args[1]}`)
                        conn.reply(m.chat, `${habud.data.data.contents.arab}\n${habud.data.data.contents.id}\n\n*H.R. Abu Daud*`, m)
                    } else {
                        conn.reply(m.chat, ind.hadis(), m)
                    }
              
              }
handler.help = ['hadis <nomor>
              
handler.command = /^(hadis)$/i
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