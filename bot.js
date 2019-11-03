const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client ({disableEveryone: true});
const fs = require("fs")
bot.commands = new Discord.Collection();

// Requires all dependencies

fs.readdir(".commands/", (err, files) => {
    if (err) console.log(err);

    Let jsfile = files.filters(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("No commands were found...")
        return;
    }

    jsfile.forEach((f, i) => { 
        Let props = require('./commands/${f}')
        console.log('${f} loaded!')
        bot.commands.set(props.help.name, props);
    })
})

bot.on("ready", async () => {
    console.log(' ${bot.user.username} is online!')
    bot.user.setActivity("Mebeckylol!", {type: "WATCHING"});
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    Let prefix = config.prefix;
    Let messageArray = message.content.split(" ")
    Let cmd = messageArray[0];
    Let args = messageArray.slice(1);

    Let commandfile = bot.commands
})

bot.login(config.token);