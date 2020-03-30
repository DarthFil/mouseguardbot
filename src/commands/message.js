const Discord = require('discord.js');

exports.run = (bot, msg, args) => {
    msg.channel.send("Ola do Command!")
}

exports.help = {
    name: "mensagem"
}