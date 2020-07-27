const Discord = require('discord.js')
const config = require('../config.json')
  

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['admin']))
    message.reply('You dont have permissions to use that command')
    else{
    const member = message.mentions.members.first()
    let messageArray = message.content.split(' ')
    let epicRole = messageArray[1]
    const Role = member.guild.roles.cache.find(roles => roles.name === `${epicRole}`)
    const Id = Role.id

    member.roles.remove(`${Id}`)
    message.channel.send('Role Removed')
}}

module.exports.config = {
    name: "removerole",
    description: "Remove role from somebody",
    usage: "!removerole",
    accessableby: "Admins",
    aliases: []
}