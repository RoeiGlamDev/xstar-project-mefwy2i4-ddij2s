import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
    return (
        <motion.div
            className="bg-black bg-opacity-70 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <img src={imageUrl} alt={title} className="rounded-lg h-48 w-full object-cover mb-4" />
            <h3 className="text-pink-500 text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-white mb-4">{description}</p>
            <span className="text-pink-400 text-lg font-bold">{price}</span>
        </motion.div>
    );
};

export default Card;