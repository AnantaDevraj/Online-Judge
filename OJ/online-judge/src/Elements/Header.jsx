
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="flex items-center">
        <h3 className="text-lg font-semibold">CodeArena</h3>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/" 
              className="bg-red-500 text-white py-1 px-2 text-sm rounded hover:bg-red-600 transition"
            >
                <button>Home</button>
              
            </Link>
          </li>
          <li>
            <Link
              to="/Problems"
              className="bg-red-500 text-white py-1 px-2 text-sm rounded hover:bg-red-600 transition"
            >
              <button>Problems</button>
            </Link>
          </li>
          <li>
            <Link
              to="/contest"
              className="bg-red-500 text-white py-1 px-2 text-sm rounded hover:bg-red-600 transition"
            >
              
              <button>Contest</button>
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-green-500 text-white py-1 px-2 text-sm rounded hover:bg-green-600 transition"
            >
              <button>Sign Up</button>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-green-500 text-white py-1 px-2 text-sm rounded hover:bg-green-600 transition"
            >
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
