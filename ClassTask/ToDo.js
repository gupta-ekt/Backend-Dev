const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect("mongodb://localhost:27017/ToDo")
.then(()=> console.log("mongodb connected"))
.catch((err)=> console.log("error in connecting mongo db", err));

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        priority:{
            type:string,
            enum:["low","medium","high"],
        },
        status:{
            type:String,
            enum:["pending", "in-progress", "completed"],
        },
        duedate:{
            type:Date
        }
    }
)

const Task = mongoose.model("task",todoSchema);



//CREATE TASK
app.post("/api/tasks", (req,res)=>{
    Task.create(req.body)
    .then(task=>res.status(201).json(task))
    .catch(err=> res.status(404).json({message:"error in creating task"}));
});

app.get("/api/tasks",(req,res)=>{
    const{status, sort}= req.query;

    let filter={};
    if(status){
        filter.status = status;
    }

    let sortoption={};
    if(sort==="duedate"){
        sortoption.duedate=1;
    }
    else if(sort==="-duedate"){
        sortoption.duedate = -1;
    }

    Task.find(filter)
    .sort(sortoption)
    .then(Task=> res.status(200).json(Task));
});

app.put("/api/tasks/:id", (req, res) => {
    Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
    .then(task => {
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    })
    .catch(err => res.status(400).json({ error: err.message }));
});



app.delete("/api/tasks/:id", (req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(task => {
            if (!task) {
                return res.status(404).json({ message: "Task not found" });
            }
            res.status(200).json({ message: "Task deleted successfully" });
        })
        .catch(err => res.status(400).json({ error: "Invalid ID" }));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});