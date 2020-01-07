const https = require('https');
const fs = require('fs');

const urlPrice = 'https://sandbox.iexapis.com/stable/stock/twtr/quote/latestPrice?token=Tsk_09b57d3b11144c5089408fcd94074fc0'
const urlLogo = 'https://sandbox.iexapis.com/stable/stock/aapl/logo?token=Tsk_09b57d3b11144c5089408fcd94074fc0'
const urlNews = 'https://sandbox.iexapis.com/stable/stock/aapl/news/last/1?token=Tsk_09b57d3b11144c5089408fcd94074fc0'

const routes = {
    stockprice: ()=>{
        https.get(urlPrice,  res => {
            let data = '';
            res.on('data', info => {
                data += info;
            })
            res.on('end', () => {
                console.log(data);
            }); 
        }).on("error", err => {
            console.log("Error" + err.message);
        }) 
    },
    companylogo: ()=>{
        https.get(urlLogo, res => {
            let data = '';
            res.on('data', info => {
                data = JSON.parse(info);
            })
            res.on('end', () => {
                console.log(data.url);
            });
        }).on("error", err => {
            console.log("Error" + err.message);
        }) 
    },
    latestnews: ()=>{
        https.get(urlNews, res => {
            let data = '';
            res.on('data', info => {
                data = JSON.parse(info);
            })
            res.on('end', () => {
                console.log(data.url);
            });
        }).on("error", err => {
            console.log("Error" + err.message);
        }) 
    }
}

module.exports = routes;