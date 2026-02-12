const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{
    const myurl = url.parse(req.url, true);

    const username = myurl.query.name;
    res.end("username:, ${username}");
});

server.listen(8000, ()=>{
    console.log("server running on port 8000");
});