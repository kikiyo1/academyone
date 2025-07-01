import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Header = ({ settings, onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    if (settings.registrationUrl) {
      window.open(settings.registrationUrl, '_blank');
    } else {
      onMenuClick('daftar');
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-white font-bold text-xl">HADE ACADEMY</span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onMenuClick('beranda')} className="text-white hover:text-purple-300 transition-colors">Beranda</button>
            <button onClick={() => onMenuClick('kursus')} className="text-white hover:text-purple-300 transition-colors">Kursus</button>
            {user ? (
              <>
                <Link to="/member" className="text-white hover:text-purple-300 transition-colors">Area Member</Link>
                <Button onClick={logout} variant="outline" className="border-white/30 text-white hover:bg-white/10">Logout</Button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-purple-300 transition-colors">Login</Link>
                <Button onClick={handleRegisterClick} className="btn-gradient text-white border-0">
                  Daftar Sekarang
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-white/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <button onClick={() => onMenuClick('beranda')} className="text-white hover:text-purple-300 transition-colors text-left">Beranda</button>
              <button onClick={() => onMenuClick('kursus')} className="text-white hover:text-purple-300 transition-colors text-left">Kursus</button>
              {user ? (
                <>
                  <Link to="/member" className="text-white hover:text-purple-300 transition-colors text-left">Area Member</Link>
                  <Button onClick={logout} variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full">Logout</Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-white hover:text-purple-300 transition-colors text-left">Login</Link>
                  <Button onClick={handleRegisterClick} className="btn-gradient text-white border-0 w-fit">
                    Daftar Sekarang
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;