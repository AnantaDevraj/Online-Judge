import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNo: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/auth/signup', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="w-full max-w-sm p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <div className="header mb-5 text-center">
          <div className="text font-bold text-2xl" style={{ color: 'GrayText' }}>
            Sign Up
          </div>
          <div className="underline h-1 bg-gray-400 mt-2 mb-4"></div>
        </div>
        {message && <div className="mb-4 text-red-600">{message}</div>}
        <form onSubmit={handleSignup}>
          <div className="input mb-4">
            <label className="block font-semibold mb-2" htmlFor="name">
              Name<span className="required text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="text"
              placeholder="Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="input mb-4">
            <label className="block font-semibold mb-2" htmlFor="phoneNo">
              Phone No.<span className="required text-red-600">*</span>
            </label>
            <input
              id="phoneNo"
              name="phoneNo"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="tel"
              placeholder="Phone No."
              autoComplete="tel"
              value={formData.phoneNo}
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
                'Sign Up'
              )}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <Link to="/signin" className="text-blue-600 hover:text-blue-700">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
