//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['201288455338']
global.premium = ['201288455338']
global.ownernomer = '201288455338'
global.ownername = '‘ Youssef Al Soltan ,'
global.botname = 'Bot Al Soltan V2'
global.footer = 'Al Soltan Bot Inc.'
global.ig = 'https://www.instagram.com/1y._.o2'
global.region = 'Egypt, al bheira, kafr al dawar'
global.sc = 'https://www.instagram.com/1y._.o2'
global.myweb = 'https://youtube.com/channel/UCf57gAihG_YlH7Rj-gbKuHA'
global.packname = 'Al Soltan Bot'
global.author = '@201288455338'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'تم ✓',
    admin: 'يجب ان تكون مشرف في المجموعه!',
    botAdmin: 'من فضلك يرجي رفع البوت مشرف لتفعيل هذا الامر!',
    owner: 'هذا مخصص لصاحب البوت فقط!',
    group: 'هذا مخصص للمجموعات فقط!',
    private: 'هذا مخصص في الخاص فقط ليس المجموعات! ',
    bot: 'هذا مخصص للبوت فقط',
    wait: 'انتظر لحظه من فضلك...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
