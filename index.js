require('dotenv').config(); //initialize dotenv
const { Client, Intents, MessageAttachment, MessageEmbed } = require('discord.js');
 
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const botToken = process.env['TOKEN']

//Always on:
var http = require('http');  http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);


client.on('ready', () => {  
  console.log('Logged in as ValorantBro!')
  let activities = [`Valorant`, `Valorant`];
  i = 0;  
  setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"PLAYING"}), 5000)
})
       
//Global Variables-----------------------------------------------------------
const prefix = '!'

const agent_names = ['Brimstone','Viper', 'Omen', 'Killjoy','Cypher', 'Sova', 'Sage', 'Phoenix', 'Jett', 'Reyna', 'Raze', 'Breach', 'Skye', 'Yoru', 'Astra', 'KAY/O', 'Chamber', 'Neon', 'Fade'];

const agent_link = [
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/brimstone_portrait.png',
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/viper_portrait.png',
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/omen_portrait.png',
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/killjoy_portrait.png', 
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/cypher_portrait.png', 
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/sova_portrait.png', 
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/sage_portrait.png',
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/phoenix_portrait.png', 
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/jett_portrait.png', 
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/reyna_portrait.png', 
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/raze_portrait.png',
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/breach_portrait.png', 
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/skye_portrait.png', 
'https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/yoru_portrait.png', 
'https://static.wikia.nocookie.net/valorant/images/8/8a/Astra_artwork.png/revision/latest/scale-to-width-down/326?cb=20210302170140',
'https://static.wikia.nocookie.net/valorant/images/a/a9/KAYO_artwork.png/revision/latest/scale-to-width-down/326?cb=20210622163116',
'https://static.wikia.nocookie.net/valorant/images/5/5d/Chamber_artwork.png/revision/latest/scale-to-width-down/326?cb=20211031124636',
'https://static.wikia.nocookie.net/valorant/images/a/ad/Neon_artwork.png/revision/latest/scale-to-width-down/326?cb=20220112155550',
'https://static.wikia.nocookie.net/valorant/images/8/8a/Fade_artwork.png/revision/latest/scale-to-width-down/326?cb=20220425005211'];

//Functions------------------------------------------------------------------
function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//Messages-------------------------------------------------------------------
client.on("messageCreate", message => {
  var msg = message.content;

  if (msg.toUpperCase() === prefix + 'HELP') {
    message.channel.send("`!agent`: gives you a random Valorant agent");
  }
})

client.on('messageCreate', message => {
    var msg = message.content;
  
    if (msg.toUpperCase() === prefix + 'AGENT') {
        var randomNumber = randomInt(0,18);
      
        message.channel.send({
            content: 'Your Agent: '+ agent_names[randomNumber],
            embeds: [new MessageEmbed().setImage(agent_link[randomNumber])],
        })
        //.then(console.log)
        .catch(console.error);
    }
});

client.on('messageCreate', message => {
    var msg = message.content;
  
    if (msg.toUpperCase() === prefix + 'ALLAGENTS') {
        for (let i = 0; i < 19; i++) {
            message.channel.send({
                content: agent_names[i],
                embeds: [new MessageEmbed().setImage(agent_link[i])],
            })
            //.then(console.log)
            .catch(console.error);
        }
    }
});

//------------------------------------------------------------------------


  //Always has to be last line:
client.login(botToken); //login bot using token
