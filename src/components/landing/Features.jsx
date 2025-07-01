import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Play, Star, Clock } from 'lucide-react';

const featuresData = [
  {
    icon: <CheckCircle className="w-8 h-8 text-purple-400" />,
    title: 'Kursus Berkualitas',
    description: 'Materi pembelajaran yang disusun oleh ahli di bidangnya dengan standar internasional'
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: 'Mentor Berpengalaman',
    description: 'Belajar langsung dari praktisi industri dengan pengalaman puluhan tahun'
  },
  {
    icon: <Award className="w-8 h-8 text-purple-400" />,
    title: 'Sertifikat Resmi',
    description: 'Dapatkan sertifikat yang diakui industri untuk meningkatkan karir Anda'
  },
  {
    icon: <Play className="w-8 h-8 text-purple-400" />,
    title: 'Video HD',
    description: 'Semua video berkualitas tinggi dengan subtitle dan materi pendukung'
  },
  {
    icon: <Star className="w-8 h-8 text-purple-400" />,
    title: 'Akses Selamanya',
    description: 'Sekali beli, akses selamanya tanpa batas waktu atau perangkat'
  },
  {
    icon: <Clock className="w-8 h-8 text-purple-400" />,
    title: 'Update Berkala',
    description: 'Materi selalu diperbarui mengikuti perkembangan teknologi terbaru'
  }
];

const Features = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Mengapa Memilih <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">HADE ACADEMY</span>?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Kami menyediakan pengalaman belajar yang komprehensif dengan teknologi terdepan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 card-hover"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;