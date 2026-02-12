const fs = require("fs").promises;

async function writingfile() {
    try {
        await fs.writeFile("example.txt","utf-8");
        console.log("content written in file", data)
        
    } catch (error) {
        console.log("error in writing file", err);
        
    }   
}
writingfile();