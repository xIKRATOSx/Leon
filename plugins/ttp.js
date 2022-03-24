let Bot = require('../events');
let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let Config = require('../config');
let td = Config.WORKTYPE == 'public' ? false : true
let Language = require('../language');
let Lang = Language.getString('ttp');

var NEED_EMO = "*You must enter an emoji and type by splitting with / symbol!*"
var UNSUP = "*❌️ Entered emoji is not supported!*"
var INVALID_CHAR = "*❌️ Invalid Character! You must enter an emoji along with the command.*"
var TYPE_INVALID = "*❌️ Entered type is invalid! Please enter a valid type.*\n\n```Types:```\n*➥ WhatsApp*\n*➥ Facebook*\n*➥ Twitter*\n*➥ Microsoft*\n*➥ Skype*\n*➥ Joypixels*\n*➥ openemoji*\n*➥ Apple*\n*➥ Google*\n*➥ Samsung*\n*➥ LG*"
if (Config.LANG == 'ML') NEED_EMO = "*നിങ്ങൾ ഒരു എമോജിയും ടൈപ്പും / ചിഹ്നം ഉപയോഗിച്ച് വിഭജിച്ച് നൽകണം!*", UNSUP = "*❌️ നൽകിയ ഇമോജി പിന്തുണയ്ക്കുന്നില്ല!*", INVALID_CHAR = "❌️ അസാധുവായ പ്രതീകം! നിങ്ങൾ കമാൻഡിനോടൊപ്പം ഒരു ഇമോജി നൽകണം.*", TYPE_INVALID = "*❌️ നൽകിയ തരം അസാധുവാണ്! ദയവായി ഒരു സാധുവായ തരം നൽകുക.*\n\n```തരങ്ങൾ:```\n*➥ WhatsApp*\n*➥ Facebook*\n*➥ Twitter *\n*➥ Microsoft*\n*➥ Skype*\n*➥ Joypixels*\n*➥ openemoji*\n*➥ Apple*\n*➥ Google*\n*➥ Samsung*\n*➥ LG*"
if (Config.LANG == 'ID') NEED_EMO = "*Anda harus memasukkan emoji dan mengetik dengan memisahkan tanda /!*", UNSUP = "*❌️ Emoji yang dimasukkan tidak didukung!*", INVALID_CHAR = "❌️ Karakter Tidak Valid! Anda harus memasukkan emoji beserta perintahnya .*", TYPE_INVALID = "*❌️ Jenis yang dimasukkan tidak valid! Harap masukkan jenis yang valid.*\n\n```Jenis:```\n*➥ WhatsApp*\n*➥ Facebook*\n*➥ Twitter *\n*➥ Microsoft*\n*➥ Skype*\n*➥ Joypixels*\n*➥ openemoji*\n*➥ Apple*\n*➥ Google*\n*➥ Samsung*\n*➥ LG*"

Bot.addCommand({ pattern: 'ttp ?(.*)', fromMe: td, desc: Lang.TTP_DESC }, (async (message, match) => {

    if (match[1] !== '') {
      var text = match[1]
      var uri = encodeURI(text)
      var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
      await message.sendImage(Buffer.from(ttinullimage.data), "*Made by Leon*");
    } else {
      if (message.reply_message === false) return await message.sendReply(Lang.NEED_WORD);
      var uri = encodeURI(message.reply_message.text)
      var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
      await message.sendImage(Buffer.from(ttinullimage.data), "*Made by Leon*");
    }
}));

Bot.addCommand({ pattern: 'attp ?(.*)', fromMe: td, desc: Lang.ATTP_DESC }, (async (message, match) => {

    if (match[1] !== '') {
      var text = match[1]
      var uri = encodeURI(text)
      var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
      await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    } else {
      if (message.reply_message === false) return await message.sendReply(Lang.NEED_WORD);
      var uri = encodeURI(message.reply_message.text)
      var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
      await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }
}));

Bot.addCommand({pattern: 'emoji ?(.*)', fromMe: td, desc: Lang.EMOJI_DESC}, (async (message, match) => {
       
var _0x70dd=["","\x73\x65\x6E\x64\x52\x65\x70\x6C\x79","\x2F","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x70\x6C\x69\x74","\x57\x68\x61\x74\x73\x41\x70\x70","\uD83D\uDE2E\u200D\uD83D\uDCA8","\x6D\x61\x74\x63\x68","\x41\x50\x49","\x2F\x65\x6D\x6F\x6A\x69\x2D\x74\x6F\x2D\x70\x6E\x67\x3F\x65\x6D\x6F\x6A\x69\x3D","\x26\x74\x79\x70\x65\x3D","\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x54\x79\x70\x65\x20\x69\x73\x20\x49\x6E\x76\x61\x6C\x69\x64","\x6D\x65\x73\x73\x61\x67\x65","\x5F\u27A5\x20\x4E\x61\x6D\x65\x5F\x20\x3A\x20\x2A","\x6E\x61\x6D\x65","\x72\x65\x73\x75\x6C\x74","\x2A\x5C\x6E\x5F\u27A5\x20\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x5F\x20\x3A\x5C\x6E\x2A","\x64\x65\x73\x63","\x2A\x5C\x6E\x5F\u27A5\x20\x45\x6D\x6F\x6A\x69\x5F\x20\x3A\x20\x2A","\x65\x6D\x6F\x6A\x69","\x2A\x5C\x6E\x5F\u27A5\x20\x55\x6E\x69\x63\x6F\x64\x65\x5F\x20\x3A\x20\x2A","\x75\x6E\x69\x63\x6F\x64\x65","\x2A\x5C\x6E\x5F\u27A5\x20\x54\x79\x70\x65\x5F\x20\x3A\x20\x2A","\x2A\x5C\x6E\x5C\x6E","\x4C\x41\x4E\x47","\x4D\x4C","\x2A\x54\x4F\x58\x49\x43\x20\x44\x45\x56\x49\x4C\x20\x41\x50\x49\x20\u0D05\u0D27\u0D3F\u0D15\u0D3E\u0D30\u0D2A\u0D4D\u0D2A\u0D46\u0D1F\u0D41\u0D24\u0D4D\u0D24\u0D3F\u0D2F\u0D24\u0D4D\x2A","\x2A\x50\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x54\x4F\x58\x49\x43\x20\x44\x45\x56\x49\x4C\x20\x41\x50\x49\x2A","\x69\x6D\x61\x67\x65","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x64\x61\x74\x61","\x66\x72\x6F\x6D","\x73\x65\x6E\x64\x49\x6D\x61\x67\x65"];if(match[1]=== _0x70dd[0]){return  await message[_0x70dd[1]](NEED_EMO)};var emoji,type;if(match[1][_0x70dd[3]](_0x70dd[2])){emoji= match[1][_0x70dd[4]](_0x70dd[2])[0];type= match[1][_0x70dd[4]](_0x70dd[2])[1]}else {emoji= match[1];type= _0x70dd[5]};if(emoji== encodeURI(_0x70dd[6])|| emoji== _0x70dd[6]){return  await message[_0x70dd[1]](UNSUP)};var emoR=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;if(!emoji[_0x70dd[7]](emoR)){return  await message[_0x70dd[1]](INVALID_CHAR)};let url=Config[_0x70dd[8]]+ _0x70dd[9]+ emoji+ _0x70dd[10]+ type;let res= await got(url);let json=JSON[_0x70dd[12]](res[_0x70dd[11]]);if(json[_0x70dd[14]][_0x70dd[3]](_0x70dd[13])){return  await message[_0x70dd[1]](TYPE_INVALID)};var cap=`${_0x70dd[15]}${json[_0x70dd[17]][_0x70dd[16]]}${_0x70dd[18]}${json[_0x70dd[17]][_0x70dd[19]]}${_0x70dd[20]}${json[_0x70dd[17]][_0x70dd[21]]}${_0x70dd[22]}${json[_0x70dd[17]][_0x70dd[23]]}${_0x70dd[24]}${type== undefined?_0x70dd[5]:type}${_0x70dd[25]}${Config[_0x70dd[26]]== _0x70dd[27]?_0x70dd[28]:_0x70dd[29]}${_0x70dd[0]}`;let png= await axios[_0x70dd[32]](json[_0x70dd[17]][_0x70dd[30]],{responseType:_0x70dd[31]});return  await message[_0x70dd[35]](Buffer[_0x70dd[34]](png[_0x70dd[33]]),cap)
}));

