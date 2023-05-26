import { Response } from 'express';

import { CustomRequestType } from '../../types/type.ts';
import { RequestEmailType, RequestFullType } from './auth.types.ts';

import { mailService } from '../../services/mail.service.ts';
import { createCode } from '../../utils/create-code.ts';
import { addCode, deleteCode, getCode } from '../../utils/code.ts';

class AuthController {
  async sendCode(req: CustomRequestType<RequestEmailType>, res: Response) {
    try {
      const { email } = req.body;
      const code = createCode();

      const send = await addCode(code, email);

      if (send) {
        await mailService.sendActivateEmail(email, code);
        return res.status(200).json({ message: 'Success send code!' });
      }

      res.status(500).json({ error: 'Error' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async checkCode(req: CustomRequestType<RequestFullType>, res: Response) {
    try {
      const { code, email } = req.body;
      const rightCode = await getCode(email);

      if (code === rightCode) {
        deleteCode(email);
        console.log('Here!');

        return res.status(200).json({ message: 'Success code!' });
      }

      res.status(400).json({ message: 'Incorrect code' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

const authController = new AuthController();

export default authController;
