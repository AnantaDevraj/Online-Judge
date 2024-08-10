import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProblemDetails = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.get(`/api/problems/${id}`);
        setProblem(response.data);
      } catch (error) {
        console.error('Error fetching problem details:', error);
      }
    };
    fetchProblem();
  }, [id]);

  if (!problem) return <div>Loading...</div>;

  return (
    <div className="flex p-4">
      <div className="w-2/3 pr-4">
        <h1 className="text-2xl font-semibold">{problem.name}</h1>
        <p className="mt-2 text-lg font-medium">Description:</p>
        <p>{problem.description}</p>
        <div className="mt-4">
          <p className="font-medium">Test Cases:</p>
          <pre>{problem.input}</pre>
          <pre>{problem.output}</pre>
        </div>
        <div className="mt-4">
          <p className="font-medium">Constraints:</p>
          <pre>{problem.constraints}</pre>
        </div>
      </div>
      <div className="w-1/3 bg-gray-200 h-full p-4">
        <h2 className="text-xl font-semibold">Compiler</h2>
        {/* Placeholder for the compiler */}
      </div>
    </div>
  );
};

export default ProblemDetails;
