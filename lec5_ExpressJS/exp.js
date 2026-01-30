// const http = require("http");
const express = require("express");

const app =express();


app.get("/",(req,res)=>{
    return res.send("home page");
});

// app.get("/about", (req, res)=>{
//     return res.send("this is about page " + " Hey "+ req.query.name );
// });

app.get("/student", (req,res)=>{
    const marks = req.query.marks;
    if(marks > 40){
        res.send("congrats " + req.query.name+ "you got " + req.query.marks +" marks and you are pass !");
    }
    else{
        res.send(req.query.marks + "you are fail");
    }
})

// const myserver = http.createServer(app);

app.listen(8000, ()=>{
    console.log("server running");
});
