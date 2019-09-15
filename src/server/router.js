import { Router, json } from 'express';

const { apiRouter } = require('./app/api/router');

const router = Router();
router.use(json());
router.use('/api', apiRouter);

export default router;
