import mongoose, { Schema, model } from "mongoose";

const Notes = new Schema({
    title: {
        type: String,
        require: true,
    },
    body: {
        type: String,
    },
    teacher: {
        type: String,
        require: true,
    },
    course: {
        type: String,
        require: true,
    },
}, { timestamps: true });

export default model('Notes', Notes);