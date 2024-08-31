import mongoose, { Schema, model } from "mongoose";

const Notifications = new Schema({
    uid: {
        type: String,
    },
    message: {
        type: String,
    },
    read: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default model('Notifications', Notifications);