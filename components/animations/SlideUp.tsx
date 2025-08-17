import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="bg-black text-pink-500 p-5 rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      variants={variants}
      role="region"
      aria-label="Luxery Dark AirBNB Slide Animation"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;