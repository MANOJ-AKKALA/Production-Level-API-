
const studentService = require('./services');



exports.getAll = async (req, res) => {
    try {
        console.log('1 getting all -inside controller')
        const allData = await studentService.getAll();
        res.json({ data: allData, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

};

exports.getStudentById = async (req, res) => {
    try {
        console.log('2 get by id -inside controller')
        const eachStudent = await studentService.getStudentById(req.params.id);
        res.json({ data: eachStudent, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};

exports.createStudent = async (req, res) => {
    try {
        console.log('3 new student -inside controller')
        const newStudent = await studentService.createStudent(req.body);
        res.json({ data: newStudent, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateStudentById = async (req, res) => {
    try {
        console.log('4 modifying student -inside controller')
        const modifiedStudent = await studentService.updateStudent(req.params.id, req.body);
        res.json({ data: modifiedStudent, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        console.log('5 deleting particular student')
        const erasing = await studentService.deleteStudent(req.params.id);
        res.json({ data: erasing, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};