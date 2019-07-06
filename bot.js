const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'max');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`**Welcome To Max. :leaves: ** .. ${member}`);
});




client.login(process.env.BOT_TOKEN);
