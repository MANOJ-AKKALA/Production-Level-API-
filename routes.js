const express = require("express");
const router = express.Router();

/* const controller= require('./controllers')

router.get("/getAll",controller.getAll)

router.get("/getStudentById/:id", controller.getStudentById)

router.post("/createStudent" , controller.createStudent)

router.put('/updateStudentById/:id', controller.updateStudentById)

router.delete("/erasingStudentById/:id",controller.deleteStudent)

 */

//! class object based Controller

const classTypeController = require('./classController')

router.get("/getAll", classTypeController.getAll)

router.get("/getStudentById/:id", classTypeController.getStudentById)

router.post("/createStudent", classTypeController.createStudent)

router.put('/updateStudentById/:id', classTypeController.updateStudentById)

router.delete("/erasingStudentById/:id", classTypeController.deleteStudent)


module.exports = router;