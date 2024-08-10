import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let dropdownTimeout;

  const handleDropdownClick = () => {
    clearTimeout(dropdownTimeout); // Clear any existing timeout to avoid conflicts
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Add a small delay (200ms) before closing the dropdown
  };

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
          <li className="relative">
            <button
              onClick={handleDropdownClick}
              onMouseEnter={() => {
                clearTimeout(dropdownTimeout);
                setIsDropdownOpen(true);
              }}
              onMouseLeave={handleMouseLeave}
              className="bg-red-500 text-white py-1 px-2 text-sm rounded hover:bg-red-600 transition"
            >
              Problems
            </button>
            {isDropdownOpen && (
              <div
                onMouseEnter={() => {
                  clearTimeout(dropdownTimeout);
                  setIsDropdownOpen(true);
                }}
                onMouseLeave={handleMouseLeave}
                className="absolute right-0 mt-2 w-40 bg-white text-gray-700 rounded-md shadow-lg z-10"
              >
                <Link
                  to="/create-problem"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Create Problem
                </Link>
                <Link
                  to="/solve-problem"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Solve Problem
                </Link>
                <Link
                  to="/check-problem"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Check Problem
                </Link>
              </div>
            )}
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
              to="/signin"
              className="bg-green-500 text-white py-1 px-2 text-sm rounded hover:bg-green-600 transition"
            >
              <button>Sign In</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
