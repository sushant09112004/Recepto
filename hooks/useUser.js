"use client"; // This file is intended to run in the client-side environment (browser)
import { useState } from 'react';

const useUser = () => {
  // Initialize the user state as null (no user logged in by default)
  const [user, setUser] = useState(null);

  // Function to set the logged-in user
  const setCurrentUser = (userData) => {
    setUser(userData); // Set user data (e.g., from a login API response)
  };

  // Function to log the user out
  const logout = () => {
    setUser(null); // Set user to null (log the user out)
  };

  return {
    user,
    setCurrentUser,
    logout,
  };
};

export default useUser;
