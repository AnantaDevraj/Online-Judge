import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateProblem = () => {
  const [problemData, setProblemData] = useState({
    name: '',
    description: '',
    difficulty: 'Easy',
    testCases: [{ input: '', output: '' }],
    constraints: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProblemData({ ...problemData, [name]: value });
  };

  const handleTestCaseChange = (index, e) => {
    const { name, value } = e.target;
    const newTestCases = [...problemData.testCases];
    newTestCases[index][name] = value;
    setProblemData({ ...problemData, testCases: newTestCases });
  };

  const addTestCase = () => {
    setProblemData({ ...problemData, testCases: [...problemData.testCases, { input: '', output: '' }] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/problems/add-problem', problemData);
      console.log('Problem created:', response.data);
      navigate('/problems');
    } catch (error) {
      console.error('Error creating problem:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-6">Create a New Problem</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Problem Name:</label>
          <input
            type="text"
            name="name"
            value={problemData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Description:</label>
          <textarea
            name="description"
            value={problemData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Difficulty Level:</label>
          <select
            name="difficulty"
            value={problemData.difficulty}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Constraints:</label>
          <textarea
            name="constraints"
            value={problemData.constraints}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
            rows="2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Test Cases:</label>
          {problemData.testCases.map((testCase, index) => (
            <div key={index} className="mb-4 space-y-2">
              <input
                type="text"
                name="input"
                placeholder="Input"
                value={testCase.input}
                onChange={(e) => handleTestCaseChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
              <input
                type="text"
                name="output"
                placeholder="Output"
                value={testCase.output}
                onChange={(e) => handleTestCaseChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addTestCase}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Add Test Case
          </button>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Create Problem
        </button>
      </form>
    </div>
  );
};

export default CreateProblem;
