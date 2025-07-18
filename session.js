//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUs0ZERxQ1hSRkN4ci9WeEIyQnRlU05nN3BzTDNVOVJxNGgxaWx6K0pVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dMTjREanExQzJ1U1gxVy85VVI0ODZaaG8wWCs0azRMUVNRVlJZelhrUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSTZaRXkzYnEyQkZUd1RnS2JVb21mWVp4OWNCcnljek5qVy9zTzhZTEh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSMDZGejJWY0piTDE0OEh4Y3hYY2psditINHp4N3ExMmNpWDhEY1hUUmtJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PMDFHSG1kSjFmTkpoekRTMGMzQzJsQkc2OU1RRk5kM1ljSzV4ekJObFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDOWRMRWl6dEhHVmF4SXNkOHpUV01uZUloR1ozRlVNK2pZWlEybHpvQ0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdXVWJtajNrUnZKVEZQOWRnOVNwWHY5MS9pQkhhQkswQ2hES1ZBSzAyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXk3NWRvaHppTG0zaXRLcERtbkxsVlFCWjZpYWQxeko3M1BETUhHK2hHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM4RFEvTG1rMm9jYWM4ckxpQm84L1VxK2J0cnRYZWR2elFyeE1WS09JNk5BTXJDVGVpR0lhSVZKTmM1dDlISERsZlNFUk96RDNaU01uOWdLNWtVaWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6ImFmSHZrMWYyMWRtTGRaUFUzMTBEQjlMRWZXNW91djd4SXJsOXAyd3dNakU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBHU1lGYlJqU0dDbjlUVTU1aHlIQnciLCJwaG9uZUlkIjoiM2E0ZTYzYTYtZTIwNy00ZjlkLTk4NzAtNjU4ZjEwNmNkYjA2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRGM2wyV0VWNmxlUmZTRlk2N2VzZFRzb0tuRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxOGZwTytaS3BOVDJxOVVLMURPNGFKY1ovbG89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUkRONzNGSEsiLCJtZSI6eyJpZCI6Ijk0NzI3NjM0MTk0OjQyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9TSEFEQSBNRCIsImxpZCI6IjE1NDAzNTE3NjkyMzI3Mjo0MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01idDZQb0RFTlcvNThNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZQUVA0U1prU0M2WkdMMTZpWFFIb2VjQ0VPS2cxVzRJQzdOMzlBUFE1QjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1vSUQ5ZXNsZVczT3pwSmllMTRIMkp0SnpDUlk1Ynd2ZkdMbDNDS0Nwa3RFa2wyem5nTU9mbzVqdjhYT3JxNGp0SjNrYWt5dklmMm9TdExnSVBzSkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDWU9UdXRGelg0d3FLV3JpRHl2YWFTSndGS3FOUDZyc3NxaTYwQUFHdlpDSWlLL0VZZ20rSGpzRWJtR3c4ZTc1aUVXdVd5T0tmdGpYUjBXb3p0eUZpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI3NjM0MTk0OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZUMEQrRW1aRWd1bVJpOWVvbDBCNkhuQWhEaW9OVnVDQXV6ZC9RRDBPUWQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjgxNzYzNCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5PVCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94 72 763 4194",
  PASSWORD: 
    process.env.PASSWORD || "oshada2007",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
