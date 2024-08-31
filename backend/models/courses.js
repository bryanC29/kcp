import mongoose, { Schema, model } from "mongoose";

const Courses = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    duration: {
        type: String,
    },
    category: {
        type: String,
    },
    tags: [
        {
            type: String,
        },
    ],
});

export default model('Courses', Courses);