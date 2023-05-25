import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParses from 'cookie-parser';

import routes from './routes/routes.ts';
import startHttp from './utils/start-http.js';

dotenv.config();

const app = express();
const PORT: string = process.env.PORT || '3001';
const corsConfig = {
  credentials: true,
  origin: process.env.FRONTEND_IP,
};

app.use(json());
app.use(cors(corsConfig));
app.use(cookieParses());

routes(app);

startHttp(app, PORT);
