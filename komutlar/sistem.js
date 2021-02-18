const Discord = require('discord.js');
const db = require('quick.db');

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
   const mesaj = await db.fetch(`talepmesaj_${message.guild.id}`);
  const komut = await db.fetch(`komut_${message.guild.id}`);
  const dkanal = await db.fetch(`destekkanal_${message.guild.id}`);
  const kanalkoruma = await db.fetch(`kanalK_${message.guild.id}`);
  const rolkoruma = await db.fetch(`rolK_${message.guild.id}`);
  const sunucukoruma = await db.fetch(`SK_${message.guild.id}`);
  const talepno = await db.fetch(`talepno_${message.guild.id}`);
  
  if(args[0] === 'sıfırla'){
  
  db.delete(`talepmesaj_${message.guild.id}`);
  db.delete(`komut_${message.guild.id}`);
  db.delete(`destekkanal_${message.guild.id}`);
  db.delete(`kanalK_${message.guild.id}`);
  db.delete(`rolK_${message.guild.id}`);
  db.delete(`SK_${message.guild.id}`);
  db.delete(`talepno_${message.guild.id}`);
  
  const msg = new Discord.MessageEmbed()
  .setTitle("VoltranBilişim Hizmetleri Sistem Sıfırlama")
  .setColor("GREEN")
  .setDescription(`Sistem Verileri Başarıyla Sıfırlandı!`)
  message.channel.send(msg)
 }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'sistem'
};