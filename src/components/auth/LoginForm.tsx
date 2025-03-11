import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // TODO: Implement actual authentication
      // For now, just simulate login with email check
      if (email.includes('@')) {
        // Store user session
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        navigate('/dashboard');
      } else {
        setError('Invalid email format');
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-tactical-950 pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Member Login</h2>
          
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brandRed text-white py-2 px-4 rounded-md hover:bg-brandRed-hover transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="/forgot-password" className="text-sm text-brandRed hover:text-brandRed-hover">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm; 