const url = require("url");
const http = require("http");

const myServer = http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    switch(myUrl.pathname){
        case "/":
            res.end("Welcome to the Home Page");
            break;
        case "/about":
            const username = myUrl.query.name;
            res.end('hi, ${username}');
            break;
        default:
            res.end("404 Page Not Found");
    }
});

myServer.listen(5000, () => console.log("Server started on port 5000"));