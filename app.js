const http = require('http');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Docker Chief\n');
});

server.listen(port, hostname, () => {
    console.log('Server Running at http://%s:%s/', hostname, port);
    console.log('Hello Jenkins Admin')
});

process.on('SIGINT', function() {
    console.log('Caught interrupt signal and will exit');
    process.exit();
});

