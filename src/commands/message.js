const Discord = require('discord.js');
const Canvas = require('canvas');

// Pass the entire Canvas object because you'll need to access its width, as well its context
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 45;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px bold Georgia, serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

exports.run = async (bot, msg, args) => {
    //    const image = new Discord.MessageEmbed()
    //       .attachFiles(['./src/assets/fallmap.jpg'])
    //        .setImage('attachment://fallmap.jpg');;
    //    msg.channel.send(image)

    // Set a new canvas to the dimensions of 700x250 pixels
    const canvas = Canvas.createCanvas(500, 250);
    // ctx (context) will be used to modify a lot of the canvas
    const ctx = canvas.getContext('2d');

    // Since the image takes time to load, you should await it
    const background = await Canvas.loadImage('./src/assets/imagens/texture/oldpaper.jpg');
    // This uses the canvas dimensions to stretch the image onto the entire canvas
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Select the color of the stroke
    ctx.strokeStyle = '#74037b';

    // Select the font size and type from one of the natively available fonts
    ctx.font = applyText(canvas, "Teste");
    // Select the style that will be used to fill the text in
    ctx.fillStyle = '#2f3238';
    // Actually fill the text with a solid color
    ctx.fillText("Dices.result.snake", 110, 65);

    ctx.fillText("Dices.result.sword", 110, 140);

    ctx.fillText("Dices.result.axe", 110, 215);

    // Draw a rectangle with the dimensions of the entire canvas
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Wait for Canvas to load the image
    const snake = await Canvas.loadImage('./src/assets/imagens/icons/snake.png');
    // Draw a shape onto the main canvas
    ctx.drawImage(snake, 15, 15, 75, 75);

    const sword = await Canvas.loadImage('./src/assets/imagens/icons/sword.png');
    // Draw a shape onto the main canvas
    ctx.drawImage(sword, 15, 90, 75, 75);

    const axe = await Canvas.loadImage('./src/assets/imagens/icons/axe.png');
    // Draw a shape onto the main canvas
    ctx.drawImage(axe, 15, 165, 75, 75);

    // Use helpful Attachment class structure to process the file for you
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'oldpaper.png');






    msg.channel.send(`Welcome to the server!`, attachment);

}

exports.help = {
    name: "t"
}