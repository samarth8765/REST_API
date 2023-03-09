const express = require('express');
const Student = require("../models/students");
const router = new express.Router();

// creating student 
router.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    console.log(student);
    const data = await student.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(404).send(err);
  }
});

// retrieving info of all students
router.get("/students", async (req, res) => {
  try {
    const data = await Student.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(201).send(data);
  }
});

// using params
// retrieving info of a particular student using their name
router.get("/student/:name",async(req,res)=>{
    try{
        const name = req.params.name;
        const data = await Student.find({name}).select("-_id");
        console.log(data);
        if(!data)return res.status(404).send("Error");

        res.status(200).send(data);
    }catch(err){
           res.status(404).send(err);
    }
});

// update operation
router.patch("/student/:id",async(req, res)=>{
    try{
        const _id = req.params.id;
        const updateStudent = await Student.updateOne({_id},
        {$set: req.body});
        
        console.log(updateStudent);

        res.send(updateStudent);

    }
    catch(err){
        res.status(404).send(err);
    }
});

// delete operation

router.delete('/student/:id',async (req,res)=>{
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.deleteOne({_id});
        console.log(deleteStudent);
        console.log("SDf");
        if(!deleteStudent)return res.status(400).send('Error');

        res.send(deleteStudent);
    }
    catch(err){
        res.status(404).send(err);
    }
});

module.exports = router;