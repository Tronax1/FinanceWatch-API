const https = require('https');
const fs = require('fs');

https.get('https://sandbox.iexapis.com/stable/stock/aapl/news?token=Tsk_09b57d3b11144c5089408fcd94074fc0', res => {
    let data = '';

    res.on('data', info =>{
        data += info;
    });

    res.on('end', () =>{
        let jsonData = JSON.stringify(data);
        fs.writeFile("test.json", jsonData, (err, result)=>{
            if(err){
                console.log('error', err);
            }
        });
    });

}).on('error', err =>{
    console.log('Error: ' + err.message);
});