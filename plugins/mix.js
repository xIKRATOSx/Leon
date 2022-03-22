let Bot = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let got = require('got');
let Config = require('../config');

var MIX_DESC = "Mixes a pair of emoji to image."
var NEED_EMO = "*You must enter 2 emojis to mix each other!*\n```Example:```\n```.mix 😊😶```"
var NEED_TWO = "*Please enter 2 emojis to mix!*\n```Example:```\n```.mix 🙂🙃```"
var NOT_SUP = "*Emoji is not Supported! Try any other pair.*"
if (Config.LANG == 'ML') MIX_DESC = "ചിത്രമായി ഒരു ജോടി ഇമോജി മിക്സ് ചെയ്യുന്നു.", NEED_EMO = "*പരസ്പരം മിക്സ് ചെയ്യുന്നതിന് നിങ്ങൾ 2 ഇമോജികൾ നൽകണം!*\n```ഉദാഹരണം:```\n```.mix 😊😶```", NEED_TWO = "*മിക്‌സ് ചെയ്യാൻ 2 ഇമോജികൾ നൽകുക!*\n```ഉദാഹരണം:```\n```.mix 😉😇```", NOT_SUP = "*ഇമോജി പിന്തുണയ്ക്കുന്നില്ല! മറ്റേതെങ്കിലും ജോഡി പരീക്ഷിക്കുക.*"
if (Config.LANG == 'ID') MIX_DESC = "Mencampur sepasang emoji ke gambar.", NEED_EMO = "*Anda harus memasukkan 2 emoji untuk mencampur satu sama lain!*\n```Contoh:```\n```.mix 😊😶```", NEED_TWO = "*Masukkan 2 emoji untuk dicampur!*\n```Contoh:```\n```.mix 😉😇```", NOT_SUP = "*Emoji tidak Didukung! Coba pasangan lain.*"

Bot.addCommand({pattern: 'mix ?(.*)', fromMe: true, desc: MIX_DESC}, (async (message, match) => {

  if (match[1] === '') return await message.sendReply(NEED_EMO);
  let url = Config.API + '/emoji-mix?emoji=' + match[1]
  let res = await got(url);
  let json = JSON.parse(res.body);
  if (json.message.includes('any')) return await message.sendReply(NEED_TWO);
  if (json.message.includes('Emoji')) return await message.sendReply(NOT_SUP);
  var img = await axios.get(json.result, { responseType: 'arraybuffer' })
  return await message.sendImage(Buffer.from(img.data), "*Powered by TOXIC DEVIL API*");
}));
