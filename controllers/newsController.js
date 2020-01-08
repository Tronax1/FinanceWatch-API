const https = require('https');

module.exports = url => {
    return new Promise((resolve, reject) => {

        https.get(url, res => {
            
            let data = '';

            res.on('data', info => {
                if(info != 'Unknown symbol')
                    data = JSON.parse(info);
            })
            res.on('end', () => {
                resolve(data);
            });
            res.on('error', err =>{
                reject(err);
            })
        }).on("error", err => {
            reject(err);
        })
    })
}