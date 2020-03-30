const Discord = require('discord.js');
const config = require("../config/images.json")

let text = "";

exports.run = (bot, msg, args) => {
    if (args == 'list') {
        for (let i = 0; i < config.imagens.length; i++) {
            text += `Nome: **${config.imagens[i].name}** \nDescrição: **${config.imagens[i].description}** \n`;
        }
        msg.channel.send(text)
        return;
    }
    else {
        const image = new Discord.MessageEmbed()
            .attachFiles([`./src/assets/${args}.jpg`])
            .setImage(`attachment://${args}.jpg`);

        msg.channel.send(image)
    }
}

exports.help = {
    name: "i"
}