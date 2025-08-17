import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Smart Home Integration',
    description: 'Experience seamless control with our AI-driven smart home technology, enhancing your stay at luxery dark AirBNB.',
    icon: <i className="fas fa-home text-pink-500"></i>,
  },
  {
    title: 'High-Speed Internet',
    description: 'Stay connected with lightning-fast internet speeds, perfect for remote work or streaming your favorite shows.',
    icon: <i className="fas fa-wifi text-pink-500"></i>,
  },
  {
    title: 'Luxury Amenities',
    description: 'Indulge in high-end amenities that make your stay comfortable and exclusive, tailored for the discerning traveler.',
    icon: <i className="fas fa-cocktail text-pink-500"></i>,
  },
  {
    title: '24/7 Concierge Service',
    description: 'Our dedicated team is available around the clock to cater to your every need, ensuring a luxurious experience.',
    icon: <i className="fas fa-concierge-bell text-pink-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Discover the Features of luxery dark AirBNB
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{feature.icon}</div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;