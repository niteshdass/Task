const mongoose = require('mongoose');
 const { ObjectId } = mongoose.Schema;

const SubjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        student: [String]
    },
    { timestamps: true }
);

 

module.exports = mongoose.model('Subject', SubjectSchema);