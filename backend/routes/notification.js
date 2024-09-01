import { Router } from "express";
import {
    getNotification,
    createNotification,
    editNotificationStatus,
    deleteNotification
} from "../controller/notifications.js";

const router = Router();

router.route('/').get(getNotification);
router.route('/add').get(createNotification);
router.route('/edit').get(editNotificationStatus);
router.route('/remove').post(deleteNotification);

export default router;