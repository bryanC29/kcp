import Users from "../models/users.js";
import { uidGen } from "../utils/idGen.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { email, password } = req.body;
    
    if(!email || !password)
        return res.status(400).json({ message: 'Email and password are required' });

    try {
        const user = await Users.findOne({username: email});

        if(!(user && (await bcrypt.compare(password, user.password))))
            return res.status(400).json({ message: 'Invalid Credentials' });

        const token = jwt.sign({
            id: user._id,
            role: user.role,
        }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        })

        res.setHeader('Authorization', `Bearer ${token}`);
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        })

        res.status(200).json({ message: 'Login successfull' });
    }

    catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server error while logging in' });
    }
}

export const signup = async (req, res) => {

    const { name, email, password, role } = req.body;

    if(!name || !email || !password)
        return res.status(400).json({ message: 'Enter all credentials' });

    try{

        const existingUser = await Users.findOne({ username: email });
        if(existingUser)
            return res.status(400).json({ message: 'Failed to register. Please try again later' });

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const uid = await uidGen(name, role);

        const newUser = new Users({ 
            name,
            username: email,
            password: hash,
            role: (role ? role: 'student'),
            uid,
        });
        await newUser.save();

        const token = jwt.sign({
            'id': newUser._id,
            'role': role,
        }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.setHeader('Authorization', `Bearer ${token}`);
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(201).json({ message: `Successfully registered as ${newUser.role}` });
    }

    catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server error during Signup' });
    }
}

export const logout = (req, res) => {
    try{
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successfull' });
    }

    catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server error during logout' });
    }
}