const Discord = require('discord.js');
const { DiceRoller } = require('rpg-dice-roller/lib/umd/bundle.js');

exports.run = (bot, msg, args) => {

    let result = args[0] ? args[0] : '1d6';
    const roller = new DiceRoller();

    let embed = new Discord.MessageEmbed()
        .setTitle("Comandos")
        .setColor("RED")
        .setDescription(`${roller.roll(result)}`);

    msg.reply(embed);
    console.log(args);

};

exports.help = {
    name: "r"
}