const Discord = require("discord.js")

module.exports = {
    name : 'coinflip',
		aliases : ['cf'],
    category : 'fun',
    description : 'flip a coin',
	
		

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

 
    run : async(client, message, args) => {
        let HT = [
        "Heads",
        "Tails"
    ]
    let pick = HT[Math.floor(Math.random() * HT.length)];

    if(pick === "Tails"){
        const embed = new Discord.MessageEmbed()
        .setColor('207173')
        .setTitle('Coinflip')
        .setThumbnail('https://i.ibb.co/Y7pXQwf/circle-cropped-1.png')
        .setDescription('You got tails UwU')
        message.channel.startTyping()
        message.channel.stopTyping(true)
        await 5; message.channel.send(embed)
    }else{
        const embed = new Discord.MessageEmbed()
        .setColor('207173')
        .setTitle('Coinflip')
        .setThumbnail('https://i.ibb.co/F3j4ftB/circle-cropped.png')
        .setDescription('You got heads UwU')
        message.channel.startTyping()
        message.channel.stopTyping(true)
        await 5; message.channel.send(embed)
    }
    }
}



