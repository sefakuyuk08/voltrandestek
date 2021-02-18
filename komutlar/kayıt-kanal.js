const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")){return message.reply("İznin yok.")}

    if(!args[0]){return message.channel.send("a+kayıt-kanal #kanal | a+kayıt-kanal sıfırla")}

    const kanal = message.mentions.channels.first();
    const sistem = await db.fetch(`kayıtsistem_${message.guild.id}`);

    if(sistem === "acik"){

    if(!kanal){
        return message.channel.send("Kayıt kanalını belirtmedin.")
    }

    db.set(`kayıtkanal_${message.guild.id}`, kanal);

    message.channel.send(`Kayıt kanalı, ${kanal} kanalına ayarlandı.`)

    if(args[0] === "sıfırla"){
        db.delete(`kayıtkanal_${message.guild.id}`)

        message.channel.send(`Kayıt kanalı sıfırlandı.`)
    }
}
if(!sistem){return message.reply("Kayıt sistem açılmadığından işlem başarısız...")}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "kayıt-kanal"
}