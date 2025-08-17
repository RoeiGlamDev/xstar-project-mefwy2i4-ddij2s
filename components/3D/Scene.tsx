import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize any three.js specific settings or effects here
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <motion.div
        className="text-5xl text-pink-500 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h1>
      <Canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ backgroundColor: ''black' '}}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/ Add interactive 3D elements below /}
        <OrbitControls />
      </Canvas>
      <motion.div
        className="text-lg text-pink-300 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to luxery dark AirBNB - where technology meets elegance. Experience our high-end accommodations designed for the discerning traveler.
      </motion.p>
    </div>
  );
};

export default Scene;