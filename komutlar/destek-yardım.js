const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = function(client, message) {
  const msg = new Discord.MessageEmbed()
  .setTitle("VoltranBilişim Hizmetleri Ticket Bot Yardım Paneli")
  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
  .setDescription(`${prefix}destek-kanal => Destek Kanalını Ayarlar. \n 
${prefix}destek-kapat => Yetkililer Destek Kanalını Kapatır. **(Eğer Komutu Yazarken Kanal-Koruma Açıksa Kanal-Korumayı Kapatıp Yazın.)** \n
${prefix}gönder => Destek Kanalına Ayarlanan Mesajı Gönderir. \n
${prefix}iptal => Üyeler Destek Talebini İptal Eder. **(Eğer Komutu Yazarken Kanal-Koruma Açıksa Kanal-Korumayı Kapatıp Yazın.)** \n
${prefix}talep-komut belirle => Destek Talebi Açılabilmesi İçin Yazılacak Komutu Ayarlar. \n
${prefix}talep-mesaj ayarla => Destek Mesajını Ayarlar. \n
${prefix}total => Sunucuda Kaç Adet Ticket Açıldığını Söyler.`)
message.channel.send(msg)
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'destek-yardım'
}