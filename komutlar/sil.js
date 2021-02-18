const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) { return message.reply(`Komutu Kullanmak İçin Yeterli İznin Yok!`)}
  
  var ticketmsg = args.slice(0).join(' ');
  
  if(!args[0]){
    return message.channel.send(`Kullanım: t+sil miktar`)
  }
  
  if(!ticketmsg){
    return message.channel.send(`Temizlemek İstediğin Mesaj Miktarını Yazın!`)
  }
  
  if(isNaN(ticketmsg)){
    return message.channel.send(`Temizlemek İstediğin Mesaj Miktarını Yazın!`)
  }
  
  if(ticketmsg < 1){ return message.reply(`1 Den Daha Az Mesajı ve 14 Gün Önceki Mesajları Silemem!`)}
  if(ticketmsg > 200) { return message.reply(`200 Den Daha Fazla Mesajı ve 14 Gün Önceki Mesajları Silemem!`)}
  
  let del = await message.channel.messages.fetch({ limit: args[0] })
  message.channel.bulkDelete(del);
  
  message.channel.send(`**${args[0]}** Adet Mesajı Başarıyla Sildim!`)
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
  
exports.help = {
  name: 'sil'
}