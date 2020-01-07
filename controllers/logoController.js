const https = require('https');

module.exports = url => {
    https.get(url, res => {
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