const Discord = require('discord.js');
 
exports.run = function(client, message) {
    message.delete();

    let msg = new Discord.MessageEmbed()
    .setTitle("📱 Sosyal Medya 📱")
    .addField("Facebook", `>`)
    .addField("Instagram", `>`)
    .addField("Youtube", `>`)
    .setImage("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png")
    .setFooter("VoltranBilişim İnternet Hizmetleri")
    message.channel.send(msg)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }
    
  exports.help = {
    name: 'sosyal-medya'
  }