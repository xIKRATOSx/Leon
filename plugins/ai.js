let Bot = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let PD = require('./sql/plugin');
let Config = require('../config');
let td = Config.WORKTYPE == 'public' ? false : true
let Language = require('../language');
let Lang = Language.getString('ai');

var NAME = "Name"
var ABOUT = "About"
var NUMBER = "Number"
var LINK = "Link"
var VERSION = "Version"
var BRANCH = "Branch"
var INT_CMD = "Internal Commands"
var EXT_CMD = "External Commands"
var TTL_CMD = "Total Commands"
var OWNER = "Owner"
var C_OWNER = "Contact Owner"
var DEV = "Developer"
if (Config.LANG == 'ML') NAME = "പേര്", ABOUT = "എബൌട്ട്‌", NUMBER = "നമ്പർ", LINK = "ലിങ്ക്", VERSION = "പതിപ്പ്", BRANCH = "ബ്രാഞ്ച്", INT_CMD = "ആന്തരിക കമാൻഡുകൾ", EXT_CMD = "ബാഹ്യ കമാൻഡുകൾ", TTL_CMD = "മൊത്തം കമാൻഡുകൾ", OWNER = "ഉടമ", C_OWNER = "ഉടമയെ ബന്ധപ്പെടുക", DEV = "ഡെവലപ്പർ"
if (Config.LANG == 'ID') NAME = "Nama", ABOUT = "Tentang", NUMBER = "Nomor", LINK = "Tautan", VERSION = "Versi", BRANCH = "Cabang", INT_CMD = "Perintah Internal", EXT_CMD = "Perintah External", TTL_CMD = "Total Perintah", OWNER = "Pemilik", C_OWNER = "Hubungi Pemilik", DEV = "Pengembang"

Bot.addCommand({pattern: 'simi ?(.*)', fromMe: td, desc: Lang.SIMI_DESC}, async (message, match) => {
    try {
      await axios.get(Config.API + '/ai/simi?text=' + match[1] + '&lang=' + Config.LANG).then(async (json) => {
        await message.sendReply('\n*🤖 '+ Lang.BOT_DIVIDER +'* ```' + json.data.response + '```\n');
      });
    } catch (e) {
      await message.sendReply(Lang.NOT_FOUND_RESPONSE);
    }
});

Bot.addCommand({pattern: 'aco ?(.*)', fromMe: td, desc: Lang.ACO_DESC}, async (message, match) => {
    try {
      let id = message.jid.endsWith('g.us') ? message.data.participant.split('@')[0] : message.jid.split('@')[0]
      await axios.get(Config.API + '/ai/aco?text=' + match[1] + '&id=' + id + '&lang=' + Config.LANG).then(async (json) => {
        await message.sendReply('\n*💬 '+ Lang.BOT_DIVIDER +'* ```' + json.data.response + '```\n');
      });
    } catch (e) {
      await message.sendReply(Lang.NOT_FOUND_RESPONSE);
    }
});

Bot.addCommand({pattern: 'info ?(.*)', fromMe: td, desc: Lang.INFO_BOT}, (async (message, match) => {

var _0xf8d1=["\x6A\x69\x64","\x75\x73\x65\x72","\x63\x6C\x69\x65\x6E\x74","\x67\x65\x74\x50\x72\x6F\x66\x69\x6C\x65\x50\x69\x63\x74\x75\x72\x65","","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x62\x64\x79\x30\x4A\x53\x42\x2F\x61\x76\x61\x74\x61\x72\x2D\x63\x6F\x6E\x74\x61\x63\x74\x2E\x70\x6E\x67","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x67\x65\x74\x53\x74\x61\x74\x75\x73","\x69\x73\x4F\x6E\x57\x68\x61\x74\x73\x41\x70\x70","\x6E\x61\x6D\x65","\x66\x69\x6E\x64\x41\x6C\x6C","\x50\x6C\x75\x67\x69\x6E\x44\x42","\x6C\x65\x6E\x67\x74\x68","\x63\x6F\x6D\x6D\x61\x6E\x64\x73","\x5F\u27A5\x20","\x5F\x20\x3A\x20\x2A","\x2A\x0A\x5F\u27A5\x20","\x73\x74\x61\x74\x75\x73","\x2A\x0A\x5F\u27A5\x20\x4A\x49\x44\x5F\x20\x3A\x20\x2A","\x40","\x73\x70\x6C\x69\x74","\x5F\x20\x3A\x20\x2A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x61\x2E\x6D\x65\x2F","\x56\x45\x52\x53\x49\x4F\x4E","\x42\x52\x41\x4E\x43\x48","\x4F\x57\x4E\x45\x52","\x4F\x57\x4E\x45\x52\x4E\x55\x4D","\x5F\x20\x3A\x20\x2A\x54\x4F\x58\x49\x43\x20\x44\x45\x56\x49\x4C\x2A","\x64\x61\x74\x61","\x66\x72\x6F\x6D","\x73\x65\x6E\x64\x49\x6D\x61\x67\x65"];var me=message[_0xf8d1[2]][_0xf8d1[1]][_0xf8d1[0]];var ppUrl= await message[_0xf8d1[2]][_0xf8d1[3]](me);if(ppUrl=== undefined|| ppUrl=== null|| ppUrl== _0xf8d1[4]){ppUrl= _0xf8d1[5]};var pp= await axios[_0xf8d1[7]](ppUrl,{responseType:_0xf8d1[6]});var about= await message[_0xf8d1[2]][_0xf8d1[8]](me);var us= await message[_0xf8d1[2]][_0xf8d1[9]](me);var name=message[_0xf8d1[2]][_0xf8d1[1]][_0xf8d1[10]];var ec= await PD[_0xf8d1[12]][_0xf8d1[11]]();ec= ec[_0xf8d1[13]];var ic=Bot[_0xf8d1[14]][_0xf8d1[13]]- ec;var ttc=ic+ ec;var msg=_0xf8d1[15]+ NAME+ _0xf8d1[16]+ name+ _0xf8d1[17]+ ABOUT+ _0xf8d1[16]+ about[_0xf8d1[18]]+ _0xf8d1[19]+ us[_0xf8d1[0]]+ _0xf8d1[17]+ NUMBER+ _0xf8d1[16]+ us[_0xf8d1[0]][_0xf8d1[21]](_0xf8d1[20])[0]+ _0xf8d1[17]+ LINK+ _0xf8d1[22]+ us[_0xf8d1[0]][_0xf8d1[21]](_0xf8d1[20])[0]+ _0xf8d1[17]+ VERSION+ _0xf8d1[16]+ Config[_0xf8d1[23]]+ _0xf8d1[17]+ BRANCH+ _0xf8d1[16]+ Config[_0xf8d1[24]]+ _0xf8d1[17]+ INT_CMD+ _0xf8d1[16]+ ic+ _0xf8d1[17]+ EXT_CMD+ _0xf8d1[16]+ ec+ _0xf8d1[17]+ TTL_CMD+ _0xf8d1[16]+ ttc+ _0xf8d1[17]+ OWNER+ _0xf8d1[16]+ Config[_0xf8d1[25]]+ _0xf8d1[17]+ C_OWNER+ _0xf8d1[22]+ Config[_0xf8d1[26]]+ _0xf8d1[17]+ DEV+ _0xf8d1[27];return  await message[_0xf8d1[30]](Buffer[_0xf8d1[29]](pp[_0xf8d1[28]]),msg)
}));
