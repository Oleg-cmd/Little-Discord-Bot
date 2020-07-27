const usedCommand = new Set()

module.exports.run = async (bot, message, args) =>{
    if(usedCommand.has(message.author.id)){
        message.reply('You can not use the command because of cooldown')
    }else{

        message.reply('You are not in a cooldown anymore')

        usedCommand.add(message.author.id)
        setTimeout(() => {
            usedCommand.delete(message.author.id)
        }, 1000)
    }
}

module.exports.config = {
    name:"cooldown",
    description:"Small cooldown for a commands",
    usage:"!cooldown",
    rules:"Members",
    aliases:[]
}