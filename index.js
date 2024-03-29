const Discord = require('discord.js')
const bot = new Discord.Client()

const fs = require('fs')

const config = require('./config.json')
const { createDiffieHellman } = require('crypto')

const token = config.token
const prefix = config.prefix

bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()  


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() == "js")
  if(jsfile.length <= 0) return console.log("[LOGS] Couldn't Find Command!")

  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`)
    bot.commands.set(pull.config.name, pull)

    pull.config.aliases.forEach(alias =>{
      bot.aliases.set(alias, pull.config.name)
    })

  })

})


bot.on('ready', () => 
  console.info(`Logged in as ${bot.user.tag}!`))

bot.on('guildMemberAdd', member => {
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "spam")
  welcomeChannel.send(`Welcome! ${member}`)
  member.roles.add('736168904967192627')
  
})



bot.on('message', async message => {
  let messageArray = message.content.split(' ')
  let cmd = messageArray[0]
  let args = message.content.substring(message.content.indexOf(' ') +1)

  if(!message.content.startsWith(prefix)) return

  let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
  if(commandfile) commandfile.run(bot,message,args)

})

bot.login(token)