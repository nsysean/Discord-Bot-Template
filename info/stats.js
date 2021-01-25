const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'stats',
		aliases : ['stat'],
    category : 'info',
    description : 'Bot stats',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        

        const embed = new MessageEmbed()
            .setTitle('Pink Bot stats:')
            .setDescription(`WebSocket ping is ${client.ws.ping}MS\nWatching ${client.guilds.cache.size} servers\nWatching ${client.channels.cache.size} channels\nInvite Link: https://discord.com/api/oauth2/authorize?client_id=801279877595660299&permissions=8&scope=bot`)
         message.channel.send(embed)
           

    }
}
