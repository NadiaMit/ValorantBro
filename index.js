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
'https://titles.trackercdn.com/valorant-api/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png',
'https://titles.trackercdn.com/valorant-api/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png',
'https://titles.trackercdn.com/valorant-api/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/fullportrait.png',
'https://titles.trackercdn.com/valorant-api/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png',
'https://static.wikia.nocookie.net/valorant/images/8/8a/Fade_artwork.png/revision/latest/scale-to-width-down/326?cb=20220425005211'];

//Functions------------------------------------------------------------------
function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//Messages-------------------------------------------------------------------
client.on("messageCreate", message => {
  var msg = message.content;

  if (msg === prefix + 'help') {
    message.channel.send("`!agent`: gives you a random Valorant agent");
  }
})

client.on('messageCreate', message => {
    var msg = message.content;
  
    if (msg === prefix + 'agent') {
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
  
    if (msg === prefix + 'allAgents') {
        for (let i = 0; i < 18; i++) {
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
