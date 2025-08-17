import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  threshold?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, threshold = 0.1 }) => {
  const controls = useAnimation();
  
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: threshold,
    });

    const element = document.querySelector('.fade-in');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls, threshold]);

  return (
    <motion.div
      className="fade-in"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;