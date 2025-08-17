import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center p-6">
        <motion.div
          className="text-5xl font-bold mb-4 text-gradient bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to luxery dark AirBNB
        </motion.h1>
        <motion.div
          className="text-lg mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience unmatched technology-driven luxury with our exclusive services tailored for discerning guests.
        </motion.p>
        <div className="flex justify-center">
          <motion.div
            className="bg-pink-600 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-pink-500 transition duration-300"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Explore Our Properties
          </motion.button>
          <motion.div
            className="bg-pink-600 text-black px-6 py-3 ml-4 rounded-lg shadow-lg hover:bg-pink-500 transition duration-300"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Learn About Our Technology
          </motion.button>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-400">Trusted by thousands for a luxury experience.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;