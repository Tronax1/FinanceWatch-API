const fs = require('fs');

module.exports = (req, res, routes) =>{
    req.on("data", ()=>{
        console.log("Nothing to see here");
    })
    req.on("end", () => {
        routes.companylogo();
        res.end();
    });
}