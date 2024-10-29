import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginHook from '../hooks/LoginHook';
import './Signin.css';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = React.useState({});
  const [error, setError] = useState('');
  const { loading, Login } = LoginHook();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Login(formData);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Log In With Your Account</h2>
        <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md overflow-hidden">
          <form onSubmit={handleSubmit} className='flex flex-col items-start w-full'>
            {/* Email Input */}
            <div className="mb-4 w-full">
              <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6 w-full">
              <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">Password</label>
              <input
                onChange={handleChange}
                type="password"
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Error Message Display */}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-3 rounded-md hover:bg-teal-600 transition-colors"
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <Link to="/signup" className="text-teal-500 font-semibold hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signin;
