import express from 'express';
import authController from '../../controllers/auth/auth-controller.js';

const router = express.Router();

router.post('/send', authController.sendCode);
router.post('/check', authController.checkCode);
router.get('/refresh', authController.refresh);
router.get('/logout', authController.logout);

export default router;
