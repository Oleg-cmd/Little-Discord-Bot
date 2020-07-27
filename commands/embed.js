const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`Here you can easily get yourself the role you want`)
        .setAuthor(`Olevegic's system`)
        .setColor('#4B50E1')

    message.channel.send(embed);
}

module.exports.config = {
    name: "embed",
    description: "example of an Embed.",
    usage: "!embed",
    accessableby: "Members",
    aliases: []
}