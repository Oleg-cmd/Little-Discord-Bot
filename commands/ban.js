const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['admin']))
    message.reply('You dont have permissions to use that command')

    else{
        let bannedMember = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
        if(bannedMember){
            try{
                console.log(bannedMember.tag + "was Banned")
                message.channel.send(`${bannedMember} Have been Banned from the Server!`)
            }
                catch(err){console.log(err)}
        }
    }     

}
module.exports.config = {
    name:"ban",
    description:"ban a user",
    usage:"!ban",
    rules:"Admins",
    aliases:[]
}