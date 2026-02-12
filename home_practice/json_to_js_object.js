const fs = require("fs");

const path = require("path");
const a = path.resolve(__dirname);
const b = path.join(a,"data.json");
console.log(b);

fs.readFile(b,"utf-8", (err,data)=>{
    if (err) {
        console.log("error in reading file", err);
        return;
    } else {
        const jsobject = JSON.parse(data);
        console.log("parsed js object");
        console.log(jsobject);
    }

})