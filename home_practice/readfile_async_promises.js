// const fsPromises = require("fs").promises;

// async function readfile() {
//     try{
//         await fsPromises.readFile("example.txt", "utf-8");
//         console.log("fiel data:", data);
//     }
//     catch(err){
//         console.log("error reading file", err);
//     }   
// }
// readfile();




const fspromises = require("fs").promises;
async function file() {
    try {
        await fspromises.readFile("example.txt", "utf-8");
        console.log("file content-", data);    
    } catch (error) {
        console.log("error in reading file", err)   
    }
}
file();