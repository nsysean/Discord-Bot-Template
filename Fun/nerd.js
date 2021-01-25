const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'nerd',
    category : 'fun',
    description : 'nerd command!',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

 
    run : async(client, message, args) => {
        function doMagic8ball() {
            var rand = ['a', 'not a'];
          
            return rand[Math.floor(Math.random()*rand.length)];
          }
     
      
            message.channel.send(`You are ${doMagic8ball()} nerd.`);
          

    }
}


