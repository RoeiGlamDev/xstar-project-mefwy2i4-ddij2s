import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  label: string;
  value: number;
  animationDuration: number;
}

const statsData: Stat[] = [
  { label: 'Exclusive Listings', value: 150, animationDuration: 1.5 },
  { label: 'Luxury Experiences', value: 300, animationDuration: 2 },
  { label: 'Happy Guests', value: 1000, animationDuration: 2.5 },
  { label: 'Global Reach', value: 25, animationDuration: 3 },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-20 px-5">
      <h2 className="text-4xl font-bold text-center mb-10">Achievements of luxery dark AirBNB</h2>
      <div className="flex flex-wrap justify-center">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col items-center mx-4 mb-8">
            <motion.div
              className="text-6xl font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: stat.animationDuration }}
            >
              {stat.value}
            </motion.div>
            <motion.div
              className="text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: stat.animationDuration, delay: 0.5 }}
            >
              {stat.label}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <p className="text-lg">Join the elite group of travelers experiencing the luxury of</p>
        <h3 className="text-3xl font-bold">luxery dark AirBNB</h3>
      </div>
    </section>
  );
};

export default StatsSection;