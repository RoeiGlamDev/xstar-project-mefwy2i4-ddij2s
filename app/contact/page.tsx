import React from 'react';
import { motion } from 'framer-motion';

interface ContactProps {
  businessHours: string;
  location: string;
}

const Contact: React.FC<ContactProps> = ({ businessHours, location }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-pink-500">
      <motion.div
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us at luxery dark AirBNB
      </motion.h1>
      <motion.div
        className="text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We are here to assist you with any inquiries regarding our luxurious stays.
      </motion.p>
      <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm">Your Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 rounded border border-pink-500 bg-black text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm">Your Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded border border-pink-500 bg-black text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm">Your Message</label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-2 rounded border border-pink-500 bg-black text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded bg-pink-500 text-black font-semibold hover:bg-pink-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center">
        <motion.div
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Visit Us
        </motion.h2>
        <p className="text-lg">{location}</p>
        <motion.div
          className="text-2xl font-bold mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Business Hours
        </motion.h2>
        <p className="text-lg">{businessHours}</p>
      </div>
    </div>
  );
};

export default Contact;