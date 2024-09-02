import jwt from 'jsonwebtoken';
import Users from '../models/users.js';
import Students from '../models/students.js';
import Certificates from '../models/certificates.js';
import { certIDGen } from '../utils/idGen.js';

export const verifyCertificate = async (req, res) => {
	const { token } = req.params;

	if(!token)
		return res.status(401).json({ message: 'No token provided' });

	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		
		const certificate = await Certificates.findOne({ certID: decodedToken.id });

		if(!certificate)
			return res.status(404).json({ message: 'Certificate not found' });

		return res.status(200).json({
			message: 'Certificate fetched successfully',
			certificate: certificate,
		})
	}
	catch(err) {
		console.log(err);
		return res.status(500).json({ message: 'Internal Server error' });
	}
}

export const requestCertificate = async (req, res) => {
	const { uid, courseID } = req.body;

	if(!uid || !courseID)
		return res.status(400).json({ message: 'Invalid request' });
	
	try {
		const student = await Students.findOne({ uid });

		if(!student)
			return res.status(404).json({ message: 'User not found' });

		student.courseEnrolled.forEach(async (course) => {
			if(course.course._id === courseID) {
				const certID = await certIDGen();
				const date = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
				const certificate = new Certificates({
					certID,
					uid,
					courseID: course.course._id,
					courseName: course.course.title,
					dateOfIssue: date,
				});

				return res.status(201).json({
					message: 'Certificate requested successfully',
					certificate: certificate,
				});
			}
		});

		return res.status(404).json({ message: 'Request course not found' });
	}
	catch(err) {
		console.log(err);
		return res.status(500).json({ message: 'Internal Server error' });
	}
}
	
export const requestEmailToken = async (req, res) => {
	const { uid } = req.body;

	if(!uid)
		return res.status(400).json({ message: 'Invalid request' });
		
	try {
		const user = await Students.findOne({ uid });

		if(!user)
			return res.status(404).json({ message: 'User not found' });

		const token = jwt.sign({
			uid: user._id,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: '1h',
		});

		const email = user.username;

		return res.status(201).json({ message: 'Email verification sent successfully' });
	}
	catch(err) {
		console.log(err);
		return res.status(500).json({ message: 'Internal Server error' });
	}
}
		
export const verifyEmailToken = async (req, res) => {
	const { token } = req.params;

	if(!token)
		return res.status(401).json({ message: 'No token provided' });
	
	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		const uid = decodedToken.uid;
		const user = await Users.findOne({ uid });

		if(!user)
			return res.status(404).json({ message: 'Invalid or expired link' });

		user.emailVerification = true;
		await user.save();

		return res.status(200).json({ message: 'Email verified successfully' });
	}
	catch(err) {
		console.log(err);
		return res.status(500).json({ message: 'Internal Server error' });
	}
}

export const requestOTP = async (req, res) => {
	const { uid } = req.body;

	if(!uid)
		return res.status(400).json({ message: 'Invalid request' });
	
	try {
		const user = await Users.findOne({ uid });

		if(!user)
			return res.status(404).json({ message: 'User not found' });

		const number = user.contactNo;

		return res.status(200).json({ messgae: 'OTP sent successfully' });
	}
	catch(err) {
	console.log(err);
	return res.status(500).json({ message: 'Internal Server error' });
	}
}

export const verifyOTP = async (req, res) => {
	const { otp, token } = req.body;

	if(!otp || !token)
		return res.status(400).json({ message: 'Invalid request' });
	
	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		const challenge = decodedToken.otp;
		const user = await Users.findOne({ uid: decodedToken.uid });

		if(!user)
			return res.status(404).json({ message: 'Something went wrong. Please try again later' });
		
		if(otp == challenge) {
			user.phnVerification = true,
			user.save();
			return res(200)	.status({ message: 'OTP Verification successful' });
		}

		return res.status(404).json({ message: 'Something went wrong. Please try again later' });
	}
	catch(err) {
	console.log(err);
	return res.status(500).json({ message: 'Internal Server error' });
	}
}