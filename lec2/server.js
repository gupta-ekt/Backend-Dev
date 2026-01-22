const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  //   //  console.log("Request received");
  //   //   console.log(req.headers);
  //   // console.log(req);
  let responseText = " ";
switch (req.url) {
  case "/":
    responseText= " This is Home page";
    break;
  case "/about":
    responseText = " This is About page";
    break;
  case "/contact":
    responseText= " This is Contact page";
    break;
  default:
    responseText= "404 page Not Found";
    break;
}
 fs.appendFile("log.txt", log, (err, data) => {
    const log = `${Date.now()}: ${req.url} ${responseText} \n`;
});


  //   res.end("Hello from my server Again!");
});

myServer.listen(8000, () => console.log("Server Started"));