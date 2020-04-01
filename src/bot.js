const Discord = require('discord.js');
const config = require("./config/config.json")
const moment = require('moment');
const fs = require('fs')

moment().format();
moment.locale('pt-BR');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();


fs.readdir("./src/commands/", (err, fls) => {
    if (err) {
        console.log(err);
    }

    let filesjs = fls.filter(f => f.split(".").pop() == "js");

    filesjs.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`comando ${f} carregado com sucesso.`);
        bot.commands.set(props.help.name, props);
    })
});

/**
 * Verifica se o Bot esta online
 */
bot.once('ready', () => {
    console.log(`Bot online: ${bot.user.tag}!`)
    bot.user.setActivity("vocês e esperando pra jogar os dados!", { type: "LISTENING" })
});

/**
 * Envia a mensagem toda vez que um membro é adicionado
 */
bot.on('guildMemberAdd', membro => {

    const image = new Discord.MessageEmbed()
        .attachFiles([`./src/assets/imagens/others/rpg.jpg`])
        .setImage(`attachment://wellcome.jpg`);
    membro.send(`Seja bem vindo! Siga as regars do servidor e divista-se 😀\nPara ver a lista de comandos digite: **!h**`, image)
});

/**
 * Lê as mensagens do canel
 */
bot.on('message', msg => {

    let prefix = config.prefix;
    let messageArray = msg.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let flcmd = bot.commands.get(command.slice(prefix.length));


    /**
     * Ignora se a mensagem é originada do Bot
     */
    if (msg.author.bot) {
        return;
    }

    /**
     * Ignora mensagem eniada de DM
     */
    if (msg.channel.type === "dm") {
        return;
    }

    /**
     * Ignora as mensagen que não comecem com o prefixo
     */
    if (!msg.content.startsWith(config.prefix)) {
        return;
    }

    if (flcmd) {
        flcmd.run(bot, msg, args)
    }
});

bot.login(config.token);