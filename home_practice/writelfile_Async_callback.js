const fspromises = require("fs").promises;

fspromises.writeFile("example.txt", "utf-8", (data, err)=>{
    if(err){
        console.log("error in writing", err);
        return;
    }
    console.log("data wrtiitemn", data);
});