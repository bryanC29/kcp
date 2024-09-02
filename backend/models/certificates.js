import mongoose, { Schema, model } from "mongoose";

const Certificates = new Schema({
    certID: {
        type: String,
        require: true,
        unique: true,
    },
    uid: {
        type: String,
        require: true,
    },
    courseID: {
        type: String,
        require: true,
    },
    courseName: {
        type: String,
        require: true,
    },
    dateOfIssue: {
        type: String,
        require: true,
    },
}, { timestamps: true, });

export default model('Certificates', Certificates);