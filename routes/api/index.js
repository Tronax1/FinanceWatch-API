const fs = require('fs');

module.exports = (req, res, routes) =>{
    let data = '';
    res.on('data', info =>{
        data += info;
    })
    res.on('end', ()=>{
        let jsonData = JSON.stringify(data);
        fs.writeFile('test.json', jsonData, (err)=>{
            if(err){
                console.log('error', err);
            }
        })
    })
}