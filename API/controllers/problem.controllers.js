import Problem from '../models/Problem.js';

// Create a new problem
export const createProblem = async (req, res) => {
    try {
        const problem = new Problem(req.body);
        await problem.save();
        res.status(201).json(problem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a problem by ID
export const getProblemById = async (req, res) => {
    try {
        const problem = await Problem.findById(req.params.id);
        if (!problem) {
            return res.status(404).json({ message: 'Problem not found' });
        }
        res.json(problem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a problem by ID
export const updateProblem = async (req, res) => {
    try {
        const problem = await Problem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!problem) {
            return res.status(404).json({ message: 'Problem not found' });
        }
        res.json(problem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a problem by ID
export const deleteProblem = async (req, res) => {
    try {
        const problem = await Problem.findByIdAndDelete(req.params.id);
        if (!problem) {
            return res.status(404).json({ message: 'Problem not found' });
        }
        res.json({ message: 'Problem deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// List all problems
export const getAllProblems = async (req, res) => {
    try {
        const problems = await Problem.find();
        res.json(problems);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
