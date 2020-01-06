const http = require('http');
const router = require('./routes/api')

const PORT = 5000;
const route = 'https://sandbox.iexapis.com/stable/stock/aapl/news?token=Tsk_09b57d3b11144c5089408fcd94074fc0'

const server = http.createServer((req, res) => {
    router(req, res, route);
});

server.listen(PORT, () => {
    console.log(`Server connected on port: ${PORT}`);
});