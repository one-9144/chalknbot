// console.log("hello npm")
// here is my name 

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log(chalk.blackBright('Hello world'));


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const PREFIX = "?";
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }

  let  arge = msg.content.substring(PREFIX.length).split("")

  console.log(arge);
  


  switch(arge[0]){
    case 'website':
        msg.channel.send("http://www.youtube.com/")
        break;
    case 'avater':
        msg.reply(msg.author.displayAvatarURL());
        break;
    case 'clear':
        if (!arge[1]){
            return msg.reply("Erro please define a second parameter")
        } else
        {
            //clear 5 

            msg.channel.bulkDelete(arge[1]);
            break;
        }

  }
});





client.login('ODM5OTE3NTIwNzg5ODMxNzIw.YJQoJQ.mTx1DWC2b4D277YWMlKA2kbNpDI');