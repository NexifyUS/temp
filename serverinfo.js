import Discord from 'discord.js';

module.exports.run = async (bot, message) =>
  message.channel.send(
    new Discord.RichEmbed()
      .setThumbnail(message.guild.iconURL)
      .setColor('#FFFF00')
      .setTitle('Server Information')
      .addField('Server Name', message.guild.name)
      .addField('Total Members', message.guild.memberCount)
      .addField('Developer', 'Bow Pro#8897')
  );

module.exports.help = {
  name: 'serverinfo'
};
