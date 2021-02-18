const Discord = require("discord.js")
const ayarlar = require('../ayarlar.json')
const sahip = ayarlar.sahip
exports.run = async(client, message,args) => {
  if(message.author.id !== "765164670688296971" || message.author.id !== "665640355911303188" || message.author.id !== "751766454726164490") return message.channel.send("Bu Komutu Sadece Yapımcılarım Kullanabilir.") 
 
  console.log("Bot Yeniden Başlatıldı")
message.channel.send("Bot Yeniden Başlatılıyor...").then(a=>process.exit(0)) 
}
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
 name: 'reboot'
};