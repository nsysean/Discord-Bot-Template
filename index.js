const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
module.exports = client;
const config = require('./config.json')
const prefix = ("x")
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 

client.login(token)