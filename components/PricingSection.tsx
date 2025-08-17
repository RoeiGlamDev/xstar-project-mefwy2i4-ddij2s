import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic Package',
    price: '$99/month',
    features: [
      'High-speed internet access',
      '24/7 customer support',
      'Basic smart home integration',
    ],
  },
  {
    name: 'Premium Package',
    price: '$199/month',
    features: [
      'All Basic features',
      'Advanced smart home integration',
      'Priority customer support',
      'Monthly tech updates',
    ],
  },
  {
    name: 'Luxury Package',
    price: '$299/month',
    features: [
      'All Premium features',
      'Personalized tech concierge',
      'Exclusive access to beta features',
      'Custom smart home setup',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-10">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing for luxery dark AirBNB
        </motion.h2>
        <motion.div
          className="text-lg mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Choose the perfect package for your luxurious stay with luxery dark AirBNB
        </motion.p>
        <div className="flex justify-center space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <p className="text-xl font-bold mb-4">{tier.price}</p>
              <ul className="mb-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-pink-500 text-black font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-pink-600"
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;