const Discord = require('discord.js');

exports.run = (bot, msg, args) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Comandos")
        .setColor("RED")
        .setDescription(`**Rolar dados comuns** \n Usando o comando "/r + o dados seguindo o modelo de anotação de dados de rpg https://en.wikipedia.org/wiki/Dice_notation" 
      **Exemplo:** __/r 1d10__ ou __/r 1d4+5__ para adicionar modificadores
      \n
      **Rolar dados Mouse Guard** \n Usando o comando "/rm + o numero de dados que vamos rolar" 
      **Exemplo:** __/rm 5__ `
      );

    msg.channel.send(embed);
}

exports.help = {
    name: "Ajuda"
}