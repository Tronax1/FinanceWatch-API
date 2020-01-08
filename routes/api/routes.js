const stockpriceController = require('../../controllers/stockpriceController');
const logoController = require('../../controllers/logoController');
const newsController = require('../../controllers/newsController');

const routes = {
    stockprice: (stock) => { 
        const urlPrice = `https://sandbox.iexapis.com/stable/stock${stock}/quote/latestPrice?token=Tsk_09b57d3b11144c5089408fcd94074fc0`
        return stockpriceController(urlPrice)
    },
    companylogo: (stock) => { 
        const urlLogo = `https://sandbox.iexapis.com/stable/stock${stock}/logo?token=Tsk_09b57d3b11144c5089408fcd94074fc0`
        return logoController(urlLogo)
    },
    latestnews: (stock) => {
        const urlNews = `https://sandbox.iexapis.com/stable/stock${stock}/news/last/1?token=Tsk_09b57d3b11144c5089408fcd94074fc0`
        return newsController(urlNews)
    }
}

module.exports = routes;