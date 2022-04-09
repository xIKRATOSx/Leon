let {MessageType, Mimetype, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let Bot = require('../events');
let fs = require('fs');
let got = require('got');
let Config = require('../config');
let axios = require('axios');
const Heroku = require('heroku-client');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

var isSpamming = false

var SPAM_DESC = 'Spams the entered or replied text.'
var SSPAM_DESC = 'Stops the ongoing spam in chat.'
var SPAM_NEED = '*You must enter or reply to any text to spam!*\n```You can enter stop along with the command to stop spamming.```'
var SPAM_STOPPED = '*✅️ Successfully Stopped Spam!*'
var NO_SPAM = "*❌️ There is no ongoing spam in this chat to stop!*"
if (Config.LANG == 'ML') SPAM_DESC = 'നൽകിയതോ മറുപടി നൽകിയതോ ആയ ടെക്‌സ്‌റ്റ് സ്‌പാം ചെയ്യുന്നു.', SSPAM_DESC = 'ചാറ്റിൽ നടന്നുകൊണ്ടിരിക്കുന്ന സ്പാം നിർത്തുന്നു.', SPAM_NEED = '*നിങ്ങൾ സ്പാമിലേക്ക് ഏതെങ്കിലും വാചകം നൽകണം അല്ലെങ്കിൽ മറുപടി നൽകണം!*', SPAM_STOPPED = '*✅️ സ്പാം വിജയകരമായി നിർത്തി  !*', NO_SPAM = "*❌️ നിർത്താൻ ഈ ചാറ്റിൽ നിലവിലുള്ള സ്പാം ഒന്നുമില്ല!*"
if (Config.LANG == 'ID') SPAM_DESC = 'Spam teks yang dimasukkan atau dibalas.', SSPAM_DESC = 'Menghentikan spam yang sedang berlangsung di obrolan.', SPAM_NEED = '*Anda harus memasukkan atau membalas teks apa pun ke spam!*', SPAM_STOPPED = '*✅️ Berhasil Menghentikan Spam  !*', NO_SPAM = "*❌️ Tidak ada spam yang sedang berlangsung dalam obrolan ini untuk dihentikan!*"

Bot.addCommand({pattern: 'spam ?(.*)', fromMe: true, desc: SPAM_DESC}, (async (message, match) => {

    if (match[1] === '' && (message.reply_message === false || message.reply_message.text === false)) return await message.sendReply(SPAM_NEED);
    isSpamming = true

    if (match[1] !== '') {
       setInterval(async () => {
         var txt = match[1]
         await message.client.sendMessage(message.jid, txt, MessageType.text);
       }, 1000)
     } else if (message.reply_message === true) {
        setInterval(async () => {
          var txt = message.reply_message.text
          await message.client.sendMessage(message.jid, txt, MessageType.text);
        }, 1000)
     }
}));

Bot.addCommand({pattern: 'killspam ?(.*)', fromMe: true, desc: SSPAM_DESC}, (async (message, match) => {

   if (isSpamming) {
     await message.sendReply(SPAM_STOPPED);
     console.log(baseURI);
         await heroku.delete(baseURI + '/dynos').catch(async (error) => {
           await message.sendMessage(error.message);
         });
   } else {
    await message.sendReply(NO_SPAM);
   }
}));
