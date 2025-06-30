import React from 'react';
import { motion } from 'framer-motion';
import { FaVial, FaClock, FaClinicMedical, FaCheckCircle } from 'react-icons/fa';

const statsData = [
  { 
    id: 'tests-conducted',
    number: "10,000+", 
    label: "Tests Conducted", 
    icon: <FaVial className="text-teal-300" />,
    delay: 0.1,
    highlight: 'from-teal-400 to-emerald-500'
  },
  { 
    id: 'report-delivery',
    number: "24", 
    label: "Hour Report Delivery", 
    icon: <FaClock className="text-amber-300" />,
    delay: 0.2,
    highlight: 'from-amber-400 to-yellow-500'
  },
  { 
    id: 'diagnostic-services',
    number: "15+", 
    label: "Diagnostic Services", 
    icon: <FaClinicMedical className="text-purple-300" />,
    delay: 0.3,
    highlight: 'from-purple-400 to-fuchsia-500'
  },
  { 
    id: 'report-delivery',
    number: "98%", 
    label: "Accuracy Rate", 
    icon: <FaCheckCircle className="text-rose-300" />,
    delay: 0.4,
    highlight: 'from-rose-400 to-pink-500'
  }
];

const StatsSection = () => {
  return (
    <section 
      className="bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 text-white py-12 md:py-16 relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute top-1/4 -left-20 w-48 h-48 md:w-64 md:h-64 bg-teal-400 rounded-full mix-blend-overlay filter blur-3xl animate-blob"
          aria-hidden="true"
        ></div>
        <div 
          className="absolute bottom-1/4 -right-20 w-48 h-48 md:w-64 md:h-64 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"
          aria-hidden="true"
        ></div>
      </div>
      
      {/* Pulsing border effect */}
      <div 
        className="absolute inset-0 border-4 md:border-8 border-white/5 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 
            id="stats-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
          >
            Our Diagnostic Excellence
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base">
            Trusted by thousands for accurate and timely diagnostic services
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: stat.delay, 
                duration: 0.5, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true, margin: "-50px 0px" }}
              className="group"
              aria-labelledby={`stat-${stat.id}-number stat-${stat.id}-label`}
            >
              <motion.div 
                className={`bg-gradient-to-br ${stat.highlight} p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl border border-white/10 hover:border-white/20 transition-all h-full flex flex-col items-center text-center cursor-default focus:outline-none focus:ring-2 focus:ring-white/30`}
                tabIndex={0}
                whileHover={{ 
                  scale: [null, 1.03, 1.05],
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)"
                }}
                whileFocus={{ 
                  scale: 1.05, 
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.3)" 
                }}
                whileTap={{ 
                  scale: 0.98,
                  boxShadow: "0 4px 10px rgba(255, 255, 255, 0.1)"
                }}
              >
                <motion.div 
                  className="mb-3 sm:mb-4 p-2 sm:p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors flex items-center justify-center"
                  aria-hidden="true"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  whileTap={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {React.cloneElement(stat.icon, { 
                    size: window.innerWidth < 640 ? 16 : 20 
                  })}
                </motion.div>
                <div 
                  id={`stat-${stat.id}-number`}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-white group-hover:text-white transition-colors"
                >
                  {stat.number}
                </div>
                <div 
                  id={`stat-${stat.id}-label`}
                  className="text-xs sm:text-sm md:text-base text-white/90 group-hover:text-white transition-colors"
                >
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(10px, -10px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-blob,
          .animation-delay-2000 {
            animation: none;
          }
          
          [class*="motion"] {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;