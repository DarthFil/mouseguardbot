const Discord = require('discord.js');
const config = require("../config/images.json")

let text = "";

exports.run = (bot, msg, args) => {

    console.log(args);
    let parameter1 = args[0] ? args[0] : "list";


    if (args[0] == 'list') {
        text += `**Cidades:** *(comando **!i t** + **Nome**)*\n`
        for (let i = 0; i < config.city.length; i++) {
            text += `Nome: **${config.city[i].name}** \nDescrição: **${config.city[i].description}** \n`;
        }
        text += `**Personagens:** *(comando **!i p** + **Nome**)*\n`
        for (let i = 0; i < config.character.length; i++) {
            text += `Nome: **${config.character[i].name}** \nDescrição: **${config.character[i].description}** \n`;
        }
        text += `**Mapas:** *(comando **!i m** + **Nome**)*\n`
        for (let i = 0; i < config.map.length; i++) {
            text += `Nome: **${config.map[i].name}** \nDescrição: **${config.map[i].description}** \n`;
        }
        msg.channel.send(text)
        return;
    }
    else {
        const image = new Discord.MessageEmbed()
            .attachFiles([`./src/assets/imagens/${args[0]}/${args[1]}.jpg`])
            .setImage(`attachment://${args[0]}.jpg`);

        msg.channel.send(image)
    }
}

exports.help = {
    name: "i"
}