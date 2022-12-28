import express from 'express';
import states from '../../data/states-10m.json';
import districts from '../../data/US-district-current.topo.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(states);
});

router.get('/congressional', (req, res) => {
  res.json(districts);
});

export default router;
