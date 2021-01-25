const Discord = require("discord.js")
let cant = new Discord.MessageEmbed()
.setTitle('Oh Really?')
.setDescription('You are not an Admin Bruh. Why you trying to use this command?')
.setTimestamp()
.setColor('#B85A21');

module.exports = {
    name: "removerole",
    description: "removes the role to the specifide user",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES"))return message.channel.send(cant)
    const member = message.mentions.users.first()
    const roletoremove = message.mentions.roles.first()
    let removed = new Discord.MessageEmbed()
    .setTitle(':white_check_mark: Role Removed Succesfully')
    .setDescription(`Removed The role **${roletoremove}** to **${member.tag}**.`)
    .setColor('GREEN')

    let memberTarget = message.guild.members.cache.get(member.id);

    memberTarget.roles.remove(roletoremove.id)
    return message.channel.send(removed)
    
  
}}