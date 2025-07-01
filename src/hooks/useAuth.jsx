import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('hadeAcademyUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    if (email === 'ADMIN' && password === 'JAKARTAKU123') {
      const userData = { email: 'ADMIN', name: 'Admin', role: 'admin' };
      localStorage.setItem('hadeAcademyUser', JSON.stringify(userData));
      setUser(userData);
      return { success: true, role: 'admin' };
    }

    const storedUsers = JSON.parse(localStorage.getItem('hadeAcademyUsers') || '[]');
    const foundUser = storedUsers.find(u => u.email === email && u.password === password);

    if (foundUser) {
      const userData = { email: foundUser.email, name: 'Member', role: 'member' };
      localStorage.setItem('hadeAcademyUser', JSON.stringify(userData));
      setUser(userData);
      return { success: true, role: 'member' };
    }

    return { success: false };
  };

  const logout = () => {
    localStorage.removeItem('hadeAcademyUser');
    setUser(null);
    navigate('/');
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};