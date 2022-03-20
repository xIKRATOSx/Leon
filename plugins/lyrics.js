let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let Bot = require('../events');
let fs = require('fs');
let Config = require('../config');
let got = require('got');
let td = Config.WORKTYPE == 'private' ? true : false

var LYRICS_DESC = "Searches for the music lyrics from name."
var NEED_LYRIC = "*You must enter a music name!*"
var SEARCHING_LYRICS = "```🔍 Searching for your lyrics...```"
var COULDNT_FIND = "*Cannot find any lyrics!*"

if (Config.LANG == 'ML') LYRICS_DESC = "തന്നിരിക്കുന്ന പാട്ടിന്റെ പേര് വെച്ച് പാട്ടിന്റെ വരികൾ തിരയുന്നു.", NEED_LYRICS = "നിങ്ങൾ ഏതെങ്കിലും പാട്ടിന്റെ പേര് നൽകണം.", SEARCHING_LYRICS = "```🔍 നിങ്ങളുടെ വരികൾക്കായി തിരയുന്നു...```", COULDNT_FIND = "*വരികൾ ഒന്നും കണ്ടെത്താനായില്ല!*"
if (Config.LANG == 'ID') LYRICS_DESC = "Mencari lirik musik dari nama.", NEED_LYRICS = "*Anda harus memasukkan nama musik!*", SEARCHING_LYRICS = "```🔍 Mencari lirik Anda...```", COULDNT_FIND = "*Tidak dapat menemukan lirik apapun!*"

Bot.addCommand({pattern: 'lyrics ?(.*)', fromMe: td, desc: LYRICS_DESC}, (async (message, match) => {

function _0x41c9(){const _0x5ce8b9=['6537546hcIRaj','result','372RQcDtR','parse','74082rdJJfb','15219HzOlrr','*Cannot\x20find\x20the\x20lyrics!*','body','API','223664ThqIcM','2202660mfgUTj','318967deIrcI','```','/search/lyrics?query=','40wRITzb','*TOXIC\x20DEVIL\x20API\x20അധികാരപ്പെടുത്തിയത്*','LANG','285FqqWvU','15PrPaOQ','556900eYFvRB','sendReply','62GAXvXq','*Powered\x20by\x20TOXIC\x20DEVIL\x20API*'];_0x41c9=function(){return _0x5ce8b9;};return _0x41c9();}function _0x2a28(_0x69ff8f,_0x25ba0e){const _0x41c9b2=_0x41c9();return _0x2a28=function(_0x2a28c3,_0x201f5d){_0x2a28c3=_0x2a28c3-0xcf;let _0x97aab8=_0x41c9b2[_0x2a28c3];return _0x97aab8;},_0x2a28(_0x69ff8f,_0x25ba0e);}const _0x5f34e3=_0x2a28;(function(_0xe9d2a4,_0x1339ee){const _0x1f60a7=_0x2a28,_0x2f5afa=_0xe9d2a4();while(!![]){try{const _0x483b61=parseInt(_0x1f60a7(0xcf))/0x1*(-parseInt(_0x1f60a7(0xdf))/0x2)+-parseInt(_0x1f60a7(0xdc))/0x3*(-parseInt(_0x1f60a7(0xdd))/0x4)+-parseInt(_0x1f60a7(0xdb))/0x5*(-parseInt(_0x1f60a7(0xe5))/0x6)+parseInt(_0x1f60a7(0xd3))/0x7*(-parseInt(_0x1f60a7(0xd8))/0x8)+parseInt(_0x1f60a7(0xe1))/0x9+-parseInt(_0x1f60a7(0xd4))/0xa+-parseInt(_0x1f60a7(0xd5))/0xb*(parseInt(_0x1f60a7(0xe3))/0xc);if(_0x483b61===_0x1339ee)break;else _0x2f5afa['push'](_0x2f5afa['shift']());}catch(_0x108827){_0x2f5afa['push'](_0x2f5afa['shift']());}}}(_0x41c9,0x5bb18));if(match[0x1]==='')return await message[_0x5f34e3(0xde)](NEED_LYRICS);if(match[0x1]!==''){let url=Config[_0x5f34e3(0xd2)]+_0x5f34e3(0xd7)+match[0x1],res=await got(url),json=JSON[_0x5f34e3(0xe4)](res[_0x5f34e3(0xd1)]);var msg;try{msg=json[_0x5f34e3(0xe2)];}catch{msg=COULDNT_FIND;}if(msg!==_0x5f34e3(0xd0)){await message['sendReply'](SEARCHING_LYRICS),await new Promise(_0x455f76=>setTimeout(_0x455f76,0xbb8));let POWERED=Config[_0x5f34e3(0xda)]=='ML'?_0x5f34e3(0xd9):_0x5f34e3(0xe0);await message[_0x5f34e3(0xde)](_0x5f34e3(0xd6)+msg+_0x5f34e3(0xd6)+'\x0a\x0a'+POWERED);}else return await message[_0x5f34e3(0xde)](msg);}
}));
