import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';

import LandingPage from '@/pages/LandingPage.jsx';
import AdminPanel from '@/pages/AdminPanel.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import MemberPage from '@/pages/MemberPage.jsx';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/member" 
              element={
                <ProtectedRoute requiredRole="member">
                  <MemberPage />
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Toaster />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;