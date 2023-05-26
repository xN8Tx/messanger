import jwt, { JwtPayload } from 'jsonwebtoken';
import { Response, Request } from 'express';
import dotenv from 'dotenv';

import { mailService } from '../../services/mail-service.js';
import { createCode } from '../../utils/create-code.js';
import { addCode, deleteCode, getCode } from '../../utils/code.js';
import { jwtTokens } from '../../utils/jwt-helper.js';

import { CustomRequestType } from '../../types/type.js';
import { RequestEmailType, RequestFullType } from './auth-types.js';
import { login } from './auth-utils.js';

dotenv.config();

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

        const user = await login(email);

        const { accessToken, refreshToken } = jwtTokens(user.id, user.username, user.first_name, user.last_name);

        res.cookie('refresh_token', refreshToken, { httpOnly: true });
        return res.status(200).json({ message: accessToken });
      }

      res.status(400).json({ message: 'Incorrect code' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async refresh(req: Request, res: Response) {
    try {
      const refreshToken = req.cookies.refresh_token;

      if (refreshToken === null) return res.status(401).json({ message: 'Войдите в аккаунт снова' });

      const data = jwt.verify(refreshToken, String(process.env.REFRESH_TOKEN_SECRET)) as JwtPayload;
      const tokens = jwtTokens(data.id, data.username, data.firstname, data.lastname);

      res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
      res.status(200).json({ message: tokens.accessToken });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async logout(req: Request, res: Response) {
    try {
      res.clearCookie('refresh_token');
      res.status(200).json({ message: 'Success logout' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

const authController = new AuthController();

export default authController;
