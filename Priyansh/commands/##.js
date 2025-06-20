module.exports.config = {
 name: "info2",
 version: "1.0.1", 
 hasPermssion: 0,
 credits: "Joshua Sy (modified by Siegfried Sama)", //don't change the credits please
 description: "Admin and Bot info.",
 commandCategory: "...",
	usePrefix: false,
 cooldowns: 1,
 dependencies: 
 {
	"request":"",
	"fs-extra":"",
	"axios":""
 }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
	hours = Math.floor(time / (60 * 60)),
	minutes = Math.floor((time % (60 * 60)) / 60),
	seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =[
"https://i.imgur.com/DDO686J.mp4",
"https://i.imgur.com/WWGiRvB.mp4",
"https://i.imgur.com/20QmmsT.mp4",
"https://i.imgur.com/nN28Eea.mp4",
"https://i.imgur.com/fknQ3Ut.mp4",
"https://i.imgur.com/yXZJ4A9.mp4",
"https://i.imgur.com/aWIyVpN.mp4",
"https://i.imgur.com/aFIwl8X.mp4",
"https://i.imgur.com/SJ60dUB.mp4",
"https://i.imgur.com/ySu69zS.mp4",
"https://i.imgur.com/mAmwCe6.mp4",
"https://i.imgur.com/Sbztqx2.mp4",
"https://i.imgur.com/s2d0BIK.mp4",
"https://i.imgur.com/rWRfAAZ.mp4",
"https://i.imgur.com/dYLBspd.mp4",
"https://i.imgur.com/HCv8Pfs.mp4",
"https://i.imgur.com/jdVLoxo.mp4",
"https://i.imgur.com/hX3Znez.mp4",
"https://i.imgur.com/cispiyh.mp4",
"https://i.imgur.com/ApOSepp.mp4",
"https://i.imgur.com/lFoNnZZ.mp4",
"https://i.imgur.com/qDsEv1Q.mp4",
"https://i.imgur.com/NjWUgW8.mp4",
"https://i.imgur.com/ViP4uvu.mp4",
"https://i.imgur.com/bim2U8C.mp4",
"https://i.imgur.com/YzlGSlm.mp4",
"https://i.imgur.com/HZpxU7h.mp4",
"https://i.imgur.com/exTO3J4.mp4",
"https://i.imgur.com/Xf6HVcA.mp4",
"https://i.imgur.com/9iOci5S.mp4",
"https://i.imgur.com/6w5tnvs.mp4",
"https://i.imgur.com/1L0DMtl.mp4",
"https://i.imgur.com/7wcQ8eW.mp4",
"https://i.imgur.com/3MBTpM8.mp4",
"https://i.imgur.com/8h1Vgum.mp4",
"https://i.imgur.com/CTcsUZk.mp4",
"https://i.imgur.com/e505Ko2.mp4",
"https://i.imgur.com/3umJ6NL.mp4",
		];
var callback = () => api.sendMessage({body:`➢ 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 ☠️⚡(𝐍𝐎𝐓𝐄) 𝑦𝑖 𝑣𝑖𝑑𝑂𝑠 𝑂𝑛 𝑚𝑎𝑡 𝑘𝑟𝑛𝑎 𝑏𝑎𝐾𝑖𝑖 𝑎𝑝 𝑠𝑎𝑏 𝐾𝑖 𝑎𝑝𝑛𝑖 𝑚𝑎𝑟𝑍𝑖 - ☠️👻

⁂ 𝔹𝕆𝕋 ℕ𝔸𝕄𝔼: ${global.config.BOTNAME}
✧ 𝔹𝕆𝕋 𝔸𝔻𝕄𝕀ℕ: ${global.config.ADMINBOT}
♛ 𝔹𝕆𝕋 𝔸𝔻𝕄𝕀ℕ 𝕃𝕀ℕ𝕂: 𝘩𝘵𝘵𝘱𝘴://𝘸𝘸𝘸.𝘧𝘢𝘤𝘦𝘣𝘰𝘰𝘬.𝘤𝘰𝘮/𝘔 𝘛𝘈𝘓𝘏𝘈.𝘏𝘌𝘙𝘌
❂ 𝔹𝕆𝕋 ℙℝ𝔼𝔽𝕀𝕏: ${global.config.PREFIX}
✫ 𝔹𝕆𝕋 𝕆𝕎ℕ𝔼ℝ: 𝘩𝘵𝘵𝘱𝘴://𝘸𝘸𝘸.𝘧𝘢𝘤𝘦𝘣𝘰𝘰𝘬.𝘤𝘰𝘮/𝘔 𝘛𝘈𝘓𝘏𝘈.𝘏𝘌𝘙𝘌
➟ UPTIME
✬ 𝕋𝕆𝔻𝔸𝕐 𝕀𝕊: ${juswa} 

➳ 𝔹𝕆𝕋 𝕀𝕊 ℝ𝕌ℕℕ𝕀ℕ𝔾 ${hours}:${minutes}:${seconds}.
✫ 𝕋ℍ𝔸ℕ𝕂𝕊 𝔽𝕆ℝ 𝕌𝕊𝕀ℕ𝔾 ${global.config.BOTNAME}
`,attachment: fs.createReadStream(__dirname + "owner_video.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "owner_video.mp4")); 
	 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"owner_video.mp4")).on("close",() => callback());
	};
