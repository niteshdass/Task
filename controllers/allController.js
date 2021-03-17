const Subject = require('../models/subject');
const Student = require('../models/student');

const { errorHandler } = require('../helpers/dbErrorHandler');

// using promise 
exports.student = (req, res) => {
    // console.log("req.body", req.body);
    const user = new Student(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                // error: errorHandler(err)
                error: 'Email is taken'
            });
        }
  
        return res.status(200).json({
                    data: user
                });
    });
};






exports.subject = (req, res) => {
   


    const name = req.body.name
    
    const updateItem = Subject.findOne({ name }).then(data => {
        if (data) {
            Subject.findOneAndUpdate({ name }, { $push: { student: req.body.student } }).then(data => {
                       return res.status(200).json({
                    data
                }); 
            })
      
    } else {
   const user = new Subject(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                // error: errorHandler(err)
                error: 'Email is taken'
            });
        }
  
        return res.status(200).json({
                    data: user
                });
    });
    }
    });

};

exports.subjectList = (req, res) => {
     Subject.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.status(200).json(
                data
            );
    });
};



exports.studentList = (req, res) => {
    Student.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.status(200).json(
                data
            );
    });
};

exports.subByStd = (req, res) => {
    Subject.find({student :req.body.name}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.status(200).json(
                data
            );
    });
};






