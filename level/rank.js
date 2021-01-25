const { MessageAttachment } = require('discord.js')
const Levels = require('discord-xp')
const canvacord = require('canvacord')
const db = require("quick.db")

module.exports = {
    name: 'rank',
    description: 'Shows the current level and rank of the user!',

    run: async(client, message, args) => {
        if(!message.guild) return;
        if(message.author.bot) return;
        
        const target = message.mentions.users.first() || message.author

 
        const user = await Levels.fetch(target.id, message.guild.id,true); 
 
        if (!user) return message.channel.send("Seems like this user has not earned any xp so far."); 
        const neededXp = Levels.xpFor(parseInt(user.level) + 1)
        
        const Rank = new canvacord.Rank()
        .setAvatar(target.displayAvatarURL({ dynamic: true, format: "jpg" }))
				.setBackground('IMAGE', db.get(`${target.id}bg`) || "https://i.ibb.co/zGfCcgw/50d66570e5b92307d80313e0a07f5701-1.png")
        .setCurrentXP(user.xp)
        .setRank(parseInt(user.position))
        .setLevel(user.level)
        .setRequiredXP(neededXp)
        .setStatus(target.presence.status)
        .setProgressBar("#FFB6C1", "COLOR")
        .setUsername(target.username)
        .setDiscriminator(target.discriminator)
        

        Rank.build()
            .then(data => {
               const attachment = new MessageAttachment(data, "RankCard.png");
               message.reply(attachment);

});
     
}
}