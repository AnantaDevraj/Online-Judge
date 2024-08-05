import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Problem() {
  const [problems, setProblems] = useState([]);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [view, setView] = useState('list'); // list, details, form, code

  useEffect(() => {
    if (view === 'list') {
      axios.get('/api/problems')
        .then(response => setProblems(response.data))
        .catch(error => console.error('Error fetching problems:', error));
    }
  }, [view]);

  const handleCreate = () => {
    setCurrentProblem({ title: '', difficulty: 'Easy', description: '', testCaseInput: '', testCaseOutput: '' });
    setIsEditing(false);
    setView('form');
  };

  const handleEdit = (problem) => {
    setCurrentProblem(problem);
    setIsEditing(true);
    setView('form');
  };

  const handleDelete = (id) => {
    axios.delete(`/api/problems/${id}`)
      .then(() => setView('list'))
      .catch(error => console.error('Error deleting problem:', error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const problem = { 
      title: currentProblem.title, 
      difficulty: currentProblem.difficulty, 
      description: currentProblem.description,
      testCaseInput: currentProblem.testCaseInput,
      testCaseOutput: currentProblem.testCaseOutput 
    };

    if (isEditing) {
      axios.put(`/api/problems/${currentProblem._id}`, problem)
        .then(() => setView('list'))
        .catch(error => console.error('Error updating problem:', error));
    } else {
      axios.post('/api/problems', problem)
        .then(() => setView('list'))
        .catch(error => console.error('Error creating problem:', error));
    }
  };

  const handleCode = (problem) => {
    setCurrentProblem(problem);
    setView('code');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {view === 'list' && (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">Problems</h1>
          <div className="flex justify-center mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleCreate}
            >
              Create New Problem
            </button>
          </div>
          <ul className="space-y-4">
            {problems.map(problem => (
              <li key={problem._id} className="flex justify-between items-center p-4 bg-white rounded shadow">
                <span
                  className="cursor-pointer"
                  onClick={() => handleCode(problem)}
                >
                  {problem.title}
                </span>
                <div>
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleEdit(problem)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(problem._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {view === 'form' && (
        <div>
          <h1 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Problem' : 'Create Problem'}</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Title:</label>
              <input
                type="text"
                value={currentProblem.title}
                onChange={(e) => setCurrentProblem({ ...currentProblem, title: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Difficulty:</label>
              <select
                value={currentProblem.difficulty}
                onChange={(e) => setCurrentProblem({ ...currentProblem, difficulty: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Description:</label>
              <textarea
                value={currentProblem.description}
                onChange={(e) => setCurrentProblem({ ...currentProblem, description: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded"
              ></textarea>
            </div>
            <div>
              <label className="block mb-1">Test Case Input:</label>
              <textarea
                value={currentProblem.testCaseInput}
                onChange={(e) => setCurrentProblem({ ...currentProblem, testCaseInput: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded"
              ></textarea>
            </div>
            <div>
              <label className="block mb-1">Test Case Output:</label>
              <textarea
                value={currentProblem.testCaseOutput}
                onChange={(e) => setCurrentProblem({ ...currentProblem, testCaseOutput: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                {isEditing ? 'Update' : 'Create'}
              </button>
              <button
                type="button"
                onClick={() => setView('list')}
                className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {view === 'details' && currentProblem && (
        <div>
          <h1 className="text-2xl font-bold mb-4">{currentProblem.title}</h1>
          <p className="mb-4"><strong>Difficulty:</strong> {currentProblem.difficulty}</p>
          <p className="mb-4"><strong>Description:</strong> {currentProblem.description}</p>
          <p className="mb-4"><strong>Test Case Input:</strong> {currentProblem.testCaseInput}</p>
          <p className="mb-4"><strong>Test Case Output:</strong> {currentProblem.testCaseOutput}</p>
          <button
            onClick={() => setView('list')}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Back to List
          </button>
        </div>
      )}

      {view === 'code' && currentProblem && (
        <div className="p-4 bg-white rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-4">{currentProblem.title}</h1>
          <p className="mb-4"><strong>Difficulty:</strong> {currentProblem.difficulty}</p>
          <p className="mb-4"><strong>Description:</strong> {currentProblem.description}</p>
          <div>
            <label className="block mb-1"><strong>Test Case Input:</strong></label>
            <pre className="bg-gray-100 p-2 rounded">{currentProblem.testCaseInput}</pre>
          </div>
          <div className="mt-4">
            <label className="block mb-1"><strong>Test Case Output:</strong></label>
            <pre className="bg-gray-100 p-2 rounded">{currentProblem.testCaseOutput}</pre>
          </div>
          <div className="mt-4">
            <label className="block mb-1"><strong>Write Your Code Here:</strong></label>
            <textarea
              className="w-full px-4 py-2 border rounded h-64"
              placeholder="Write your solution code here..."
            ></textarea>
          </div>
          <button
            onClick={() => setView('list')}
            className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
          >
            Back to List
          </button>
        </div>
      )}
    </div>
  );
}

export default Problem;
