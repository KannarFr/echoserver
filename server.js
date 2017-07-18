const http = require("http");

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

server.listen(process.env.PORT, "0.0.0.0", () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});