import { Response } from 'express';

import { CustomRequestType } from '../../types/type.ts';
import { RequestEmailType } from './auth.types.ts';

import { mailService } from '../../services/mail.service.ts';
import { createCode } from '../../utils/create-code.ts';

class AuthController {
  async sendCode(req: CustomRequestType<RequestEmailType>, res: Response) {
    try {
      console.log('here');

      const { email } = req.body;
      const code = createCode();

      await mailService.sendActivateEmail(email, code);

      res.status(200).json({ message: 'success' });
      console.log('Send code ' + code);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
  // async checkCode(req: Request, res: Response): Promise<void> {
  //   try {
  //   } catch (error) {}
  // }
  // async registration(req: Request, res: Response): Promise<void> {
  //   try {
  //   } catch (error) {}
  // }
  // async login(req: Request, res: Response): Promise<void> {
  //   try {
  //   } catch (error) {
  //   }
  // }
  // async refresh(req: Request, res: Response): Promise<void> {
  // }
  // async logout(req: Request, res: Response): Promise<void> {
  // }
}

const authController = new AuthController();

export default authController;
