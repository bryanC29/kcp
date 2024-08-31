import mongoose, { Schema, model } from 'mongoose';

const Admins = new Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    students: [
        {
            id: {
                type: String,
            },
            time: {
                type: Number,
            },
        },
    ],
    teachers: [
        {
            id: {
                type: String,
            },
            time: {
                type: Number,
            },
        },
    ],
    salary: {
        amount: {
            type: Number,
        },
        prevMonth: {
            type: Number,
        },
    },
    absentOrLeaves: [
        {
            type: Number,
        }
    ],
}, {timestamps: true})

export default model('Admins', Admins)