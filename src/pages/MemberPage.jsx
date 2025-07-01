import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { BookOpen, LogOut, User } from 'lucide-react';

const MemberPage = () => {
  const { user, logout } = useAuth();

  const courses = [
    { title: 'React untuk Pemula', progress: 75 },
    { title: 'Advanced TailwindCSS', progress: 40 },
    { title: 'Framer Motion Mastery', progress: 15 },
  ];

  return (
    <>
      <Helmet>
        <title>Member Area - HADE ACADEMY</title>
      </Helmet>
      <div className="min-h-screen gradient-bg">
        <header className="glass-effect">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-white font-bold text-xl">HADE ACADEMY</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white hidden sm:block">
                Selamat datang, {user?.name || 'Member'}!
              </span>
              <Button onClick={logout} variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-8">Area Member</h1>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-white mb-6">Kursus Anda</h2>
                <div className="space-y-6">
                  {courses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-effect rounded-xl p-6"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-white">{course.title}</h3>
                        <Button size="sm" className="btn-gradient text-white border-0">
                          Lanjutkan
                        </Button>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-purple-500 h-2.5 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-right text-sm text-gray-300 mt-2">{course.progress}% Selesai</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-1">
                <h2 className="text-2xl font-semibold text-white mb-6">Profil</h2>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-effect rounded-xl p-6 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{user?.name}</h3>
                  <p className="text-gray-400">{user?.email}</p>
                  <Button variant="outline" className="mt-6 w-full border-white/30 text-white hover:bg-white/10">
                    Edit Profil
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default MemberPage;