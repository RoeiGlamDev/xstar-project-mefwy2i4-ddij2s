import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const buttonStyles = {
  primary: 'bg-pink-600 text-white hover:bg-pink-700',
  secondary: 'bg-black text-pink-600 border border-pink-600 hover:bg-pink-600 hover:text-white',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, disabled }) => {
  return (
    <motion.div
      className={`${buttonStyles[variant]`} rounded-lg px-6 py-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;