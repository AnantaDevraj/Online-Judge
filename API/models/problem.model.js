// problem.model.js
import mongoose from 'mongoose';

const ProblemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  testCases: [
    {
      input: { type: String, required: true },
      output: { type: String, required: true },
    },
  ],
  constraints: { type: String, required: true },
});

const ProblemModel = mongoose.model('Problem', ProblemSchema);

export default ProblemModel;
