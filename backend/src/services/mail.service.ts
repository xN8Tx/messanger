import { createTransport, Transporter } from 'nodemailer';
import { google } from 'googleapis';
import dotenv from 'dotenv';

import { template } from '../template/mail.template.ts';

dotenv.config();

const OAuth2 = google.auth.OAuth2;
const OAuth2Client = new OAuth2(process.env.SMTP_CLIENT_ID, process.env.SMTP_CLIENT_SECRET);
OAuth2Client.setCredentials({ refresh_token: process.env.SMTP_REFRESH_TOKEN });

class MailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: String(process.env.SMTP_HOST), // Use String to fix error https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35847
      port: Number(process.env.SMTP_PORT), // Use Number to fix error https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35847
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        type: 'OAuth2',
        clientId: process.env.SMTP_CLIENT_ID,
        clientSecret: process.env.SMTP_CLIENT_SECRET,
        refreshToken: process.env.SMTP_REFRESH_TOKEN,
        accessToken: String(OAuth2Client.getAccessToken()),
      },
    });
  }

  async sendActivateEmail(to: string, code: number) {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: 'Activate account on Blossom',
        text: '',
        html: template(code),
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Cannot find the type because Error type throw error in 'throw new Error'
      throw new Error(error);
    }
  }
}

const mailService = new MailService();

export { mailService };
