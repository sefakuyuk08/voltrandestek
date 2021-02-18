const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")){return message.reply("İznin yok.")}

    if(!args[0]){return message.channel.send("a+kayıt-alınacak-rol @rol | a+kayıt-alınacak-rol sıfırla")}

    const rol = message.mentions.roles.first();
    const sistem = await db.fetch(`kayıtsistem_${message.guild.id}`);

    if(sistem === "acik"){

    if(!rol){
        return message.channel.send("Kayıtta alınacak rolü belirtmedin.")
    }

    db.set(`kayıtalınacakrol_${message.guild.id}`, rol);

    message.channel.send(`Kayıtta alınacak rol, ${rol} rolüne ayarlandı.`)

    if(args[0] === "sıfırla"){
        db.delete(`kayıtalınacakrol_${message.guild.id}`)

        message.channel.send(`Kayıtta alınacak rol sıfırlandı.`)
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
    name: "kayıt-alınacak-rol"
}