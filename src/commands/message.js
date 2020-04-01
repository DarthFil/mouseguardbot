const Discord = require('discord.js');
const Canvas = require('canvas');

exports.run = async (bot, msg, args) => {
	const image = new Discord.MessageEmbed()
		.attachFiles([`./src/assets/imagens/others/rpg.jpg`])
		.setImage(`attachment://wellcome.jpg`);
	//membro.send(`Seja bem vindo! Siga as regars do servidor e divista-se 😀`, image)
	msg.channel.send(`Seja bem vindo! Siga as regars do servidor e divista-se 😀\nPara ver a lista de comandos digite: **!h**`, image)
}
exports.help = {
	name: "t"
}