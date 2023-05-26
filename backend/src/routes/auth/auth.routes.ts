import express from 'express';
import authController from '../../controllers/auth/auth.controller.ts';

const router = express.Router();

router.post('/send', authController.sendCode);
router.post('/check', authController.checkCode);
// router.get('/refresh', () => {});
// router.delete('/logout', () => {});

export default router;
