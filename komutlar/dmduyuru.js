const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD")){return message.reply("Maalesef iznin yok.")}
  const dmyazı = args.slice(0).join(' ');
  
  if(!args[0]){return message.channel.send("Kullanım t+dmduyuru yazı")}
  
  if(!dmyazı){return message.reply("Mesajı Gönderebilmem İçin Bir Yazı Yazınız.")}

  message.delete();
  
  const msg = new Discord.MessageEmbed()
  .setTitle("📢Bir Duyuru Var📢")
  .setDescription(`${dmyazı}`)
  .setFooter(`Gönderen Kişi: ${message.author.tag}`);
  
  message.guild.members.cache.forEach(m => {
    m.send(msg)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'dmduyuru'
}