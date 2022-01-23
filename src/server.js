const http = require('http'); // pull in the HTTP server module
const fs = require('fs'); // pull in the file system module

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const onRequest = (request, response) => {
    console.log(request.url);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(index);
    response.end();
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
