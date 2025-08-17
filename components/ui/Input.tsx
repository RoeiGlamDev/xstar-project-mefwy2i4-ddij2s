import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  validationError?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, value, onChange, validationError }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="flex flex-col mb-4">
      <label className={text-pink-500 mb-2 ${isFocused ? 'font-bold' : ''}}>{label}</label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200 ${validationError ? 'border-red-500' : 'border-black'}}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ backgroundColor: ''#1a1a1a'', color: ''#fff' '}}
        aria-invalid={!!validationError}
        aria-describedby={validationError ? ${label}-error : undefined}
      />
      {validationError && <span id={${label}-error} className="text-red-500 text-sm mt-1">{validationError}</span>}
    </div>
  );
};

export default Input;