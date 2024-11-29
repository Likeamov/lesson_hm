// request-promise 负责发送请求的
// import request from ''
// node 早期的 commonjs 模块化
const request  = require('request-promise')
// 解析request 拿到的html 字符串
const cheerio = require('cheerio')
const createCsvWriter = require('csv-writer').createObjectCsvWriter

// 常量 大写 配置项
const HOT_URL = 'https://tophub.today/n/KqndgxeLl9';
// network http 请求
request(HOT_URL)
    .then(html => {
    // 请求完成了
        // console.log(html);
        // 解析html 得到热榜
        // html 字符串 -> tr 
        // 内存里模拟浏览器 cheerio
        const $ = cheerio.load(html);
        const hotList = [];
        $('table tr').each((index, element) => {
            console.log(index, element);
            const title = 
            $(element).find('td:nth-child(2)').text().trim()
            console.log(title);
        })

    })

