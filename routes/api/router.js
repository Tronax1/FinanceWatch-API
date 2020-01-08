const fs = require('fs');
const url = require('url');

module.exports = (req, res, routes) =>{
    req.on("data", ()=>{
        console.log("Nothing to see here");
    })
    req.on("end", async () => {
        let newUrl = url.parse(req.url);
        let price = await routes.stockprice(newUrl.pathname);
        let logo = await routes.companylogo(newUrl.pathname);
        let news = await routes.latestnews(newUrl.pathname);

        let date = Date(Date.now());
        let newDate = date.toString();
        
        const requestInfo = {
            urlPath: newUrl.pathname,
            reqDate: newDate,
            isRequestSuccessful: true
        }
        const stock = {
            latestStockPrice: price,
            companyLogoPath: logo.url,
            latestNewsArticle: news[0].url,
        }
        let jsonStock = JSON.stringify(stock, null, '\t');
        let jsonRequest = JSON.stringify(requestInfo, null, '\t');

        fs.writeFile('test.json', jsonRequest, err => {
            if(err)
                console.log(err);
        });
        console.log(newUrl.pathname);
        res.write(jsonStock);
        res.end();
    });
}