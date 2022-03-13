let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let Bot = require('../events');
let fs = require('fs');
let Config = require('../config');

Bot.addCommand({pattern: 'baileys', fromMe: true, desc: "Checks wheather the message is sent by bot/baileys."}, (async (message, match) => {

  if (!message.reply_message) return await message.sendReply(`*😕 You must reply to any message!*`);
  let { isBaileys } = message.reply_message
  if (!isBaileys) return await message.sendReply('*❌️ This message was not sent using Baileys!*');
  else return await message.sendReply('*✅️ This message was sent using Baileys!*');

}));
