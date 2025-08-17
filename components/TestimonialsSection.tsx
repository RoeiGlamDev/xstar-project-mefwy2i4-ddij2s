import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Emily Tran',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    review: 'Staying at luxery dark AirBNB was an unforgettable experience! The tech amenities were top-notch, and the ambiance was just perfect for relaxation.',
    rating: 5,
  },
  {
    name: 'James Patel',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    review: 'I loved the sleek design and the smart home features at luxery dark AirBNB. It made my trip seamless and enjoyable. Highly recommended for tech lovers!',
    rating: 4,
  },
  {
    name: 'Sofia Martinez',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    review: 'The attention to detail at luxery dark AirBNB is remarkable! The combination of luxury and advanced technology made my stay incredibly comfortable.',
    rating: 5,
  },
  {
    name: 'Michael Johnson',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
    review: 'I was blown away by the level of service and the quality of amenities at luxery dark AirBNB. It’s perfect for business travelers like me.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-black py-10 px-5">
      <h2 className="text-pink-500 text-3xl font-bold text-center mb-5">What Our Guests Say About luxery dark AirBNB</h2>
      <div className="flex flex-col space-y-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <img src={testimonial.photo} alt={${testimonial.name}'s photo} className="w-16 h-16 rounded-full border-2 border-pink-500" />
              <div className="ml-4">
                <h3 className="text-white font-semibold">{testimonial.name}</h3>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 15l-4.95 2.605 1.9-5.852L1 8.9l5.9-.455L10 3l2.1 5.445L18 8.9l-5.95 2.853 1.9 5.852L10 15z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300">{testimonial.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;