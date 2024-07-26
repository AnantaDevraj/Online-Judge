import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Validate data before sending
    if (!formData.email || !formData.password) {
      setMessage('All fields are required');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/auth/signin', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setMessage(response.data.message);
      navigate('/Problems'); // Navigate to the dashboard or home page after successful sign-in
    } catch (error) {
      setMessage(error.response?.data?.message || 'Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="w-full max-w-sm p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <div className="header mb-5 text-center">
          <div className="text font-bold text-2xl" style={{ color: 'GrayText' }}>
            Sign In
          </div>
          <div className="underline h-1 bg-gray-400 mt-2 mb-4"></div>
        </div>
        {message && <div className="mb-4 text-red-600">{message}</div>}
        <form onSubmit={handleSignin}>
          <div className="input mb-4">
            <label className="block font-semibold mb-2" htmlFor="email">
              Email<span className="required text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="email"
              placeholder="Email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input mb-4">
            <label className="block font-semibold mb-2" htmlFor="password">
              Password<span className="required text-red-600">*</span>
            </label>
            <input
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm"></span>
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-blue-600 hover:text-blue-700">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
