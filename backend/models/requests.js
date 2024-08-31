import mongoose, { Schema, model } from "mongoose";

const Requests = new Schema({
    uid: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false,
    },
});

export default model('Requests', Requests);