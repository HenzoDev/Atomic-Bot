const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#2ee656")
.setFooter(`JetHub | Official`)
.setTimestamp()
// .setImage(member.displayAvatarURL())
.addField('Stock :','\n\n`hulu` : 100+ \n`nordvpn` : 1000+ \n`Crunchyroll` : 100+ \n`origin` : 100+ \n`minecraft` : 100+ \n`nitro` : unlimited \n`spotify` : 100+\n\n Remember that you are using a 𝖿𝗋𝖾𝖾 𝗀𝖾𝗇.');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}

