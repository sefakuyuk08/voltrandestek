const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD")){
  let uyarı = new Discord.MessageEmbed()
  .setTitle("VoltranBilişim Hizmetleri Destek")
  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
  .setColor("GREEN")
  .setDescription(`Komutu Kullanman İçin Yeterli İznin Yok Yada Komut Devredışı!`)
  .setTimestamp()
}
  
  db.delete(`destekkanal_${message.guild.id}`)
  
  const msg = new Discord.MessageEmbed()
  .setTitle("Destek Kanal Ayarlama")
  .setColor("GREEN")
  .setDescription(`Destek Kanalı Başarıyla Sıfırlandı!`)
  message.channel.send(msg)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'destek-kanal-sıfırla'
}