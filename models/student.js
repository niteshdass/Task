const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        phone: {
             type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        DateOfBirth: {
            type: String,
            default: 0
        }
   
    },
    { timestamps: true }
);

 

module.exports = mongoose.model('Student', studentSchema);