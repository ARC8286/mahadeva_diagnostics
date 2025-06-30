import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPhone,
  FaTimes,
  FaBars,
  FaUserMd,
  FaHome,
  FaClinicMedical,
  FaFlask,
  FaCalendarAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp
} from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { RiTestTubeFill } from 'react-icons/ri';

import mahadevLogo from '../assets/mahadev.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active nav based on scroll position
      const sections = ['home', 'about', 'services', 'tests', 'book', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section.charAt(0).toUpperCase() + section.slice(1));
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', icon: <FaHome className="text-lg" /> },
    { name: 'About', icon: <FaUserMd className="text-lg" /> },
    { 
      name: 'Services', 
      icon: <FaClinicMedical className="text-lg" />,
      subItems: ['X-Ray', 'Ultrasound', 'ECG', 'Pathology']
    },
    { 
      name: 'Tests', 
      icon: <RiTestTubeFill className="text-lg" />,
      subItems: ['Blood Tests', 'Urine Tests', 'Biochemistry', 'Hormones']
    },
    { name: 'Book', icon: <FaCalendarAlt className="text-lg" /> },
    { name: 'Contact', icon: <FaEnvelope className="text-lg" /> }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
    setActiveNav('Home');
  };

  return (
    <header className="sticky top-0 z-[999]">
      {/* Top notification bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs sm:text-sm py-1 px-4 text-center">
        <motion.div 
          className="flex items-center justify-center space-x-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FaClock className="animate-pulse" />
          <span>24/7 Emergency Services Available</span>
          <a href="tel:+1234567890" className="font-bold ml-4 flex items-center hover:underline">
            <IoMdCall className="mr-1" /> Call Now
          </a>
        </motion.div>
      </div>

      {/* Main navigation */}
      <nav className={`bg-gradient-to-r from-white to-blue-50 transition-all duration-300 ${isScrolled ? 'shadow-lg py-1' : 'shadow-sm py-2'} ${isMenuOpen ? 'bg-white' : ''}`}>
        <div className="container mx-auto px-4 sm:px-5 lg:px-6 xl:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <motion.div
              className="flex items-center min-w-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                className="flex items-center focus:outline-none group overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={scrollToTop}
                aria-label="Go to home"
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={mahadevLogo}
                    alt="Mahadeva X-Ray and Diagnostic"
                    className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full border-2 border-white shadow-md"
                  />
                  <motion.div 
                    className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-1 shadow-md"
                    animate={{ rotate: 360 }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 8,
                      ease: "linear"
                    }}
                  >
                    <FaClinicMedical className="text-white text-xs" />
                  </motion.div>
                </div>
                <div className="ml-3 text-left overflow-hidden">
                  <motion.div 
                    className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-indigo-700 to-blue-800 bg-clip-text text-transparent leading-tight whitespace-nowrap"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="font-extrabold">MAHADEVA</span>
                    <span className="font-medium text-indigo-900 ml-1">X-RAY & DIAGNOSTIC</span>
                  </motion.div>
                  <motion.div 
                    className="text-[9px] sm:text-xs text-indigo-700 italic font-medium mt-0.5 leading-tight whitespace-nowrap"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Trusted Care, Advanced Solutions
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
              {navItems.map((item) => (
                <motion.div 
                  key={item.name}
                  className="relative group"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.a
                    href={`#${item.name.toLowerCase()}`}
                    className={`relative px-3 py-2 rounded-lg flex flex-col items-center transition-all min-w-[60px] ${activeNav === item.name ? 'text-blue-700' : 'text-blue-900 hover:text-blue-700'}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      closeMenu();
                      setActiveNav(item.name);
                    }}
                  >
                    <div className={`transition-colors ${activeNav === item.name ? 'text-blue-700' : 'text-blue-600 group-hover:text-blue-700'}`}>
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium mt-1 whitespace-nowrap">
                      {item.name === 'About' ? 'About Us' : item.name}
                    </span>
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-300 ${activeNav === item.name ? 'w-3/4 bg-gradient-to-r from-blue-600 to-indigo-600' : 'w-0 bg-blue-600 group-hover:w-3/4'}`}></div>
                  </motion.a>

                  {/* Dropdown for items with subItems */}
                  {item.subItems && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-blue-100">
                        {item.subItems.map((subItem, idx) => (
                          <a 
                            key={idx}
                            href={`#${item.name.toLowerCase()}-${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-blue-50 last:border-b-0 transition-colors"
                            onClick={closeMenu}
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Call Now Button */}
              <motion.div
                className="flex items-center ml-2 lg:ml-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.a
                  href="#contact"
                  className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 lg:px-5 lg:py-2.5 rounded-full flex items-center space-x-2 shadow-lg group whitespace-nowrap"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 5px 20px rgba(59, 130, 246, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeMenu}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FaPhone className="relative z-10 group-hover:animate-ring" />
                  <span className="relative z-10 font-medium hidden lg:inline">Emergency Call</span>
                  <span className="relative z-10 font-medium lg:hidden">Call Now</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-50 to-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 relative"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl text-blue-700" />
              ) : (
                <>
                  <FaBars className="text-xl text-blue-700" />
                  {isScrolled && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                      !
                    </span>
                  )}
                </>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed inset-0 top-[92px] sm:top-[104px] bg-gradient-to-b from-white to-blue-50 z-40 overflow-y-auto pb-10"
              id="mobile-menu"
              role="menu"
            >
              <div className="container mx-auto px-4 sm:px-5 py-4 sm:py-6">
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="relative group">
                      <motion.a
                        href={`#${item.name.toLowerCase()}`}
                        className={`text-blue-900 hover:bg-blue-100 py-3 sm:py-4 px-4 sm:px-5 rounded-xl transition-all font-medium flex items-center text-base sm:text-lg shadow-sm bg-white/90 backdrop-blur-sm ${activeNav === item.name ? 'bg-blue-100 border-l-4 border-blue-600' : ''}`}
                        onClick={() => {
                          closeMenu();
                          setActiveNav(item.name);
                        }}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        role="menuitem"
                      >
                        <span className={`mr-3 sm:mr-4 ${activeNav === item.name ? 'text-blue-700' : 'text-blue-600'}`}>
                          {item.icon}
                        </span>
                        {item.name === 'About' ? 'About Us' : item.name}
                        <span className="ml-auto text-blue-400 text-sm">→</span>
                      </motion.a>

                      {/* Mobile dropdown for items with subItems */}
                      {item.subItems && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.subItems.map((subItem, idx) => (
                            <motion.a
                              key={idx}
                              href={`#${item.name.toLowerCase()}-${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block px-4 py-2 text-sm text-gray-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + idx * 0.05 }}
                              onClick={closeMenu}
                            >
                              {subItem}
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Contact options */}
                  <motion.div
                    className="grid grid-cols-2 gap-3 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.a
                      href="tel:+1234567890"
                      className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 rounded-xl flex flex-col items-center justify-center space-y-1 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IoMdCall className="text-xl" />
                      <span className="text-xs font-medium">Call Now</span>
                    </motion.a>
                    <motion.a
                      href="https://wa.me/1234567890"
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl flex flex-col items-center justify-center space-y-1 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaWhatsapp className="text-xl" />
                      <span className="text-xs font-medium">WhatsApp</span>
                    </motion.a>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-r from-indigo-100 to-blue-100 p-4 rounded-xl mt-4 border border-blue-200 shadow-sm flex items-center justify-center space-x-2"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="bg-blue-600 p-2 rounded-full">
                      <FaClock className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-blue-800">Working Hours</div>
                      <div className="text-xs text-blue-700">Mon-Sun: 24/7 Emergency</div>
                      <div className="text-xs text-blue-700">Regular: 8AM - 10PM</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="text-center text-xs sm:text-sm text-blue-700 italic font-medium mt-6 pt-4 border-t border-blue-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="font-bold text-blue-800">Mahadeva X-Ray and Diagnostic</div>
                    <div className="text-[10px] sm:text-xs mt-1 text-blue-600">Trusted Care, Advanced Solutions</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;