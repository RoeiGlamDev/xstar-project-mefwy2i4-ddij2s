import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const Page: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="bg-black text-white min-h-screen flex flex-col"
    >
      <header className="bg-black p-6">
        <h1 className="text-4xl font-bold text-pink-500">luxery dark AirBNB</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <section className="text-center p-10">
          <h2 className="text-3xl font-semibold mb-4">Welcome to luxery dark AirBNB</h2>
          <p className="text-lg mb-6">
            Experience the elegance of our high-end accommodations designed for the modern traveler.
          </p>
          <button className="bg-pink-500 text-black py-2 px-4 rounded hover:bg-pink-600 transition">
            Book Now
          </button>
        </section>
        <section className="bg-gray-800 p-10 rounded-lg shadow-lg mb-10">
          <h3 className="text-2xl font-semibold mb-4">Our Features</h3>
          <ul className="list-disc list-inside">
            <li>⚡ High-Speed Internet Connectivity</li>
            <li>🛋️ Luxurious Interiors with Smart Technology</li>
            <li>🌐 24/7 Customer Support</li>
            <li>🏨 Exclusive Access to Premium Listings</li>
          </ul>
        </section>
      </main>
      <footer className="bg-black p-6 text-center">
        <p className="text-sm">
          © 2023 luxery dark AirBNB. All rights reserved. 
        </p>
      </footer>
    </motion.div>
  );
};

export default Page;