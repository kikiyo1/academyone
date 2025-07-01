import React from 'react';

const Footer = ({ onMenuClick }) => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-white font-bold text-xl">HADE ACADEMY</span>
            </div>
            <p className="text-gray-300 mb-4">
              Platform pembelajaran online terdepan di Indonesia dengan teknologi terkini dan mentor berpengalaman.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Produk</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onMenuClick('kursus')} className="text-gray-300 hover:text-white transition-colors">Kursus Online</button></li>
              <li><button onClick={() => onMenuClick('bootcamp')} className="text-gray-300 hover:text-white transition-colors">Bootcamp</button></li>
              <li><button onClick={() => onMenuClick('sertifikasi')} className="text-gray-300 hover:text-white transition-colors">Sertifikasi</button></li>
              <li><button onClick={() => onMenuClick('corporate')} className="text-gray-300 hover:text-white transition-colors">Corporate Training</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onMenuClick('tentang')} className="text-gray-300 hover:text-white transition-colors">Tentang Kami</button></li>
              <li><button onClick={() => onMenuClick('karir')} className="text-gray-300 hover:text-white transition-colors">Karir</button></li>
              <li><button onClick={() => onMenuClick('blog')} className="text-gray-300 hover:text-white transition-colors">Blog</button></li>
              <li><button onClick={() => onMenuClick('press')} className="text-gray-300 hover:text-white transition-colors">Press</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Dukungan</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onMenuClick('help')} className="text-gray-300 hover:text-white transition-colors">Help Center</button></li>
              <li><button onClick={() => onMenuClick('kontak')} className="text-gray-300 hover:text-white transition-colors">Kontak</button></li>
              <li><button onClick={() => onMenuClick('privacy')} className="text-gray-300 hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onMenuClick('terms')} className="text-gray-300 hover:text-white transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 HADE ACADEMY. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;