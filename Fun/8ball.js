const { MessageEmbed } = require('discord.js')
module.exports = {
    name : '8ball',
    category : 'fun',
    description : '8ball command!',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

 
    run : async(client, message, args) => {
        function doMagic8Ball() {
            var rand = ['Yes', 'No', 'Source says yes.', 'What do you think? NO', 'Maybe', 'Never', 'Yep', 'most likely', 'Of course no', 'NOOOO', 'Error..Yes'];
          
            return rand[Math.floor(Math.random()*rand.length)];
          }
     
      
            message.channel.send(doMagic8Ball());
          

    }
}
