const express = require("express");
const app = express();
app.use(express.json());

let credentials = [
    {email:"ekta@gmail.com" , password:"123"},
    {email: "gupta@gmail.com" , password:"456"}
];

//GET REQUEST
app.get("/auth/users", (req, res)=>{
    res.json({message: "user data successfully fetched", credentials});
});

//reset password route
//put request execute
app.put("/auth/reset", (req, res)=>{
    const {email, password, newpassword}= req.body;
    // find user
    const user = credentials.find(
        (cred)=>cred.email== email && cred.password==password
    );
    if(!user){
        return res.status(400).json({message: "invalid email or passowrd"});
    }
    //update password
    user.password=newpassword;
    res.json({message:"password updated successfully", user});
});

//forget password route
app.put("/auth/forgotpassword", (req, res)=>{
    const {email, newpassword}=req.body;
    const user = credentials.find(
        (cred)=>cred.email==email); 
    if(!user){
        return res.status(404).json({message:"email not found"});
    };
    user.password=newpassword;
    res.json({message:"password forgot successfully",user});
});

app.listen(8880,()=>{
    console.log("server started");
})