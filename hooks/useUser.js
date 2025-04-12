// hooks/useUser.ts
"use client";
import { useState, useEffect } from "react";

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const setCurrentUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Persist
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return { user, setCurrentUser, logout };
};

export default useUser;
