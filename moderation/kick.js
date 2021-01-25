module.exports = {
    name:'kick',
    run:async(client,message,args)=>{
        if(!message.member.hasPermission('KICK_MEMBERS')) 
        message.channel.send("You don't have permission to use that command.");

        let person = message.guild.member(message.mentions.users.first());

        if (!person)return message.channel.send('Pls specify who u want to kick');
        if (!person.kickable)return message.channel.send('I cant kick this person because i dont have perms to.');
        if (person.id === message.author.id)return message.channel.send('You cannot kick yourself. Why would u kick yourself? lol.');
        let reason = 'No reason specified';
        if (args[2])reason = args.splice(3).join("");
        if(person.user.bot){
            person.send(`You have been kicked from this server for ${reason}.`);
        }
        person.kick({
            reason:reason
        });

    }
}