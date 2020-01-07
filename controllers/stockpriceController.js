const https = require('https');

module.exports = url => {
    https.get(url, res => {
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
}