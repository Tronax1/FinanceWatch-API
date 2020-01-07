
module.exports = (req, res, routes) =>{
    req.on("data", ()=>{
        console.log("Nothing to see here");
    })
    req.on("end", async () => {
        let price = await routes.stockprice();
        let logo = await routes.companylogo();
        let news = await routes.latestnews();

        
        console.log(price);
        console.log(logo);
        console.log(news);
        res.end();
    });
}