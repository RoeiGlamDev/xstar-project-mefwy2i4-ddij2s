import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  id: number;
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    id: 1,
    title: 'Basic Package',
    price: '$99/month',
    features: [
      'Access to premium listings',
      '24/7 customer support',
      'Basic analytics dashboard',
    ],
  },
  {
    id: 2,
    title: 'Standard Package',
    price: '$199/month',
    features: [
      'All Basic features',
      'Enhanced analytics dashboard',
      'Marketing tools',
      'Priority support',
    ],
  },
  {
    id: 3,
    title: 'Premium Package',
    price: '$299/month',
    features: [
      'All Standard features',
      'Custom branding options',
      'Dedicated account manager',
      'Comprehensive market insights',
    ],
  },
];

const FAQ = [
  {
    question: 'What is luxery dark AirBNB?',
    answer: 'luxery dark AirBNB is a premium platform that connects travelers with high-end accommodations in a dark-themed, elegant environment.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply choose a package that suits your needs, sign up, and start exploring our luxury listings!',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards and PayPal for your convenience.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <motion.div 
        className="text-4xl font-bold mb-6 text-pink-500"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Pricing for luxery dark AirBNB
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ y: 20 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {pricingOptions.map(option => (
          <div key={option.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl text-pink-500">{option.title}</h2>
            <p className="text-xl font-semibold">{option.price}</p>
            <ul className="mt-4">
              {option.features.map((feature, index) => (
                <li key={index} className="text-gray-300">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="text-3xl font-bold mt-12 mb-6 text-pink-500"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {FAQ.map((item, index) => (
          <motion.div 
            key={index} 
            className="p-4 bg-gray-800 rounded-lg"
            initial={{ scale: 0.95 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-pink-500 font-bold">{item.question}</h3>
            <p className="text-gray-300">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;