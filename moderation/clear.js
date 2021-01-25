

module.exports = {
    name : 'clear',
    category : 'mod',
    description : 'clear 100 messages',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
			if(!message.member.hasPermission('MANAGE_MESSAGES')) 
        message.channel.send("You don't have permission to use that command.");
				message.channel.bulkDelete(100)
				message.channel.send("Deleted 100 messages!")
			   
    }
}
