
module.exports = {
    name : 'iq',
    category : 'fun',
    description : 'Iq <user>/iq',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

 
    run : async(client, message, args) => {
        if (!args.length) { return message.channel.send(`Your iq is ${Math.floor(Math.random() * 200)}.`)}
        const mentioned = message.mentions.users.first();
        message.channel.send(`<@${mentioned.id}>'s iq is ${Math.floor(Math.random() * 200)}.` )

    }
}

