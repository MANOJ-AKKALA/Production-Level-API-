
const StudentCollection = require('./students');

exports.getAll = async () => {
    return await StudentCollection.find();
};

exports.getStudentById = async (id) => {
    return await StudentCollection.findById(id);
};

exports.createStudent = async (student) => {
    return await StudentCollection.create(student);
};

exports.updateStudent = async (id, student) => {
    return await StudentCollection.findByIdAndUpdate(id, student);
};


exports.deleteStudent = async (id) => {
    return await StudentCollection.findByIdAndDelete(id);
};