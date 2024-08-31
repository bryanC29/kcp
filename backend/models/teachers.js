import mongoose, { Schema, model } from 'mongoose';

const Teachers = new Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    time: {
        type: Number,
    },
    paySlip: [
        {
            amount: {
                type: Number,
            },
            prevMonth: {
                type: Number,
            },
        },
    ],
    courseTeaching: [
        {
            startDate: {
                type: Date,
            },
            course: {
                type: Schema.Types.ObjectId,
                ref: 'Course',
            },
        }
    ],
    absentOrLeaves: [
        {
            type: Number,
        }
    ],
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Course',
        }
    ],
}, {timestamps: true})

export default model('Teachers', Teachers)