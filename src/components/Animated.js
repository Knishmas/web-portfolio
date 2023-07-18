import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  useEffect(() => {
    if (inView) {
      return {
        visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
      };
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? 'visible' : 'hidden'}
      exit={{ opacity: 0, y: -20 }}
      variants={animationVariants} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
