const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
let talep = await db.fetch(`talepno_${"810037859515105281"}`);


if(!talep){ return message.reply(`Ticket Sistemi kurulmamış!`)}
 
const msg = new Discord.MessageEmbed()
.setTitle("Ticket Bilgiler")
.setColor("ORANGE")
.setDescription(`**VoltranBilişim Hizmetleri** Sunucusunda Tam ${talep} Adet Ticket Açılmış.`)
message.channel.send(msg)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
  
exports.help = {
  name: 'total'
}