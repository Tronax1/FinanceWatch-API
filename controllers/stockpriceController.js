const https = require('https');

module.exports = url => {
    return new Promise((resolve, reject) =>{

        https.get(url, res => {

            let data = '';

            res.on('data', info => {
                data += info;
            })
            res.on('end', () => {
                if(data == 'Unknown symbol'){
                    data = '';
                    resolve(data);
                }
                else{
                    resolve(data);
                }
            });
            res.on('error', err =>{
                reject(err);
            })
        }).on("error", err => {
            reject(err);
        });
    })
}