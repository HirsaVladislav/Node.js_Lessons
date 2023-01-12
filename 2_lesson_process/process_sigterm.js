import process from 'node:process';
import http from 'node:http';


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
});
server.listen(8000);

console.log('process.pid', process.pid);

process.on('SIGINT', (event, code) => {
    console.log('SIGINT');
    console.log(event);
    console.log(code);
    process.exit()
});

process.on('SIGTERM', (event, code) => {
    console.log('SIGTERM');
    process.exit()
});