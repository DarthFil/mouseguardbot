const Discord = require('discord.js');
const { DiceRoller } = require('rpg-dice-roller/lib/umd/bundle.js');

exports.run = (bot, msg, args) => {

    let result = args[0] ? args[0] : 1;
    const roller = new DiceRoller();
    let text = "";
    success = 0;
    failure = 0;
    decisive =0;

    for (let i = 0; i < args; i++) {      
        let roll = roller.roll('1d6').toJSON().total;        
        console.log(roll)
        if (roll <= 3) {
            failure ++
        }
        if (roll > 3 && roll <=5) {
            success ++;
        }
        if (roll === 6) {
            decisive ++;
        }
    }
    msg.reply(`\n Cobra: **${failure}** \n Espada: **${success}** \n Machado: **${decisive}**` );
};

exports.help = {
    name: "rm"
}