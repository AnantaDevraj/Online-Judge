
import express from 'express';
import {
    createProblem,
    getProblemById,
    updateProblem,
    deleteProblem,
    getAllProblems,
} from '../controllers/problem.controllers.js';

const router = express.Router();

router.post('/', createProblem);
router.get('/:id', getProblemById);
router.put('/:id', updateProblem);
router.delete('/:id', deleteProblem);
router.get('/', getAllProblems);

export default router;
