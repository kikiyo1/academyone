import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = ({ onMenuClick }) => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-sm text-white">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Platform #1 di Indonesia
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Belajar Tanpa Batas dengan{' '}
              <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                HADE ACADEMY
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              Bergabunglah dengan ribuan siswa yang telah merasakan 
              pengalaman belajar terbaik. Akses kursus premium, mentor 
              berpengalaman, dan sertifikat resmi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-gradient text-white border-0 px-8 py-3 text-lg"
                onClick={() => onMenuClick('mulai')}
              >
                Mulai Belajar Sekarang
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                onClick={() => onMenuClick('demo')}
              >
                <Play className="mr-2" size={20} />
                Lihat Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-gray-300 text-sm">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-gray-300 text-sm">Kursus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-gray-300 text-sm">Kepuasan</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                className="w-full h-auto rounded-2xl shadow-2xl" 
                alt="Students learning with laptops and books"
               src="https://images.unsplash.com/photo-1694532409338-e5dceca0b2e4" />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;