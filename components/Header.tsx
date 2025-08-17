import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  return (
    <header className="bg-black text-pink-500 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <img src={logoUrl} alt="luxery dark AirBNB Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold">luxery dark AirBNB</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <motion.div
            href="#home"
            className="hover:text-pink-300 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Home
          </motion.a>
          <motion.div
            href="#about"
            className="hover:text-pink-300 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            About
          </motion.a>
          <motion.div
            href="#services"
            className="hover:text-pink-300 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Services
          </motion.a>
          <motion.div
            href="#contact"
            className="hover:text-pink-300 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button className="text-pink-500 focus:outline-none" aria-label="Toggle mobile menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;