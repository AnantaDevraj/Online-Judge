// problem.route.js
import express from 'express';
import {
  createProblem,
  getProblems,
  getProblem,
  updateProblem,
  deleteProblem
} from '../controllers/problem.controllers.js';

const router = express.Router();

router.post('/create-problem', createProblem); // Endpoint for creating a problem
router.get('/solve-problem', getProblems); // Endpoint for getting problems
router.get('/solve-problem/:id', getProblem); // Endpoint for getting a specific problem
router.put('/update-problem/:id', updateProblem);
router.delete('/solve-problem/:id', deleteProblem);

export default router;
