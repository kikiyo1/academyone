import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Package } from 'lucide-react';

const ProductList = ({ products, handleEdit, handleDelete }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Belum ada produk</h3>
        <p className="text-gray-300">Tambahkan produk pertama Anda untuk memulai</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
        >
          {product.isPopular && (
            <div className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
              Populer
            </div>
          )}
          
          {product.image && (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
          )}
          
          <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
          <div className="mb-3">
            <span className="text-2xl font-bold text-white">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>
            )}
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-300 mb-2">Fitur:</p>
            <ul className="text-sm text-gray-300 space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
              {product.features.length > 3 && (
                <li className="text-purple-400">+{product.features.length - 3} fitur lainnya</li>
              )}
            </ul>
          </div>

          {product.checkoutUrl && (
            <p className="text-xs text-gray-400 mb-4 truncate">
              Checkout: {product.checkoutUrl}
            </p>
          )}
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleEdit(product)}
              className="flex-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDelete(product.id)}
              className="flex-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Hapus
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;