// Working to create a MongoDB collection for this information in order for visitor data to 
// to be saved when running through node at the localhost

var http = require("http");
var fs = require("fs");

PORT = 8000;

var server = http.createServer(handleRequest);

function readPage(path, res) {
    fs.readFile(`${__dirname}${path}.html`, function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/index":
        case "/contact":
        case "/portfolio":
            return readPage(path, res);
        default:
            return readPage("/index", res);
    };
};

server.listen(PORT, function () {
    console.log("Server listening at http://localhost:" + PORT);
});

