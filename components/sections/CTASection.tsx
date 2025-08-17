import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Experience Luxery with luxery dark AirBNB", 
  description = "Discover your next high-end getaway with our elegant, tech-enabled accommodations designed for comfort and sophistication. Dive into a world where luxury meets innovation.", 
  buttonText = "Book Your Stay", 
  buttonLink = "/book" 
}) => {
  return (
    <section className="bg-black text-pink-500 py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="mb-6 text-lg md:text-xl">{description}</p>
        <motion.div 
          href={buttonLink} 
          className="inline-block bg-pink-500 text-black font-semibold py-3 px-6 rounded transition duration-300 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
}

export default CTASection;