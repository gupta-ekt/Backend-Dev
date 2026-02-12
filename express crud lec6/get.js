import express from 'express';

const app = express();
const port = 3000;
import {userData} from "./data.js";
import {mid1, validationpost} from "./middleware.js"

app.use(express.json())

//req -> middleware -> res

app.use(mid1)

app.get("/",(req, res)=>{
    res.send("home route")
})

app.get("/user",(req, res)=>{
    res.json(userData);
})

//user, /about - route parameter
app.get("/user/:id",(req, res)=>{
    const id = req.params.id;
    const user = userData.find((ele)=>ele.id==id );

    if(!user){
        res.send("undefined user")
    }
    return res.json(user);
})

app.get('/search',(req,res)=>{
    const username = req.query.name;
    const pass = req.query.password;
    console.log(req.query)
    res.send({
        username, pass
    }
)
})
app.post("/user", (req,res)=>{
    let userdatanew = req.body;
    console.log(userdatanew)
    res.send("user created")
    {
        let userdatanew = {
        id:userData.length+1,
        name:name,
        city:city
    }
    userData.push(userdatanew);
    res.status(200).send("user created")
    }
})

// app.get("/user/:name",(req,res)=>{
//     const name = req.params.name;
//     const user = userData.find((ele)=>ele.name==name);

//     if(!user){
//         res.send("user with defined name not found")
//     }
//     return res.json(user);

// })

app.get("/contacts", (req,res)=>{
    res.send("contacts route")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.listen(port,()=>{
    console.log("server is running")
})



