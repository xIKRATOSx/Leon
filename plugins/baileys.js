let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let Bot = require('../events');
let fs = require('fs');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('clear');
let td = Config.WORKTYPE == 'public' ? false : true

var BAILEYS_DESC;
if (Config.LANG == 'EN') BAILEYS_DESC = "Checks wheather the message is sent by bot/baileys."
if (Config.LANG == 'ML') BAILEYS_DESC = "സന്ദേശം അയച്ചത് ബോട്ട്/ബെയ്‌ലിയാണോ എന്ന് പരിശോധിക്കുന്നു."
if (Config.LANG == 'ID') BAILEYS_DESC = "Memeriksa apakah pesan dikirim oleh bot/baileys."

Bot.addCommand({pattern: 'baileys', fromMe: td, desc: BAILEYS_DESC}, (async (message, match) => {

var _0x9073=["\x72\x65\x70\x6C\x79\x5F\x6D\x65\x73\x73\x61\x67\x65","\x74\x65\x78\x74","\x73\x65\x6E\x64\x52\x65\x70\x6C\x79"];if(!message[_0x9073[0]]||  !message[_0x9073[0]][_0x9073[1]]){return  await message[_0x9073[2]](Lang.NO_REPL)};let {isBaileys}=message[_0x9073[0]][_0x9073[1]];if(!isBaileys){return  await message[_0x9073[2]](Lang.BAILEYS_NO)}else {return  await message[_0x9073[2]](Lang.BAILEYS_YES)}

}));
