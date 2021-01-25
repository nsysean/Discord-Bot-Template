const db = require("quick.db")
module.exports = {
    name : 'setbackground',
    aliases : ['setbg'],
    category : 'level',
    description : `setbio <stuff>`,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
      
  if (!message.attachments.size > 0) {
  return message.reply("pls provide a picture")
}
const target = message.author

let Bg = message.attachments.first()
let Bgurl = Bg.url
	db.set(`${target.id}bg`, Bgurl)
  
            message.reply(`Bg set to: `, {files: [db.get(`${target.id}bg`)]})
           
            
           
    }
}