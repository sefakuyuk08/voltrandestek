const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    if(!message.author.id === "665640355911303188" || !message.author.id === "765164670688296971" || !message.author.id === "751766454726164490"){
        return message.reply("Database'ye sadece **Firma Sahipleri ve Bot Yapımcısı** bakabilir.")
    } else if(message.author.id === "665640355911303188" || message.author.id === "765164670688296971" || message.author.id === "751766454726164490"){
        const sistem = await db.fetch(`kayıtsistem_${message.guild.id}`);
        const id = db.get("veri").map(user => user.id);

        if(sistem === "acik"){
            if(!id){return message.reply("Kayıt sistemi açık olmadığı için ve database olmadığından databaseye erişemiyorum...")}
            message.channel.send(`Database inceleniyor...`).then(msg => {
                setTimeout(() => {
                    msg.edit(new Discord.MessageEmbed()
                    .setTitle("VoltranBilişim Hizmetleri Kayıt Database")
                    .setColor("0aff0a")
                    .setImage("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                    .addField(`Kayıt Olan Üye ID'leri`, `**${id}**`)
                    .setDescription(`**Kayıt Olan Üye Sayısı =>** ${id.length}`))
                }, 5000);
            })
        }
        if(!sistem){return message.reply("Kayıt sistemi açık olmadığı için ve database olmadığından databaseye erişemiyorum...")}

    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  }
  
  exports.help = {
    name: 'kayıt-database-incele'
  }