const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")){
  let uyarı = new Discord.MessageEmbed()
  .setTitle("VoltranBilişim Hizmetleri Destek")
  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
  .setColor("GREEN")
  .setDescription(`Komutu Kullanman İçin Yeterli İznin Yok Yada Komut Devredışı!`)
  .setTimestamp()
   message.channel.send(uyarı)
    return
}

  if(!args[0]){
    let argüman = new Discord.MessageEmbed()
    .setTitle("Argüman")
    .setDescription(`${prefix}kanal-koruma aç Veya | ${prefix}kanal-koruma kapa`)
    message.channel.send(argüman)
    return
  }
  
  if(args[0] === 'aç'){
    let args = new Discord.MessageEmbed()
    .setTitle("VoltranBilişim Hizmetleri Kanal Koruma")
    .setColor("GREEN")
    .setDescription(`Kanal Koruma Başarıyla Açıldı! **Artık Kanallar Silindiğinde Kanal Klonlanacaktır.**`)
    message.channel.send(args)
    
    db.set(`kanalK_${message.guild.id}`, 'acik')
  }
  
  if(args[0] === 'kapa'){
    let args2 = new Discord.MessageEmbed()
    .setTitle("VoltranBilişim Hizmetleri Kanal Koruma")
    .setColor("GREEN")
    .setDescription(`Kanal Koruma Başarıyla Kapatıldı! **Artık Kanallar Silinebliecektir!**`)
    message.channel.send(args2)
    
    db.delete(`kanalK_${message.guild.id}`)
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kanal-koruma'
};

//Coder By ! LazEfe[+16]