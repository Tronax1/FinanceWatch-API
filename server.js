const http = require('http');
const router = require('./routes/api/index');
const routes = require('./routes/api/routes');

const PORT = 5000;

const server = http.createServer((req, res) => {
    router(req, res, routes);
});

server.listen(PORT, () => {
    console.log(`Server connected on port: ${PORT}`);
});