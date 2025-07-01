import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Pricing = ({ products, handleCheckout }) => {
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
            Pilih Paket <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Terbaik</span>
          </h2>
          <p className="text-xl text-gray-200">
            Investasi terbaik untuk masa depan karir Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass-effect rounded-2xl p-8 card-hover ${
                product.isPopular ? 'ring-2 ring-purple-400' : ''
              }`}
            >
              {product.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{product.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through ml-2">{product.originalPrice}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 ${
                  product.isPopular 
                    ? 'btn-gradient text-white border-0' 
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
                variant={product.isPopular ? 'default' : 'outline'}
                onClick={() => handleCheckout(product)}
              >
                Pilih Paket {product.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;