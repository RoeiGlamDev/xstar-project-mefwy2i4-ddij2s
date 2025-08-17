import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    image: '/images/alice.jpg',
  },
  {
    name: 'Mark Smith',
    role: 'CTO',
    image: '/images/mark.jpg',
  },
  {
    name: 'Emily Davis',
    role: 'Head of Design',
    image: '/images/emily.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-black text-pink-500 min-h-screen flex flex-col">
      <header className="py-10">
        <h1 className="text-4xl font-bold text-center">About luxery dark AirBNB</h1>
      </header>
      <main className="flex-grow px-4">
        <section className="mb-10">
          <motion.div 
            className="text-3xl font-semibold mb-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Our History
          </motion.h2>
          <p>
            luxery dark AirBNB was founded in 2020 with a vision to redefine the vacation rental experience through technology. 
            We leverage cutting-edge solutions to create an unparalleled luxury stay for our guests, ensuring top-notch comfort 
            and seamless service in every property we manage.
          </p>
        </section>
        <section className="mb-10">
          <motion.div 
            className="text-3xl font-semibold mb-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <ul className="list-disc pl-5">
            <li>Innovation: We embrace the latest technology to enhance guest experiences.</li>
            <li>Luxury: We provide high-end accommodations that exceed expectations.</li>
            <li>Sustainability: We are committed to eco-friendly practices in our operations.</li>
            <li>Community: We believe in fostering connections with our guests and local cultures.</li>
          </ul>
        </section>
        <section>
          <motion.div 
            className="text-3xl font-semibold mb-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg text-center transition-transform transform hover:scale-105" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4" 
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <footer className="py-5 text-center">
        <p>&copy; 2023 luxery dark AirBNB. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;