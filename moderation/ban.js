module.exports = {
    name:'ban',
    run:async(client,message,args)=>{
        if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("You don't have permission to use that command.");

        let person = message.guild.member(message.mentions.users.first());

        if (!person)return message.channel.send('Pls specify who u want to ban');
        if (!person.kickable)return message.channel.send('I cannot ban this person as he/she is an admin');
        if (person.id === message.author.id)return message.channel.send('You cannot ban yourself. Why would u ban yourself? lol.');
        let reason = 'No reason specified';
        if (args[2])reason = args.splice(3).join("");
        if(person.user.bot){
            person.send(`You have been kicked from this server for ${reason}.`);
        }
        person.ban({
            reason:reason
        });

    }
}