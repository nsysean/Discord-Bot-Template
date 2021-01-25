const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'link',
    category : 'info',
    description : 'Invite Link',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        message.channel.send("Invite me using this link: https://discord.com/api/oauth2/authorize?client_id=801279877595660299&permissions=8&scope=bot")
    }
}