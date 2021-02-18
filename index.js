const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + ' Aktif Edildi');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};


client.on("channelDelete", async (channel, message) => {
  var koruma = await db.fetch(`kanalK_${channel.guild.id}`);
  const sahip = channel.guild.owner
  const uyarıkanal = client.channels.cache.get("747507531600887839")//777924613698486292

  if(koruma == 'acik'){
    
    if(channel.delete);
    channel.clone({name: channel.name}).then(async clone => {
      await clone.setParent(channel.parent);
      await clone.setPosition(channel.position);
      
      let uyarı = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Silinmeye Çalışıldı!`)
      .setColor("RED")
      .setDescription(`Kanalı (Kanalları) Silmeye Çalışan Kişi, Kendini Akıllımı Zannediyorsun! \n \n **SUNUCU SAHİBİ ${sahip} Bey'e DURUMU BİLGİLENDİRİYORUM KAÇIŞIN YOK!**`)
      uyarıkanal.send(uyarı)
      
      let m = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Silinmeye Çalışıldı!`)
      .setDescription(`Kanal Koruması Açık Olduğu İçin Kanal Başarıyla Klonlandı!
      Kişi / ID => ${channel.guild.member.tag} / ${channel.guild.member.id}`)
      sahip.send(m)
    })
    
  }
  if(!koruma) return;
})

client.on("roleDelete", async (role, message) => {
  var rolguard = await db.fetch(`rolK_${role.guild.id}`);
  const sahip = client.members.cache.get("665640355911303188")
  const uyarıkanal = client.channels.cache.get("747507531600887839")//777924613698486292
  
  if(rolguard == 'acik'){
    
    if(role.delete){
    
    role.guild.roles.create({
          name: role.setName,
          color: role.setColor,
          hoist: role.setHoist,
          permissions: role.setPermissions,
          mentionable: role.setMentionable,
          position: role.setPosition
        })
    
     let uyarı = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Silinmeye Çalışıldı!`)
      .setColor("RED")
      .setDescription(`Rolü (Rolleri) Silmeye Çalışan Kişi, Kendini Akıllımı Zannediyorsun! \n \n **SUNUCU SAHİBİ ${sahip} Bey'e DURUMU BİLGİLENDİRİYORUM KAÇIŞIN YOK!**`)
      uyarıkanal.send(uyarı)
      
      let m = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Silinmeye Çalışıldı!`)
      .setDescription(`Rol Koruması Açık Olduğu İçin Rol Başarıyla Klonlandı! \n \n **ANCAK ROLÜN İZİNLERİNİ VE İSMİNİ TEKRARDAN AYARLAMANIZ GEREKMEKTE!** \n \n Rolün İsmi new role`)
      sahip.send(m)
    }
  }
  if(!rolguard){return}
  })

client.on("message", async (message, user) => {
  const mesaj = await db.fetch(`talepmesaj_${message.guild.id}`);
  const komut = await db.fetch(`komut_${message.guild.id}`);
  const dkanal = await db.fetch(`destekkanal_${message.guild.id}`);
  var kanal = message.guild.channels.cache.get(dkanal.id);
  const yetkili = message.guild.roles.cache.get("810062510891728906");
  const stajyer = message.guild.roles.cache.get("810062954262691841");
  let talepno = db.get(`talepno_${message.guild.id}`);
  
const k1 = require('./onaykod/kod1.json');
const k2 = require('./onaykod/kod2.json');
const k3 = require('./onaykod/kod3.json');
const k4 = require('./onaykod/kod4.json');
const k5 = require('./onaykod/kod5.json');
const k6 = require('./onaykod/kod6.json');
const k7 = require('./onaykod/kod7.json');
const k8 = require('./onaykod/kod8.json');
const k9 = require('./onaykod/kod9.json');
const k10 = require('./onaykod/kod10.json');
const k11 = require('./onaykod/kod11.json');
const k12 = require('./onaykod/kod12.json');

const kanall = message.guild.channels.cache.get("810062039955406868");//781807264260292618
  
  if(message.content.toLowerCase() === `${komut}`){
    if(!message.content.toLowerCase() === `${komut}`){return message.reply("Sadece **talep aç** yazmanız yeterlidir.").then(msg => msg.delete({timeout: 2500}))}
    const everyone = message.guild.roles.cache.find(e => e.name === '@everyone');
	  const logg = message.guild.channels.cache.get("795705370915766342");
	  const user = client.user;
	  if(message.channel !== kanal){message.reply("Talebi sadece **Destek Talebi** kanalından açabilirsin.")}
	  
	  if(message.channel === kanal){
      message.delete();
      if(talepno === null){
        message.guild.channels.create(`💼 destek-${message.author.username} 💼`).then(async channel => {
          const user = client.user;
          const everyone = message.guild.roles.cache.find(e => e.name === '@everyone');
        const talepsahip = message.author;
          
          channel.overwritePermissions([
            {
              id: everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
            },
            {
              id: talepsahip,
              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
              deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
            },
            {
              id: user,
              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
            },
          ], 'Coder By => ! LazEfe[+16]#5426 (Efe Yıldız)')
          
        db.set(`talepno_${message.guild.id}`, 1);
    const u1 = k1[Math.floor(Math.random() * k1.length)]
	  const u2 = k2[Math.floor(Math.random() * k2.length)]
	  const u3 = k3[Math.floor(Math.random() * k3.length)]
	  const u4 = k4[Math.floor(Math.random() * k4.length)]
	  const u5 = k5[Math.floor(Math.random() * k5.length)]
	  const u6 = k6[Math.floor(Math.random() * k6.length)]
	  const u7 = k7[Math.floor(Math.random() * k7.length)]
	  const u8 = k8[Math.floor(Math.random() * k8.length)]
	  const u9 = k9[Math.floor(Math.random() * k9.length)]
	  const u10 = k10[Math.floor(Math.random() * k10.length)]
	  const u11 = k11[Math.floor(Math.random() * k11.length)]
	  const u12 = k12[Math.floor(Math.random() * k12.length)]
	  
	  const kod = `${u1}${u2}${u3}${u4}${u5}${u6}${u7}${u8}${u9}${u10}${u11}${u12}`
	  
	  db.set(`taleponay_${message.guild.id}_${talepsahip.id}`, kod)
    
    channel.send(`${message.author}`);
	  channel.send(new Discord.MessageEmbed()
	  .setTitle("Talep İsteği")
    .setColor("GREEN")
    .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
	  .setDescription(`Hoşgeldiniz ${message.author}. Talep açmak istediğinizi öğrendik. \n\n
	  **Talep açabilmeniz için öncelikle hangi alanda talep açacağınızı belirlemeniz gerekli.**\n
	  **Altta verilen emojilerden herhangi birisine basarak seçtiğiniz alanda talebinizi açabilirsiniz.**\n\n
    **✅ => Genel Alanda Talep Açmak İçin**\n
    **🌐 => Satış Öncesi Destek İçin**\n
    **🔴 => MTA Roleplay | Hard & Medium**\n
    **🚗 => MTA Askeri Freeroam**\n
    **💻 => FiveM**\n
    **🔰 => SA:MP**\n\n
    **❌ => Talebimi İptal Et**`)
	  .setFooter(`VoltranBilişim Hizmetleri`)).then(msg => {
      msg.react("✅");
      msg.react("🌐");
      msg.react("🔴");
      msg.react("🚗");
      msg.react("💻");
      msg.react("🔰");
      msg.react("❌");

      let e1 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
      let e1e = msg.createReactionCollector(e1, {time:0});
      
      let e2 = (reaction, user) => reaction.emoji.name === "🌐" && user.id !== client.user.id;
      let e2e = msg.createReactionCollector(e2, {time:0});

      let e3 = (reaction, user) => reaction.emoji.name === "🔴" && user.id !== client.user.id;
      let e3e = msg.createReactionCollector(e3, {time:0});

      let e4 = (reaction, user) => reaction.emoji.name === "🚗" && user.id !== client.user.id;
      let e4e = msg.createReactionCollector(e4, {time:0});

      let e5 = (reaction, user) => reaction.emoji.name === "💻" && user.id !== client.user.id;
      let e5e = msg.createReactionCollector(e5, {time:0});

      let e6 = (reaction, user) => reaction.emoji.name === "🔰" && user.id !== client.user.id;
      let e6e = msg.createReactionCollector(e6, {time:0});

      let e7 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
      let e7e = msg.createReactionCollector(e7, {time:0});

      e1e.on("collect", async reaction => {
        reaction.users.remove(user.id);
       channel.send(new Discord.MessageEmbed()
        .setTitle("VoltranBilişim Hizmetleri Talep Onaylama")
        .setColor("RED")
        .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
        .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
        **Talebi Doğrulamak İçin => ✅**\n
        **İptal Etmek İçin => ❌**`)).then(onay => {
          onay.react("✅");
          onay.react("❌");

          let o1 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
          let o1e = onay.createReactionCollector(o1, {time:0});

          let o2 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
          let o2e = onay.createReactionCollector(o2, {time:0});

          o1e.on("collect", async reaction => {
            reaction.users.remove(user.id);
            channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
              setTimeout(() => {
                m.edit(new Discord.MessageEmbed()
                .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
                .setColor("YELLOW")
                .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
                **📝 Seçilen Alan 📝** => Genel Destek\n
                **📩 Talep Sahibi 📩 =>** ${message.author}\n
                **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
                **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
                .setFooter("VoltranBilişim Hizmetleri")
                .setTimestamp())
                channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)

                channel.overwritePermissions([
                  {
                    id: everyone,
                    deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                  },
                  {
                    id: talepsahip,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                    deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                  },
                  {
                    id: user,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                  },
                  {
                    id: yetkili,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                  },
                  {
                    id: stajyer,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                  },
                ], "Halk Bilişim")
              }, 5000);
            })
                })

                o2e.on("collect", async reaction => {
                  reaction.users.remove(user.id);
                  channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
                    setTimeout(() => {
                    channel.delete();
                    }, 5000);
                  })
                })
              })
            })

                e2e.on("collect", async reaction => {
                  reaction.users.remove(user.id);
                  channel.send(new Discord.MessageEmbed()
                  .setTitle("Halk Bilişim Talep Onaylama")
                  .setColor("RED")
                  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                  .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
                  **Talebi Doğrulamak İçin => ✅**\n
                  **İptal Etmek İçin => ❌**`)).then(onay2 => {
                    onay2.react("✅");
                    onay2.react("❌")

                    let o3 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
                    let o3e = onay2.createReactionCollector(o3, {time:0});
          
                    let o4 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
                    let o4e = onay2.createReactionCollector(o4, {time:0});

                    o3e.on("collect", async reaction => {
                      reaction.users.remove(user.id);
                      channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
                        setTimeout(() => {
                          m.edit(new Discord.MessageEmbed()
                          .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
                          .setColor("YELLOW")
                          .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                          .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
                          **📝 Seçilen Alan 📝** => Satış Öncesi Destek\n
                          **📩 Talep Sahibi 📩 =>** ${message.author}\n
                          **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
                          **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
                          .setFooter("VoltranBilişim Hizmetleri")
                          .setTimestamp())
                          channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)
          
                          channel.overwritePermissions([
                            {
                              id: everyone,
                              deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: talepsahip,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                              deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: user,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: yetkili,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: stajyer,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                          ], "Halk Bilişim")
                        }, 5000);
                      })
                    })

                    o4e.on("collect", async reaction => {
                      reaction.users.remove(user.id);
                      channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
                        setTimeout(() => {
                        channel.delete();
                        }, 5000);
                      })
                    })
                  })
                })

                e3e.on("collect", async reaction => {
                  reaction.users.remove(user.id);
                  channel.send(new Discord.MessageEmbed()
                  .setTitle("VoltranBilişim Hizmetleri Talep Onaylama")
                  .setColor("RED")
                  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                  .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
                  **Talebi Doğrulamak İçin => ✅**\n
                  **İptal Etmek İçin => ❌**`)).then(onay3 => {
                    onay3.react("✅");
                    onay3.react("❌");

                    let o5 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
                    let o5e = onay3.createReactionCollector(o5, {time:0});
          
                    let o6 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
                    let o6e = onay3.createReactionCollector(o6, {time:0});

                    o5e.on("collect", async reaction => {
                      reaction.users.remove(user.id);
                      channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
                        setTimeout(() => {
                          m.edit(new Discord.MessageEmbed()
                          .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
                          .setColor("YELLOW")
                          .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                          .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
                          **📝 Seçilen Alan 📝** => MTA Roleplay | Hard & Medium\n
                          **📩 Talep Sahibi 📩 =>** ${message.author}\n
                          **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
                          **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
                          .setFooter("VoltranBilişim Hizmetleri")
                          .setTimestamp())
                          channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)
          
                          channel.overwritePermissions([
                            {
                              id: everyone,
                              deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: talepsahip,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                              deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: user,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: yetkili,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: stajyer,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                          ], "Halk Bilişim")
                        }, 5000);
                      })
                    })

                    o6e.on("collect", async reaction => {
                      reaction.users.remove(user.id);
                      channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
                        setTimeout(() => {
                        channel.delete();
                        }, 5000);
                      })
                    })
                  })
                })
                
                e4e.on("collect", async reaction => {
                  reaction.users.remove(user.id);
                  channel.send(new Discord.MessageEmbed()
                  .setTitle("VoltranBilişim Hizmetleri Talep Onaylama")
                  .setColor("RED")
                  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                  .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
                  **Talebi Doğrulamak İçin => ✅**\n
                  **İptal Etmek İçin => ❌**`)).then(onay4 => {
                    onay4.react("✅");
                    onay4.react("❌");

                    let o7 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
                    let o7e = onay4.createReactionCollector(o7, {time:0});
          
                    let o8 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
                    let o8e = onay4.createReactionCollector(o8, {time:0});

                    o7e.on("collect", async reaction => {
                      reaction.users.remove(user.id);
                      channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
                        setTimeout(() => {
                          m.edit(new Discord.MessageEmbed()
                          .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
                          .setColor("YELLOW")
                          .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                          .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
                          **📝 Seçilen Alan 📝** => MTA Askeri Freeroam\n
                          **📩 Talep Sahibi 📩 =>** ${message.author}\n
                          **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
                          **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
                          .setFooter("VoltranBilişim Hizmetleri")
                          .setTimestamp())
                          channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)
          
                          channel.overwritePermissions([
                            {
                              id: everyone,
                              deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: talepsahip,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                              deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: user,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: yetkili,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: stajyer,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                          ], "Halk Bilişim")
                        }, 5000);
                      })
                    })

                    o8e.on("collect", async reaction => {
                      reaction.users.remove(user.id);
                      channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
                        setTimeout(() => {
                        channel.delete();
                        }, 5000);
                      })
                    })

                  })
                })

                e5e.on("collect", async reaction => {
                  reaction.users.remove(user.id);
                  channel.send(new Discord.MessageEmbed()
                  .setTitle("VoltranBilişim Hizmetleri Talep Onaylama")
                  .setColor("RED")
                  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                  .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
                  **Talebi Doğrulamak İçin => ✅**\n
                  **İptal Etmek İçin => ❌**`)).then(onay5 => {
                    onay5.react("✅");
                    onay5.react("❌");

                    let o9 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
                    let o9e = onay5.createReactionCollector(o9, {time:0});
          
                    let o10 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
                    let o10e = onay5.createReactionCollector(o10, {time:0});

                    o9e.on("collect", async reaction => {
                      reaction.users.remove(user.id);
                      channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
                        setTimeout(() => {
                          m.edit(new Discord.MessageEmbed()
                          .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
                          .setColor("YELLOW")
                          .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                          .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
                          **📝 Seçilen Alan 📝** => FiveM\n
                          **📩 Talep Sahibi 📩 =>** ${message.author}\n
                          **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
                          **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
                          .setFooter("VoltranBilişim Hizmetleri")
                          .setTimestamp())
                          channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)
          
                          channel.overwritePermissions([
                            {
                              id: everyone,
                              deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: talepsahip,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                              deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: user,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: yetkili,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: stajyer,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                          ], "Halk Bilişim")
                        }, 5000);
                      })
                    })

                    o10e.on("collect", async reaction => {
                      reaction.users.remove(user.id);
                      channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
                        setTimeout(() => {
                        channel.delete();
                        }, 5000);
                      })
                    })
                  })
                })

                e6e.on("collect", async reaction => {
                  reaction.users.remove(user.id);
                  channel.send(new Discord.MessageEmbed()
                  .setTitle("VoltranBilişim Hizmetleri Talep Onaylama")
                  .setColor("RED")
                  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                  .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
                  **Talebi Doğrulamak İçin => ✅**\n
                  **İptal Etmek İçin => ❌**`)).then(onay6 => {
                    onay6.react("✅");
                    onay6.react("❌");

                    let o11 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
                    let o11e = onay6.createReactionCollector(o11, {time:0});
          
                    let o12 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
                    let o12e = onay6.createReactionCollector(o12, {time:0});

                    o11e.on("collect", async reaction => {
                      reaction.users.remove(user.id);
                      channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
                        setTimeout(() => {
                          m.edit(new Discord.MessageEmbed()
                          .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
                          .setColor("YELLOW")
                          .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                          .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
                          **📝 Seçilen Alan 📝** => SA:MP\n
                          **📩 Talep Sahibi 📩 =>** ${message.author}\n
                          **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
                          **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
                          .setFooter("VoltranBilişim Hizmetleri")
                          .setTimestamp())
                          channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)
          
                          channel.overwritePermissions([
                            {
                              id: everyone,
                              deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: talepsahip,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                              deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: user,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: yetkili,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                            {
                              id: stajyer,
                              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                            },
                          ], "Halk Bilişim")
                        }, 5000);
                      })
                    })

                    o12e.on("collect", async reaction => {
                      reaction.users.remove(user.id);
                      channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
                        setTimeout(() => {
                        channel.delete();
                        }, 5000);
                      })
                    })
                  })
                })

                e7e.on("collect", async reaction => {
                  reaction.users.remove(user.id);
                  channel.send(new Discord.MessageEmbed()
                  .setTitle("VoltranBilişim Hizmetleri Talep İptal")
                  .setColor("RED")
                  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                  .setDescription(`**Talebi İptal Etmek İstediğinizi Öğrendik.**\n\n
                  **Talebi İptal Etmek İçin => ✅**`)).then(del => {
                    del.react("✅");

                    let o13 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
                    let o13e = del.createReactionCollector(o13, {time:0});

                    o13e.on("collect", async reaction => {
                      reaction.users.remove(user.id);
                      channel.send("**Talebiniz 5 saniye içerisinde iptal ediliyor...**").then(async ch => {
                        setTimeout(() => {
                        channel.delete();
                        }, 5000);
                      })
                    })
                  })
                })
    })
      })
}
if(talepno !== null){
  message.guild.channels.create(`💼 destek-${message.author.username} 💼`).then(async channel => {
    const user = client.user;
    const everyone = message.guild.roles.cache.find(e => e.name === '@everyone');
  const talepsahip = message.author;
    
    channel.overwritePermissions([
      {
        id: everyone,
        deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
      },
      {
        id: talepsahip,
        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
        deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
      },
      {
        id: user,
        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
      },
    ], 'Coder By => ! LazEfe[+16]#5426 (Efe Yıldız)')
    
    db.add(`talepno_${message.guild.id}`, 1);
const u1 = k1[Math.floor(Math.random() * k1.length)]
const u2 = k2[Math.floor(Math.random() * k2.length)]
const u3 = k3[Math.floor(Math.random() * k3.length)]
const u4 = k4[Math.floor(Math.random() * k4.length)]
const u5 = k5[Math.floor(Math.random() * k5.length)]
const u6 = k6[Math.floor(Math.random() * k6.length)]
const u7 = k7[Math.floor(Math.random() * k7.length)]
const u8 = k8[Math.floor(Math.random() * k8.length)]
const u9 = k9[Math.floor(Math.random() * k9.length)]
const u10 = k10[Math.floor(Math.random() * k10.length)]
const u11 = k11[Math.floor(Math.random() * k11.length)]
const u12 = k12[Math.floor(Math.random() * k12.length)]

const kod = `${u1}${u2}${u3}${u4}${u5}${u6}${u7}${u8}${u9}${u10}${u11}${u12}`

db.set(`taleponay_${message.guild.id}_${talepsahip.id}`, kod)

channel.send(`${message.author}`);
channel.send(new Discord.MessageEmbed()
.setTitle("Talep İsteği")
.setColor("GREEN")
.setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
.setDescription(`Hoşgeldiniz ${message.author}. Talep açmak istediğinizi öğrendik. \n\n
**Talep açabilmeniz için öncelikle hangi alanda talep açacağınızı belirlemeniz gerekli.**\n
**Altta verilen emojilerden herhangi birisine basarak seçtiğiniz alanda talebinizi açabilirsiniz.**\n\n
**✅ => Genel Alanda Talep Açmak İçin**\n
**🌐 => Satış Öncesi Destek İçin**\n
**🔴 => MTA Roleplay | Hard & Medium**\n
**🚗 => MTA Askeri Freeroam**\n
**💻 => FiveM**\n
**🔰 => SA:MP**\n\n
**❌ => Talebimi İptal Et**`)
.setFooter(`VoltranBilişim Hizmetleri`)).then(msg => {
msg.react("✅");
msg.react("🌐");
msg.react("🔴");
msg.react("🚗");
msg.react("💻");
msg.react("🔰");
msg.react("❌");

let e1 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
let e1e = msg.createReactionCollector(e1, {time:0});

let e2 = (reaction, user) => reaction.emoji.name === "🌐" && user.id !== client.user.id;
let e2e = msg.createReactionCollector(e2, {time:0});

let e3 = (reaction, user) => reaction.emoji.name === "🔴" && user.id !== client.user.id;
let e3e = msg.createReactionCollector(e3, {time:0});

let e4 = (reaction, user) => reaction.emoji.name === "🚗" && user.id !== client.user.id;
let e4e = msg.createReactionCollector(e4, {time:0});

let e5 = (reaction, user) => reaction.emoji.name === "💻" && user.id !== client.user.id;
let e5e = msg.createReactionCollector(e5, {time:0});

let e6 = (reaction, user) => reaction.emoji.name === "🔰" && user.id !== client.user.id;
let e6e = msg.createReactionCollector(e6, {time:0});

let e7 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
let e7e = msg.createReactionCollector(e7, {time:0});

e1e.on("collect", async reaction => {
  reaction.users.remove(user.id);
 channel.send(new Discord.MessageEmbed()
  .setTitle("VoltranBilişim Hizmetleri Talep Onaylama")
  .setColor("RED")
  .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
  .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
  **Talebi Doğrulamak İçin => ✅**\n
  **İptal Etmek İçin => ❌**`)).then(onay => {
    onay.react("✅");
    onay.react("❌");

    let o1 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
    let o1e = onay.createReactionCollector(o1, {time:0});

    let o2 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
    let o2e = onay.createReactionCollector(o2, {time:0});

    o1e.on("collect", async reaction => {
      reaction.users.remove(user.id);
      channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
        setTimeout(() => {
          m.edit(new Discord.MessageEmbed()
          .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
          .setColor("YELLOW")
          .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
          .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
          **📝 Seçilen Alan 📝** => Genel Destek\n
          **📩 Talep Sahibi 📩 =>** ${message.author}\n
          **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
          **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
          .setFooter("VoltranBilişim Hizmetleri")
          .setTimestamp())
          channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)

          channel.overwritePermissions([
            {
              id: everyone,
              deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
            },
            {
              id: talepsahip,
              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
              deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
            },
            {
              id: user,
              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
            },
            {
              id: yetkili,
              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
            },
            {
              id: stajyer,
              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
            },
          ], "Halk Bilişim")
        }, 5000);
      })
          })

          o2e.on("collect", async reaction => {
            reaction.users.remove(user.id);
            channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
              setTimeout(() => {
              channel.delete();
              }, 5000);
            })
          })
        })
      })

          e2e.on("collect", async reaction => {
            reaction.users.remove(user.id);
            channel.send(new Discord.MessageEmbed()
            .setTitle("VoltranBilişim Hizmetleri Talep Onaylama")
            .setColor("RED")
            .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
            .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
            **Talebi Doğrulamak İçin => ✅**\n
            **İptal Etmek İçin => ❌**`)).then(onay2 => {
              onay2.react("✅");
              onay2.react("❌")

              let o3 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
              let o3e = onay2.createReactionCollector(o3, {time:0});
    
              let o4 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
              let o4e = onay2.createReactionCollector(o4, {time:0});

              o3e.on("collect", async reaction => {
                reaction.users.remove(user.id);
                channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
                  setTimeout(() => {
                    m.edit(new Discord.MessageEmbed()
                    .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
                    .setColor("YELLOW")
                    .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                    .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
                    **📝 Seçilen Alan 📝** => Satış Öncesi Destek\n
                    **📩 Talep Sahibi 📩 =>** ${message.author}\n
                    **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
                    **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
                    .setFooter("VoltranBilişim Hizmetleri")
                    .setTimestamp())
                    channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)
    
                    channel.overwritePermissions([
                      {
                        id: everyone,
                        deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: talepsahip,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                        deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: user,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: yetkili,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: stajyer,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                    ], "Halk Bilişim")
                  }, 5000);
                })
              })

              o4e.on("collect", async reaction => {
                reaction.users.remove(user.id);
                channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
                  setTimeout(() => {
                  channel.delete();
                  }, 5000);
                })
              })
            })
          })

          e3e.on("collect", async reaction => {
            reaction.users.remove(user.id);
            channel.send(new Discord.MessageEmbed()
            .setTitle("VoltranBilişim Hizmetleri Talep Onaylama")
            .setColor("RED")
            .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
            .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
            **Talebi Doğrulamak İçin => ✅**\n
            **İptal Etmek İçin => ❌**`)).then(onay3 => {
              onay3.react("✅");
              onay3.react("❌");

              let o5 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
              let o5e = onay3.createReactionCollector(o5, {time:0});
    
              let o6 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
              let o6e = onay3.createReactionCollector(o6, {time:0});

              o5e.on("collect", async reaction => {
                reaction.users.remove(user.id);
                channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
                  setTimeout(() => {
                    m.edit(new Discord.MessageEmbed()
                    .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
                    .setColor("YELLOW")
                    .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                    .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
                    **📝 Seçilen Alan 📝** => MTA Roleplay | Hard & Medium\n
                    **📩 Talep Sahibi 📩 =>** ${message.author}\n
                    **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
                    **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
                    .setFooter("VoltranBilişim Hizmetleri")
                    .setTimestamp())
                    channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)
    
                    channel.overwritePermissions([
                      {
                        id: everyone,
                        deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: talepsahip,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                        deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: user,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: yetkili,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: stajyer,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                    ], "Halk Bilişim")
                  }, 5000);
                })
              })

              o6e.on("collect", async reaction => {
                reaction.users.remove(user.id);
                channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
                  setTimeout(() => {
                  channel.delete();
                  }, 5000);
                })
              })
            })
          })
          
          e4e.on("collect", async reaction => {
            reaction.users.remove(user.id);
            channel.send(new Discord.MessageEmbed()
            .setTitle("VoltranBilişim Hizmetleri Talep Onaylama")
            .setColor("RED")
            .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
            .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
            **Talebi Doğrulamak İçin => ✅**\n
            **İptal Etmek İçin => ❌**`)).then(onay4 => {
              onay4.react("✅");
              onay4.react("❌");

              let o7 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
              let o7e = onay4.createReactionCollector(o7, {time:0});
    
              let o8 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
              let o8e = onay4.createReactionCollector(o8, {time:0});

              o7e.on("collect", async reaction => {
                reaction.users.remove(user.id);
                channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
                  setTimeout(() => {
                    m.edit(new Discord.MessageEmbed()
                    .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
                    .setColor("YELLOW")
                    .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                    .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
                    **📝 Seçilen Alan 📝** => MTA Askeri Freeroam\n
                    **📩 Talep Sahibi 📩 =>** ${message.author}\n
                    **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
                    **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
                    .setFooter("VoltranBilişim Hizmetleri")
                    .setTimestamp())
                    channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)
    
                    channel.overwritePermissions([
                      {
                        id: everyone,
                        deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: talepsahip,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                        deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: user,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: yetkili,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: stajyer,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                    ], "Halk Bilişim")
                  }, 5000);
                })
              })

              o8e.on("collect", async reaction => {
                reaction.users.remove(user.id);
                channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
                  setTimeout(() => {
                  channel.delete();
                  }, 5000);
                })
              })

            })
          })

          e5e.on("collect", async reaction => {
            reaction.users.remove(user.id);
            channel.send(new Discord.MessageEmbed()
            .setTitle("VoltranBilişim Hizmetleri Talep Onaylama")
            .setColor("RED")
            .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
            .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
            **Talebi Doğrulamak İçin => ✅**\n
            **İptal Etmek İçin => ❌**`)).then(onay5 => {
              onay5.react("✅");
              onay5.react("❌");

              let o9 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
              let o9e = onay5.createReactionCollector(o9, {time:0});
    
              let o10 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
              let o10e = onay5.createReactionCollector(o10, {time:0});

              o9e.on("collect", async reaction => {
                reaction.users.remove(user.id);
                channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
                  setTimeout(() => {
                    m.edit(new Discord.MessageEmbed()
                    .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
                    .setColor("YELLOW")
                    .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                    .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
                    **📝 Seçilen Alan 📝** => FiveM\n
                    **📩 Talep Sahibi 📩 =>** ${message.author}\n
                    **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
                    **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
                    .setFooter("VoltranBilişim Hizmetleri")
                    .setTimestamp())
                    channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)
    
                    channel.overwritePermissions([
                      {
                        id: everyone,
                        deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: talepsahip,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                        deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: user,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: yetkili,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: stajyer,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                    ], "Halk Bilişim")
                  }, 5000);
                })
              })

              o10e.on("collect", async reaction => {
                reaction.users.remove(user.id);
                channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
                  setTimeout(() => {
                  channel.delete();
                  }, 5000);
                })
              })
            })
          })

          e6e.on("collect", async reaction => {
            reaction.users.remove(user.id);
            channel.send(new Discord.MessageEmbed()
            .setTitle("VoltranBilişim Hizmetleri Talep Onaylama")
            .setColor("RED")
            .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
            .setDescription(`**Sizin bot olup olmadığınızı doğrulamak amacıyla talebinizi doğrulamanız gerekiyor.**\n\n
            **Talebi Doğrulamak İçin => ✅**\n
            **İptal Etmek İçin => ❌**`)).then(onay6 => {
              onay6.react("✅");
              onay6.react("❌");

              let o11 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
              let o11e = onay6.createReactionCollector(o11, {time:0});
    
              let o12 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
              let o12e = onay6.createReactionCollector(o12, {time:0});

              o11e.on("collect", async reaction => {
                reaction.users.remove(user.id);
                channel.send("**Talebiniz onaylanıyor, verileriniz alınıyor ve kod oluşturuluyor bu yüzden az bekletiyorum seni :)**").then(async m => {
                  setTimeout(() => {
                    m.edit(new Discord.MessageEmbed()
                    .setTitle("VoltranBilişim Hizmetleri Destek Bölümü")
                    .setColor("YELLOW")
                    .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
                    .setDescription(`Hoşgeldiniz, ${message.author}. Destek Ekibimiz Sizinle İlgileneceklerdir.\n\n
                    **📝 Seçilen Alan 📝** => SA:MP\n
                    **📩 Talep Sahibi 📩 =>** ${message.author}\n
                    **🆔 Talep Kodu 🆔 =>** ||${kod}||\n
                    **🏷️ Talep Numarası 🏷️=>** ${talepno}`)
                    .setFooter("VoltranBilişim Hizmetleri")
                    .setTimestamp())
                    channel.send(`${yetkili}, **${talepno}** Numaralı ${channel} Kanalında Talep Var!`)
    
                    channel.overwritePermissions([
                      {
                        id: everyone,
                        deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: talepsahip,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"],
                        deny: ["MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: user,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: yetkili,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                      {
                        id: stajyer,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES", "MANAGE_CHANNELS", "CREATE_INSTANT_INVITE"],
                      },
                    ], "Halk Bilişim")
                  }, 5000);
                })
              })

              o12e.on("collect", async reaction => {
                reaction.users.remove(user.id);
                channel.send("**Talebinizi onaylamadığınızdan talebiniz iptal ediliyor...**").then(async ch => {
                  setTimeout(() => {
                  channel.delete();
                  }, 5000);
                })
              })
            })
          })

          e7e.on("collect", async reaction => {
            reaction.users.remove(user.id);
            channel.send(new Discord.MessageEmbed()
            .setTitle("VoltranBilişim Hizmetleri Talep İptal")
            .setColor("RED")
            .setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png") 
            .setDescription(`**Talebi İptal Etmek İstediğinizi Öğrendik.**\n\n
            **Talebi İptal Etmek İçin => ✅**`)).then(del => {
              del.react("✅");

              let o13 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
              let o13e = del.createReactionCollector(o13, {time:0});

              o13e.on("collect", async reaction => {
                reaction.users.remove(user.id);
                channel.send("**Talebiniz 5 saniye içerisinde iptal ediliyor...**").then(async ch => {
                  setTimeout(() => {
                  channel.delete();
                  }, 5000);
                })
              })
            })
          })
})
})
}
}
}
})
// message.reply(`Botumuz şuanda bakımda ve güncelleştirmeler yapılmaktadır. Talep açma sisteminde değişiklik yapılacağı için talep açma bir süreliğine kapalıdır. Anlayışınız için teşekkür ederiz`).then(msg => msg.delete({timeout: 5000}))
client.on("message", async message => {
  const no = db.get(`talepno_${message.guild.id}`);
  if(!no){return console.log("Veri kaydedilmiyor.")}
  
  fs.writeFileSync(`./transcript-log/${no}.txt`, `${message.content} => ${message.author.tag} | ${message.channel.name}\n`, {flag: 'a'}, 'utf-8');
})

var temporary = [];

client.on('voiceStateUpdate', async (oldMember, newMember, member, user) => {
const guild = client.guilds.cache.get("810037859515105281");//763163515472969748
const dbekleme = guild.channels.cache.get('810067836512632852');//799385817117622323
const log = guild.channels.cache.get("810069130131931166")//799388688911040522
var everyone = guild.roles.cache.find(e => e.name === '@everyone');
var kategori = "810061944068505610";//799385519783542815

if(newMember.member.voice.channel === dbekleme){
    newMember.guild.channels.create(`📞 Destek Odası`, {type: "voice", parent: kategori}).then(async destek => {
      temporary.push({ newID: destek.id, guild: destek.guild })
      var yetkili = guild.roles.cache.get("810062510891728906");//763347535636725770
       destek.overwritePermissions([
         {
           id: yetkili,
           allow: ["VIEW_CHANNEL", "MANAGE_CHANNELS", "CONNECT", "SPEAK", "STREAM", "DEAFEN_MEMBERS", "MUTE_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CREATE_INSTANT_INVITE"],
         },
         {
           id: everyone,
           deny: ["VIEW_CHANNEL", "MANAGE_CHANNELS", "CONNECT", "SPEAK", "STREAM", "DEAFEN_MEMBERS", "MUTE_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CREATE_INSTANT_INVITE"],
         },
         {
           id: newMember.member,
           allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK", "STREAM", "USE_VAD"],
           deny: ["DEAFEN_MEMBERS", "MUTE_MEMBERS", "CREATE_INSTANT_INVITE", "MOVE_MEMBERS", "MANAGE_CHANNELS"],
         },
       ], "Halk Bilişim Temporary Channel (Geçici Sesli Destek Kanal) Sistemi")
      newMember.member.voice.setChannel(destek.id)
	  log.send("Bir üye/müşeri **Destek Bekleme** kanalına bağlandı ve otomatik olarak kanal açtım ve üyeyi o kanala çektim.")
    })
}
if(temporary.length >= 0) for(let i = 0; i < temporary.length; i++) {
  let ch = temporary[i].guild.channels.cache.find(x => x.id == temporary[i].newID)        
  if(ch.members.size <= 0){
      await ch.delete()
      return temporary.splice(i, 1)
          }
        }
      })

client.on("guildMemberAdd", async (member, message) => {
        const sistem = await db.fetch(`kayıtsistem_${member.guild.id}`);
        const kayıtS = await db.fetch(`kayıtsızrol_${member.guild.id}`);
        const kayıtsız = member.guild.roles.cache.get(kayıtS.id);
        const isim = db.fetch(`isim_${member.guild.id}_${member.id}`);
        const yaş = db.fetch(`yas_${member.guild.id}_${member.id}`);
        const kayıtVR = await db.fetch(`kayıtverilecekrol_${member.guild.id}`);
        const kayıtlı = member.guild.roles.cache.get(kayıtVR.id);
        const üye = member.guild.members.cache.get(member.id);  
    
        if(sistem === "acik"){
          const idler = db.get("veri").map(efebey => efebey.id).includes(member.id);
          if(idler){
            member.roles.add(kayıtlı);
            member.roles.remove(kayıtsız);
            const nick = `${isim} | ${yaş}`
            member.setNickname(nick)
    
            member.send(`${member}`)
    
        member.send(new Discord.MessageEmbed()
        .setTitle("VoltranBilişim Hizmetleri Kayıt Sistemi")
        .setColor("ff0a0a")
        .setImage("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png")
        .setFooter("Halk Bilişim İnternet Hizmetleri Sınır Kapısı")
        .setTimestamp()
        .setDescription(`Sunucuda daha önceden kayıtlı olduğun için otomatik olarak kaydın yapıldı.`))
            return
          } else if(!idler){
    
          member.roles.add(kayıtsız);
    
          member.setNickname("İsminizle Yaşınızı Giriniz.")
    
        member.send(`${member}`)
    
        member.send(new Discord.MessageEmbed()
        .setTitle("VoltranBilişim Hizmetleri Kayıt Sistemi")
        .setColor("ff0a0a")
        .setImage("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png")
        .setFooter("Halk Bilişim İnternet Hizmetleri Sınır Kapısı")
        .setTimestamp()
        .setDescription(`Hoşgeldin ${member}, Kayıt olmak için önce ismini girmen gerek. Ardından yaşını girerek kayıt olabilirsin.\n\n
    **NOT!:** Sizden bot tarafından bazı Discord bilgileri alınacak ama bilgiler **ÜÇÜNCÜ KİŞİLERE** paylaşılmayıp, botun veritabanında tutulacak.**(Güvenlik İçin)**`))
    return
        }
      }
        if(!sistem){return};
    })
    
client.on("message", async message => {
      const kanal = await db.fetch(`kayıtkanal_${message.guild.id}`);
      var kanall = message.guild.channels.cache.get(kanal.id);
      const spl = message.content.split(" ");
      const sistem = await db.fetch(`kayıtsistem_${message.guild.id}`);
      const kayıtAR = await db.fetch(`kayıtalınacakrol_${message.guild.id}`);
      const kayıtVR = await db.fetch(`kayıtverilecekrol_${message.guild.id}`);
      const kayıtlı = message.guild.roles.cache.get(kayıtVR.id);
      const kayıtsız = message.guild.roles.cache.get(kayıtAR.id)
      const üye = message.guild.members.cache.get(message.author.id);  
    
      if(sistem === "acik"){
        if(!kayıtAR){return}
        if(!kayıtVR){return}
    
      if(üye.bot) return;
    
      if(kanal){
        if(message.channel !== kanall){
          return console.error("Hata alıyorum... Sanırım birisi kayıt kanalı dışında kayıt oluyor...")
        }
    
        if(message.channel === kanall){
          if(message.content.startsWith(config.prefix)){return console.log("Komut kullanılıyor...")}
        const kayıt = spl[0];
    
        if(message.content === kayıt){
          const kayıtISIM = require('./kayıtH.json');
          const kayıtYAS = require('./kayıtY.json');
          if(message.content.startsWith(kayıtISIM.a)||message.content.startsWith(kayıtISIM.b)||message.content.startsWith(kayıtISIM.c)||message.content.startsWith(kayıtISIM.d)||message.content.startsWith(kayıtISIM.e)||message.content.startsWith(kayıtISIM.f)||message.content.startsWith(kayıtISIM.g)||message.content.startsWith(kayıtISIM.h)||message.content.startsWith(kayıtISIM.ı)||message.content.startsWith(kayıtISIM.i)||message.content.startsWith(kayıtISIM.j)||message.content.startsWith(kayıtISIM.k)||message.content.startsWith(kayıtISIM.l)||message.content.startsWith(kayıtISIM.m)||message.content.startsWith(kayıtISIM.n)||message.content.startsWith(kayıtISIM.o)||message.content.startsWith(kayıtISIM.ö)||message.content.startsWith(kayıtISIM.p)||message.content.startsWith(kayıtISIM.r)||message.content.startsWith(kayıtISIM.s)||message.content.startsWith(kayıtISIM.ş)||message.content.startsWith(kayıtISIM.t)||message.content.startsWith(kayıtISIM.u)||message.content.startsWith(kayıtISIM.ü)||message.content.startsWith(kayıtISIM.v)||message.content.startsWith(kayıtISIM.y)||message.content.startsWith(kayıtISIM.z)){
            db.set(`isim_${message.guild.id}_${üye.id}`, message.content);
          message.channel.send(new Discord.MessageEmbed()
          .setTitle("VoltranBilişim Hizmetleri Kayıt Sistemi")
          .setColor("ff0a0a")
          .setImage("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png")
          .setFooter("VoltranBilişim Hizmetleri Sınır Kapısı")
          .setTimestamp()
          .setDescription(`İsmin onaylandı. Şimdide doğrulanmak yaşını girmelisin :) **Fake Yaş Girme!**`))
          return
        } else if(message.content.startsWith(kayıtYAS.y1)||message.content.startsWith(kayıtYAS.y2)||message.content.startsWith(kayıtYAS.y3)||message.content.startsWith(kayıtYAS.y4)||message.content.startsWith(kayıtYAS.y5)||message.content.startsWith(kayıtYAS.y6)||message.content.startsWith(kayıtYAS.y7)||message.content.startsWith(kayıtYAS.y8)||message.content.startsWith(kayıtYAS.y9)){
          const isim = db.fetch(`isim_${message.guild.id}_${üye.id}`);
          if(!isim){
            return message.reply("İsminizi girmeden yaşınızı **GİREMEZSİNİZ**.")
          } else if(isim){
    
          db.set(`yas_${message.guild.id}_${üye.id}`, message.content);
          const yaş = db.fetch(`yas_${message.guild.id}_${üye.id}`);
          db.push("veri", { id: üye.id })
          fs.writeFileSync(`./kayıtbligi/${message.author.username}`, `Kayıt Olan Kişi: ${message.author.tag}\n\n İsmi: ${isim}\n\n Yaş: ${yaş}\n\n ID: ${message.author.id}\n\n Hesap Oluşturulma Tarihi: ${message.author.createdAt.toLocaleDateString()}`, "utf-8");
    
          üye.roles.add(kayıtlı);
          üye.roles.remove(kayıtsız);
          const nick = `${isim} | ${yaş}`
          üye.setNickname(nick)
          message.channel.send(new Discord.MessageEmbed()
            .setTitle("VoltranBilişim Hizmetleri Kayıt Sistemi")
            .setColor("0aff0a")
            .setImage("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png")
            .setFooter("VoltranBilişim Hizmetleri Sınır Kapısı")
            .setTimestamp()
            .setDescription(`Başarıyla kayıt oldun.\n
      **İsim => ${isim}**\n 
      **Yaş => ${yaş}**`))
      return
        }
      }
      }
      }
    }
    }
      if(!sistem){return};
      if(!kanal){return};
    })
    //EfeBey Farkıyla Bebeğimm :))

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});


client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
