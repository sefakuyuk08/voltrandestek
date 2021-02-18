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
   message.channel.send(uyarı)
    return
}

  if(!args[0]){
    let argüman = new Discord.MessageEmbed()
    .setTitle("Argüman")
    .setDescription(`${prefix}sunucu-koruma aç Veya | ${prefix}sunucu-koruma kapa`)
    message.channel.send(argüman)
    return
  }
  
  if(args[0] === 'aç'){
    let args = new Discord.MessageEmbed()
    .setTitle("VoltranBilişim Hizmetleri Sunucu Koruma")
    .setColor("GREEN")
    .setDescription(`Sunucu Koruma Başarıyla Açıldı! **Artık Sunucu Silinmeye Çalışıldığında İşlem Engellenecektir!**`)
    message.channel.send(args)
    
    db.set(`SK_${message.guild.id}`, 'acik')
  }
  
  if(args[0] === 'kapa'){
    let args2 = new Discord.MessageEmbed()
    .setTitle("VoltranBilişim Hizmetleri Sunucu Koruma")
    .setColor("GREEN")
    .setDescription(`Sunucu Koruma Başarıyla Kapatıldı!`)
    message.channel.send(args2)
    
    db.delete(`SK_${message.guild.id}`)
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'sunucu-koruma'
};

//Coder By ! LazEfe[+16]