const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_CHANNELS")){
  let uyarı = new Discord.MessageEmbed()
  .setTitle("VoltranBilişim Hizmetleri Destek")
  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
  .setColor("GREEN")
  .setDescription(`Komutu Kullanman İçin Yeterli İznin Yok Yada Komut Devredışı!`)
  .setTimestamp()
   message.channel.send(uyarı)
    return
}
  const mesaj = await db.fetch(`talepmesaj_${message.guild.id}`);
  const komut = await db.fetch(`komut_${message.guild.id}`);
  const dkanal = await db.fetch(`destekkanal_${message.guild.id}`);
  
  if(!mesaj){return message.reply(`Talep gönderilemedi! Çünkü ya mesaj ya komut yada destek kanalı ayarlanmamış!`)}
  if(!komut){return message.reply(`Talep gönderilemedi! Çünkü ya mesaj ya komut yada destek kanalı ayarlanmamış!`)}
  if(!dkanal){return message.reply(`Talep gönderilemedi! Çünkü ya mesaj ya komut yada destek kanalı ayarlanmamış!`)}
  
  message.delete();
  
  const msg = new Discord.MessageEmbed()
  .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
  .setThumbnail("https://cdn.discordapp.com/attachments/810069130131931166/810577076326760478/AtlasBilisim.gif") 
  .setColor("ORANGE")
  .setDescription(`${mesaj} \n \n **${komut}** yazarak talep açtıktan sonra ALAN SEÇİMİ yapmalısınız yoksa talep açamazsınız.`)
  .setFooter(`VoltranBilişim Hizmetleri İyi Günler Diler.`)
  client.channels.cache.get(dkanal.id).send(msg)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'gönder'
}