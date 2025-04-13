"use client";
import React, { useState } from 'react';
import useUser from '@/hooks/useUser';// Import the custom hook
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
function LoginCard() {
  // Get the user state and functions from the custom hook
  const { user, setCurrentUser, logout } = useUser();
  const router = useRouter(); 
  // List of users for login
  const users = [
    {
      id: '1',
      role: 'admin',
      name: 'John Doe',
      email: 'john@example.com',
      password: '123456',
    },
    {
      id: '2',
      role: 'user',
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: '123456',
    },
    {
      id: '3',
      role: 'admin',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      password: '123456',
    },
  ];

  // State for user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle login logic
  const handleLogin = (e) => {
    e.preventDefault();

    // Find user by email and password
    const loggedInUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (loggedInUser) {
      setCurrentUser(loggedInUser); // Set the logged-in user in the hook state
      setError(''); // Clear error message if login is successful
      // alert(`Welcome ${loggedInUser.name}! Role: ${loggedInUser.role}`);
      router.push('/dashboard'); // Redirect to the dashboard page
      // You can add any redirection logic here based on the role
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="shachn-card bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-center text-xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shachn-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shachn-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="shachn-btn bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Display logged-in user's info */}
        {user && (
          <div className="mt-4">
            <p>Logged in as: {user.name}</p>
            <p>Role: {user.role}</p>
            <button
              onClick={logout}
              className="mt-2 bg-red-500 text-white py-1 px-3 rounded-md"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginCard;
