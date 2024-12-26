// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      console.log("resilt in authContext", result);

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setUser(result.user); // Assume the API returns user details
      return result;
    } catch (err) {
      setError(err.message);
      throw err; // Re-throw for further handling if needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
