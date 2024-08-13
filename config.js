const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_51_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg5LFxuICAgICAgICA1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDcxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM4LFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM4LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxLFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDUwLFxuICAgICAgICAxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIktrZlRYWC9QZmE4OGFWdGlib2VPejE2MXc5OUJzOUxWYmZFYUFCdWU0Q289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNzYyNTY5NjAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRTFEMTI1MDU4NzYyRUEzQ0M2RkRENTdGRkQ5NTUzMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5NTA2OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI3NjI1Njk2MDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZBOTVCRkMzMEVBRThGMDBCQ0I4NTUyRjU2MjQ1NUU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDk1MDY5OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwNWQwT3pNNFFYS3ZTakZvNjZZUmVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImZlM2E1ZjFlLWM0ZmUtNDZhYi04N2I5LTJhOWJmMmQyYzY3YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICA2NyxcbiAgICAgIDIwMixcbiAgICAgIDUyLFxuICAgICAgMTAwLFxuICAgICAgMjA0LFxuICAgICAgMTgxLFxuICAgICAgMjUsXG4gICAgICAxNTYsXG4gICAgICAxMzQsXG4gICAgICAzNSxcbiAgICAgIDIxNixcbiAgICAgIDIwMSxcbiAgICAgIDk0LFxuICAgICAgMTkzLFxuICAgICAgMTQ4LFxuICAgICAgMjI1LFxuICAgICAgMjUzLFxuICAgICAgMjIzLFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDMzLFxuICAgICAgMTY5LFxuICAgICAgMjQ5LFxuICAgICAgMTYsXG4gICAgICAyLFxuICAgICAgMTQsXG4gICAgICAxODAsXG4gICAgICA0NSxcbiAgICAgIDI0NCxcbiAgICAgIDg3LFxuICAgICAgMjM1LFxuICAgICAgMTYxLFxuICAgICAgMTAsXG4gICAgICAxNzIsXG4gICAgICAxMTEsXG4gICAgICA5OCxcbiAgICAgIDE1OSxcbiAgICAgIDE1NCxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRaMVdDQVRNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMTI3NjI1Njk2MDM6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwOTAwMjQ5NTEzNTg2OToyOEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLinaTvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKeS91NXdFRUtXL3pyUUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJsVkROZmhQb0NlUkRyeVlPeTgwMXpIQ1RBd3ZKcFh2cjFxNXlCY3NqbUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidDdTdThKcDFTRUlKS3dRL3UyVzBLTTlzb3p0TTVQM1hJa1BmVHduaU5QdnZ5clNTbzhub0xTdlE5UEV1SDdsQjFuWnVWU1E5czJrOTVyTmV5ckc3Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTXBkbklxTmpSU3BBSWlaTHFLbzVlaTNPY1NwK0FZYUNPdzg4aDJhU1VxRkxzcEF4VTMzLzd1V3RsOFVWVExxZlQ0dmhDY0Rab3I2OWZXMUNrWjUyamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNzYyNTY5NjAzOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NTA2OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLUklcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtSSS5qc29uIjogIntcImtleURhdGFcIjpcIngzMk5pQVRJdWJISHQwZ3BnSENYZU91cDNtNE5Kdm9TVnVKMEdUNWRRakk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEzMzQzNjgyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODY4NTg3NzA3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
