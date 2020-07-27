const Discord = require("discord.js")
const botconfig = require('../config.json')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['admin'])) return
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])

        let mutedRole = message.guild.roles.cache.get('735835472206757989')
        let verifiedRole = message.guild.roles.cache.get('735835134586257488')
        if(mutedRole) {
            member.roles.remove(mutedRole)
            member.roles.add(verifiedRole)
            message.channel.send("User was Successfully Unmuted.")
        }
}

module.exports.config = {
    name: "unmute",
    description: "Unmute somebody",
    usage: "!unmute",
    accessableby: "Members",
    aliases: []
}