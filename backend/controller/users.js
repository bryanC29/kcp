import Users from "../models/students.js";
import { uidGen } from "../utils/idGen.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(200).json({'message': 'login done'});
}

export const signup = async (req, res) => {

    const { name, username, password, role = 'student' } = req.body;

    if(!name || !username || !password)
        return res.status(400).json({'message': 'Enter all credentials'});

    try{

        const existingStudent = await Users.findOne({username: username});
        if(existingStudent)
            return res.status(400).json({'message': 'Failed to register. Please try again later'});

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const uid = await uidGen(name, role);

        const newStudent = new Users({ 
            name,
            username,
            password: hash,
            role,
            uid,
        });
        console.log(newStudent);
        await newStudent.save();

        const token = jwt.sign({
            'id': newStudent._id,
            'role': role,
        }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.setHeader('Authorization', `Bearer ${token}`);
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(201).json({'message': `Successfully registered as ${newStudent.role}`});
    }

    catch(err) {
        console.log(err);
        res.status(500).json({'message': 'Internal Server error during Signup'});
    }
}