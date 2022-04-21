let Leon = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let fs = require('fs')
let conf = require('../config');
let FilterDb = require('./sql/filters');
let Language = require('../language');
let Lang = Language.getString('filters');
let Heroku = require('heroku-client');
const heroku = new Heroku({
    token: conf.HEROKU.API_KEY
});

let baseURI = '/apps/' + conf.HEROKU.APP_NAME;

Leon.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, ''), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
    }
}));

Leon.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})
    }
}));

Leon.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
            }
        }
    );
}));

var _0x1b803f=_0x93c4;(function(_0x5851dd,_0xeb1f6b){var _0x3f50ca=_0x93c4,_0x3ef0f8=_0x5851dd();while(!![]){try{var _0x5dcf74=parseInt(_0x3f50ca(0x1c6))/0x1*(parseInt(_0x3f50ca(0x1ca))/0x2)+-parseInt(_0x3f50ca(0x1d4))/0x3*(-parseInt(_0x3f50ca(0x1c7))/0x4)+-parseInt(_0x3f50ca(0x1c8))/0x5+parseInt(_0x3f50ca(0x1d7))/0x6+-parseInt(_0x3f50ca(0x1d5))/0x7+parseInt(_0x3f50ca(0x1bc))/0x8*(-parseInt(_0x3f50ca(0x1c0))/0x9)+-parseInt(_0x3f50ca(0x1d6))/0xa*(parseInt(_0x3f50ca(0x1c5))/0xb);if(_0x5dcf74===_0xeb1f6b)break;else _0x3ef0f8['push'](_0x3ef0f8['shift']());}catch(_0x1b11cd){_0x3ef0f8['push'](_0x3ef0f8['shift']());}}}(_0x3a5c,0xcdc63));var Config=require(_0x1b803f(0x1c9));Leon[_0x1b803f(0x1bb)]({'on':_0x1b803f(0x1cd),'fromMe':!![],'deleteCommand':![],'dontAddCommandList':!![]},async(_0x845adf,_0x1a8a56)=>{var _0x46b8e9=_0x1b803f;if(!_0x845adf[_0x46b8e9(0x1bf)][_0x46b8e9(0x1c2)](_0x46b8e9(0x1c1)))return;function _0x2576de(_0x443402){var _0xe7d2a8=_0x46b8e9;if(_0x443402[_0xe7d2a8(0x1cc)]%0x2==0x0)return _0x443402[_0xe7d2a8(0x1d1)](0x0,_0x443402[_0xe7d2a8(0x1cc)]/0x2);return _0x443402;}function _0x3dd47d(_0x2c54ab,_0x5dadeb){var _0x100378=_0x46b8e9;_0x2c54ab=_0x2c54ab[_0x100378(0x1ce)](),_0x5dadeb=_0x5dadeb['toLowerCase']();var _0x33b522=new Array();for(var _0x2e1391=0x0;_0x2e1391<=_0x2c54ab[_0x100378(0x1cc)];_0x2e1391++){var _0x46f94a=_0x2e1391;for(var _0x5b9abd=0x0;_0x5b9abd<=_0x5dadeb[_0x100378(0x1cc)];_0x5b9abd++){if(_0x2e1391==0x0)_0x33b522[_0x5b9abd]=_0x5b9abd;else{if(_0x5b9abd>0x0){var _0xc8dc2d=_0x33b522[_0x5b9abd-0x1];if(_0x2c54ab[_0x100378(0x1c4)](_0x2e1391-0x1)!=_0x5dadeb[_0x100378(0x1c4)](_0x5b9abd-0x1))_0xc8dc2d=Math[_0x100378(0x1c3)](Math['min'](_0xc8dc2d,_0x46f94a),_0x33b522[_0x5b9abd])+0x1;_0x33b522[_0x5b9abd-0x1]=_0x46f94a,_0x46f94a=_0xc8dc2d;}}}if(_0x2e1391>0x0)_0x33b522[_0x5dadeb[_0x100378(0x1cc)]]=_0x46f94a;}return _0x33b522[_0x5dadeb[_0x100378(0x1cc)]];}function _0x3b31d0(_0x5dfd73,_0x2f8767){var _0x2d4427=_0x46b8e9,_0x2c7c1b=_0x5dfd73,_0x4cb0e6=_0x2f8767;_0x5dfd73[_0x2d4427(0x1cc)]<_0x2f8767[_0x2d4427(0x1cc)]&&(_0x2c7c1b=_0x2f8767,_0x4cb0e6=_0x5dfd73);var _0x3cc8d9=_0x2c7c1b[_0x2d4427(0x1cc)];if(_0x3cc8d9==0x0)return 0x1;return(_0x3cc8d9-_0x3dd47d(_0x2c7c1b,_0x4cb0e6))/parseFloat(_0x3cc8d9);}var _0x1d2556='';/\[(\W*)\]/['test'](Config['HANDLERS'])?_0x1d2556=Config[_0x46b8e9(0x1be)][_0x46b8e9(0x1d3)](/\[(\W*)\]/)[0x1][0x0]:_0x1d2556='';if(!_0x845adf[_0x46b8e9(0x1d8)]['startsWith'](_0x1d2556))return;var _0x164459=[];Leon[_0x46b8e9(0x1d0)]['map'](_0x1f8545=>_0x164459[_0x46b8e9(0x1cf)](_0x1f8545));var _0x570a42=await _0x2576de(_0x1a8a56[0x1]),_0x4aaa9f=_0x164459['find'](_0xf614e0=>_0xf614e0[_0x46b8e9(0x1d3)](_0x570a42));let _0x18003a=await _0x3b31d0(_0x4aaa9f,_0x1d2556+_0x1a8a56[0x1]);if(_0x18003a>0.6&&!_0x1a8a56[0x1][_0x46b8e9(0x1d2)](_0x4aaa9f))return await _0x845adf[_0x46b8e9(0x1d9)](_0x46b8e9(0x1cb)+_0x4aaa9f+_0x46b8e9(0x1bd));});function _0x93c4(_0x27115f,_0x13c21){var _0x3a5cb4=_0x3a5c();return _0x93c4=function(_0x93c47b,_0x360fb0){_0x93c47b=_0x93c47b-0x1bb;var _0x2b0126=_0x3a5cb4[_0x93c47b];return _0x2b0126;},_0x93c4(_0x27115f,_0x13c21);}function _0x3a5c(){var _0x3d822a=['*Command\x20not\x20found!*\x0a*Similar\x20Command:*\x20```','length','text','toLowerCase','push','commands','slice','includes','match','2335083ycbpdz','828359mxgMYD','180CmBVOx','2501628ASQUvE','message','sendReply','addCommand','16wYHhSh','```','HANDLERS','jid','2231937zeOqMm','67484@s.whatsapp.net','endsWith','min','charAt','302038rRDftd','4XOiCnj','4ivQcQi','37225ykvKqI','../config','381782CYITrM'];_0x3a5c=function(){return _0x3d822a;};return _0x3a5c();}
