import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  return (
    <motion.div
      position={position}
      animate={{ y: [0, 0.05, 0], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#ff69b4" />
    </motion.mesh>
  );
};

const FloatingElements: React.FC = () => {
  const elements = [
    [-1, 0, -2],
    [1, 0, -3],
    [0, 0, -4],
    [-2, 0, -5],
    [2, 0, -6],
  ];

  return (
    <>
      {elements.map((pos, index) => (
        <FloatingElement key={index} position={pos as [number, number, number]} />
      ))}
    </>
  );
};

const FloatingElementsScene: React.FC = () => {
  return (
    <Canvas className="w-full h-full bg-black">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingElements />
      <OrbitControls />
    </Canvas>
  );
};

const FloatingElementsContainer: React.FC = () => {
  useEffect(() => {
    document.title = "luxery dark AirBNB - HouseIL";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-pink-500">
      <h1 className="text-4xl font-bold mb-4">Welcome to luxery dark AirBNB</h1>
      <h2 className="text-2xl mb-2">Experience Elegance at HouseIL</h2>
      <p className="mb-6">
        Discover a luxurious and technologically advanced living space at HouseIL. 
        Our properties are designed with cutting-edge technology and an elegant aesthetic 
        that embraces the beauty of modernity in a dark theme.
      </p>
      <FloatingElementsScene />
    </div>
  );
};

export default FloatingElementsContainer;