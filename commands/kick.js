const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['admin']))
    message.reply('You dont have permissions to use that command')

    else{
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
        if(member){
            try{
                await member.kick()
                console.log(`${member} was kicked`)
                message.channel.send(`${member} was kicked`)

            }   catch(err){
                    console.log(err)
            }

        }
    }

}

module.exports.config = {
    name:"kick",
    description:"kick a user",
    usage:"!kick",
    rules:"Admins",
    aliases:[]
}