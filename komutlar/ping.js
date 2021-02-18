const Discord = require('discord.js');

exports.run = function(client, message) {
  const msg = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`Şuanda Pingim -> **${client.ws.ping}** ms`)
  .setTimestamp()
  return message.channel.send(msg);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping'
};

//Coder By ! LazEfe[+16]
  