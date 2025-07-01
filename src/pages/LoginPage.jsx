import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { ArrowLeft } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/member';

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.success) {
      toast({
        title: 'Login Berhasil!',
        description: 'Selamat datang kembali!',
      });
      const destination = result.role === 'admin' ? '/admin' : from;
      navigate(destination, { replace: true });
    } else {
      toast({
        title: 'Login Gagal',
        description: 'Email atau password salah.',
        variant: 'destructive',
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - HADE ACADEMY</title>
      </Helmet>
      <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="inline-block w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-3xl">H</span>
              </div>
              <h1 className="text-3xl font-bold text-white">Login ke Akun Anda</h1>
              <p className="text-gray-300 mt-2">Selamat datang kembali di HADE ACADEMY</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-white">Email atau Username</Label>
                <Input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ADMIN atau email@contoh.com"
                  className="bg-gray-800/50 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-800/50 border-gray-600 text-white"
                  required
                />
              </div>
              <Button type="submit" className="w-full btn-gradient text-white border-0 py-3">
                Login
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-purple-300 hover:underline flex items-center justify-center">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Kembali ke Beranda
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;