const fs = require('fs');

module.exports = (req, res, routes) =>{
    req.on("data", ()=>{
        console.log("Nothing to see here");
    })
    req.on("end", async () => {
        let price = await routes.stockprice();
        let logo = await routes.companylogo();
        let news = await routes.latestnews();

        const stock = {
            latestStockPrice: price,
            companyLogoPath: logo.url,
            latestNewsArticle: news[0].url
        }
        let jsonStock = JSON.stringify(stock, null, '\t');

        //console.log(jsonStock);
        fs.writeFile('test.json', jsonStock, err => {
            if(err)
                console.log(err);
        });

        res.end();
    });
}