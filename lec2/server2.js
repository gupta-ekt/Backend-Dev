// // json - javascript object notation

// const http = require('http');
// const {json} = require('stream/consumers')

// let user={
//     username:"ekta"
// }

// //json.stringify = js object to json string


// const server = http.createServer((res,req)=>{
//     if(req.url==='/home'){
//         res.writeHead(200,{
//             "content-type":"text/html"
//     })
//     }
//     res.writeHead(200,{
//         "content-type":"text/html"

//     })
//     // res.end(JSON.stringify({success:"true",user}));
//     res.end("<h1>hello world</h1>")
// })

// server.listen(8000, () => console.log("Server Started"));




const http = require("http");
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "plain/text"});

    res.end("hello world");
})

server.listen(8000,()=>{
    console.log("server running on prot 8000");
})






