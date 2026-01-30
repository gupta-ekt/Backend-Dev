const express = require("express");
const app = express();


app.get("/", (req,res)=>{
    return res.end("this is home page");
})
app.get("/attendance",(res,req)=>{
    if(res.query.present==="yes"){
       return res.send(res.query.name + " is present in class");
    }
    else{
        return res.send(res.query.name + "is not present in class");
    }
});

app.listen(8000, ()=>{
    console.log("server running");
})