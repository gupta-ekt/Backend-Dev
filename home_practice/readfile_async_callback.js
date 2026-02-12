const fs = require('fs');

fs.readFile("example.txt","utf-8", (err,data)=>{
    if(err){
        console.log("error in reading file", err)
        return;
    }
    else{
        console.log("file readed successfully", data)
    }
})