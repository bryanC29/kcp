import jwt from 'jsonwebtoken';
import Users from '../models/users.js';

const tokenVerify = async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await Users.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'Invalid token, user not found.' });
        }

        req.user = user;
        req.token = token;

        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired. Please log in again.' });
        }
        console.error(err);
        res.status(401).json({ message: 'Token verification failed, authorization denied.' });
    }
};

export default tokenVerify;