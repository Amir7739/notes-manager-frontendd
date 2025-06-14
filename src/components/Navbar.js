import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-blue-100 transition-colors duration-200"
          >
            <div className="bg-white bg-opacity-20 p-2 rounded-lg backdrop-blur-sm">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-wide">
              Easy Notes Manager
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {token ? (
              <div className="flex items-center space-x-4">
                {/* User indicator */}
                <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-3 py-2 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white text-sm font-medium">Online</span>
                </div>

                {/* Logout button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-white hover:text-blue-100 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-10"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-100 p-2 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-500 border-opacity-30">
            <div className="py-4 space-y-3">
              {token ? (
                <div className="space-y-3">
                  {/* User status */}
                  <div className="flex items-center space-x-2 px-4 py-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm font-medium">
                      You are online
                    </span>
                  </div>

                  {/* Logout button */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 mx-4"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3 px-4">
                  <Link
                    to="/login"
                    className="block text-white hover:text-blue-100 py-2 rounded-lg font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block bg-white text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium text-center transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
