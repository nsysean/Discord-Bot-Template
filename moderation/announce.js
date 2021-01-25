
const Discord = require("discord.js")
const client = new Discord.Client
module.exports = {
    name : 'announce',
    category : 'Functions',
    description : `announce <stuff>`,

    run : async(client, message, args) => {
      
			const channel = message.mentions.channels.first() || message.channel
			
    let channelTarget = message.guild.channels.cache.get(channel.id);

			      const webhook = await channelTarget.createWebhook("ANNOUNCEMENT", {
          avatar: ("https://i.ibb.co/DWGDdqw/Megaphone-icon-by-ahlangraphic-3-580x386.jpg"),//image url
          channel: (channelTarget)//ANNOUNCEMENT CHANNEL
      })
      await webhook.send(args.slice(1).join(' ')).then(() => {
          webhook.delete()
					
      })
    }
}