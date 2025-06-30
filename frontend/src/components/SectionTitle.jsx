import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionTitle = ({ title, subtitle }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    fallbackInView: true, // Fallback for browsers that don't support IntersectionObserver
  });

  // Animation variants for better organization
  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      ref={ref} 
      className="text-center mb-12 px-4" // Added padding for mobile
      aria-labelledby="section-title"
    >
      <motion.h2
        id="section-title"
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-4 text-base md:text-lg"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        className="w-20 h-1 bg-blue-600 mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={dividerVariants}
        aria-hidden="true" // Divider is decorative
      />
    </div>
  );
};

export default SectionTitle;