const express = require("express");
const app = express();
app.use(express.json());

let students  = [
    {
        id:15, name:"vivek", marks:30, city:"delhi"
    },
    {
        id:20, name:"ashish", marks:70, city:"delhi"
    },
    {
        id:30, name:"raghav", marks:71, city:"delhi"
    }
];

// VIEW STUDENTS
app.get("/students", (req,res)=>{
    res.json(students);
});

// DELETE - REMOVE STUDENT BY ID

app.delete("/students/:id", (req,res)=>{
    const id = req.params.id;  //params- student ka data, id- jis student ki id chhaiye
    const index= students.findIndex((s)=>s.id==id);
    const marks = req.params.marks; 
    
    

    if(index===-1 ){
        return res.status(404).json({message:"student not found"});
    }
    if(marks>=70){
        return res.status(404).json({message: "student can not be deleted"});
    }

    const deletedstudent = students.splice(index ,1);
    
    res.json({messgae:"student deleted successfully", deletedstudent});
    console.log(deletedstudent);
});
app.listen(8000,()=>{
    console.log('server started');
});



