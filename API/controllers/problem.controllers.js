import ProblemModel from '../models/problem.model.js';

export const createProblem = async (req, res) => {
    try {
      const newProblem = new ProblemModel(req.body);
      await newProblem.save();
      res.status(201).json(newProblem);
    } catch (error) {
      console.error('Error creating problem:', error);
      res.status(500).json({ message: 'Failed to create problem' });
    }
  };

export const getProblems = async (req, res) => {
  try {
    const problems = await ProblemModel.find();
    res.status(200).json(problems);
  } catch (error) {
    console.error('Error fetching problems:', error);
    res.status(500).json({ message: 'Failed to fetch problems' });
  }
};

export const getProblem = async (req, res) => {
  try {
    const problem = await ProblemModel.findById(req.params.id);
    if (problem) {
      res.status(200).json(problem);
    } else {
      res.status(404).json({ message: 'Problem not found' });
    }
  } catch (error) {
    console.error('Error fetching problem:', error);
    res.status(500).json({ message: 'Failed to fetch problem' });
  }
};

export const updateProblem = async (req, res) => {
  try {
    const updatedProblem = await ProblemModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedProblem) {
      res.status(200).json(updatedProblem);
    } else {
      res.status(404).json({ message: 'Problem not found' });
    }
  } catch (error) {
    console.error('Error updating problem:', error);
    res.status(500).json({ message: 'Failed to update problem' });
  }
};

export const deleteProblem = async (req, res) => {
  try {
    const deletedProblem = await ProblemModel.findByIdAndDelete(req.params.id);
    if (deletedProblem) {
      res.status(200).json({ message: 'Problem deleted successfully' });
    } else {
      res.status(404).json({ message: 'Problem not found' });
    }
  } catch (error) {
    console.error('Error deleting problem:', error);
    res.status(500).json({ message: 'Failed to delete problem' });
  }
};
