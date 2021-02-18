const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = function(client, message) {
  const msg = new Discord.MessageEmbed()
  .setTitle("VoltranBilişim Hizmetleri Kayıt Yardım Paneli")
  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png")
  .setColor("ff0a0a")
  .setImage("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
  .setDescription(`${prefix}kayıt-sistem => Kayıt Sistemini Açarsınız. (Açmazsanız, Diğer Herşeyi Ayarlamazsanız Bile Sistem Çalışmaz.) \n 
${prefix}kayıt-alınacak-rol => Kayıtta Alınacak Rolü Ayarlar.\n
${prefix}kayıt-kanal => Kayıt Kanalını Ayarlar. \n
${prefix}kayıt-verilecek-rol => Kayıtta Verilecek Rolü Ayarlar. \n
${prefix}kayıt-yardım => Bu Paneli Açar. \n
${prefix}kayıtsız-rol => Kayıtsız Rolü Ayarlar. \n
${prefix}kayıt-database-incele => Kayıt Veritabanını İnceler. **(Sadece Firma Sahipleri ve Bot Developer Kullanabilir.)** \n
${prefix}kayıt-nasıl-olurum => Kayıt Nasıl Olacağınızı ve Kayıt Sistemi Hakkında Bilgi Verir.`)
message.channel.send(msg)
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-yardım'
}