const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = async (client, message) => {

  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
     client.user.setStatus("online");
   var oyun = [
  "💼 VoltranBilişim Hizmetleri Destek Botu 💼",
  "💻 Yapımcı: Efe Yıldız 💻",
  "💻 Versiyon v1.0 💻"
 ];

setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 5500);
};

//var oyun = [
  //  "💼 Halk Bilişim Hizmetleri Destek Botu 💼",
  //"💻 Yapımcı: Efe Yıldız 💻",
  //"⭐ Transcript Sistemi & Emojili Talep Onaylama! ⭐",
  //"⭐ Çoğu Emojili Ticket Sistemi ⭐",
  //"⭐ Destek Bekleme Kanalına Geçince Oto. Kanal Açma (Temporary Channel) Sistemi! ⭐",
  //"💻 Versiyon v0.8 💻"
 //];

 // setInterval(function() {
  //  var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

  //  client.user.setActivity(oyun[random], "");
 // }, 2250);
//};

//client.user.setActivity(`Kapsamlı Bakım Yapılıyor! Lütfen Komutları Kullanmayınız. Sistem Sıfırlanacaktır Ayarları Yeniden Yapılandırınız.`); //Halk Bilişim Hizmetleri Destek Botu

