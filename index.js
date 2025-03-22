const http = require('node:http');
const fs = require('node:fs');

http.createServer((req, res) => {
    const myURL = new URL(req.url, 'http://localhost');
    let pathname = myURL.pathname;

    if (pathname === '/') {
        pathname = '/index';
    }

    const filename = '.' + pathname + '.html';

    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            fs.readFile('./404.html', 'utf8', (err404, page404) => {
                res.writeHead(404, {'Content-Type': 'text/html'});
                if (err404) {
                    return res.end('404 Not Found');
                }
                return res.end(page404);
            });
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })

}).listen(8080);