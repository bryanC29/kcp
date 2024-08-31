import mongoose, { Schema, model } from 'mongoose';

const Leaves = new Schema({
    uid: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    reason: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
    },
});

export default model('Leaves', Leaves);