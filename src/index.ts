/** @format */

//Dependencies
import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';

//Internal Imports
import logger from './utils/logger';

//Routes import statements
import auth from './routes/auth.route';

const app: Express = express();

//regular middleware
app.use(express.json({ limit: '50MB' }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

//router middleware
app.use('/api/v1', auth);

app.listen(process.env.PORT || 5000, () => {
  logger.info(`listening to port ${process.env.PORT}`);
});
