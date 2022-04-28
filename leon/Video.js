const {MessageType, Presence, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const Base = require('./Base');
const Message = require('./Message');
const ReplyMessage = require('./ReplyMessage');

class Video extends Base {
    constructor(client, data) {
        super(client);
        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data.key.id === undefined ? undefined : data.key.id;
        this.jid = data.key.remoteJid;
        this.fromMe = data.key.fromMe;
        this.caption = data.message.videoMessage.caption === null ? data.message.videoMessage.caption : '';
        this.url = data.message.videoMessage.url;
        this.timestamp = typeof(data.messageTimestamp) === 'object' ? data.messageTimestamp.low : data.messageTimestamp;
        this.mimetype = data.message.videoMessage.mimetype;
        this.height = data.message.videoMessage.height;
        this.width = data.message.videoMessage.width;
        this.mediaKey = data.message.videoMessage.mediaKey;
        this.data = data;
        
        if (data.message.videoMessage.hasOwnProperty('contextInfo') && data.message.contextInfo.quotedMessage) { 
            this.reply_message = new ReplyMessage(this.client, data.message.videoMessage.contextInfo); }
        else {
            this.reply_message = false;
        }
        
        return super._patch(data);
    }

    async delete() {
        return await this.client.deleteMessage(this.jid, {id: this.id, remoteJid: this.jid, fromMe: true})
    }

    async sendReply(text) {
        var message = await this.client.sendMessage(this.jid, text, MessageType.text, { quoted: this.data })
        return new Message(this.client, message)
    }

    async sendButton(msg, footer, id, name) {
      const buttons = [
        {buttonId: id, buttonText: {displayText: name}, type: 1}
      ]

      const buttonMessage = {
          contentText: msg,
          footerText: footer,
          buttons: buttons,
          headerType: 1
      }
      await this.client.sendMessage(this.jid, buttonMessage, MessageType.buttonsMessage, { quoted: this.data })
    }

    async send2Button(msg, footer, id1, name1, id2, name2) {
      const buttons = [
        {buttonId: id1, buttonText: {displayText: name1}, type: 1},
        {buttonId: id2, buttonText: {displayText: name2}, type: 1}
      ]

      const buttonMessage = {
          contentText: msg,
          footerText: footer,
          buttons: buttons,
          headerType: 1
      }
      await this.client.sendMessage(this.jid, buttonMessage, MessageType.buttonsMessage, { quoted: this.data })
    }

    async send3Button(msg, footer, id1, name1, id2, name2, id3, name3) {
      const buttons = [
        {buttonId: id1, buttonText: {displayText: name1}, type: 1},
        {buttonId: id2, buttonText: {displayText: name2}, type: 1},
        {buttonId: id3, buttonText: {displayText: name3}, type: 1}
      ]

      const buttonMessage = {
          contentText: msg,
          footerText: footer,
          buttons: buttons,
          headerType: 1
      }
      await this.client.sendMessage(this.jid, buttonMessage, MessageType.buttonsMessage, { quoted: this.data })
    }

    async sendMessage(content, type, options) {
        return await this.client.sendMessage(this.jid, content, type, options)
    }

    async sendImage(image, cap) {
        return await this.client.sendMessage(this.jid, image, MessageType.image, {mimetype: Mimetype.png, caption: cap, quoted: this.data})
    }

    async sendImageAsViewonce(image, cap) {
        return await this.client.sendMessage(this.jid, image, MessageType.image, {mimetype: Mimetype.png, caption: cap, readViewOnce: true, quoted: this.data})
    }

    async sendVideo(video, cap) {
        return await this.client.sendMessage(this.jid, video, MessageType.video, {mimetype: Mimetype.mp4, caption: cap, quoted: this.data})
    }

    async sendVideoAsViewonce(video, cap) {
        return await this.client.sendMessage(this.jid, video, MessageType.video, {mimetype: Mimetype.mp4, caption: cap, readViewOnce: true, quoted: this.data})
    }

    async sendVideoAsGif(gif, cap) {
        return await this.client.sendMessage(this.jid, gif, MessageType.video, {mimetype: Mimetype.gif, caption: cap, quoted: this.data})
    }

    async sendAudio(audio) {
        return await this.client.sendMessage(this.jid, audio, MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: this.data})
    }

    async sendAudioAsVoice(voice) {
        return await this.client.sendMessage(this.jid, voice, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: this.data})
    }

    async sendUnread() {
        return await this.client.chatRead(this.jid, 'unread')
    }

    async sendTyping() {
        return await this.client.updatePresence(this.jid, Presence.composing) ;
    }

    async sendRecording() {
        return await this.client.updatePresence(this.jid, Presence.recording) ;
    }

    async sendOnline() {
        return await this.client.updatePresence(this.jid, Presence.available) ;
    }

    async sendOffline() {
        return await this.client.updatePresence(this.jid, Presence.unavailable) ;
    }

    async sendRead() {
        return await this.client.chatRead(this.jid);
    }

    async download(location = this.id) {
        await this.client.downloadAndSaveMediaMessage(this.data, location);
        return this.id + '.' + this.mimetype.split('/')[1];
    }
};

module.exports = Video;
