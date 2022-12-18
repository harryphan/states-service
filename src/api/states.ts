import express from 'express';

const router = express.Router();

type StatesResponse = {
  states: string[]
};

router.get<{}, StatesResponse>('/', (req, res) => {
  res.json({ states:['test']});
});

export default router;
