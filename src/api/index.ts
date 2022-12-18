import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import states from './states';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Testing',
  });
});

router.use('/states', states);

export default router;
