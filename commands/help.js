const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#2ee656")       
// .setThumbnail('https://i.imgur.com/b5MVGYq.png')
.addField('Help :','\n\n`hulu` To Get A Hulu 𝖺𝖼𝖼𝗈𝗎𝗇𝗍 .\n`nordvpn` To Get A NordVPN 𝖺𝖼𝖼𝗈𝗎𝗇𝗍 .\n`Crunchyroll` To Get Crunchyroll 𝖺𝖼𝖼𝗈𝗎𝗇𝗍. \n`origin` To Get A Origin 𝖺𝖼𝖼𝗈𝗎𝗇𝗍 . \n`minecraft` To Get A Minecraft 𝖺𝖼𝖼𝗈𝗎𝗇𝗍 .\n`nitro` To Get A 𝖭𝗂𝗍𝗋𝗈 𝖼𝗈𝖽𝖾 .\n`spotify` To Get A Spotify 𝖺𝖼𝖼𝗈𝗎𝗇𝗍 .\n\n Remember that you are using a 𝖿𝗋𝖾𝖾 𝗀𝖾𝗇. \n\nJet Hub | Official : https://discord.gg/59HSBfT');

message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
