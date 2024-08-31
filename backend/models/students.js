import mongoose, { Schema, model } from 'mongoose';

const Students = new Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    time: {
        type: Number,
    },
    nextDue: {
        type: Date,
    },
    courseEnrolled: [
        {
            startDate: {
                type: Date,
            },
            course: {
                type: Schema.Types.ObjectId,
                ref: 'Courses',
            },
        }
    ],
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Courses',
        }
    ],
    feePaid: {
        value: {
            type: Boolean,
        },
        message: {
            type: String,
        },
    },
}, {timestamps: true})

export default model('Students', Students)