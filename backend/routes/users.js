import { Router } from "express";
import {
    login,
    signup,
    logout,
    updatePassword,
    passwordReset,
    passwordResetRequest
} from '../controller/users.js';

const router = Router();

router.route('/login').post(login);
router.route('/signup').post(signup);
router.route('/logout').get(logout);
router.route('/passwordupdate').post(updatePassword);
router.route('/resetpassword/request').post(passwordResetRequest);
router.route('/resetpassword/token/:token').get(passwordReset);

export default router;