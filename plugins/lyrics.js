let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let Leon = require('../events');
let fs = require('fs');
let Config = require('../config');
let got = require('got');
let td = Config.WORKTYPE == 'private' ? true : false

var LYRICS_DESC = "Searches for the music lyrics from name."
var NEED_LYRICS = "*You must enter a music name!*"
var SEARCHING_LYRICS = "```🔍 Searching for your lyrics...```"
var COULDNT_FIND = "*Cannot find any lyrics!*"

if (Config.LANG == 'ML') LYRICS_DESC = "തന്നിരിക്കുന്ന പാട്ടിന്റെ പേര് വെച്ച് പാട്ടിന്റെ വരികൾ തിരയുന്നു.", NEED_LYRICS = "നിങ്ങൾ ഏതെങ്കിലും പാട്ടിന്റെ പേര് നൽകണം.", SEARCHING_LYRICS = "```🔍 നിങ്ങളുടെ വരികൾക്കായി തിരയുന്നു...```", COULDNT_FIND = "*വരികൾ ഒന്നും കണ്ടെത്താനായില്ല!*"
if (Config.LANG == 'ID') LYRICS_DESC = "Mencari lirik musik dari nama.", NEED_LYRICS = "*Anda harus memasukkan nama musik!*", SEARCHING_LYRICS = "```🔍 Mencari lirik Anda...```", COULDNT_FIND = "*Tidak dapat menemukan lirik apapun!*"

Leon.addCommand({pattern: 'lyrics ?(.*)', fromMe: td, desc: LYRICS_DESC}, (async (message, match) => {

function _0x3eea(_0x5640a6,_0x6e2926){const _0x3d9c3d=_0x3d9c();return _0x3eea=function(_0x3eea97,_0x1d1d61){_0x3eea97=_0x3eea97-0x157;let _0xdcb3e=_0x3d9c3d[_0x3eea97];return _0xdcb3e;},_0x3eea(_0x5640a6,_0x6e2926);}const _0x17a2ea=_0x3eea;(function(_0x5e834b,_0x984598){const _0x2daa83=_0x3eea,_0x488360=_0x5e834b();while(!![]){try{const _0x157082=-parseInt(_0x2daa83(0x163))/0x1+-parseInt(_0x2daa83(0x166))/0x2+-parseInt(_0x2daa83(0x157))/0x3*(-parseInt(_0x2daa83(0x162))/0x4)+-parseInt(_0x2daa83(0x165))/0x5+-parseInt(_0x2daa83(0x15c))/0x6*(parseInt(_0x2daa83(0x164))/0x7)+parseInt(_0x2daa83(0x158))/0x8+parseInt(_0x2daa83(0x15e))/0x9;if(_0x157082===_0x984598)break;else _0x488360['push'](_0x488360['shift']());}catch(_0x4216f3){_0x488360['push'](_0x488360['shift']());}}}(_0x3d9c,0xb4fef));function _0x3d9c(){const _0x15ca9d=['/search/lyrics?query=','```','body','32226jcmPMo','API','21393360VzqeYA','parse','result','sendReply','22412KiJixW','865830GcgbmQ','539CJFNtc','6645740JPyEat','1704268OEHokL','321IclyCW','9803816ZHttDN'];_0x3d9c=function(){return _0x15ca9d;};return _0x3d9c();}if(match[0x1]==='')return await message['sendReply'](NEED_LYRICS);if(match[0x1]!==''){let url=Config[_0x17a2ea(0x15d)]+_0x17a2ea(0x159)+match[0x1],res=await got(url),json=JSON[_0x17a2ea(0x15f)](res[_0x17a2ea(0x15b)]);var msg;try{msg=json[_0x17a2ea(0x160)];}catch{msg=COULDNT_FIND;}if(json[_0x17a2ea(0x160)]==undefined||json[_0x17a2ea(0x160)]==null||json[_0x17a2ea(0x160)]=='')msg=COULDNT_FIND;if(msg!=='*Cannot\x20find\x20the\x20lyrics!*')await message[_0x17a2ea(0x161)](SEARCHING_LYRICS),await new Promise(_0x47cde2=>setTimeout(_0x47cde2,0xbb8)),await message[_0x17a2ea(0x161)](_0x17a2ea(0x15a)+msg+_0x17a2ea(0x15a));else return await message[_0x17a2ea(0x161)](msg);}
}));
