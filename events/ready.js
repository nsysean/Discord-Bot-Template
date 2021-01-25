const Discord = require ("discord.js")
const client = require('../index')
const config = require('../config.json')
const prefix = ("x")
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"

client.on('ready', () => {
    const status = [
        {
            name:  `${client.guilds.cache.size} servers`,
            type: "WATCHING"
        },
        {
            name: `to ${prefix}help`,
            type: "LISTENING"
        },
        {
          name: `${client.users.cache.size} users`,
          type: "WATCHING"
        }
    ]
    let i = 0
    setInterval(function(){
        const toDisplay = status[parseInt(i, 10)]
        client.user.setActivity(toDisplay, {type: status[parseInt(i, 10)].type});
        if(status[parseInt(i+1, 10)]) i++;
        else i = 0;
    }, 5000); // update every 5 seconds
    console.log(`${client.user.username} ✅`)
})
