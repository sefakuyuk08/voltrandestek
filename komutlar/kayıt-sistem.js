const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    if(!message.author.id === "665640355911303188" || !message.author.id === "778618547361677352" || !message.author.id === "756791321586434070"){
        return message.reply("Komutu kullanmana izin veremem.")
    } else if(message.author.id === "665640355911303188" || message.author.id === "778618547361677352" || message.author.id === "756791321586434070"){
        if(!args[0]){return message.channel.send("t+kayıt-sistem aç | t+kayıt-sistem kapat")}
        const sistem = await db.fetch(`kayıtsistem_${message.guild.id}`);

        if(args[0] === "aç"){
            if(sistem){
                return message.reply("Sistem zaten açık!?")
            } else if(!sistem){
                db.set(`kayıtsistem_${message.guild.id}`, "acik");
                db.set("veri", []);

                message.channel.send(new Discord.MessageEmbed()
                .setTitle("Halk Bilişim Hizmetleri Kayıt Sistemi")
                .setColor("0aff0a")
                .setDescription(`${message.author}, Kayıt Sistem Başarıyla Açıldı Ve Kayıt İçin Gerekli Database Oluşturuldu.`))
            }
        }

        if(args[0] === "kapat"){
           if(!sistem){
             return message.reply("Sistem zaten kapalı!?")
            } else if(sistem){
                db.delete(`kayıtsistem_${message.guild.id}`);
                db.delete(`isim_${message.guild.id}`);
                db.delete(`yas_${message.guild.id}`);
                db.delete("veri");

                message.channel.send(new Discord.MessageEmbed()
                .setTitle("Halk Bilişim Hizmetleri Kayıt Sistemi")
                .setColor("0aff0a")
                .setDescription(`${message.author}, Kayıt Sistem Başarıyla Kapatıldı Ve Kayıt İçin Gerekli Bütün Veriler Silindi.`))
            }
        }
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "kayıt-sistem"
}