import React from 'react';
import { motion } from 'framer-motion';
import { Package, DollarSign, Users, TrendingUp } from 'lucide-react';

const AdminStats = ({ products }) => {
  const totalProducts = products.length;
  const popularProducts = products.filter(p => p.isPopular).length;
  const averagePrice = totalProducts > 0 
    ? `Rp ${Math.round(products.reduce((sum, p) => sum + parseInt(p.price.replace(/[^\d]/g, '') || '0'), 0) / totalProducts / 1000)}K`
    : 'Rp 0';
  const totalFeatures = products.reduce((sum, p) => sum + p.features.length, 0);

  const stats = [
    { label: 'Total Produk', value: totalProducts, icon: <Package className="w-8 h-8 text-purple-400" /> },
    { label: 'Produk Populer', value: popularProducts, icon: <TrendingUp className="w-8 h-8 text-green-400" /> },
    { label: 'Rata-rata Harga', value: averagePrice, icon: <DollarSign className="w-8 h-8 text-yellow-400" /> },
    { label: 'Total Fitur', value: totalFeatures, icon: <Users className="w-8 h-8 text-blue-400" /> },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-effect rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
            {stat.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AdminStats;