const Discord = require("discord.js")
const botconfig = require('../config.json')

module.exports.run = async (bot, message, args) => {
    let member = message.member
    let mutedUn = message.guild.roles.cache.get('736168904967192627')
    let verifieV = message.guild.roles.cache.get('735835134586257488')
    if(mutedUn) {
        member.roles.remove(mutedUn)
        member.roles.add(verifieV)
    }
}

module.exports.config = {
    name: "verify",
    description: "Verifying",
    usage: "!verify",
    accessableby: "Members",
    aliases: []
}