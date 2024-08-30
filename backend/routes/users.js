import { Router } from "express";
import { login, signup, logout } from '../controller/users.js';

const router = Router();

router.route('/login').post(login);
router.route('/signup').post(signup);
router.route('/logout').get(logout)

export default router;