const express = require("express");
const router = express.Router();

const {
    student,
    subject,
    signout,
    studentList,
    subjectList,
    subByStd
} = require("../controllers/allController");
const { studentUploadValidation } = require("../validator");

router.post("/student", studentUploadValidation, student);
router.post("/subject", subject);
router.post("/subByStd", subByStd);
router.get("/studentList", studentList);
router.get("/subjectList", subjectList);
module.exports = router;