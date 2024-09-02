import { Router } from "express";
import {
    verifyCertificate,
    requestCertificate,
    requestEmailToken,
    verifyEmailToken,
    requestOTP,
    verifyOTP,
} from "../controller/verification.js";

const router = Router();

router.route('/certificate/:token').get(verifyCertificate);
router.route('/certificate').post(requestCertificate);
router.route('/email/:token').get(verifyEmailToken);
router.route('/email').post(requestEmailToken);
router.route('/number/request').post(requestOTP);
router.route('/number').get(verifyOTP);

export default router;