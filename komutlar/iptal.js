const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');
const { MessageAttachment } = require('discord.js');

const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
	if(!message.member.roles.cache.has("810062510891728906")){return message.reply("Talebi Sadece Yetkililer Kapatabilir :)")}
	const talepsahip = message.mentions.users.first();
	const kod = await db.fetch(`taleponay_${message.guild.id}_${talepsahip.id}`);
	const no = db.get(`talepno_${message.guild.id}`);
	const transcript = message.guild.channels.cache.get("807007713221541899");//799388886500507739
	
	if(!args[0]){return message.reply("a+iptal @talep sahibi")}

	if(!kod){return message.reply("Bu Üye Talep Açmamış!")}
	if(!no){return message.reply("Bu Üye Talep Açmamış!")}
	if(!talepsahip){return message.reply("Talebi iptal edebilmem için ticket sahibini etiketlemelisin!")}

	db.delete(`taleponay_${message.guild.id}_${talepsahip.id}`);

	fs.writeFileSync(`./ticketbilgi-${no}.txt`, `Talep Sahibi: ${talepsahip.tag}\n\n ID: ${talepsahip.id}\n\n Talep ID: ${kod}\n\n Talep Numarası: ${no}`, "utf-8")
	
	message.channel.send(new Discord.MessageEmbed()
	.setTitle("VoltranBilişim Hizmetleri Destek İptal (Kapatma)")
	.setColor("RED")
	.setThumbnail("https://cdn.discordapp.com/attachments/778633901232357394/810472529432543323/AtlasBilisim.png")
	.setDescription(`Talebi kapatmak istediğinden emin misin?\n
	**Bulunduğun Kanal =>** ${message.channel}\n\n
	**✅ => Onaylıyorum**\n
    **❌ => Onaylamıyorum**`)).then(iptal => {
		iptal.react("✅");
		iptal.react("❌");

		let i1 = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id;
        let i1e = iptal.createReactionCollector(i1, {time:0});
    
        let i2 = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id;
		let i2e = iptal.createReactionCollector(i2, {time:0});
		
		i1e.on("collect", async reaction => {
			const user = client.user;
			reaction.users.remove(user.id);
			reaction.message.channel.send("**Talep 7 saniye içerisinde kapatılıyor...**").then(async ch => {
				setTimeout(() => {
					message.channel.delete().then(async bilgiler => {
						transcript.send(`Bir adet talep kapatıldı, logu ve ticket bligileri çıkartıldı.`)
						await transcript.send(new Discord.MessageAttachment(fs.createReadStream(`./transcript-log/${no}.txt`)));
						await transcript.send(new Discord.MessageAttachment(fs.createReadStream(`./ticketbilgi-${no}.txt`)));
					})
				}, 7000);
			})
		})

		i2e.on("collect", async reaction => {
			const user = client.user;
			reaction.users.remove(user.id);
			message.channel.send("**İşlem iptal edildi.**").then(msg => msg.delete({timeout: 2500}))
		})
	})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'iptal'
}