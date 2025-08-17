import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', role: 'CEO', expertise: 'Tech Innovations' },
  { name: 'David Smith', role: 'CTO', expertise: 'Software Architecture' },
  { name: 'Emily Davis', role: 'Product Manager', expertise: 'User Experience' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About luxery dark AirBNB
        </motion.h2>
        <motion.div
          className="text-lg mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At luxery dark AirBNB, we redefine the way you experience luxury accommodations through technology. Our mission is to integrate cutting-edge innovations with high-end hospitality, creating seamless, unforgettable stays for our guests.
        </motion.p>
        <motion.div
          className="text-3xl font-semibold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        <motion.div
          className="text-lg mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our mission at luxery dark AirBNB is to leverage technology to craft a deluxe experience that exceeds expectations. We believe in enhancing every aspect of stay through advanced tools, ensuring our guests feel pampered and catered to.
        </motion.p>
        <motion.div
          className="text-3xl font-semibold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold mb-2">{member.name}</h4>
              <p className="text-lg text-pink-400">{member.role}</p>
              <p className="text-sm">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-3xl font-semibold mt-12 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          Our Values and Achievements
        </motion.h3>
        <motion.div
          className="text-lg mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          We uphold values of innovation, customer satisfaction, and excellence in service. Our achievements include being recognized as a top luxury tech accommodation provider and consistently earning five-star ratings from our guests.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;