let Bot = require('../events');
let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let Config = require('../config');
let td = Config.WORKTYPE == 'public' ? false : true
let Language = require('../language');
let Lang = Language.getString('ttp');

Bot.addCommand({ pattern: 'ttp ?(.*)', fromMe: td, desc: Lang.TTP_DESC }, (async (message, match) => {

    if (match[1] !== '') {
      var text = match[1]
      var uri = encodeURI(text)
      var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
      await message.sendSticker(Buffer.from(ttinullimage.data));
    } else {
      if (message.reply_message === false) return await message.sendReply(Lang.NEED_WORD);
      var uri = encodeURI(message.reply_message.text)
      var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
      await message.sendSticker(Buffer.from(ttinullimage.data));
    }
}));

Bot.addCommand({ pattern: 'attp ?(.*)', fromMe: td, desc: Lang.ATTP_DESC }, (async (message, match) => {

    if (match[1] !== '') {
      var text = match[1]
      var uri = encodeURI(text)
      var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
      await message.sendSticker(Buffer.from(ttinullimage.data));
    } else {
      if (message.reply_message === false) return await message.sendReply(Lang.NEED_WORD);
      var uri = encodeURI(message.reply_message.text)
      var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
      await message.sendSticker(Buffer.from(ttinullimage.data));
    }
}));
    
Bot.addCommand({pattern: 'emoji ?(.*)', fromMe: td, desc: Lang.EMOJI_DESC}, (async (message, match) => {
       
function _0x610f(_0x4af66c,_0x5a7d90){var _0x282d79=_0x282d();return _0x610f=function(_0x610f6a,_0x293425){_0x610f6a=_0x610f6a-0x184;var _0x142526=_0x282d79[_0x610f6a];return _0x142526;},_0x610f(_0x4af66c,_0x5a7d90);}var _0x4cb67c=_0x610f;(function(_0x7d06cb,_0x48f62b){var _0x92ae07=_0x610f,_0x4a4db5=_0x7d06cb();while(!![]){try{var _0x574e87=-parseInt(_0x92ae07(0x18d))/0x1+-parseInt(_0x92ae07(0x194))/0x2*(-parseInt(_0x92ae07(0x186))/0x3)+parseInt(_0x92ae07(0x190))/0x4*(-parseInt(_0x92ae07(0x18a))/0x5)+parseInt(_0x92ae07(0x197))/0x6*(-parseInt(_0x92ae07(0x188))/0x7)+-parseInt(_0x92ae07(0x187))/0x8*(-parseInt(_0x92ae07(0x192))/0x9)+parseInt(_0x92ae07(0x196))/0xa+parseInt(_0x92ae07(0x191))/0xb*(parseInt(_0x92ae07(0x18b))/0xc);if(_0x574e87===_0x48f62b)break;else _0x4a4db5['push'](_0x4a4db5['shift']());}catch(_0x111d48){_0x4a4db5['push'](_0x4a4db5['shift']());}}}(_0x282d,0xef337));function _0x282d(){var _0x1f1480=['73972LpyjXr','from','13166460wsnskO','746142rBXfRG','text','arraybuffer','data','3NvmpmM','404344rZPbYz','49tMUWON','sendImage','6345fRDthU','963804GWTpVB','get','1471766YNJRMS','https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji=','reply_message','3516PabJvL','187ginxpy','306BcoJOG','NEED_WORD'];_0x282d=function(){return _0x1f1480;};return _0x282d();}if(match[0x1]!==''){var uri=encodeURI(match[0x1]),ttinullimage=await axios[_0x4cb67c(0x18c)](_0x4cb67c(0x18e)+uri,{'responseType':_0x4cb67c(0x184)});await message[_0x4cb67c(0x189)](Buffer[_0x4cb67c(0x195)](ttinullimage[_0x4cb67c(0x185)]));}else{if(message[_0x4cb67c(0x18f)]){var txt=message[_0x4cb67c(0x18f)][_0x4cb67c(0x198)],uri=encodeURI(txt),ttinullimage=await axios[_0x4cb67c(0x18c)]('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji='+uri,{'responseType':'arraybuffer'});await message['sendImage'](Buffer['from'](ttinullimage['data']));}else!message['reply_message']&&match[0x1]===''&&await message['sendReply'](Lang[_0x4cb67c(0x193)]);}
}));
