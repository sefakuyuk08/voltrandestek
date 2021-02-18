const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if(!message.member.roles.cache.has("810062510891728906")){return message.reply("Talebi Sadece Yetkililer Kapatabilir :)")}
    if(!args[0]){return message.reply("a+talep-kilitle @talep sahibi")}
    var talepkanal = message.channel;
    const üye = message.mentions.users.first();

    if(!talepkanal){return};
    if(!üye){return message.reply("Talep sahibini etiketlemedin.")}

    message.channel.send(new Discord.MessageEmbed()
    .setTitle("VoltranBilişim Hizmetleri Destek Kilitleme")
    .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
    .setColor("RED")
    .setDescription(`**Kanalı kilitlemek istediğine eminmisin?**\n\
    **Bulunduğun Kanal =>** ${talepkanal}\n\n
    **✅ => Onaylıyorum**\n
    **❌ => Onaylamıyorum**`)).then(msg => {
        msg.react("✅");
        msg.react("❌");

        let m1 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
        let m1e = msg.createReactionCollector(m1, {time:0});
    
        let m2 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
        let m2e = msg.createReactionCollector(m2, {time:0});

        m1e.on("collect", async reaction => {
            const everyone = reaction.message.guild.roles.cache.find(e => e.name === '@everyone');
            const yetkili = reaction.message.guild.roles.cache.get("810062510891728906");//763347535636725770
            const user = client.user;
            reaction.users.remove(user.id);
            reaction.message.channel.overwritePermissions([
                {
                    id: everyone,
                    deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                  },
                  {
                    id: üye,
                    allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"],
                    deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE", "SEND_MESSAGES"],
                  },
                  {
                    id: yetkili,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                  },
            ], "Lock")
            message.channel.send("Talep Başarıyla Kilitlendi.")
        })


        m2e.on("collect", async reaction => {
            reaction.users.remove(user.id);
            message.channel.send("İşlem İptal Edildi.")
        })
    })
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "talep-kilitle"
};

//Coder By EfeBey