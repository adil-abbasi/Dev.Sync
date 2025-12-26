// src/components/Navbar.jsx  ← FINAL 100% WORKING VERSION
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // This tells us current page
  const isLoggedIn = !!localStorage.getItem('authToken');
  const userName = localStorage.getItem('userName') || 'Developer';

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-600">
          DevSync
        </Link>

        {/* Center Links – NOW ALL WORKING WITH <Link> */}
        <div className="hidden md:flex space-x-10">
          <Link
            to="/"
            className={`font-medium text-lg transition-colors ${
              location.pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`font-medium text-lg transition-colors ${
              location.pathname === '/services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`font-medium text-lg transition-colors ${
              location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`font-medium text-lg transition-colors ${
              location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-5">
          {isLoggedIn ? (
            <>
              <span className="text-gray-800 font-semibold text-lg">
                Hi, {userName}!
              </span>
              <Link
                to="/dashboard"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition text-lg"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition text-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-600 hover:text-white transition text-lg">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition text-lg">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;