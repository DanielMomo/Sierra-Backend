import express from 'express';
import listingsRouter from './routes/listings';

const app = express();

app.use(express.json());

app.use('/', listingsRouter);

export default app;