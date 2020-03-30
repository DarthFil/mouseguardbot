const Discord = require('discord.js');
const { DiceRoller } = require('rpg-dice-roller/lib/umd/bundle.js');
const numero = require('numero-por-extenso');

exports.run = (bot, msg, args) => {

    let result = args[0] ? args[0] : 1;
    numberResult = Number.parseInt(result)
    if (Number.isNaN(numberResult)) {
        numberResult = 1
    }

    const roller = new DiceRoller();
    success = 0;
    failure = 0;
    decisive = 0;

    for (let i = 0; i < result; i++) {
        let roll = roller.roll('1d6').toJSON().total;
        console.log(roll)
        if (roll <= 3) {
            failure++
        }
        if (roll > 3 && roll <= 5) {
            success++;
        }
        if (roll.total === 6) {
            decisive++;
        }
    }
    msg.reply(`**${numberResult}** dados jogados \nCobra: **${failure}** \nEspada: **${success}** \nMachado: **${decisive}**`);

};

exports.help = {
    name: "rm"
}