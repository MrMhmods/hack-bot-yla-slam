const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! , ${client.user.id} , ${client.guilds.size} `);
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("585389959113080832");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome To Max. :leaves: ** ..
`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);
