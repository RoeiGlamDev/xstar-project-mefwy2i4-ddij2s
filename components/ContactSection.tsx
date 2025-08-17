import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  contactReason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    contactReason: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    if (!formData.contactReason) newErrors.contactReason = 'Please select a contact reason.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', contactReason: '' });
    }
  };

  return (
    <section className="bg-black text-white p-8 rounded-lg shadow-lg">
      <motion.div 
        className="text-3xl font-bold mb-6 text-pink-500" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}>
        Contact luxery dark AirBNB
      </motion.h2>
      <p className="mb-4">For technology inquiries or support, please fill out the form below:</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={w-full p-2 border border-pink-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 ${errors.name ? 'border-red-500' : ''}}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={w-full p-2 border border-pink-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 ${errors.email ? 'border-red-500' : ''}}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="block mb-2" htmlFor="contactReason">Reason for Contact</label>
          <select
            id="contactReason"
            name="contactReason"
            value={formData.contactReason}
            onChange={handleChange}
            className={w-full p-2 border border-pink-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 ${errors.contactReason ? 'border-red-500' : ''}}>
            <option value="">Select a reason</option>
            <option value="Booking Inquiry">Booking Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Partnership Opportunity">Partnership Opportunity</option>
          </select>
          {errors.contactReason && <p className="text-red-500">{errors.contactReason}</p>}
        </div>
        <div>
          <label className="block mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={w-full p-2 border border-pink-500 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 ${errors.message ? 'border-red-500' : ''}}
            rows={4}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-pink-500 text-black font-bold rounded-md hover:bg-pink-600 transition duration-300">
          Send Message
        </button>
      </form>
      {submitted && <p className="mt-4 text-pink-500">Thank you for your message! We will get back to you soon.</p>}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-pink-500">Business Information</h3>
        <p className="mb-1">luxery dark AirBNB</p>
        <p className="mb-1">123 Dark Lane, Suite 456</p>
        <p className="mb-1">Dark City, DC 12345</p>
        <p className="mb-1">Email: info@luxerydarkairbnb.com</p>
        <p>Business Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;