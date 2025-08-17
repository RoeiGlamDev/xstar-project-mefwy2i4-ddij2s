import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { name: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = () => {
  const companyName = "luxery dark AirBNB";
  const links = [
    { name: 'About Us', url: '#about' },
    { name: 'Contact', url: '#contact' },
    { name: 'Terms of Service', url: '#terms' },
    { name: 'Privacy Policy', url: '#privacy' },
  ];
  
  const socialMedia = [
    { platform: 'Twitter', url: 'https://twitter.com/luxerydarkairbnb' },
    { platform: 'Facebook', url: 'https://facebook.com/luxerydarkairbnb' },
    { platform: 'Instagram', url: 'https://instagram.com/luxerydarkairbnb' },
  ];

  return (
    <footer className="bg-black text-pink-500 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {companyName}
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="flex flex-col">
            {links.map((link) => (
              <motion.div
                key={link.name}
                href={link.url}
                className="hover:text-pink-300 transition duration-200 mb-2"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <div className="flex flex-col mt-4 md:mt-0">
            {socialMedia.map((media) => (
              <motion.div
                key={media.platform}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300 transition duration-200 mb-2"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {media.platform}
              </motion.a>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;