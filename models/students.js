const mongoose = require('mongoose');
const validator = require('validator');

// defining schema of students
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        require: true,
        unique:[true,'Email-ID already present'],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email-ID');
            }
        }
    },
    phone_num: {
        type:Number,
        min:10,
        required:true,
        unique: true
    },
    address:{ 
        type: String,
        required: true
    }
});


// creating a new collection for students
const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;

