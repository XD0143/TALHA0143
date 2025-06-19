module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["100065216344877"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] 𝐘𝐨𝐮 𝐝𝐨𝐧'𝐭 𝐡𝐚𝐯𝐞 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐭𝐨 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝, 𝐓𝐡𝐢𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐎𝐧𝐥𝐲 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫 𝐓𝐚𝐥𝐡𝐚", event.threadID, event.messageID);
  api.sendMessage(`[ 𝐎𝐤𝐢𝐢𝐰 𝐁𝐨𝐬𝐬 🙊  ] ${global.config.BOTNAME} 𝐁𝐨𝐭 𝐚𝐫𝐞 𝐧𝐨𝐰 𝐭𝐮𝐫𝐧𝐞𝐝 𝐎𝐟𝐟 (𝐎𝐤𝐢𝐢𝐰 𝐛𝐲𝐞 𝐆𝐡𝐚𝐫𝐞𝐞𝐛𝐎𝐧 🤧😂).`,event.threadID, () =>process.exit(0))
}
