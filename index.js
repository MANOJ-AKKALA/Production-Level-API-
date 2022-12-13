const express = require("express");
const mongoose = require('mongoose');
const router = require("./routes");

const app = express();
app.use(express.json())


app.use('/', router)
app.use('/getStudentById/:id', router)
app.use('/createStudent', router)
app.use('/updateStudentById/:id', router)
app.use("/erasingStudentById/id", router)


//!Connection to Mongodb Atlas

const link = "mongodb+srv://apple:apple@cluster0.mf9l5l6.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(link).then(
    () => console.log('Now You are Connected to Database.......!!!!')).catch(
        err => console.log(err));

app.listen(7007, () => console.log("Doing Good......"))