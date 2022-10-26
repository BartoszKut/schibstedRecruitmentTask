var http = require('follow-redirects').http;
const url = require('url');

const apiUrl = 'lazybus.tv.nu';

const lazybusProxy = http.createServer((req, res) => {
    const request = url.parse(req.url);
    const options = {
        host: apiUrl,
        port: 80,
        path: request.path,
        method: 'GET'
    };

    const proxyRequest = http.request(options, (response) => {
        res.writeHead(response.statusCode, {...response.headers, 'access-control-allow-origin': '*'});

        response.on('data', (chunk) => {
            res.write(chunk);
        });

        response.on('end', () => {
            res.end();
        });
    });

    req.on('data', (chunk) => {
         proxyRequest.write(chunk);
    });

    req.on('end', () => {
        proxyRequest.end();
    });
});

lazybusProxy.listen(8080);