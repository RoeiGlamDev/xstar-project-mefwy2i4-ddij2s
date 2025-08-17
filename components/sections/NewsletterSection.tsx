import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title: string;
  subtitle: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, subtitle }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission logic here, e.g., sending to an API
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-black text-pink-500 py-10 px-4">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="mb-6">{subtitle}</p>
        {isSubmitted ? (
          <motion.div
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to luxery dark AirBNB! Stay tuned for our updates.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              className="bg-gray-800 text-pink-500 border border-pink-600 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.div
              type="submit"
              className="bg-pink-600 text-black rounded-r-lg p-2 hover:bg-pink-700 transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              Subscribe
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default NewsletterSection;