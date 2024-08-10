// Problems.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get(`/api/solve-problem?page=${currentPage}&limit=20`);
        setProblems(response.data.problems);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };

    fetchProblems();
  }, [currentPage]);

  const handleProblemSelect = async (id) => {
    try {
      const response = await axios.get(`/api/solve-problem/${id}`);
      setSelectedProblem(response.data);
    } catch (error) {
      console.error('Error fetching problem details:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-6">Problem List</h2>
      <ul className="space-y-4">
        {problems.map((problem) => (
          <li key={problem._id} className="border p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold">{problem.name}</h3>
            <p className="text-sm text-gray-600">Difficulty: {problem.difficulty}</p>
            <button
              onClick={() => handleProblemSelect(problem._id)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              View Details
            </button>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-white rounded-md hover:bg-gray-400 transition disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-white rounded-md hover:bg-gray-400 transition disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {selectedProblem && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Problem Details</h2>
          <h3 className="text-xl font-semibold">{selectedProblem.name}</h3>
          <p className="mb-2">{selectedProblem.description}</p>
          <p className="font-medium">Difficulty: {selectedProblem.difficulty}</p>
          <p className="mt-4 font-medium">Constraints:</p>
          <p>{selectedProblem.constraints}</p>
          <h4 className="mt-4 font-medium">Test Cases:</h4>
          <ul>
            {selectedProblem.testCases.map((testCase, index) => (
              <li key={index} className="mb-2">
                <strong>Input:</strong> {testCase.input} <br />
                <strong>Output:</strong> {testCase.output}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Problems;
