const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'ElityGames | !help', type: 0} });
    console.log("ElityBot Ready");
});

bot.login('Mzg5MTMyODE1MDQxNTYwNTg2.DSXwnA.7VActXvys4mdEURQli8ADvMSeNg');

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Commandes")
            .setDescription("[►](1) !help » Pour afficher les commandes." + "\n[►](2) !ip » Adresse du serveur Minecraft." + "\n[►](3) !mumble » Adresse du serveur Mumble." + "\n[►](4) !boutique » Boutique du serveur." + "\n[►](5) !staff » Le Staff d'Elity.")
            .setColor('#F49301')
            message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du Bot »\n §help » Pour afficher les commandes.")
        console.log("Commande Help Demandée.");
    }

    if (message.content === prefix + "ip"){
        var minecraft_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Minecraft")
            .setDescription("Adresse » mc.elitygames.fr")
            .setColor('#F49301')
            message.channel.sendEmbed(minecraft_embed);
    }

    if (message.content === prefix + "mumble"){
        var mumble_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Mumble")
            .setDescription("Adresse » mumble.elitygames.fr" + "\nPort » 16300")
            .setColor('#F49301')
            message.channel.sendEmbed(mumble_embed);
    }

    if (message.content === prefix + "boutique"){
        var boutique_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Boutique")
            .setDescription("Boutique » http://elity.buycraft.net/")
            .setColor('#F49301')
            message.channel.sendEmbed(boutique_embed);
    }

    if (message.content === prefix + "staff"){
        var staff_embed = new Discord.RichEmbed()
            .setTitle("ElityBot | Staff")
            .addField("» Administration «", "\nMalfanax" + "\nKenai_FDO")
            .addField("» Community Manager «", "\nShadoune666")
            .addField("» Responsable Modération «", "\nBeZaidHache" + "\nIromega")
            .addField("» Responsable Host «", "\nAlpharys")
            .addField("» Responsable Build «", "\nbartix2612")
            .addField("» Modération «", "\nSteyzz" +"\nTorusMC" + "\nDraxiio_EG" + "\nOsheip" + "\nFuzior_Floki" + "\nJinkk" + "\nTobiramaa" + "\nMinato" + "\nFroggyBalboa" + "\nredbull67" + "\nSkydoo" + "\nZiffard")
            .addField("» Helper «", "\nAdrossiel_" + "\nGold_oO" + "\nOver_Rex" + "\nYysm")
            .addField("» Builder «", "\n__0mega" + "\nLaMieDePain" + "\nLeFauxBelge" + "\nzoryken")
            .addField("» Développeur «", "\n Personne")
            .addField("» Graphiste «", "\n Personne")
            .setColor('#F49301')
            message.channel.sendEmbed(staff_embed);
    }

    if (message.content === prefix + "uhc1235"){
        var uhc_embed = new Discord.RichEmbed()
            .setTitle("UHC Classico")
            .addField("Host »", "\nDraxiio")
            .addField("Team »", "\n Choosen of 2")
            .addField("» Scénarios «", "\n► No Rod")
            .addField("» Règles «", "\/tell » OFF" + "\nBordure » Episode 5" + "\nPvP » 20 Minutes" + "\nLava Bucket & Briquet » OFF" + "\nFire Aspect & Flame » OFF" + "\nStuff Diams » 3 Parties maximum épée comprise")
            .addField("Serveur »", "\nmc.elitgames.fr")
            .addField("Mumble »", "\nAdresse ► mumble.elitygames.fr" + "\nPort ► 16300")
            .setColor('#F49301')
            message.channel.sendEmbed(uhc_embed);
    }

    

});