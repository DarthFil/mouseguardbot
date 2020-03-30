const Discord = require('discord.js');

exports.run = (bot, msg, args) => {
    const image = new Discord.MessageEmbed()
        .attachFiles(['./src/assets/fallmap.jpg'])
        .setImage('attachment://fallmap.jpg');;
    msg.channel.send(image)
}

exports.help = {
    name: "mensagem"
}