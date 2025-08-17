import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleSystem } from 'three/examples/jsm/particles/ParticleSystem';
import { motion } from 'framer-motion';

interface ParticleBackgroundProps {
  numParticles?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ numParticles = 500 }) => {
  useEffect(() => {
    // Initialize particles in Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles = new ParticleSystem(numParticles);
    scene.add(particles);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, [numParticles]);

  return (
    <div className="absolute inset-0">
      <Canvas className="w-full h-full">
        {/ Add Three.js particles here /}
      </Canvas>
    </div>
  );
};

const ParticleBackgroundWrapper: React.FC = () => {
  return (
    <motion.div
      className="relative w-full h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-pink-500">
        <h1 className="text-5xl font-bold">Welcome to luxery dark AirBNB</h1>
        <p className="mt-4 text-lg">
          Discover a new standard in luxury accommodations. Experience the elegance of our high-end properties designed for the discerning traveler.
        </p>
        <button className="mt-8 px-6 py-3 bg-pink-500 text-black rounded-md transition-transform transform hover:scale-105 focus:outline-none">
          Explore Our Listings
        </button>
      </div>
    </motion.div>
  );
};

export default ParticleBackgroundWrapper;