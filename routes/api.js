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

// ANIME FEATURES
router.get('/anime/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey
                query = req.query.query
                
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(!query) return res.json(loghandler.notquery)
	
       if(listkey.includes(apikeyInput)){
       fetch(encodeURI(`https://myanimelist.net/search/prefix.json?type=manga&keyword=${query}&v=1`))
        .then(response => response.json())
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
} else {
res.sendFile(invalidKey)
}
})

router.get('/anime/loli', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	
     const neko = () => new Promise((resolve, reject) => {
                    const Arr = ["Loli", "Anime Loli", "Loli Anime"];
                    const random = Arr[Math.floor(Math.random() * (Arr.length))]
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${random}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${random}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        neko()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/neko.png', hasil)

         res.sendFile(__path + '/tmp/neko.png')
    })
} else {
res.sendFile(invalidKey)
}
})

router.get('/anime/neko', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	
     const neko = () => new Promise((resolve, reject) => {
                    const Arr = ["nekonime", "neko anime", "anime neko"];
                    const random = Arr[Math.floor(Math.random() * (Arr.length))]
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${random}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${random}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        neko()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/neko.png', hasil)

         res.sendFile(__path + '/tmp/neko.png')
    })
} else {
res.sendFile(invalidKey)
}
})

router.get('/anime/waifu', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	
     const neko = () => new Promise((resolve, reject) => {
                    const Arr = ["waifu anime", "waifu", "waifu cecan"];
                    const random = Arr[Math.floor(Math.random() * (Arr.length))]
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${random}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${random}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        neko()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/neko.png', hasil)

         res.sendFile(__path + '/tmp/neko.png')
    })
} else {
res.sendFile(invalidKey)
}
})

router.get('/anime/megumin', async (req, res, next) => {
        var apikeyInput = req.query.apikey
	    
  if(!apikeyInput) return res.json(loghandler.notparam)
      
      if(listkey.includes(apikeyInput)){
      	
     const neko = () => new Promise((resolve, reject) => {
                    const Arr = ["megumin", "megumin anime", "anime megumin"];
                    const random = Arr[Math.floor(Math.random() * (Arr.length))]
                    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${random}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${random}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                        "headers": {
                            "accept": "application/json, text/javascript, */*, q=0.01",
                            "accept-language": "en-US,en;q=0.9",
                            "cache-control": "no-cache",
                            "pragma": "no-cache",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-app-version": "9a236a4",
                            "x-pinterest-appstate": "active",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": "https://www.pinterest.com/",
                        "referrerPolicy": "origin",
                        "body": null,
                        "method": "GET",
                        "mode": "cors"
                    }).then((res) => res.json())
                        .then((json) => {
                            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                            resolve({
                                status: 200,
                                link: generatepin.images.orig.url
                            })
                        })
                })

        neko()
         .then(async (data) => {
         	var hasil = await getBuffer(`${data.link}`)
       await fs.writeFileSync(__path + '/tmp/neko.png', hasil)

         res.sendFile(__path + '/tmp/neko.png')
    })
} else {
res.sendFile(invalidKey)
}
})

router.get('/anime/planetanime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	function anime(query) {
	return new Promise((resolve, reject) => {
		axios.get(`https://www.anime-planet.com/anime/all?name=${query}`)
			.then((data) => {
				const $ = cheerio.load(data.data)
				const result = [];
				const judul = [];
				const link = [];
				const thumb = [];
				$('#siteContainer > ul.cardDeck.cardGrid > li > a > h3').each(function(a, b) {
					deta = $(b).text();
					judul.push(deta)
				})
				$('#siteContainer > ul.cardDeck.cardGrid > li > a').each(function(a, b) {
					link.push('https://www.anime-planet.com' + $(b).attr('href'))
				})
				$('#siteContainer > ul.cardDeck.cardGrid > li > a > div.crop > img').each(function(a, b) {
					thumb.push('https://www.anime-planet.com' + $(b).attr('src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						judul: judul[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}

      anime(query)
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

router.get('/search/trendtwit', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
             negara = req.query.negara
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!negara) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter negara"})

       if(listkey.includes(apikeyInput)){
       

            function trendtw(country) {
  return new Promise((resolve, reject) => {
		axios.get(`https://getdaytrends.com/${country}/`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const hastag = [];
				const tweet = [];
				const result = [];
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr> td.main > a').each(function(a, b) {
					deta = $(b).text()
					hastag.push(deta)
				})
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr > td.main > div > span').each(function(a, b) {
					deta = $(b).text()
					tweet.push(deta)
				})
				num = 1
				for (let i = 0; i < hastag.length; i++) {
					result.push({
						rank: num,
						hastag: hastag[i],
						tweet: tweet[i]
					})
					num += 1
				}
				resolve({
					country: country,
					result: result
				})
			})
			.catch(reject)
	})
}

          trendtw(negara)
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

router.get('/search/hapymod', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
             query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){
       

            function mody(query) {
  return new Promise((resolve, reject) => {
		axios.get('https://apkmody.io/?s=' + query)
			.then(({
				data
			}) => {
				//console.log(data)
				const $ = cheerio.load(data)
				const nama = [];
				const link = [];
				const mod = [];
				const thumb = [];
				const format = [];
				$('#primary > section:nth-child(3) > div > div > div > article > a > div > div > div > h2').each(function(a, b) {
					nem = $(b).text();
					nama.push(nem)
				})
				$('#primary > section:nth-child(3) > div > div > div > article > a > div > div > p').each(function(c, d) {
					modd = $(d).text();
					mod.push(modd.split('\n')[1])
				})
				$('#primary > section:nth-child(3) > div > div > div > article > a > div > img').each(function(e, f) {
					thumb.push($(f).attr('src'))
				})
				$('#primary > section:nth-child(3) > div > div > div > article > a').each(function(g, h) {
					link.push($(h).attr('href'))
				})
				for (let i = 0; i < link.length; i++) {
					format.push({
						judul: nama[i],
						infomod: mod[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				const result = {
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}

          mody(query)
        .then((result) => {
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                result : result.data
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

     
router.get('/search/lirik', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	function getUrl(query){
    return new Promise((resolve, reject) => {
        axios.get(`https://www.musixmatch.com/search/${query}`)
        .then(({data}) => {
            const $ = cheerio.load(data)
            const res = $('#site').find('div > div > div > div > ul > li:nth-child(1) > div > div > div')
            //resolve($('#site').find('search-results > div > div > tab-content > div > div > box box-style-plain > box-content > ul'))
            resolve(`https://www.musixmatch.com` + $(res).find('h2 > a').attr('href'))
        })
        .catch(reject)
    })
}

function getLirik(query) {
    return new Promise(async(resolve, reject) => {
        const link = await getUrl(query)
        axios.get(link)
        .then(({data}) => {
            const $ = cheerio.load(data)
            const lirik = $('#site').find('.mxm-lyrics__content > .lyrics__content__ok').text()
            const title = $('div.mxm-track-title > h1').text().replace(/Lyrics/gi, '')
            const author = $('div.mxm-track-title > h2').text()
            const thumb = 'https:'+$('div.banner-album-image-desktop > img').attr('src')
            resolve({
                    title,
                    author,
                    thumb,
                    lirik
            })
        })
        .catch(reject)
    })
}

      getLirik(query)
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

router.get('/search/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	async function searchCodePos(keywords) {
                    return new Promise((resolve, reject) => {

                        let carikodepos = "https://carikodepos.com/"
                        let url = carikodepos + "?s=" + keywords

                        axios({
                            method: "GET",
                            url: url,
                            headers: {
                                "Accept": "application/json, text/javascript, /;",
                                "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4209.3 Mobile Safari/537.36",
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                                "Origin": carikodepos,
                                "Referer": carikodepos
                            }
                        }).then((response) => {
                            const $ = cheerio.load(response.data)
                            let search = $("tr")

                            if (search.length > 0) {
                                let results = []

                                search.each((number, element) => {
                                    if (number !== 0) {
                                        let td = $(element).find("td")
                                        let result = {}

                                        td.each((index, html) => {
                                            let value = $(html).find("a").html()
                                            let key = index === 0 ? "province" :
                                                (index === 1 ? "city" :
                                                    (index === 2 ? "subdistrict" :
                                                        (index === 3 ? "urban" : "postalcode")))

                                            result[key] = value
                                        })

                                        results.push(result)
                                    }
                                })

                                resolve({
                                    data: results
                                })
                            } else {
                                reject("No result could be found")
                            }
                        }).catch(reject)

                    })
                }
                
      searchCodePos(query)
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

router.get('/search/grupwa', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.json(loghandler.notparam)
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "Masukan parameter query"})

       if(listkey.includes(apikeyInput)){      
       	
       	function linkwa(nama){
	return new Promise((resolve,reject) => {
		axios.get('http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search='+ nama +'&searchby=name')
		.then(({ data }) => {
			const $ = cheerio.load(data);
			const result = [];
			const lnk = [];
			const nm = [];
		$('div.wa-chat-title-container').each(function(a,b){
			const limk = $(b).find('a').attr('href');
			lnk.push(limk)
			})
		$('div.wa-chat-title-text').each(function(c,d) {
			const name = $(d).text();
			nm.push(name)
			})
		for( let i = 0; i < lnk.length; i++){
			result.push({
				nama: nm[i].split('. ')[1],
				link: lnk[i].split('?')[0]
			})
		}
		resolve(result)
		})
	.catch(reject)
	})
}

      linkwa(query)
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

// GAME FEATURES
router.get('/game/caklontong', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	
      if(listkey.includes(apikeyInput)){
       
       var cak =
       [
    {
        "soal": "Selain mobil, bus, pesawat, orang pergi dari Jakarta ke Surabaya biasanya menggunakan?",
        "jawaban": "Celana"
    },
    {
        "soal": "Di rumah makan padang, selain pakai sendok kita makan pakai?",
        "jawaban": "Tenaga"
    },
    {
        "soal": "Biasa digunakan untuk menyalakan atau mematikan TV dan AC?",
        "jawaban": "Tolong"
    },
    {
        "soal": "Seseorang yang memimpin sebuah desa, biasanya dipanggil pak?",
        "jawaban": "Noleh"
    },
    {
        "soal": "Senikmat-nikmatnya makan diluar lebih nikmat makan di?",
        "jawaban": "Telan"
    },
    {
        "soal": "Makan duit rakyat disebut?",
        "jawaban": "Debus"
    },
    {
        "soal": "Ikan bernafas di air dengan?",
        "jawaban": "Tenang"
    },
    {
        "soal": "Binatang yang hinggap di makanan?",
        "jawaban": "Lapar"
    },
    {
        "soal": "Di dalam perpustakaan tidak boleh?",
        "jawaban": "Keramas"
    },
    {
        "soal": "Saat sukuran biasanya kita menyediakan?",
        "jawaban": "Ruangan"
    },
    {
        "soal": "Hewan laut yang jalannya miring dan bersembunyi di batu atau pasir biasanya?",
        "jawaban": "Lagi malu"
    },
    {
        "soal": "Kerbau adalah binatang yang memiliki?",
        "jawaban": "Huruf k"
    },
    {
        "soal": "Saat naik pesawat kita dilarang membawa..?",
        "jawaban": "Sendiri"
    },
    {
        "soal": "Seorang istri akan merasa terkejut bila di hari ulang tahun dibelikan?",
        "jawaban": "Beruang"
    },
    {
        "soal": "Seorang barber mencukur rambut pelanggan dengan?",
        "jawaban": "Gantian"
    },
    {
        "soal": "Buah yang dipotong-potong, diuleg campur gula jawa dan cabai, jadinya?",
        "jawaban": "Rusak"
    },
    {
        "soal": "Lorenzo, Marquez, rossi kejar-kejaran, salip menyalip di?",
        "jawaban": "Biarkan"
    },
    {
        "soal": "Mie ramen adalah makanan khas yang berasal dari?",
        "jawaban": "Mentah"
    },
    {
        "soal": "Hewan yang sehari-harinya memakan daging, dan hidup di rawa-rawa, namanya?",
        "jawaban": "Butuh"
    },
    {
        "soal": "Nasi yang enak buat sarapan, biasanya nasi?",
        "jawaban": "Matang"
    },
    {
        "soal": "Permen apa yang bagian gulanya ada di luar, tapi bungkusnya justru di dalam?",
        "jawaban": "Permen salah bikin"
    },
    {
        "soal": "Apa yang bulat, kecil, kadang hitam, kadang putih, terus kalau dipencet bisa keluar orangnya?",
        "jawaban": "Bel rumah"
    },
    {
        "soal": "Pintu apa yang didorong lima orang tetap tidak mau terbuka?",
        "jawaban": "Pintu yang tulisannya TARIK"
    },
    {
        "soal": "Jauh di mata, tapi dekat di hati, apakah itu?",
        "jawaban": "Usus"
    },
    {
        "soal": "Gajah naik motor keliatan apanya?",
        "jawaban": "Bohongnya"
    },
    {
        "soal": "Cermin jika di lap jadi…?",
        "jawaban": "Cermin"
    },
    {
        "soal": "Pedagang kaki lima bubar karena ada…?",
        "jawaban": "Macan"
    },
    {
        "soal": "Buah buah apa yang tua?",
        "jawaban": "Singkong"
    },
    {
        "soal": "Salah satu contoh hewan yang jalannya lambat?",
        "jawaban": "Serigala",
        "deskripsi": "Serigala kalau lagi jalan ya pelan-pelan, kalau lari baru cepet"
    },
    {
        "soal": "Lawannya gemuk?",
        "jawaban": "Takut",
        "deskripsi": "lah, takut kalau lawannya gemuk"
    },
    {
        "soal": "Koran disebut surat ?",
        "jawaban": "Salah",
        "deskripsi": "Masa koran disebut surat, salah dong"
    },
    {
        "soal": "Sebelum jadi katak, anak katak disebut ?",
        "jawaban": "Remaja",
        "deskripsi": "Nah proses sebelum menjadi katak dewasa, anak katak harus melalui masa-masa remaja dulu kan..."
    },
    {
        "soal": "Hewan berkaki delapan, yang bergelantungan ke sana kemari dengan jaring, namanya?",
        "jawaban": "Olahraga"
    },
    {
        "soal": "Burung bisa terbang karena memiliki?",
        "jawaban": "Bakat"
    },
    {
        "soal": "Kita tidak bisa menelepon, kalau handphonenya ngga ada?",
        "jawaban": "Angka"
    },
    {
        "soal": "Yang dibeli seorang cowok untuk pasangannya di saat Valentine biasanya?",
        "jawaban": "Bayar"
    },
    {
        "soal": "Saat ke Jakarta naik kereta, selain Stasiun Jatinegara, Stasiun Juanda, dan Pasar Senen, kita bisa turun di?",
        "jawaban": "Lantai"
    },
    {
        "soal": "Seorang pejabat akan terkena masalah kalau tersangkut?",
        "jawaban": "Jemuran"
    },
    {
        "soal": "Hewan yang sering digunakan petani untuk membajak sawah?",
        "jawaban": "Pasrah"
    },
    {
        "soal": "Neil Amstrong adalah astronot yang pernah menginjakkan kakinya di?",
        "jawaban": "Rumah"
    },
    {
        "soal": "Cuci piring harus?",
        "jawaban": "Sadar"
    },
    {
        "soal": "Setelah lulus SMA biasanya lanjut?",
        "jawaban": "Pulang"
    },
    {
        "soal": "Kalau semut kecil, gajah...?",
        "jawaban": "hewan"
    },
    {
        "soal": "Bertamu lebih dari 2x24 jam harus?",
        "jawaban": "Makan"
    },
    {
        "soal": "Yang dilakukan atlet sebelum bertanding?",
        "jawaban": "Pamitan"
    },
    {
        "soal": "Mulutmu ………..",
        "jawaban": "Hanyasatu",
        "deskripsi": "Mulut kan emang cuma satu"
    },
    {
        "soal": "Ada udang di balik…",
        "jawaban": "Gnadu",
        "deskripsi": "Itu fakta"
    },
    {
        "soal": "Es es apa yang bisa jalan?",
        "jawaban": "Eskalator",
        "deskripsi": "Kalau ga jalan bukan es kalator tapi tangga kalator"
    },
    {
        "soal": "Hati senang walaupun tak punya...",
        "jawaban": "Kaca",
        "deskripsi": "Kaca juga gak penting penting amat"
    },
    {
        "soal": "Suami bu camat?",
        "jawaban": "Laki",
        "deskripsi": "Karena kalo gak laki lesbi, dosa…"
    },
    {
        "soal": "Yang menyebabkan haus saat romadhon?",
        "jawaban": "Cuaca",
        "deskripsi": "Kalo panas pasti bikin haus, kalau puasa laper juga yah…"
    },
    {
        "soal": "Kirimin uang lewat atm?",
        "jawaban": "Thanksya",
        "deskripsi": "Thanks ya sudah diterima"
    },
    {
        "soal": "Rizky febian lahir di...",
        "jawaban": "Gendong",
        "deskripsi": "Ya di gendong dulu lah masa langsung di mandiin"
    },
    {
        "soal": "Para pejuang melawan penjajah dengan senjata?",
        "jawaban": "Bikin sendiri",
        "deskripsi": "Klo gak bikin sendiri lah trus dibikinin siapa?"
    },
    {
        "soal": "Apa yang tidak boleh di bawa ke pesawat?",
        "jawaban": "Sendiri",
        "deskripsi": "Karena kalo kita bawa sendiri nanti jatuh"
    },
    {
        "soal": "Tak kenal maka tak...",
        "jawaban": "Undang",
        "deskripsi": "Orang tidak kenal masak di undang"
    },
    {
        "soal": "Hewan yang melolong dimalam hari…",
        "jawaban": "Terinjak",
        "deskripsi": "Kasian kaki nya keinjak"
    },
    {
        "soal": "Api dipegang terasa?",
        "jawaban": "Susah",
        "deskripsi": "Api dipegang susah lah panas lagi"
    },
    {
        "soal": "Di akuarium ada ikan 10 mati 2 tinggal",
        "jawaban": "Dibuang",
        "deskripsi": "Kalo tidak dibuang, ikan yang laen jadi ikutan mati"
    },
    {
        "soal": "Tidak masuk kerja karena hari...",
        "jawaban": "DiPHK",
        "deskripsi": "Ya kan si hari kalo di phk ga usah masuk kerja lagi..."
    },
    {
        "soal": "Tinky winky...",
        "jawaban": "Tenar sekali",
        "deskripsi": "Nama nama tersebut sudah terkenal di semua kalangan"
    },
    {
        "soal": "Cicak jatuh ke…",
        "jawaban": "Bacok",
        "deskripsi": "Di bacok mah jatuh"
    },
    {
        "soal": "Dalam permainan bulutangkis",
        "jawaban": "Iya",
        "deskripsi": "Coba nonton bulutangkis pasti nama indonesia disingkat"
    },
    {
        "soal": "Ada guling ada…",
        "jawaban": "Benang",
        "deskripsi": "Kalo ga ada benang jahitnya pake apa?"
    },
    {
        "soal": "Andi basah kuyup karena?",
        "jawaban": "Husen",
        "deskripsi": "Karena diceburin si husen ke kolam, nakal banget yah…"
    },
    {
        "soal": "Matahari terbenam hari mulai",
        "jawaban": "Pulang",
        "deskripsi": "Udah malam kalo gak pulang, hari dicariin ibunya"
    },
    {
        "soal": "Hewan pemakan segala?",
        "jawaban": "Rakus",
        "deskripsi": "Semuanya dimakan"
    },
    {
        "soal": "Burung terbang menggunakan..",
        "jawaban": "Semangat",
        "deskripsi": "Kalau tidak semangat pasti lemes tuh.."
    },
    {
        "soal": "Beli lampu biasanya di...",
        "jawaban": "Coba",
        "deskripsi": "Anda kalau beli lampu pasti dicoba dulu"
    },
    {
        "soal": "Jangan berteman dengan orang...",
        "jawaban": "Hilang",
        "deskripsi": "Gimana caranya?"
    },
    {
        "soal": "Alpukat",
        "jawaban": "Bisa",
        "deskripsi": "Memang bisa disebut"
    },
    {
        "soal": "Bekas pacar disebut...",
        "jawaban": "Jangan",
        "deskripsi": "Nanti pacar yang sekarang marah"
    },
    {
        "soal": "Orang sakit minum?",
        "jawaban": "Oiya",
        "deskripsi": "Sakit minum yang banyak yah, biar cepet sembuh"
    },
    {
        "soal": "Pelat nomer kendaraan A berasal dari?",
        "jawaban": "Samsat",
        "deskripsi": "Karena samsat merupakan institusi yg berhak mengeluarkan plat kendaraan bermotor"
    },
    {
        "soal": "Hujan deres bikin …",
        "jawaban": "Basah",
        "deskripsi": "Kalau panas pasti kering"
    },
    {
        "soal": "Makan dianjurkan pakai tangan…",
        "jawaban": "Benar",
        "deskripsi": "Kanan atau kiri boleh kok, kanan lebih bagus sih katanya"
    },
    {
        "soal": "Pesawat mendarat di…",
        "jawaban": "Bantuin",
        "deskripsi": "Pilot, co-pilot, operator bandara, dan lain-lain.."
    },
    {
        "soal": "Di rumah ada adik",
        "jawaban": "Masak",
        "deskripsi": "Hmm kira kira lagi masak apa yah…"
    },
    {
        "soal": "Kakak mengantar adik sekolah sampai",
        "jawaban": "Capek",
        "deskripsi": "Nganter nya di gendong"
    },
    {
        "soal": "Galang menyimpan buku di…",
        "jawaban": "Mas",
        "deskripsi": "Bukunya dimas dipinjam galang kemarin sore"
    },
    {
        "soal": "Matahari tenggelam di sebelah…",
        "jawaban": "Gawat",
        "deskripsi": "Gawat kalau matahari tenggelam di sebelah kita"
    },
    {
        "soal": "Apabila mengendarai mobil wajib bawa",
        "jawaban": "Satu",
        "deskripsi": "Kalo bawa 2 gimana mengendarainya"
    },
    {
        "soal": "Mawar melati semuanya…",
        "jawaban": "Bunga",
        "deskripsi": "Kalo bukan bunga apa coba, hewan?"
    },
    {
        "soal": "Jangan membuang tisu di…",
        "jawaban": "Tempatnya",
        "deskripsi": "Masih di tempatnya kok di buang"
    },
    {
        "soal": "Ketika _____ orang biasanya makan",
        "jawaban": "Marah",
        "deskripsi": "Orang marah apa enggak ya pasti makan"
    },
    {
        "soal": "Burung adalah hewan yang bisa..",
        "jawaban": "Temenan",
        "deskripsi": "Kan kalo terbang rame-rame kan sama temennya.."
    },
    {
        "soal": "Hewan yang suka buka mulut lebar",
        "jawaban": "Kenaflu",
        "deskripsi": "Itu karena ga bisa napas idungnya mampet.."
    },
    {
        "soal": "Hewan yang berubah warna kalau ada musuhnya?",
        "jawaban": "Bengong",
        "deskripsi": "Karena, musuhnya bengong lihat hewan berubah warna"
    },
    {
        "soal": "Artis wanita yang punya kumis tipis",
        "jawaban": "Ihkumisan",
        "deskripsi": "Ih kok kumisan sih.."
    },
    {
        "soal": "Pintu biasa di….",
        "jawaban": "Tekan",
        "deskripsi": "Kalau anda biasa ke atm kan pin ditekan"
    },
    {
        "soal": "Lebak bulus",
        "jawaban": "Terkenal",
        "deskripsi": " Karena lebak bulus,cililitan semua orang tau maka nya terkenal"
    },
    {
        "soal": "Seorang matador bisa terluka karena diseruduk..",
        "jawaban": "Biskota",
        "deskripsi": "Mau banteng, mau bis kota, tetep aja bisa terluka.."
    },
    {
        "soal": "Cermin jika di lap jadi…",
        "jawaban": "Cermin",
        "deskripsi": "Ya masa berubah, yaal tetap cermin"
    },
    {
        "soal": "Batik merupakan produk asli dari…",
        "jawaban": "Manusia",
        "deskripsi": "Sejauh ini belum ada mahluk lain yang bisa"
    },
    {
        "soal": "Kendaraan yang suka dipake tukang ojek?",
        "jawaban": "Mogok",
        "deskripsi": "Motor emang suka mogok"
    },
    {
        "soal": "Binatang apa yang ga bisa bergerak?",
        "jawaban": "Paus",
        "deskripsi": "Kalau game di paus(e) kan berhenti main nya"
    },
    {
        "soal": "Sehabis olahraga",
        "jawaban": "Air minum",
        "deskripsi": "Abis olahraga pasti haus kan"
    },
    {
        "soal": "Di tiup angin berkibar di setiap negara",
        "jawaban": "Jemuran",
        "deskripsi": "Disetiap negara orang menjemur pakaiannya"
    },
    {
        "soal": "Kalo haus minum",
        "jawaban": "Aja",
        "deskripsi": "Minum aja ntar juga ga aus"
    },
    {
        "soal": "Hayam wuruk memerintah kerajaan?",
        "jawaban": "Jamandulu",
        "deskripsi": "Ya iyalah… masa jaman sekarang"
    },
    {
        "soal": "Jawab dengan benar. dunia ini terdiri dari lima …",
        "jawaban": "Benar",
        "deskripsi": "Kan sudah saya bilang jawab dengan benar"
    }
]

           var lontong = cak[Math.floor(Math.random() * cak.length)]
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 soal: `${lontong.soal}`,
                 jawaban: `${lontong.jawaban}`,
                 keterangan: `${lontong.deskripsi}`
             })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/tebakgambar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	
      if(listkey.includes(apikeyInput)){
       
       function tebakGambar() {
  return new Promise((resolve, reject) => {
    const baseUrl = 'https://jawabantebakgambar.net'
    fetch(baseUrl + '/all-answers/', {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      const result = []
      $('ul.images > li > a').each(function() {
        result.push({
          image: baseUrl + $(this).find('img').attr('data-src'),
          answer: $(this).find('span').text()
        })
      })
      const random = result[Math.floor(Math.random() * result.length)]
      resolve({
        result: random
      })
    })
    .catch(reject)
  })
}

           tebakGambar()
               .then((data) => {
               	var result = data;
             res.json({
             	creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result: {
                 	image: result.image,
                    jawaban: result.answer
                 }
             })
           })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/family100', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikeyInput) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikeyInput)){
       
           var fam = [
{
    "result": {
        "Author": "zxagung",
        "soal": "Apa yang menarik dari film india?",
        "jawaban": "Tarian\nLagu\nCerita\nPakian"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yang membuat pelayan di tempat fotokopi lambat?",
        "jawaban": "mesin rusak / rusak\nantri\nmati lampu\nkurang orang / kekurangan karyawan\nkertas habis\nmesin sedikit"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Jenis-jenis cewek yang didemenin para cowok?",
        "jawaban": "Cantik\nSeksi\nManis\nManja"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Sampah apa yang sering ditemukan dijalan?",
        "jawaban": "Kertas\nPlastik\nDaun\nPuntun\nRokok"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yang dilakukan orang kalau kecapean?",
        "jawaban": "tidur\nmakan\nminum\nistirahat\nspa\nmandi "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "benda apa didalam rumah yang berwarna putih?",
        "jawaban": "lantai\ntembok\nlampu\nkulkas\nplastik\ntoples\nsofa / sofa putih"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "sebutkan sesuatu yang memiliki tali?",
        "jawaban": "sepatu\npakaian dalam\ntas\ncelana\npulpen"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa penyebab pinggang menjadi terkilir?",
        "jawaban": "angkat beban berat\nolahraga\njatuh\nsalah duduk "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "bagian/part dari komputer umum?",
        "jawaban": "ram\ncpu\nmouse\nkeyboard\nmonitor\nprinter\nscanner"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "suara yang ditakuti anak2?",
        "jawaban": "anjing\nhantu\npetir\nharimau"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Perasaan apa yang ada bila mau kencan pertama?",
        "jawaban": "\nSenang\nGrogi\nGembira\nDag dig dug"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "selain kacang hijau, sebutkan ragam isi bakpau ?",
        "jawaban": "kacang hitam\ncoklat / cokelat\ndaging\nkentang "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "sebutkan sesuatu yang sekali pakai langsung buang?",
        "jawaban": "pembalut\ntisu\npopok bayi / popok\nkorek api / korek\nteh celup\nkondom"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yang biasa dijadikan kado ulang tahun anak kecil?",
        "jawaban": "boneka\nsepeda\nkue\nbaju\ncelana\nmainan "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "sebutkan sesuatu yang kamu beli dari uang jajan sendiri?",
        "jawaban": "makanan\nmainan\nminuman\nalat tulis "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "bagian/part dari komputer umum?",
        "jawaban": "ram\ncpu\nmouse\nkeyboard\nmonitor\nprinter\nscanner"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "alasan apa yang orang katakan untuk menyudahi pembicaran di telepon?",
        "jawaban": "baterai habis\nmau ke toilet\npulsa habis\nsibuk\ntelepon masuk\nmau istirahat\nada tamu "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "gaya/ model berenang?",
        "jawaban": "punggung\ndada\nkupu-kupu\nkatak\nbebas "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Bekal makan anak sekolah?",
        "jawaban": "Mie\nNasi goreng\nRoti\nNasi uduk"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "sebutkan warna-warna bunga mawar?",
        "jawaban": "merah\nputih\nkuning\njingga\norange\nmaroon\nmerah muda\nungu "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yang tidak perlu dimiliki orang yang botak?",
        "jawaban": "sisir\nsampo / shampo\ngel / minyak rambut\npengering rambut "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "hal yang menakutkan bagi anak-anak?",
        "jawaban": "petir\nhantu\ngelap\norang marah / marah\nmimpi buruk / mimpi\npolisi"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Apa yang menyebabkan suara serak?",
        "jawaban": "Teriak\nBatuk\nNangis\nNgedem"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa reaksi kamu jika mainan kamu tiba-tiba hidup?",
        "jawaban": "main bersama\ntakut\nsenang\nkaget\nbuang\nkasih tahu teman"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa penyebab pinggang menjadi terkilir?",
        "jawaban": "angkat beban berat\nolahraga\njatuh\nsalah duduk "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yg biasanya sering lupa dibawa ?",
        "jawaban": "uang\ndompet\nhandphone\nkunci\nkacamata\nrokok\nstnk\nkorek"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "hal yang menakutkan bagi anak-anak?",
        "jawaban": "petir\nhantu\ngelap\norang marah / marah\nmimpi buruk / mimpi\npolisi"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Jenis-jenis cewek yang didemenin para cowok?",
        "jawaban": "Cantik\nSeksi\nManis\nManja"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Sifat yang dimiliki anak-anak",
        "jawaban": "Manja\nCengeng\nNakal\nPemalu"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Apa yang dilakukan jika tersesat dihutan",
        "jawaban": "Menangis\nTeriak\nBerdoa\nDileme"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "kota di usa?",
        "jawaban": "new york\nlos angeles\norlando\nlas vegas\ntexas\nseattle\nboston "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "apa yang identik dengan bajaj?",
        "jawaban": "berisik / ribut\nroda tiga\noranye\nasap / polusi\nbergetar / getar\njakarta"
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "ditoko apa orang lebih sering  melihat-lihat daripada membeli?",
        "jawaban": "baju\nperhiasan / emas\nkendaraan\nbuku\nsepatu\nelektronik "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "hewan tak berkaki?",
        "jawaban": "ular\ncacing\nbelut\nlintah\nsiput "
    }
},
{
    "result": {
        "Author": "zxagung",
        "soal": "Sifat yang dimiliki anak-anak",
        "jawaban": "Manja\nCengeng\nNakal\nPemalu"
    }
}
]

           var imly = fam[Math.floor(Math.random() * fam.length)]
             res.json({
             	 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 soal : `${imly.result.soal}`,
                jawaban: `${imly.result.jawaban}`
             })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/tebaklirik', async (req, res, next) => {
        var apikeyInput = req.query.apikey

	if(!apikeyInput) return res.json(loghandler.notparam)
	
       if(listkey.includes(apikeyInput)){
    
     var tebak =
       [
    {
        "soal": "Kupetik bintang, untuk kau simpan, Cahayanya tenang, berikan kau perlindungan, sebagai pengingat teman, juga sebagai ______ semua tantangan",
        "jawaban": "Jawaban"
    },
    {
        "soal": "Berada di pelukanmu mengajarkanku apa artinya______ kesempurnaan cinta",
        "jawaban": "Kenyamanan"
    },
    {
        "soal": "Cinta itu ruang dan waktu, tak sekejap harus mau. Cinta butuh ruang yang sepi, tuk______ hati",
        "jawaban": "Mengutarakan"
    },
    {
        "soal": "Tak bisa tuk teruskan, Dunia kita_____, Bila memang ini ujungnya",
        "jawaban": "Berbeda"
    },
    {
        "soal": "Aku lah yang tetap memelukmu erat, saat kau berfikir______ berpaling",
        "jawaban": "Mungkinkah"
    },
    {
        "soal": "Kau harus bisa berlapang dada. Kau harus bisa ambil______",
        "jawaban": "Hikmahnya"
    },
    {
        "soal": "Untuk apa? Untuk apa cinta tanpa_____, untuk apa cinta tanpa perbuatan. Tak ada artinya",
        "jawaban": "Kejujuran"
    },
    {
        "soal": "Ku bisa hadapi_____ terluka, yang pernah kurasa di waktu dulu",
        "jawaban": "Perihnya"
    },
    {
        "soal": "Ada yang lain, di senyummu, yang_____ lidahku gugup tak bergerak",
        "jawaban": "Membuat"
    },
    {
        "soal": "Aku sayang padamu, aku cinta padamu, semua kan ku_____ demi kebahagiaanmu",
        "jawaban": "Lakukan"
    },
    {
        "soal": "Bila rindu ini, masih milkmu, ______ sebuah tanya untukmu, harus berapa lama aku menunggumu",
        "jawaban": "Kuhadirkan"
    },
    {
        "soal": "Ada ruang hatiku kini kau sentuh, aku bukan jatuh _____ namun aku jatuh hati",
        "jawaban": "Kau adalah yang terindah, yang membuat hatiku tenang, mencintai kamu takkan pernah takut, sebab kau _____ segala kurangku"
    },
    {
        "soal": "Ku cinta kau, ku cinta kau, hanya kamu di hatiku, takkan pernah kan ______, sampai kau jadi milikku",
        "jawaban": "Terganti"
    },
    {
        "soal": "Ku suka dirinya, mungkin aku sayang, namun _____ mungkin, kau menjadi milikku",
        "jawaban": "Apakah"
    },
    {
        "soal": "Dia dia dia cinta yang kutunggu tunggu tunggu, dia dia dia _____ hidupku",
        "jawaban": "Lengkapi"
    },
    {
        "soal": "Dengar laraku, suara hati ini _____ namamu, karna separuh aku, dirimu",
        "jawaban": "Memanggil"
    },
    {
        "soal": "Ayo putra bangsa, harumkan negeri ini, ____ kita bangga, Indonesia",
        "jawaban": "Jadikan"
    },
    {
        "soal": "Cinta jangan pernah kau coba _____ karna disini ku butuh kamu",
        "jawaban": "Pergi"
    },
    {
        "soal": "Untuk apa? Untuk apa cinta tanpa_____, untuk apa cinta tanpa perbuatan",
        "jawaban": "Kejujuran"
    },
    {
        "soal": "Bila memang harus berpisah, aku akan tetap ceria, bila memang ini______, kau kan tetap ada dalam jiwa",
        "jawaban": "Ujungnya"
    },
    {
        "soal": "Kau tau sejak pertama bertemu, terbayang _____ indah di matamu, kau berikan tatapan cinta untukku",
        "jawaban": "Senyum"
    },
    {
        "soal": "Kau dan aku tercipta oleh waktu, hanya untuk saling mencintai, mungkin di_____ bersama, rajut kasih jalin cinta",
        "jawaban": "Takdirkan"
    },
    {
        "soal": "Apa yang salah dengan lagu ini, kenapa _____ ku mengingatmu, seperti aku bisa merasakan getaran jantung dan langkah kakimu",
        "jawaban": "Kembali"
    },
    {
        "soal": "Akulah serpihan kisah masa lalumu, yang ____ ingin tau keadaanmu",
        "jawaban": "Sekedar"
    },
    {
        "soal": "Mungkin suatu saat nanti, kau _____ bahagia meski tak bersamaku",
        "jawaban": "Temukan"
    },
    {
        "soal": "Kau yang kuinginkan, meski tak ku____, kau yang kubayangkan, yang slalu kuimpikan",
        "jawaban": "Ungkapkan"
    },
    {
        "soal": "Terlalu manis untuk dilupakan, kenangan yang indah _____ tinggalah mimpi",
        "jawaban": "Bersamamu"
    },
    {
        "soal": "Mana mungkin selimut tetangga, hangati _____ dalam kedinginan, malam-malam panjang, setiap tidurku selalu kesepian",
        "jawaban": "Tubuhku"
    },
    {
        "soal": "Dan terjadi lagi, kisah lama yang _____ kembali, kau terluka lagi, dari cinta yang rumit kau jalani",
        "jawaban": "Terulang"
    },
    {
        "soal": "Garuda di dadaku, garuda kebanggaanku, ku yakin hari ini pasti menang, kobarkan ______, tunjukkan keinginanmu, ku yakin hari ini pasti menang",
        "jawaban": "Semangatmu"
    },
    {
        "soal": "Sampai saat ini, rasaku ______ di sini, rasa yang tak akan hilang oleh waktu",
        "jawaban": "Bertahan"
    },
    {
        "soal": "Aku tak bisa _____, bila kau tak ada di sini, aku tak habis pikirkan, bila kau tak lagi temani aku",
        "jawaban": "Bayangkan"
    },
    {
        "soal": "Ada pelangi, di bola matamu, dan _____ diri tuk bilang aku sayang padamu",
        "jawaban": "Memaksa"
    },
    {
        "soal": "Setidaknya diriku pernah berjuang, meski tak pernah ternilai di matamu, setidaknya ku pernah menanti, _____ melawan sepi hatiku",
        "jawaban": "Terkapar"
    },
    {
        "soal": "Bawalah aku ke dalam, ke dalam hangat dirimu, bawalah aku _____ menari dalam pelukanmu",
        "jawaban": "Kesana"
    },
    {
        "soal": "Mengapa kau pergi, mengapa kau pergi, di saat aku mulai mencintaimu, berharap engkau jadi ____ hatiku, malah kau pergi jauh dari hidupku",
        "jawaban": "Kekasih"
    },
    {
        "soal": "Sepenuhnya akuuu, ingin memelukmuuu, _____ penuh harapan, tuk mencintaimu",
        "jawaban": "Mendekap"
    },
    {
        "soal": "Bila tak selamanya kita bisa bersama, haruskah _____ di sini, dan bila selamanya kita bisa bersama, kusimpan cinta ini",
        "jawaban": "Menunggumu"
    }
]

           var lirik = tebak[Math.floor(Math.random() * tebak.length)]
             res.json({
             	 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 soal: `${lirik.soal}`,
                 jawaban: `${lirik.jawaban}`
             })
         .catch(e => {
         	res.json(loghandler.error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/susunkata', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)

       if(listkey.includes(apikeyInput)){
       	
       var url = 
       
       [
    {
        "pertanyaan": "Profesi : O-D-T-R-E-K",
        "jawaban": "DOKTER"
    },
    {
        "pertanyaan": "Kendaraan : L-I-M-B-O",
        "jawaban": "MOBIL"
    },
    {
        "pertanyaan": "Profesi : A-K-H-I-M",
        "jawaban": "HAKIM"
    },
    {
        "pertanyaan": "Benda : T-R-A-G-I",
        "jawaban": "GITAR"
    },
    {
        "pertanyaan": "Benda : A-P-S-U-I",
        "jawaban": "PISAU"
    },
    {
        "pertanyaan": "Benda : A-P-I-P",
        "jawaban": "PIPA"
    },
    {
        "pertanyaan": "Hewan : M-A-Y-A",
        "jawaban": "AYAM"
    },
    {
        "pertanyaan": "Tubuh : A-K-P-L-E-A",
        "jawaban": "KEPALA"
    },
    {
        "pertanyaan": "Benda : E-O-N-K-A-R-Y",
        "jawaban": "KERAYON"
    },
    {
        "pertanyaan": "Benda : G-U-N-A",
        "jawaban": "UANG"
    },
    {
        "pertanyaan": "Hewan : D-A-K-U",
        "jawaban": "KUDA"
    },
    {
        "pertanyaan": "Makanan : A-T-D-O-N",
        "jawaban": "DONAT"
    },
    {
        "pertanyaan": "Benda : E-P-I-C",
        "jawaban": "PECI"
    },
    {
        "pertanyaan": "Kota : G-N-U-L-A-M-P",
        "jawaban": "LAMPUNG"
    },
    {
        "pertanyaan": "Benda : S-A-M-U-K",
        "jawaban": "KAMUS"
    },
    {
        "pertanyaan": "Benda : B-A-R-D-E-E-N",
        "jawaban": "BENDERA"
    },
    {
        "pertanyaan": "Benda : A-N-I-P-O",
        "jawaban": "PIANO"
    },
    {
        "pertanyaan": "Buah : A-B-R-A-N-T-U-M",
        "jawaban": "RAMBUTAN"
    },
    {
        "pertanyaan": "Hewan : A-N-G-E-R-U-B",
        "jawaban": "BERUANG"
    },
    {
        "pertanyaan": "Benda : J-A-M-E",
        "jawaban": "MEJA"
    },
    {
        "pertanyaan": "Hewan : B-U-R-N-G-U",
        "jawaban": "BURUNG"
    },
    {
        "pertanyaan": "Hewan : B-E-N-G-N-A-T",
        "jawaban": "BANTENG"
    },
    {
        "pertanyaan": "Buah : A-N-S-A-N",
        "jawaban": "NANAS"
    },
    {
        "pertanyaan": "Buah : A-I-R-D-U-N",
        "jawaban": "DURIAN"
    },
    {
        "pertanyaan": "Hewan : K-A-I-N",
        "jawaban": "IKAN"
    },
    {
        "pertanyaan": "Benda : I-N-P-U-T",
        "jawaban": "PINTU"
    },
    {
        "pertanyaan": "Hewan : A-N-U-M-K-Y",
        "jawaban": "NYAMUK"
    },
    {
        "pertanyaan": "Benda : A-D-L-A-N-S",
        "jawaban": "SANDAL"
    },
    {
        "pertanyaan": "Hewan : A-K-E-B-U-R",
        "jawaban": "KERBAU"
    },
    {
        "pertanyaan": "Benda : S-T-R-E-A-K",
        "jawaban": "KERTAS"
    },
    {
        "pertanyaan": "Benda : G-E-N-P-O-T",
        "jawaban": "TOPENG"
    },
    {
        "pertanyaan": "Benda : A-S-B-U-N",
        "jawaban": "SABUN"
    },
    {
        "pertanyaan": "Hewan : A-U-N-T",
        "jawaban": "UNTA"
    },
    {
        "pertanyaan": "Benda : I-L-N-I-L",
        "jawaban": "LILIN"
    },
    {
        "pertanyaan": "Benda : M-A-J",
        "jawaban": "JAM"
    },
    {
        "pertanyaan": "Benda : A-K-U-P",
        "jawaban": "PAKU"
    },
    {
        "pertanyaan": "Buah : A-P-I-N-G-S",
        "jawaban": "PISANG"
    },
    {
        "pertanyaan": "Benda : A-T-S",
        "jawaban": "TAS"
    },
    {
        "pertanyaan": "Benda : I-R-K-U-S",
        "jawaban": "KURSI"
    },
    {
        "pertanyaan": "Hewan : I-P-S-A",
        "jawaban": "SAPI"
    },
    {
        "pertanyaan": "Hewan : B-A-N-G-K-I-M",
        "jawaban": "KAMBING"
    },
    {
        "pertanyaan": "Hewan : R-A-U-L",
        "jawaban": "ULAR"
    },
    {
        "pertanyaan": "Benda : A-L-B-T-A-N",
        "jawaban": "BANTAL"
    },
    {
        "pertanyaan": "Benda : E-L-M-I-R-A",
        "jawaban": "LEMARI"
    },
    {
        "pertanyaan": "Benda : S-U-I-T",
        "jawaban": "TISU"
    },
    {
        "pertanyaan": "Benda :G-I-N-R-I-P",
        "jawaban": "PIRING"
    },
    {
        "pertanyaan": "Tempat : A-L-B-I",
        "jawaban": "BALI"
    },
    {
        "pertanyaan": "Benda : S-P-I-N-E-L",
        "jawaban": "PENSIL"
    },
    {
        "pertanyaan": "Benda : T-U-B-A",
        "jawaban": "BATU"
    },
    {
        "pertanyaan": "Benda : A-T-A-B",
        "jawaban": "BATA"
    },
    {
        "pertanyaan": "Benda : A-P-U-S",
        "jawaban": "SAPU"
    },
    {
        "pertanyaan": "Kota : B-R-O-G-O",
        "jawaban": "BOGOR"
    },
    {
        "pertanyaan": "Benda : A-N-I-S-U-L-K",
        "jawaban": "LUKISAN"
    },
    {
        "pertanyaan": "Benda : K-U-S-A-L-K",
        "jawaban": "KULKAS"
    },
    {
        "pertanyaan": "Hewan : A-K-D-A-B",
        "jawaban": "BADAK"
    },
    {
        "pertanyaan": "Hewan : A-H-J-A-G",
        "jawaban": "GAJAH"
    },
    {
        "pertanyaan": "Benda : A-N-Y-P-U-G",
        "jawaban": "PAYUNG"
    },
    {
        "pertanyaan": "Benda : A-D-H-U-N-K",
        "jawaban": "HANDUK"
    },
    {
        "pertanyaan": "Buah : A-S-M-A-N-G-E",
        "jawaban": "SEMANGKA"
    },
    {
        "pertanyaan": "Benda : A-S-E-T-U-P",
        "jawaban": "SEPATU"
    },
    {
        "pertanyaan": "Benda : G-U-R-A-P",
        "jawaban": "GARPU"
    },
    {
        "pertanyaan": "Hewan : C-U-K-I-N-G",
        "jawaban": "KUCING"
    },
    {
        "pertanyaan": "Hewan : B-A-M-O-D",
        "jawaban": "DOMBA"
    },
    {
        "pertanyaan": "Tempat : T-H-O-L-E",
        "jawaban": "HOTEL"
    },
    {
        "pertanyaan": "Hewan : H-E-A-P-J-A-R",
        "jawaban": "JERAPAH"
    },
    {
        "pertanyaan": "Tempat : L-A-T-H-E",
        "jawaban": "HALTE"
    },
    {
        "pertanyaan": "Benda : E-R-I-C-M-N",
        "jawaban": "CERMIN"
    },
    {
        "pertanyaan": "Benda : M-O-P-E-T-U-R-K",
        "jawaban": "KOMPUTER"
    },
    {
        "pertanyaan": "Benda : M-E-T-R-O-S",
        "jawaban": "TERMOS"
    },
    {
        "pertanyaan": "Benda : A-C-L-E-A-N",
        "jawaban": "CELANA"
    },
    {
        "pertanyaan": "Benda : A-I-R-I-T",
        "jawaban": "TIRAI"
    },
    {
        "pertanyaan": "Tempat : A-N-D-R-A-B-A",
        "jawaban": "BANDARA"
    },
    {
        "pertanyaan": "Organ : S-U-U-S",
        "jawaban": "USUS"
    },
    {
        "pertanyaan": "Hewan : A-K-A-D-B",
        "jawaban": "BADAK"
    },
    {
        "pertanyaan": "Buah : E-M-N-O-L",
        "jawaban": "LEMON"
    },
    {
        "pertanyaan": "Tempat : D-A-N-N-A-K-G",
        "jawaban": "KANDANG"
    },
    {
        "pertanyaan": "Buah : A-P-S-I-N-G",
        "jawaban": "PISANG"
    },
    {
        "pertanyaan": "Benda : L-I-S-E-T-T-A",
        "jawaban": "SATELIT"
    },
    {
        "pertanyaan": "Kendaraan : A-K-E-B-C",
        "jawaban": "BECAK"
    },
    {
        "pertanyaan": "Hewan : A-N-A-B-U-G",
        "jawaban": "BANGAU"
    },
    {
        "pertanyaan": "Tumbuhan : A-N-B-U-G",
        "jawaban": "BUNGA"
    },
    {
        "pertanyaan": "Benda : I-P-T-U-N",
        "jawaban": "PINTU"
    },
    {
        "pertanyaan": "Minuman : I-P-K-O",
        "jawaban": "KOPI"
    },
    {
        "pertanyaan": "Hewan : A-K-R-U-B-E",
        "jawaban": "KERBAU"
    },
    {
        "pertanyaan": "Bagian Tubuh : D-I-N-G-U-H",
        "jawaban": "HIDUNG"
    },
    {
        "pertanyaan": "Pekerjaan : L-I-P-T-O",
        "jawaban": "PILOT"
    },
    {
        "pertanyaan": "Benda : A-C-L-E-A-N",
        "jawaban": "CELANA"
    },
    {
        "pertanyaan": "Benda : H-A-N-A-L-A-M",
        "jawaban": "HALAMAN"
    },
    {
        "pertanyaan": "Tumbuhan : G-A-B-W-A-N",
        "jawaban": "BAWANG"
    },
    {
        "pertanyaan": "Benda : U-C-T-A-R",
        "jawaban": "CATUR"
    },
    {
        "pertanyaan": "Benda : M-R-T-O-O",
        "jawaban": "MOTOR"
    },
    {
        "pertanyaan": "Tempat : L-E-A-K-S",
        "jawaban": "KELAS"
    },
    {
        "pertanyaan": "Tempat : A-K-E-H-O-L-S",
        "jawaban": "SEKOLAH"
    },
    {
        "pertanyaan": "Hewan : J-I-G-N-A-N",
        "jawaban": "ANJING"
    },
    {
        "pertanyaan": "Benda : S-A-B-E-R",
        "jawaban": "BERAS"
    },
    {
        "pertanyaan": "Hewan : M-U-T-E-S",
        "jawaban": "SEMUT"
    },
    {
        "pertanyaan": "Benda : D-A-K-U-H-N",
        "jawaban": "HANDUK"
    },
    {
        "pertanyaan": "Benda : A-L-E-N-E-D-J",
        "jawaban": "JENDELA"
    },
    {
        "pertanyaan": "Tempat : A-U-G-I-N-S",
        "jawaban": "SUNGAI"
    },
    {
        "pertanyaan": "Buah : A-K-P-E-A-L",
        "jawaban": "KELAPA"
    },
    {
        "pertanyaan": "Hewan : G-L-U-O-N-N-B",
        "jawaban": "BUNGLON"
    },
    {
        "pertanyaan": "Makanan : A-A-R-C",
        "jawaban": "ACAR"
    },
    {
        "pertanyaan": "Tempat : E-L-H-A-T",
        "jawaban": "HALTE"
    },
    {
        "pertanyaan": "Tempat : A-H-A-W-S",
        "jawaban": "SAWAH"
    },
    {
        "pertanyaan": "Tempat : D-A-R-A-B-A-N",
        "jawaban": "BANDARA"
    },
    {
        "pertanyaan": "Hewan : U-H-I",
        "jawaban": "HIU"
    },
    {
        "pertanyaan": "Sayuran : L-O-K",
        "jawaban": "KOL"
    },
    {
        "pertanyaan": "Benda : N-A-B",
        "jawaban": "BAN"
    },
    {
        "pertanyaan": "Benda : B-R-O",
        "jawaban": "BOR"
    },
    {
        "pertanyaan": "Benda : E-R-P",
        "jawaban": "PER"
    },
    {
        "pertanyaan": "Tempat : A-U-J-B",
        "jawaban": "BAJU"
    },
    {
        "pertanyaan": "Buah : P-E-A-L",
        "jawaban": "APEL"
    },
    {
        "pertanyaan": "Benda : K-U-B-U",
        "jawaban": "BUKU"
    },
    {
        "pertanyaan": "Benda : B-A-L-O",
        "jawaban": "BOLA"
    },
    {
        "pertanyaan": "Sayuran : A-C-B-E",
        "jawaban": "CABE"
    },
    {
        "pertanyaan": "Benda : Y-O-O-Y",
        "jawaban": "YOYO"
    },
    {
        "pertanyaan": "Benda : F-A-S-O",
        "jawaban": "SOFA"
    },
    {
        "pertanyaan": "Benda : I-L-T-A",
        "jawaban": "TALI"
    },
    {
        "pertanyaan": "Hewan : S-U-R-A",
        "jawaban": "RUSA"
    },
    {
        "pertanyaan": "Benda : P-A-U-L",
        "jawaban": "PALU"
    },
    {
        "pertanyaan": "Hewan : E-L-E-L",
        "jawaban": "LELE"
    },
    {
        "pertanyaan": "Benda : P-I-T-O",
        "jawaban": "TOPI"
    },
    {
        "pertanyaan": "Sayuran : A-B-U-L",
        "jawaban": "LABU"
    },
    {
        "pertanyaan": "Benda : A-Y-U-K",
        "jawaban": "KAYU"
    },
    {
        "pertanyaan": "Buah : L-I-C-E",
        "jawaban": "LECI"
    },
    {
        "pertanyaan": "Benda : L-A-J-A",
        "jawaban": "JALA"
    },
    {
        "pertanyaan": "Benda : S-A-U-K",
        "jawaban": "KUAS"
    },
    {
        "pertanyaan": "Benda : D-I-A-S",
        "jawaban": "DASI"
    },
    {
        "pertanyaan": "Hewan : L-A-U-T",
        "jawaban": "ULAT"
    },
    {
        "pertanyaan": "Benda : G-A-N-T",
        "jawaban": "TANG"
    },
    {
        "pertanyaan": "Hewan : A-P-U-S",
        "jawaban": "PAUS"
    },
    {
        "pertanyaan": "Hewan : U-U-Y-Y",
        "jawaban": "YUYU"
    },
    {
        "pertanyaan": "Sayuran : A-W-I-S",
        "jawaban": "SAWI"
    },
    {
        "pertanyaan": "Sayuran : E-T-G-O",
        "jawaban": "TOGE"
    },
    {
        "pertanyaan": "Buah : A-S-O-W",
        "jawaban": "SAWO"
    },
    {
        "pertanyaan": "Buah : R-I-C-E",
        "jawaban": "CERI"
    },
    {
        "pertanyaan": "Benda : I-K-A-L",
        "jawaban": "KAIL"
    },
    {
        "pertanyaan": "Sayuran : A-R-E-P",
        "jawaban": "PARE"
    },
    {
        "pertanyaan": "Benda : D-A-R-O",
        "jawaban": "RODA"
    },
    {
        "pertanyaan": "Benda : L-E-M-H",
        "jawaban": "HELM"
    },
    {
        "pertanyaan": "Buah : P-A-L-E",
        "jawaban": "APEL"
    },
    {
        "pertanyaan": "Benda : R-U-M-D",
        "jawaban": "DRUM"
    },
    {
        "pertanyaan": "Hewan : A-R-E-K",
        "jawaban": "KERA"
    },
    {
        "pertanyaan": "Kendaraan : K-A-N-T",
        "jawaban": "TANK"
    },
    {
        "pertanyaan": "Pekerjaan : U-R-U-G",
        "jawaban": "GURU"
    },
    {
        "pertanyaan": "Pekerjaan : K-O-I-K",
        "jawaban": "KOKI"
    },
    {
        "pertanyaan": "Benda : A-M-P-U-L",
        "jawaban": "LAMPU"
    },
    {
        "pertanyaan": "Buah : J-R-U-K-E",
        "jawaban": "JERUK"
    },
    {
        "pertanyaan": "Hewan : G-A-L-E-N",
        "jawaban": "ELANG"
    },
    {
        "pertanyaan": "Benda : B-E-R-E-M",
        "jawaban": "EMBER"
    },
    {
        "pertanyaan": "Benda : B-E-G-O-N",
        "jawaban": "OBENG"
    },
    {
        "pertanyaan": "Benda : A-A-L-I-P",
        "jawaban": "PIALA"
    },
    {
        "pertanyaan": "Benda : H-A-R-U-M",
        "jawaban": "RUMAH"
    },
    {
        "pertanyaan": "Hewan : G-A-I-N-S",
        "jawaban": "SINGA"
    },
    {
        "pertanyaan": "Hewan : K-U-S-I-T",
        "jawaban": "TIKUS"
    },
    {
        "pertanyaan": "Benda : J-A-W-N-A",
        "jawaban": "WAJAN"
    },
    {
        "pertanyaan": "Hewan : B-R-A-Z-E",
        "jawaban": "ZEBRA"
    },
    {
        "pertanyaan": "Benda : L-I-T-O-R",
        "jawaban": "TROLI"
    },
    {
        "pertanyaan": "Hewan : A-C-M-A-N",
        "jawaban": "MACAN"
    },
    {
        "pertanyaan": "Sayuran : M-I-N-U-T",
        "jawaban": "TIMUN"
    },
    {
        "pertanyaan": "Benda : B-A-N-O-L",
        "jawaban": "BALON"
    },
    {
        "pertanyaan": "Benda : P-A-N-I-C",
        "jawaban": "PANCI"
    },
    {
        "pertanyaan": "Benda : C-U-I-N-K",
        "jawaban": "KUNCI"
    },
    {
        "pertanyaan": "Hewan : A-P-A-N-D",
        "jawaban": "PANDA"
    },
    {
        "pertanyaan": "Benda : A-D-N-E-T",
        "jawaban": "TENDA"
    },
    {
        "pertanyaan": "Hewan : N-O-B-I-S",
        "jawaban": "BISON"
    },
    {
        "pertanyaan": "Buah : E-L-M-O-N",
        "jawaban": "MELON"
    },
    {
        "pertanyaan": "Hewan : A-T-R-I-P",
        "jawaban": "TAPIR"
    },
    {
        "pertanyaan": "Benda : S-I-R-S-I",
        "jawaban": "SISIR"
    },
    {
        "pertanyaan": "Benda : R-U-S-A-K",
        "jawaban": "KASUR"
    },
    {
        "pertanyaan": "Benda : P-O-K-E-R",
        "jawaban": "KOPER"
    },
    {
        "pertanyaan": "Benda : A-L-E-G-S",
        "jawaban": "GELAS"
    },
    {
        "pertanyaan": "Hewan : A-D-G-U-N",
        "jawaban": "UDANG"
    },
    {
        "pertanyaan": "Benda : S-P-I-N-O",
        "jawaban": "SPION"
    },
    {
        "pertanyaan": "Hewan : A-T-A-L-L",
        "jawaban": "LALAT"
    },
    {
        "pertanyaan": "Buah : J-A-B-M-U",
        "jawaban": "JAMBU"
    },
    {
        "pertanyaan": "Benda : A-P-O-M-P",
        "jawaban": "POMPA"
    },
    {
        "pertanyaan": "Benda : A-M-U-J-R",
        "jawaban": "JARUM"
    },
    {
        "pertanyaan": "Benda : S-K-E-E-T",
        "jawaban": "KESET"
    },
    {
        "pertanyaan": "Hewan : A-U-B-A-Y",
        "jawaban": "BUAYA"
    },
    {
        "pertanyaan": "Benda : I-T-A-S-K",
        "jawaban": "SIKAT"
    },
    {
        "pertanyaan": "Buah : M-O-T-A-T",
        "jawaban": "TOMAT"
    },
    {
        "pertanyaan": "Benda : K-E-R-T-O",
        "jawaban": "ROKET"
    },
    {
        "pertanyaan": "Benda :T-A-K-E-R",
        "jawaban": "RAKET"
    },
    {
        "pertanyaan": "Benda : M-E-T-R-O",
        "jawaban": "REMOT"
    },
    {
        "pertanyaan": "Hewan : B-E-L-A-H",
        "jawaban": "LEBAH"
    },
    {
        "pertanyaan": "Hewan : C-I-A-K-C",
        "jawaban": "CICAK"
    },
    {
        "pertanyaan": "Hewan : A-K-G-A-G",
        "jawaban": "GAGAK"
    },
    {
        "pertanyaan": "Buah : L-A-S-K-A",
        "jawaban": "SALAK"
    },
    {
        "pertanyaan": "Benda : B-A-S-K-A",
        "jawaban": "ASBAK"
    },
    {
        "pertanyaan": "Benda : L-O-B-T-O",
        "jawaban": "BOTOL"
    },
    {
        "pertanyaan": "Hewan : G-A-B-O-N",
        "jawaban": "BANGO"
    },
    {
        "pertanyaan": "Hewan : C-O-K-E-A",
        "jawaban": "KECOA"
    },
    {
        "pertanyaan": "Hewan : P-U-T-I-A",
        "jawaban": "TUPAI"
    },
    {
        "pertanyaan": "Benda : B-A-O-I-L",
        "jawaban": "BIOLA"
    },
    {
        "pertanyaan": "Hewan : A-K-A-L-O",
        "jawaban": "KOALA"
    },
    {
        "pertanyaan": "Sayuran : S-I-B-U-K",
        "jawaban": "KUBIS"
    },
    {
        "pertanyaan": "Sayuran : A-B-A-M-Y",
        "jawaban": "BAYAM"
    },
    {
        "pertanyaan": "Sayuran : M-U-R-A-J",
        "jawaban": "JAMUR"
    },
    {
        "pertanyaan": "Hewan : S-A-G-A-N",
        "jawaban": "ANGSA"
    },
    {
        "pertanyaan": "Benda : N-A-B-O-D",
        "jawaban": "BANDO"
    },
    {
        "pertanyaan": "Benda : S-T-A-K-E",
        "jawaban": "KASET"
    },
    {
        "pertanyaan": "Benda : G-A-P-A-R",
        "jawaban": "PAGAR"
    },
    {
        "pertanyaan": "Hewan : K-U-R-A-N",
        "jawaban": "RAKUN"
    },
    {
        "pertanyaan": "Benda : B-L-A-K-E",
        "jawaban": "KABEL"
    },
    {
        "pertanyaan": "Benda : B-R-O-T-O",
        "jawaban": "ROBOT"
    },
    {
        "pertanyaan": "Benda : G-A-E-L-S",
        "jawaban": "GELAS"
    },
    {
        "pertanyaan": "Benda : P-I-S-K-A",
        "jawaban": "KIPAS"
    },
    {
        "pertanyaan": "Benda : K-E-R-O-K",
        "jawaban": "KOREK"
    },
    {
        "pertanyaan": "Benda : A-L-O-N-G",
        "jawaban": "GALON"
    },
    {
        "pertanyaan": "Benda : A-C-I-N-D",
        "jawaban": "CANDI"
    },
    {
        "pertanyaan": "Hewan : E-N-Y-U-P",
        "jawaban": "PENYU"
    },
    {
        "pertanyaan": "Pekerjaan : R-U-R-I-K",
        "jawaban": "KURIR"
    },
    {
        "pertanyaan": "Pekerjaan : P-U-S-R-I",
        "jawaban": "SUPIR"
    },
    {
        "pertanyaan": "Pekerjaan : A-K-R-I-S",
        "jawaban": "KASIR"
    },
    {
        "pertanyaan": "Profesi : L-A-T-T-E",
        "jawaban": "ATLET"
    },
    {
        "pertanyaan": "Profesi : P-I-K-E-R",
        "jawaban": "KIPER"
    },
    {
        "pertanyaan": "Profesi : W-A-I-T-S",
        "jawaban": "WASIT"
    },
    {
        "pertanyaan": "Tempat : H-A-N-T-U",
        "jawaban": "HUTAN"
    },
    {
        "pertanyaan": "Tempat : D-R-A-U-P",
        "jawaban": "DAPUR"
    },
    {
        "pertanyaan": "Tempat : M-A-N-T-A",
        "jawaban": "TAMAN"
    },
    {
        "pertanyaan": "Tempat : P-A-R-A-S",
        "jawaban": "PASAR"
    },
    {
        "pertanyaan": "Benda : B-A-K-E-O-N",
        "jawaban": "BONEKA"
    },
    {
        "pertanyaan": "Benda : J-A-K-E-M-E",
        "jawaban": "KEMEJA"
    },
    {
        "pertanyaan": "Hewan : G-I-A-N-U-A",
        "jawaban": "IGUANA"
    },
    {
        "pertanyaan": "Benda : H-A-R-E-U-P",
        "jawaban": "PERAHU"
    },
    {
        "pertanyaan": "Benda : A-M-A-K-E-R",
        "jawaban": "KAMERA"
    },
    {
        "pertanyaan": "Benda : D-A-P-E-S-E",
        "jawaban": "SEPEDA"
    },
    {
        "pertanyaan": "Benda : R-E-T-A-K-E",
        "jawaban": "KERETA"
    },
    {
        "pertanyaan": "Hewan : G-U-I-T-A-R",
        "jawaban": "GURITA"
    },
    {
        "pertanyaan": "Buah : A-P-E-P-A-Y",
        "jawaban": "PEPAYA"
    },
    {
        "pertanyaan": "Benda : A-K-L-U-N-G",
        "jawaban": "ANGKLUNG"
    },
    {
        "pertanyaan": "Benda : N-A-T-A-N-E",
        "jawaban": "ANTENA"
    },
    {
        "pertanyaan": "Buah : G-R-A-N-G-U",
        "jawaban": "ANGGUR"
    },
    {
        "pertanyaan": "Benda : C-R-A-S-K-I",
        "jawaban": "KARCIS"
    },
    {
        "pertanyaan": "Benda : P-E-G-S-E-R",
        "jawaban": "GESPER"
    },
    {
        "pertanyaan": "Makanan : A-G-N-A-K-C",
        "jawaban": "KACANG"
    },
    {
        "pertanyaan": "Hewan : J-I-G-K-A-N",
        "jawaban": "KIJANG"
    },
    {
        "pertanyaan": "Benda : N-A-G-W-A-G",
        "jawaban": "GAWANG"
    },
    {
        "pertanyaan": "Hewan : K-O-D-O-M-O",
        "jawaban": "KOMODO"
    },
    {
        "pertanyaan": "Benda : G-L-U-I-N-G",
        "jawaban": "GULING"
    },
    {
        "pertanyaan": "Benda : A-N-G-Y-G-U",
        "jawaban": "GAYUNG"
    },
    {
        "pertanyaan": "Sayuran : G-E-R-N-O-T",
        "jawaban": "TERONG"
    },
    {
        "pertanyaan": "Benda : N-A-T-I-N-G",
        "jawaban": "ANTING"
    },
    {
        "pertanyaan": "Benda : K-R-O-O-M-P",
        "jawaban": "KOMPOR"
    },
    {
        "pertanyaan": "Benda : M-U-S-P-I-T",
        "jawaban": "SUMPIT"
    },
    {
        "pertanyaan": "Benda : D-E-M-O-P-T",
        "jawaban": "DOMPET"
    },
    {
        "pertanyaan": "Hewan : A-G-N-I-C-C",
        "jawaban": "CACING"
    },
    {
        "pertanyaan": "Hewan : C-U-P-A-N-G",
        "jawaban": "CAPUNG"
    },
    {
        "pertanyaan": "Benda : G-M-K-O-B-E",
        "jawaban": "GEMBOK"
    },
    {
        "pertanyaan": "Benda : G-A-N-B-U-K",
        "jawaban": "BANGKU"
    },
    {
        "pertanyaan": "Benda : C-C-I-I-N-N",
        "jawaban": "CINCIN"
    },
    {
        "pertanyaan": "Benda : D-O-S-K-E-N",
        "jawaban": "SENDOK"
    },
    {
        "pertanyaan": "Benda : G-R-O-LO-B",
        "jawaban": "BORGOL"
    },
    {
        "pertanyaan": "Hewan : C-A-L-K-I-N",
        "jawaban": "KANCIL"
    },
    {
        "pertanyaan": "Sayuran : L-O-W-E-R-T",
        "jawaban": "WORTEL"
    },
    {
        "pertanyaan": "Hewan : E-T-O-N-M-Y",
        "jawaban": "MONYET"
    },
    {
        "pertanyaan": "Benda : A-N-I-T-R-A",
        "jawaban": "RANTAI"
    },
    {
        "pertanyaan": "Sayuran : J-U-G-N-A-G",
        "jawaban": "JAGUNG"
    },
    {
        "pertanyaan": "Hewan : A-R-I-P-K-T",
        "jawaban": "PARKIT"
    },
    {
        "pertanyaan": "Hewan : G-U-S-M-A-N",
        "jawaban": "MUSANG"
    },
    {
        "pertanyaan": "Hewan : A-N-D-A-K-L",
        "jawaban": "LANDAK"
    },
    {
        "pertanyaan": "Sayuran : B-I-C-N-U-S",
        "jawaban": "BUNCIS"
    },
    {
        "pertanyaan": "Buah : M-E-D-I-A-L",
        "jawaban": "DELIMA"
    },
    {
        "pertanyaan": "Buah : M-A-R-C-I-E",
        "jawaban": "CERMAI"
    },
    {
        "pertanyaan": "Buah : G-A-N-G-M-A",
        "jawaban": "MANGGA"
    },
    {
        "pertanyaan": "Hewan : A-K-B-A-W-I",
        "jawaban": "BIAWAK"
    },
    {
        "pertanyaan": "Benda : C-A-K-E-P-I",
        "jawaban": "KECAP"
    },
    {
        "pertanyaan": "Benda : E-L-G-A-N-G",
        "jawaban": "GELANG"
    },
    {
        "pertanyaan": "Buah : A-N-N-A-K-G",
        "jawaban": "NANGKA"
    },
    {
        "pertanyaan": "Buah : S-K-A-S-R-I",
        "jawaban": "SIRSAK"
    },
    {
        "pertanyaan": "Benda : R-E-S-E-N-T",
        "jawaban": "SENTER"
    },
    {
        "pertanyaan": "Benda : P-A-N-G-E-D",
        "jawaban": "PEDANG"
    },
    {
        "pertanyaan": "Benda : G-A-T-A-N-G",
        "jawaban": "TANGGA"
    },
    {
        "pertanyaan": "Benda : H-E-A-R-U-P",
        "jawaban": "PERAHU"
    },
    {
        "pertanyaan": "Benda : A-K-A-K-P-M",
        "jawaban": "KAMPAK"
    },
    {
        "pertanyaan": "Profesi : I-S-P-O-I-L",
        "jawaban": "POLISI"
    },
    {
        "pertanyaan": "Profesi : A-W-L-P-O-N",
        "jawaban": "POLWAN"
    },
    {
        "pertanyaan": "Profesi : R-U-S-S-E-T",
        "jawaban": "SUSTER"
    },
    {
        "pertanyaan": "Tempat : I-L-K-I-N-K",
        "jawaban": "KLINIK"
    },
    {
        "pertanyaan": "Tempat : T-O-P-E-K-A",
        "jawaban": "APOTEK"
    },
    {
        "pertanyaan": "Tempat : K-A-R-T-O-N",
        "jawaban": "KANTOR"
    },
    {
        "pertanyaan": "Tempat : G-U-N-W-A-R",
        "jawaban": "WARUNG"
    },
    {
        "pertanyaan": "Tempat : G-U-N-G-U-N",
        "jawaban": "GUNUNG"
    },
    {
        "pertanyaan": "Tempat : B-A-R-K-I-P",
        "jawaban": "BAPRIK"
    },
    {
        "pertanyaan": "Hewan : I-C-E-L-I-N-K",
        "jawaban": "KELINCI"
    },
    {
        "pertanyaan": "Benda : K-I-R-A-S-E-T",
        "jawaban": "SETRIKA"
    },
    {
        "pertanyaan": "Sayuran : G-A-N-T-K-E-N",
        "jawaban": "KENTANG"
    },
    {
        "pertanyaan": "Benda : G-I-N-G-U-T-N",
        "jawaban": "GUNTING"
    },
    {
        "pertanyaan": "Benda : G-A-N-G-N-E-D",
        "jawaban": "GENDANG"
    },
    {
        "pertanyaan": "Tempat : A-H-A-W-S",
        "jawaban": "SAWAH"
    },
    {
        "pertanyaan": "Hewan : B-U-N-G-K-A-M",
        "jawaban": "KUMBANG"
    },
    {
        "pertanyaan": "Benda : CANGKING",
        "jawaban": "KANCING"
    },
    {
        "pertanyaan": "Buah : G-A-S-M-I-N-G",
        "jawaban": "MANGGIS"
    },
    {
        "pertanyaan": "Benda : R-A-C-K-I-N-G",
        "jawaban": "CANGKIR"
    },
    {
        "pertanyaan": "Benda : G-L-E-N-N-C-O",
        "jawaban": "LONCENG"
    },
    {
        "pertanyaan": "Benda : A-S-A-W-E-P-T",
        "jawaban": "PESAWAT"
    },
    {
        "pertanyaan": "Benda : B-R-O-K-A-G-E",
        "jawaban": "GEROBAK"
    },
    {
        "pertanyaan": "Benda : L-U-C-K-N-A-G",
        "jawaban": "CANGKUL"
    },
    {
        "pertanyaan": "Hewan : D-E-I-A-L-E-K",
        "jawaban": "KELEDAI"
    },
    {
        "pertanyaan": "Benda : A-L-P-O-M-I-N",
        "jawaban": "LAMPION"
    },
    {
        "pertanyaan": "Sayuran : K-A-R-A-P-I-P",
        "jawaban": "PAPRIKA"
    },
    {
        "pertanyaan": "Sayuran : K-O-L-O-R-I-B",
        "jawaban": "BROKOLI"
    },
    {
        "pertanyaan": "Hewan : A-I-A-R-H-U-M",
        "jawaban": "HARIMAU"
    },
    {
        "pertanyaan": "Sayuran : J-O-I-N-M-E-L",
        "jawaban": "MELINJO"
    },
    {
        "pertanyaan": "Buah : M-A-R-I-S-K-A",
        "jawaban": "MARKISA"
    },
    {
        "pertanyaan": "Benda : J-A-G-K-N-A-R",
        "jawaban": "JANGKAR"
    },
    {
        "pertanyaan": "Buah : E-K-E-K-M-S-E",
        "jawaban": "KESEMEK"
    },
    {
        "pertanyaan": "Buah : R-I-S-A-Y-A-K",
        "jawaban": "SRIKAYA"
    },
    {
        "pertanyaan": "Benda : N-O-M-I-T-O-R",
        "jawaban": "MONITOR"
    },
    {
        "pertanyaan": "Benda : G-A-N-K-M-U-K",
        "jawaban": "MANGKUK"
    },
    {
        "pertanyaan": "Benda : T-A-N-A-G-E-R",
        "jawaban": "GERANAT"
    },
    {
        "pertanyaan": "Benda : A-J-I-G-G-E-R",
        "jawaban": "GERGAJI"
    },
    {
        "pertanyaan": "Profesi : L-E-A-N-A-N-Y",
        "jawaban": "NELAYAN"
    },
    {
        "pertanyaan": "Profesi : L-U-K-E-P-I-S",
        "jawaban": "PELUKIS"
    },
    {
        "pertanyaan": "Profesi : S-I-M-I-A-N-S",
        "jawaban": "MASINIS"
    },
    {
        "pertanyaan": "Profesi : I-N-K-I-E-S-T",
        "jawaban": "TEKNISI"
    },
    {
        "pertanyaan": "Profesi : E-T-A-T-R-A-N",
        "jawaban": "TENTARA"
    },
    {
        "pertanyaan": "Profesi : P-E-T-A-W-A-R",
        "jawaban": "PERAWAT"
    },
    {
        "pertanyaan": "Pekerjaan : A-L-A-N-Y-EP",
        "jawaban": "PELAYAN"
    },
    {
        "pertanyaan": "Pekerjaan : A-D-A-H-K-O-N",
        "jawaban": "NAHKODA"
    },
    {
        "pertanyaan": "Profesi : J-E-N-I-P-U-T",
        "jawaban": "PETINJU"
    },
    {
        "pertanyaan": "Tempat : A-D-I-T-N-O-S",
        "jawaban": "STADION"
    },
    {
        "pertanyaan": "Hewan : A-K-A-K-A-T-K-U",
        "jawaban": "KAKATUA"
    },
    {
        "pertanyaan": "Buah : O-R-B-I-T-E-R-S",
        "jawaban": "STROBERI"
    },
    {
        "pertanyaan": "Benda : A-C-T-A-K-A-M-A",
        "jawaban": "KACAMATA"
    },
    {
        "pertanyaan": "Benda : L-E-V-I-T-I-E-S",
        "jawaban": "TELEVISI"
    },
    {
        "pertanyaan": "Sayuran : G-U-N-K-K-N-A-G",
        "jawaban": "KANGKUNG"
    },
    {
        "pertanyaan": "Hewan : L-A-B-E-L-N-A-G",
        "jawaban": "BELALANG"
    },
    {
        "pertanyaan": "Hewan : A-J-A-W-L-I-A-R",
        "jawaban": "RAJAWALI"
    },
    {
        "pertanyaan": "Hewan : G-I-T-I-N-P-E-K",
        "jawaban": "KEPITING"
    },
    {
        "pertanyaan": "Benda : G-R-U-S-L-I-N-E",
        "jawaban": "SERULING"
    },
    {
        "pertanyaan": "Benda : C-O-N-G-M-E-E-K",
        "jawaban": "KEMOCENG"
    },
    {
        "pertanyaan": "Benda : M-E-T-P-E-R-O-T",
        "jawaban": "TEROMPET"
    },
    {
        "pertanyaan": "Benda : G-U-N-K-L-A-N-G",
        "jawaban": "ANGKLUNG"
    },
    {
        "pertanyaan": "Profesi : A-N-N-Y-Y-I-P-E",
        "jawaban": "PENYANYI"
    },
    {
        "pertanyaan": "Pekerjaan : D-A-N-G-P-A-G-E",
        "jawaban": "PEDAGANG"
    },
    {
        "pertanyaan": "Profesi : D-R-U-K-I-T-E-R",
        "jawaban": "DIREKTUR"
    },
    {
        "pertanyaan": "Profesi : D-E-N-E-P-R-I-S",
        "jawaban": "PRESIDEN"
    },
    {
        "pertanyaan": "Profesi : S-I-N-N-Y-U-R-I",
        "jawaban": "INSINYUR"
    },
    {
        "pertanyaan": "Tempat : A-R-E-L-M-I-N-T",
        "jawaban": "TERMINAL"
    },
    {
        "pertanyaan": "Tempat : A-R-N-I-P-A-R-K",
        "jawaban": "PARKIRAN"
    },
    {
        "pertanyaan": "Tempat : A-N-T-R-O-R-S-E",
        "jawaban": "RESTORAN"
    }
]
    
          var upan = url[Math.floor(Math.random() * url.length)]
          res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result: {
                 	question: `${upan.pertanyaan}`,
                     answer: `${upan.jawaban}`
                   }
             })
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/truth', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)

       if(listkey.includes(apikeyInput)){
       	
       var url = 
       
       [
        "menurut kamu crush kamu sekarang itu cocok gak sama kamu?",
        "pencapaian yang udah didapet apa aja ditahun ini?",
        "telpon crush kamu, kalo ditanya bilang aja kepencet",
        "kalo kamu diputusin sama mantan,apa yang kamu lakuin?",
        "pencapaian yang udah didapet apa aja ditahun ini?",
        "siapa yang sempet bikin lu kecewa?",
        "hal yang bikin kecewa?",
        "yang paling pendek menurut kamu tapi imut siapa?",
        "seberapa sayang kmu pada bumi?",
        "lagu yang akhir2 ini di denger?",
        "siapa nama artis yang pernah kamu bucinin diam-diam?",
        "tujuan yang lagi dipengen itu apa?",
        "punya berapa akun ig? sebutin smua",
        "kebiasaan terburuk lo pas di sekolah apa?",
        "pencapaian yang udah didapet apa aja ditahun ini?",
        "apa ketakutan terbesar kamu?",
        "Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget",
        "pernah nolak orang? alasannya kenapa?",
        "suka mabar(main bareng)sama siapa?",
        "Siapa yang paling mendekati tipe pasangan idealmu di sini",
        "(bgi yg muslim) pernah ga solat seharian?",
        "hal yang paling ditakutin?",
        "pernah jadi selingkuhan orang?",
        "pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?",
        "suka sayur gak?",
        "hal yang bikin seneng pas lu lagi sedih apa?",
        "pernah gak nyuri uang nyokap atau bokap? Alesanya?",
        "Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
        "siapa first love mu?",
        "apa ketakutan terbesar kamu?",
        "Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)",
        "Pernah suka sama siapa aja? berapa lama?"
        ]
    
          var upan = url[Math.floor(Math.random() * url.length)]
          res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result: {
                 	truth: `${upan}`
                   }
             })
} else {
res.sendFile(invalidKey)
}
})

router.get('/game/dare', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)

       if(listkey.includes(apikeyInput)){
       	
       var url = 
       
[
 "makan 2 sendok nasi tanpa lauk apapun, kalo seret boleh minum",
        "spill orang yang bikin kamu jedag jedug",
        "telfon crush/pacar sekarang dan ss ke pemain",
        "drop emot \"🦄💨\" setiap ngetik di gc/pc selama 1 hari.",
        "ucapin kata \"Selamat datang di Who Wants To Be a Millionaire!\" ke semua grup yang kamu punya",
        "marah² ga jelas ke penonton sw kamu urutan 30",
        "telfon mantan bilang kangen",
        "yanyiin reff lagu yang terakhir kamu setel",
        "vn mantan/crush/pacar kamu, bilang \"hi (namanya), mau telfon dong, bentar ajaa. aku kangen🥺👉🏼👈\"🏼",
        "kletekan di meja (yg ada dirumah) sampe lo dimarahin karena berisik",
        "belanjain (grab/gofood) buat salah satu pemain disini, terserah siapa. budget dibawah 25k",
        "Bilang ke random people  \"Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling ciyussss \"",
        "sebutin nama nama mantan",
        "buatin 1 pantun untuk pemain pertama!",
        "ss chat wa",
        "chat random people dengan bahasa alay lalu ss kesini",
        "ceritain hal memalukan versi diri sendiri",
        "tag orang yang dibenci",
        "Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll.",
        "ganti nama jadi \" BOWO \" selama 24 jam",
        "teriak \" anjimm gabutt anjimmm \" di depan rumah mu",
        "snap/post foto pacar/crush",
        "sebutkan tipe pacar mu!",
        "bilang \"i hv crush on you, mau jadi pacarku gak?\" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini",
        "record voice baca surah al-kautsar",
        "prank chat mantan dan bilang \" i love u, pgn balikan. \" Tanpa ada kata dare!",
        "chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia \"i lucky to hv you!\"",
        "ganti nama menjadi \"gue anak lucinta luna\" selama 5 jam",
        "ketik pake bahasa sunda 24 jam",
        "pake foto sule sampe 3 hari",
        "drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu",
        "kirim voice note bilang can i call u baby?",
        "ss recent call whatsapp",
        "Bilang \"KAMU CANTIK BANGET NGGAK BOHONG\" ke cowo!",
        "pap ke salah satu anggota grup"
]
    
          var upan = url[Math.floor(Math.random() * url.length)]
          res.json({
                 creator: 'Hafidz Abdillah',
                 status: true,
                 code: 200,
                 message: 'Jangan ditembak bang',
                 result: {
                 	dare:`${upan}`
                   }
             })
} else {
res.sendFile(invalidKey)
}
})
// End of script
module.exports = router
