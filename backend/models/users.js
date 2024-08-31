import mongoose, { Schema, model } from 'mongoose';

const Users = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    emailVerification: {
        type: Boolean,
        default: false,
    },
    phnVerification: {
        type: Boolean,
        default: false,
    },
    uid: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'teacher', 'admin'],
        default: 'student',
    },
    contactNo: {
        type: Number,
    },
    bankDetails: {
        accountNo: {
            type: String,
        },
        ifscCode: {
            type: String,
        },
        upiId: {
            type: String,
        }
    },
    absentOrLeaves: [
        {
            type: Number,
        }
    ],
    additionalDetails: {
        qualification: {
            type: String,
        },
        address: {
            type: String,
        },
        guardianName: {
            type: String,
        },
        gender: {
            type: String,
        },
        currentPosition: {
            type: String,
        },
        age: {
            type: Number,
        }
    },
    centreCode: {
        type: String,
    },
}, {timestamps: true})

export default model('Users', Users)