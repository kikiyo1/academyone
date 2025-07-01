import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = ({ settings, onMenuClick }) => {
  const handleRegisterClick = () => {
    if (settings.registrationUrl) {
      window.open(settings.registrationUrl, '_blank');
    } else {
      onMenuClick('daftar');
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Belajar Anda?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan siswa yang telah merasakan kelas mereka 
            bersama HADE ACADEMY
          </p>
          <Button 
            className="btn-gradient text-white border-0 px-8 py-4 text-lg"
            onClick={handleRegisterClick}
          >
            Daftar Sekarang
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;