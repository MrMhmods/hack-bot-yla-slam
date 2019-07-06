const Discord = require('discord.js'),
    bot = new Discord.Client({disableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("585389959113080832");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome To Max. :leaves: ** ..
`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);
