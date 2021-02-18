const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")){return message.reply("İznin yok.")}

    if(!args[0]){return message.channel.send("a+kayıtsız-rol @rol | a+kayıtsız-rol sıfırla")}

    const rol = message.mentions.roles.first();
    const sistem = await db.fetch(`kayıtsistem_${message.guild.id}`);

    if(sistem === "acik"){

    if(!rol){
        return message.channel.send("Kayıtsız rolünü belirtmedin.")
    }

    db.set(`kayıtsızrol_${message.guild.id}`, rol);

    message.channel.send(`Kayıtsız rol, ${rol} rolüne ayarlandı.`)

    if(args[0] === "sıfırla"){
        db.delete(`kayıtsızrol_${message.guild.id}`)

        message.channel.send(`Kayıtsız rolü sıfırlandı.`)
    }
}

if(!sistem){return message.reply("Kayıt sistemi açılmadığından işlem başarısız...")}
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "kayıtsız-rol"
}