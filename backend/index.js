import express, { urlencoded } from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    'origin': '*',
    'methods': 'GET,POST,',
}))

app.use(express.json({
    limit: '5mb',
}))

app.use(express.urlencoded({
    extended: true,
}))

app.get('/', (req, res) => {
    res.status(200).json({'message': 'Working Backend'});
})

app.post('/', (req, res) => {
    res.status(200).json({'message': 'Post request received'});
})

import userRoute from './routes/users.js';
import notificationRoute from './routes/notification.js';
import adminRoute from './routes/admin.js';
import applicationRoute from './routes/application.js';
import leavesRoute from './routes/leaves.js';
import notesRoute from './routes/notes.js';
import verificationRoute from './routes/verification.js';

import tokenVerify from './middleware/tokenVerify.js';

app.use('/users', userRoute);
app.use('/notification', tokenVerify, notificationRoute);
app.use('/admin', tokenVerify, adminRoute);
app.use('/application', tokenVerify, applicationRoute);
app.use('/leave', tokenVerify, leavesRoute);
app.use('/notes', notesRoute);
app.use('/verification', tokenVerify, verificationRoute);

export default app;