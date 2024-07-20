import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Signup() {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: ""
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/signup', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      const data = res.data;
      console.log(data); // Handle the response from the server
    } catch (error) {
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
        <form onSubmit={handleSubmit}>
          <div className="input mb-4">
            <label className="block font-semibold mb-2" htmlFor="name">
              Name<span className="required text-red-600">*</span>
            </label>
            <input
              id="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="text"
              placeholder="Name"
              autoComplete="name"
              onChange={handleChange}
            />
          </div>
          <div className="input mb-4">
            <label className="block font-semibold mb-2" htmlFor="email">
              Email<span className="required text-red-600">*</span>
            </label>
            <input
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="email"
              placeholder="Email"
              autoComplete="email"
              onChange={handleChange}
            />
          </div>
          <div className="input mb-4">
            <label className="block font-semibold mb-2" htmlFor="password">
              Password<span className="required text-red-600">*</span>
            </label>
            <input
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="password"
              placeholder="Password"
              autoComplete="password"
              onChange={handleChange}
            />
          </div>
          <div className="input mb-4">
            <label className="block font-semibold mb-2" htmlFor="phoneNo">
              Phone No.<span className="required text-red-600">*</span>
            </label>
            <input
              id="phoneNo"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="tel"
              placeholder="Phone No."
              autoComplete="phoneNo"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between">
            <button
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <Link to="/login" className="text-blue-600 hover:text-blue-700">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
