/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const getUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem("user");
    try {
      return storedUser ? JSON.parse(storedUser) : null; // Only parse if there's a value
    } catch (error) {
      console.error("Error parsing user from localStorage", error);
      return null; // Return null in case of any parsing errors
    }
  };
  const [currentUser, setCurrentUser] = useState(getUserFromLocalStorage);

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
