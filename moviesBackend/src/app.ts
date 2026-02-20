import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import { notFound } from './middlewares/notfound.middleware';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', routes);

// movies (root)
app.get('/movies', (_req, res) => {
  res.json({ ok: true, service: 'api', ts: new Date().toISOString()});
});

// 404 + Error handler
app.use(notFound);
app.use(errorHandler);

export default app;