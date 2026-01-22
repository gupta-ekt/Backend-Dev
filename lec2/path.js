

// path.join("users","ekta","desktop")

// const path = require('path');
// const filepath = "/users/admin/docs/report.pdf";
// console.log(path.basename(filepath));




// Create an HTTP server using the Node.js http module that runs
//  on port 3000 and handles the following GET routes:
// * / → Return a plain text welcome message
// * /about → Return a simple HTML response
// * /user → Read name and age from query parameters and return a JSON response

// Rules to Follow:

// * Set proper Content-Type headers for text, HTML, and JSON
// * Use JSON.stringify() when sending JSON data
// * Return 404 Page Not Found for invalid routes
// * Use only the Node.js http module 

// const http = require("http");

// const myServer = http.createServer((req, res) => {
//     switch (req.url) {
//       case "/":
//         res.writeHead(200, { "Content-Type": "text/plain" , });
//         res.end("Welcome");
//         break;
//       case "/about":
//         res.writeHead(200, { "Content-Type": "text/html" , });
//         res.end("<h1>hello World</h1>");
//         break;
//       case "/user":
//         res.writeHead(200, { "Content-Type": "application-json" , });
//         res.end(JSON.stringify(user={
//             username:"Ekta",
//         }));
//         break;
//       default:
//         res.end("404 page Not Found");
//         break;
//     }
    
 
//   });
 
//   myServer.listen(3000, () => console.log("Server Started"));





const path = require('path')
console.log('file name', path.basename(__filename));
console.log('folder name', path.dirname(__filename));
console.log('Extension', path.extname(__filename));
const fullPath= path.join(__dirname,"public","index.html");
console.log("full path", fullPath);