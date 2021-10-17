__path = process.cwd()

// Jan asal ubah ngab
var express = require('express');
var db = require(__path + '/database/db');
try {
var kuhong = db.get('ojan'); // jan diubah
} catch (e) {
	console.log('WELCOME TO GX API!') // boleh diubah
}

var listkey = ['sayahafiz', 'GRATISAN'];
var creatorList = ['Eka Gans']; // Nama Lu Ngab
var creator = creatorList[Math.floor(Math.random() * creatorList.length)]; // Ini jan diubah
var key = 'EkakeY' // Apikey Lu Ngab

// Required Modules :
var ffmpeg = require('fluent-ffmpeg');
var brainly = require('brainly-scraper-v2');
var imageToBase64 = require('image-to-base64');
var upload = require(__path + '/lib/upload.js');
var axios = require('axios');
var FormData = require('form-data');
var yt = require('ytdl-core');
var ytpl = require('ytpl');
var qrcode = require('qrcode');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require('scrape-yt');
var gtts = require('node-gtts');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var yts = require('yt-search');
var fs = require('fs');
var util = require('util');
var qs = require('qs');
var router  = express.Router();

var { tts, wait, simih, getBuffer, h2k, banner, getRandom, start, info, success, close, pickRandom } = require(__path + '/lib/functions.js');
var { RemoveBg } = require('remove.bg');
var { tahta } = require(__path + '/lib/tahta.js');
var { createHash } = require('crypto')
var { spawn, exec } = require('child_process');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var { recognize } = require(__path + '/lib/ocr.js')
var options = require(__path + '/lib/options.js');
var { Vokal, Base, Searchnabi, Gempa } = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

// loghandler :
loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter apikey!'
    },
    notnama: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nama'
    },
    notimg: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter img'
    },
    notemoji: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter emoji'
    },
    notangka: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter angka'
    },
    notnomor: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nomor'
    },
    notjumlah: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter jumlah'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter url'
    },
    notquery: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter query'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter kata'
    },
    notlang: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter bahasa'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Tema tidak tersedia silahkan masukkan texmaker/list atau baca dokumentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: `Apikey tidak ditemukan! Silahkan kontak Owner untuk dapatkan Apikey wa.me/62895337278647`
    },
    invalidLink: {
        status: false,
        creator: `${creator}`,
        message: 'Masukan link yang valid!'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'Kata tidak valid'
    },
    invalidtext: {
    	status: false,
        creator: `${creator}`,
        message: 'Teks tidak valid'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    notbase64: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Masukan parameter teks base64'
    },
    number: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Teks harus berupa angka!'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'Erorr! Mungkin Sedang dalam perbaikan'
    }
}

var error = __path + '/views/error.html' // Error
var invalidKey = __path + '/views/invalidKey.html' // Apikey Invalid

// Api Features :
        var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------kuhong-api-storage'+'ojan';

// DATA CEK APIKEY
router.get('/cekapikey', async (req, res, next) => {
    var apikeyInput = req.query.apikey;

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput !== `${key}`) return res.sendFile(invalidKey)
	var limit = 'undefined'
        if (apikeyInput == `${key}`) { limit = 'Unlimited!' }

try {
	res.json({
               status : `active`,
                apikey : apikeyInput,
                limit : limit
            })
 
} catch (e) {
	res.sendFile(error)
   }
})

router.get('/changekey', (req, res, next) => {
    var apikeyInput = req.query.apikey;

    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)

    try {
        kuhong.insert({
            apikey: apikeyInput
        })
        .then(() => {
              res.json({
                  status: true,
                  result: `Apikey "${apikeyInput}" Berhasil ditambahkan!`
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(error)
    }
})

router.get('/removekey', (req, res, next) => {
    var apikeyInput = req.query.apikey;

    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput !== `${key}`) return res.sendFile(invalidKey)

    try {
        kuhong.remove({
            apikey: apikeyInput
        })
        .then(() => {
             res.json({
                  status: true,
                  result: `Apikey "${apikeyInput}" Berhasil dihapus!`
              })
        })
    } catch (e) {
        console.log(e)
        res.sendFile(error)
    }
})


// DATA API DOWNLOADER
router.get('/downloader/ytmp3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

       if(listkey.includes(apikeyInput)){
       

            async function ytDonlodMp3(url) {
  return new Promise((resolve, reject) => {
    try {
      const id = yt.getVideoID(url)
      const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
      .then((data) => {
        let pormat = data.formats
        let audio = []
        for (let i = 0; i < pormat.length; i++) {
          if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
            let aud = pormat[i]
            audio.push(aud.url)
          }
        }
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
        const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
        
        const result = {
          title: title,
          thumb: thumb,
          channel: channel,
          published: published,
          views: views,
          url: audio[1]
        }
        return(result)
      })
      resolve(yutub)
    } catch (error) {
        reject(error);
      }
      console.log(error)
  })
}

          ytDonlodMp3(url)
        .then((data) => {
        	 var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/downloader/ytmp4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

      if(listkey.includes(apikeyInput)){
             
         async function ytDonlodMp4(url) {
  return new Promise((resolve, reject) => {
    try {
      const id = yt.getVideoID(url)
      const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
      .then((data) => {
        let pormat = data.formats
        let video = []
        for (let i = 0; i < pormat.length; i++) {
          if (pormat[i].container == 'mp4' && pormat[i].hasVideo == true && pormat[i].hasAudio == true) {
            let vid = pormat[i]
            video.push(vid.url)
          }
        }
        const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
        const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
        const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
        const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
        const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
        
        const result = {
          title: title,
          thumb: thumb,
          channel: channel,
          published: published,
          views: views,
          url: video[0]
        }
        return(result)
      })
      resolve(yutub)
    } catch (error) {
        reject(error);
      }
      console.log(error)
  })
}

          ytDonlodMp4(url)
        .then((data) => {
        var result = data;
             res.json({
                 	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
         })
} else {
res.sendFile(invalidKey)
}
})

router.get('/downloader/igdl', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
                  url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if(!url) return res.json(loghandler.noturl)

       if(listkey.includes(apikeyInput)){      
       	
       	function igDownload(url) {
  return new Promise((resolve, reject) => {
    const baseUrl = 'https://keeppost.com'
    fetch(baseUrl, {
      method: 'GET',
      headers: {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      const build_id = $('input[name="build_id"]').attr('value')
      const build_key = $('input[name="build_key"]').attr('value')
      const bodyForm = new FormData()
      bodyForm.append('url', url)
      bodyForm.append('build_id', build_id)
      bodyForm.append('build_key', build_key)
      fetch(baseUrl + '/process.php', {
        method: 'POST',
        body: bodyForm,
        headers: {
          'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
        }
      })
      .then(rsp => rsp.text())
      .then((data) => {
        const $$ = cheerio.load(data)
        resolve({
          url: $$('.success > a').attr('href')
        })
      })
      .catch(reject)
    })
    .catch(reject)
  })
}
                
         igDownload(url)
      .then(data => {
      	var result = data;
                 res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
             })
          })
          .catch(e => {
         	res.json(loghandler.error)
})
    } else {
res.sendFile(invalidKey)
}
})

router.get('/downloader/igstory', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter Username"})

       if(listkey.includes(apikeyInput)){
       

            function igStory(username) {
  return new Promise((resolve, reject) => {
    const baseUrl = 'https://igmp4.com'
    fetch(baseUrl + '/download-stories.php', {
      method: 'GET',
      headers: {
        'cookie': 'PHPSESSID=ccb3ar0ul5jiu3knt2rh7pv4g4',
        'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      const token = $('input[name="token"]').attr('value')
      const bodyForm = new FormData()
      bodyForm.append('url', 'https://www.instagram.com/' + username)
      bodyForm.append('action', 'story')
      bodyForm.append('token', token)
      bodyForm.append('json', '')
      fetch(baseUrl + '/system/action.php', {
        method: 'POST',
        body: bodyForm,
        headers: {
          'cookie': 'PHPSESSID=ccb3ar0ul5jiu3knt2rh7pv4g4',
          'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
        }
      })
      .then(v => v.json())
      .then((data) => {
        resolve({
          url_data: data.medias[0]
        })
      })
      .catch(reject)
    })
    .catch(reject)
  })
}

          igStory(username)
        .then((data) => {
        	 var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/downloader/twdl', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter Url"})

       if(listkey.includes(apikeyInput)){
       

            function twitterDown(url) {
  return new Promise((resolve, reject) => {
    const bodyForm = new FormData()
    bodyForm.append('url', url)
    fetch('https://www.savetweetvid.com/downloader', {
      method: 'POST',
      body: bodyForm,
      headers: {
        'cookie': '_ga=GA1.2.1410189489.1630650655; _gid=GA1.2.95965189.1630650656; __gads=ID=8c5bb9c8c08571ab-22722b8c84cb001c:T=1630650656:RT=1630650656:S=ALNI_MYuAHfO543UXBFcCKILbqjWCEhpSg; XSRF-TOKEN=eyJpdiI6Im1UXC8zemE0UXFlYmJEbXoyNm1BeG5BPT0iLCJ2YWx1ZSI6InFNc0xOV0kxUHRaUG53VHdybHhOYnhPaTVMRWo5UExEVTJNSG4xOUFCQ2JEdjBvcGJGMUswS0pUZzNYTDAzNGFPUCtNMDFNOVp5REw2K3dTdUt5NG13PT0iLCJtYWMiOiIzODk5ZGVkM2I2ZjdjMTJhY2Y4NWI2MDY1OTc4OTVkZjFkMjhkOThhYmIyYzU5MzMxZjA0ZDEwNmQyZDViZDRlIn0%3D; laravel_session=eyJpdiI6IkRYK2M3U0VLSGxSQkFGTzRkdW9IeHc9PSIsInZhbHVlIjoiSEVMaUEyWTZUclU2MVN3NzFWdTQ0K2pQbFwvVVQ1d3gzTXJzakRYVFJtQlJvamwxczJnc2VqMHhid1QwdityMGJpd3J0M0h4bFI4RFA2Z09vUkg3T1BBPT0iLCJtYWMiOiJjN2U0ZDYzMTc3Zjg2OTEyOTVlNzgwNWRiMjZjNjMzMWM1NWMxODk3MTY2NjdhNTQ2Zjc0NzU5NTQzNGFjYzBiIn0%3D; __atuvc=5%7C35; __atuvs=6131c11f7c1d0b45004',
        'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      resolve({
          title: $('.card > .row > .col-md-4.col-sm-4').text().trim().replace(/\n/g, ' '),
          url: $('.col-md-8.col-sm-8.col-table').find('a').eq(0).attr('href')
      })
    })
    .catch(reject)
  })
}

          twitterDown(url)
        .then((data) => {
        	 var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/downloader/tiktokdl', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter url"})

        if(listkey.includes(apikeyInput)){
       	
async function TiktokDownloader (Url) {
    return new Promise (async (resolve, reject) => {
    let get_data = await axios.get(Url, {
        headers: {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
            'Cookie': 'tt_webid_v2=6986233640163411458; tt_webid=6986233640163411458; MONITOR_WEB_ID=6986233640163411458; passport_csrf_token_default=6c4582eb39e3a918b79bf19883e0383a; passport_csrf_token=6c4582eb39e3a918b79bf19883e0383a; passport_auth_status=b129aac2144e7d181e9206c77b829f33%2C; passport_auth_status_ss=b129aac2144e7d181e9206c77b829f33%2C; sid_guard=59bce8b9c36fd2ae7c65dc9ed1e57f4b%7C1626609635%7C5184000%7CThu%2C+16-Sep-2021+12%3A00%3A35+GMT; uid_tt=10f21da80e938dc4c74ac772a612ac900db73a510dce996f1e87038ed113d3b0; uid_tt_ss=10f21da80e938dc4c74ac772a612ac900db73a510dce996f1e87038ed113d3b0; sid_tt=59bce8b9c36fd2ae7c65dc9ed1e57f4b; sessionid=59bce8b9c36fd2ae7c65dc9ed1e57f4b; sessionid_ss=59bce8b9c36fd2ae7c65dc9ed1e57f4b; store-idc=alisg; store-country-code=id; tt_csrf_token=K1up8j9z7OmTrSfmvmoO1JP2; R6kq3TV7=AF7-iQB7AQAAqk-Wy_M1HqFLRc1VQ_I-5EkI1mYmYzKL9Nb5BnYDd5zx0dym|1|0|c5260d1687443f9982544406597db77fb23ffc52; s_v_web_id=verify_krsv2o62_iDlMefgy_hytF_4I87_9jYh_Ujpnwxam1TNO; cmpl_token=AgQQAPOgF-RMpbDNIuufsZ04-pWPSIhMP4ArYP5gWA; odin_tt=04cf5d9f07b62e050c679ab203370816484a861d3efc80bd5d0db6fd4b0c4a6018acdd2d4b2b814e487f25ba678a53103e29abb336446c456ee9dfff04a0a789bdc6b29b4685b81aa50161179b68c98b; ttwid=1%7C5hEmJiL5W2c3q3WVqHbF85173NjIdJm9ZJJPEvxQeyI%7C1627801693%7C48ff7670e842ddd8b838a35541a94891eb144539cba2b0cb308b20254e6fe089; passport_fe_beating_status=false'
        }
    })

    //Getting the element
    let $ = require('cheerio').load(get_data.data)
    let jsnya = JSON.parse($('script').eq(6).get()[0].children[0].data)
    let t = jsnya.props.pageProps.itemInfo.itemStruct

	await axios.request({
	    url: "https://ttdownloader.com/",
	    method: "GET",
	    headers: {
		"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"accept-language": "en-US,en;q=0.9,id;q=0.8",
		"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
		"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
	    }
	}).then( respon => {
	    const $ = cheerio.load(respon.data)
	    const token = $('#token').attr('value')
	    axios({
		url: "https://ttdownloader.com/req/",
		method: "POST",
		data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
		headers: {
		    "accept": "*/*",
		    "accept-language": "en-US,en;q=0.9,id;q=0.8",
		    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
		    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
		    "cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
		}
	    }).then( res => {
		const ch = cheerio.load(res.data)
		const result = {
		    username: t.author.uniqueId,
		    nickname: t.author.nickname,
        description: t.desc,
        views: t.stats.playCount,
        likes: t.stats.diggCount,
        comments: t.stats.commentCount,
        shares: t.stats.shareCount,
           thumbnail: t.video.cover,
			     nowatermark: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
			     watermark: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
			     audio: t.music.playUrl
		}
		resolve(result)
	    }).catch(reject)
	}).catch(reject)
    })
}
            TiktokDownloader(url)
            .then((result) => {
                res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result
            })
         })
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/blackpink', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/textprome/blackpink?apikey=YTRAMLANID&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/blekpink.png', hasil)

         res.sendFile(__path + '/tmp/blekpink.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/neon', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/textprome/neon?apikey=YTRAMLANID&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/neon.png', hasil)

         res.sendFile(__path + '/tmp/neon.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/greenneon', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=YTRAMLANID&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/greenneon.png', hasil)

         res.sendFile(__path + '/tmp/greenneon.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/blueneon', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.zeks.me/api/bneon?apikey=alpin1234567&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/bneon.png', hasil)

         res.sendFile(__path + '/tmp/bneon.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/matrix', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.zeks.me/api/matrix?apikey=alpin1234567&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/matrix.png', hasil)

         res.sendFile(__path + '/tmp/matrix.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/dropwater', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=alpin1234567&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/drop.png', hasil)

         res.sendFile(__path + '/tmp/drop.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/neonlight', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.lolhuman.xyz/api/textprome/neonlight?apikey=YTRAMLANID&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/neonlight.png', hasil)

         res.sendFile(__path + '/tmp/neonlight.png')
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/naruto', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	          text = req.query.text
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(!text) return res.json(loghandler.nottex)
   
      if(listkey.includes(apikeyInput)){
     var hasil = await getBuffer(`https://api.zeks.me/api/naruto?apikey=alpin1234567&text=${text}`)
       await fs.writeFileSync(__path + '/tmp/naruto.png', hasil)

         res.sendFile(__path + '/tmp/naruto.png')
} else {
res.sendFile(invalidKey)
}
})

// SEARCH FEATURES
router.get('/search/wikipedia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            q = req.query.q
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!q) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter q"})

       if(listkey.includes(apikeyInput)){
       

            function wikiPedia(query) {
  return new Promise((resolve, reject) => {
    fetch('https://id.m.wikipedia.org/w/index.php?search=' + query, {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      let thumb = $('.thumb.tright > .thumbinner > a').find('img').attr('src')
      if (thumb === undefined) thumb = '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
      thumb = 'https:' + thumb
      resolve({
        title: $('.pre-content.heading-holder > .page-heading > h1').text(),
        thumb: thumb,
        result: $('.mw-parser-output > #mf-section-0 > p').text().trim()
      })
    })
    .catch(reject)
  })
}

          wikiPedia(q)
        .then((data) => {
        	 var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})
// End of script
module.exports = router
