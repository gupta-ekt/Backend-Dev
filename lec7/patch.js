const express = require('express');
const app = express();  //express type ka application
app.use(express.json());   // json format me data likhte hai kyuki koi database connect nahi kr rkha islie


let students=[
    {id:1, name: "ekta", marks: 60, city: "vrindavan"},
    {id:2, name: "ekta", marks: 60, city: "Hongkong"},
];

app.get('/students', (req, res)=>{
    res.json(students);
});

//PATCH REQUEST - update any one field in data

app.patch("/students/:id", (req,res)=>{     
    const id = req.params.id; //localhost se id ko check karna
    const update = {marks: req.body.marks};
    const student = students.find((s)=>s.id==id);
    if(!student){
        return res.status(404).json({message: "student not found"});

    }
    if(req.body.id || req.body.name || req.body.city){
        return res.status(404).json({message: "can not be updated"});
    }
    // APPLY PARTIAL UPDATES

    Object.assign(student, update);
    res.json({message: "student update successfully", student});
});

app.listen(3000, (req, res)=>{
    console.log("server started");
})
