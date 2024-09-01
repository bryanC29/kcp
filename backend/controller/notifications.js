import Notifications from '../models/notifications.js';
import users from '../models/users.js';

export const getNotification = async (req, res) => {
    const { uid } = req.body;

    if(!uid)
        return res.status(400).json({ message: 'Invalid notification request' });

    try {
        const notification = await Notifications.findOne({ uid });

        if(!notification)
            return res.status(404).json({ message: 'Notifications for user not found' });

        return res.status(200).json({
            message: 'Fetched all notifications for the user',
            notification,
        })
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const createNotification = async (req, res) => {
    const { uid, message } = req.body;

    if(!uid || !message)
        return res.status(400).json({ message: 'Invalid credentials' });

    try {
        const user = await users.findOne({ uid });

        if(!user)
            return res.status(404).json({ message: 'Invalid uid entered' });

        const newNotification = new Notifications.create({
            uid,
            message,
        })
        newNotification.save();

        return res.status(201).json({ message: 'Successfully created notification' });
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ message: 'INternal Server error' });
    }
}

export const editNotificationStatus = async (req, res) => {
    const { id } = req.body;

    if(!id)
        return res.status(400).json({ message: 'Invalid request' });

    try {
        const notification = await Notifications.findOne({ _id: id });

        if(!notification)
            return res.status(404).json({ message: 'Notification not found' });

        notification.read = true;
        notification.save();

        return res.status(200).json({ message: 'Notification status changed successfully' });
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteNotification = async (req, res) => {
    const { id } = req.body;
    
    if(!id)
        return res.status(400).json({ message: 'Invalid request' });
    
    try {
        const notification = await Notifications.findOne({ _id: id });
    
        if(!notification)
            return res.status(404).json({ message: 'Notification not found' });
    
        Notifications.deleteOne({ _id: notification._id });
    
        return res.status(200).json({ message: 'Notification deleted successfully' });
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}