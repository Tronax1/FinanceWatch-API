const https = require('https');
const stockpriceController = require('../../controllers/stockpriceController');
const logoController = require('../../controllers/logoController');
const newsController = require('../../controllers/newsController');
const fs = require('fs');

const urlPrice = 'https://sandbox.iexapis.com/stable/stock/twtr/quote/latestPrice?token=Tsk_09b57d3b11144c5089408fcd94074fc0'
const urlLogo = 'https://sandbox.iexapis.com/stable/stock/aapl/logo?token=Tsk_09b57d3b11144c5089408fcd94074fc0'
const urlNews = 'https://sandbox.iexapis.com/stable/stock/aapl/news/last/1?token=Tsk_09b57d3b11144c5089408fcd94074fc0'

const routes = {
    stockprice: () => stockpriceController(urlPrice),
    companylogo: () => logoController(urlLogo),
    latestnews: () => newsController(urlNews)
}

module.exports = routes;