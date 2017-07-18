const http = require("http");

const hostname = "0.0.0.0";
const port = 8080;

const server = http.createServer((req, res) => {
    console.log("-------------------------");
    console.log(req);
    console.log(req.headers);
    req.on("data", function(c) {
        console.log(c.toString());
    })
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Received\n");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});