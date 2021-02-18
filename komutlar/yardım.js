const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = function(client, message) {
  const msg = new Discord.MessageEmbed()
  .setTitle("VoltranBilişim Hizmetleri Ticket Bot Yardım Paneli")
  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
  .setDescription(`${prefix}destek-yardım => Destek Talebi İçin Gerekli Komutları Gösterir. \n ${prefix}koruma-yardım => Koruma Komutlarını Gösterir.`)
message.channel.send(msg)
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
}