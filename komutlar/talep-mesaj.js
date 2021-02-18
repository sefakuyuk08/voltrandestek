const Discord = require('discord.js');
const db = require('quick.db');

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
  let author = message.author;
  const mesaj = args.slice(1).join(" ");
  
  if(args[0] === 'ayarla'){
  
  if(!args[0]) {return message.channel.send(`Kullanım: t+talep-mesaj ayarla <isim> **<> Bu İşaretleri Önemsemeyin!**`)}
  
  if(!author) {return}
  
  if(!mesaj) {return message.reply(`İşlemi Tamamlayabilmem İçin Bir Mesaj Yazmanız Gerekmekte.`)}
  
  db.set(`talepmesaj_${message.guild.id}`, mesaj);
    
  const msg = new Discord.MessageEmbed()
  .setTitle("VoltranBilişim Hizmetleri Talep Mesaj Ayarlama")
  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
  .setColor("GREEN")
  .setDescription(`İşlem Başarılı! \n \n **Belirlenen Komut =>** ${mesaj}`)
  message.channel.send(msg)
 }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
  
exports.help = {
  name: 'talep-mesaj'
}