const Discord = require('discord.js');
const { DiceRoller } = require('rpg-dice-roller/lib/umd/bundle.js');
const Canvas = require('canvas');

const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');
    let fontSize = 60;
    do {
        ctx.font = `${fontSize -= 10}px Georgia, serif`;
    } while (ctx.measureText(text).width > canvas.width - 300);
    return ctx.font;
};

exports.run = async (bot, msg, args) => {

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
        if (roll == 6) {
            decisive++;
        }
    }

    const canvas = Canvas.createCanvas(500, 250);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('./src/assets/imagens/texture/oldpaper.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.font = applyText(canvas, "Teste")
    ctx.fillStyle = '#2f3238';
    ctx.fillText(`${failure}`, 110, 65);
    ctx.fillText(`${success}`, 110, 140);
    ctx.fillText(`${decisive}`, 110, 220);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    const snake = await Canvas.loadImage('./src/assets/imagens/icon/snake.png');
    ctx.drawImage(snake,  25, 15, 75, 75);

    const sword = await Canvas.loadImage('./src/assets/imagens/icon/sword.png');
    ctx.drawImage(sword, 25, 90, 75, 75);

    const axe = await Canvas.loadImage('./src/assets/imagens/icon/axe.png');
    ctx.drawImage(axe, 25, 165, 75, 75);

    const character = await Canvas.loadImage('./src/assets/imagens/character/Character.png');
    ctx.drawImage(character, 235, 15, 160, 215);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'oldpaper.png');

    msg.reply(`**${numberResult}** dados jogados`, attachment);
    //msg.reply(`**${numberResult}** dados jogados \nCobra: **${failure}** \nEspada: **${success}** \nMachado: **${decisive}**`);

};

exports.help = {
    name: "rm"
}