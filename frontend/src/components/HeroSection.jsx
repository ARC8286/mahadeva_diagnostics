import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, FaXRay, FaArrowRight, FaPhone, FaFlask, 
  FaHeartbeat, FaStethoscope, FaMicroscope, FaWhatsapp, 
  FaHome, FaCheckCircle, FaShieldAlt, FaClinicMedical 
} from 'react-icons/fa';
import { 
  MdMedicalServices, MdVerified, MdHealthAndSafety, 
  MdLocalHospital, MdScience 
} from 'react-icons/md';
import { 
  GiHealthNormal, GiMedicinePills, GiDogBowl, 
  GiHouse, GiMedicines, GiHeartBeats 
} from 'react-icons/gi';
import { 
  BsClipboard2Pulse, BsShieldCheck, BsHospital, 
  BsThermometer, BsDroplet 
} from 'react-icons/bs';
import { IoMdPulse } from 'react-icons/io';
import { BiTestTube } from 'react-icons/bi';
import veterianimg from '../assets/veterian.jpg'
import homex_rayimg from '../assets/homex-ray.png';
const HeroSection = () => {
  const phoneNumber = "+918291215999";
  const whatsappMessage = "Hello, I'd like to book a portable X-ray service";

  // Color palette
  const colors = {
    primary: 'from-indigo-600 to-blue-600',
    secondary: 'from-teal-500 to-emerald-600',
    accent: 'from-rose-500 to-pink-600',
    highlight: 'from-amber-500 to-orange-500',
    dark: 'from-gray-800 to-gray-900'
  };

  const services = [
    {
      id: 1,
      icon: <FaXRay className="text-indigo-600 group-hover:text-white transition-colors" size={20} />,
      title: "Radiology",
      description: "X-ray, Ultrasound, CT Scan",
      bg: 'bg-indigo-100 group-hover:bg-indigo-600',
      border: 'border-indigo-200 group-hover:border-indigo-600',
      text: 'text-indigo-600 group-hover:text-white'
    },
    {
      id: 2,
      icon: <BiTestTube className="text-teal-600 group-hover:text-white transition-colors" size={20} />,
      title: "Pathology",
      description: "Blood tests, microbiology",
      bg: 'bg-teal-100 group-hover:bg-teal-600',
      border: 'border-teal-200 group-hover:border-teal-600',
      text: 'text-teal-600 group-hover:text-white'
    },
    {
      id: 3,
      icon: <FaStethoscope className="text-amber-600 group-hover:text-white transition-colors" size={20} />,
      title: "Checkups",
      description: "Preventive health packages",
      bg: 'bg-amber-100 group-hover:bg-amber-600',
      border: 'border-amber-200 group-hover:border-amber-600',
      text: 'text-amber-600 group-hover:text-white'
    },
    {
      id: 4,
      icon: <GiHeartBeats className="text-rose-600 group-hover:text-white transition-colors" size={20} />,
      title: "Special Tests",
      description: "Cardiac, cancer screening",
      bg: 'bg-rose-100 group-hover:bg-rose-600',
      border: 'border-rose-200 group-hover:border-rose-600',
      text: 'text-rose-600 group-hover:text-white'
    }
  ];

  const features = [
    {
      id: 1,
      icon: <FaCalendarAlt className="text-indigo-600 group-hover:text-white transition-colors" size={18} />,
      text: "Same-day appointments",
      bg: 'bg-indigo-50 group-hover:bg-indigo-600',
      border: 'border-indigo-100 group-hover:border-indigo-600'
    },
    {
      id: 2,
      icon: <MdVerified className="text-teal-600 group-hover:text-white transition-colors" size={20} />,
      text: "Certified technicians",
      bg: 'bg-teal-50 group-hover:bg-teal-600',
      border: 'border-teal-100 group-hover:border-teal-600'
    },
    {
      id: 3,
      icon: <FaMicroscope className="text-amber-600 group-hover:text-white transition-colors" size={18} />,
      text: "Advanced equipment",
      bg: 'bg-amber-50 group-hover:bg-amber-600',
      border: 'border-amber-100 group-hover:border-amber-600'
    },
    {
      id: 4,
      icon: <FaShieldAlt className="text-rose-600 group-hover:text-white transition-colors" size={18} />,
      text: "Accurate results",
      bg: 'bg-rose-50 group-hover:bg-rose-600',
      border: 'border-rose-100 group-hover:border-rose-600'
    }
  ];

  const specialServices = [
    {
      id: 1,
      title: "Veterinary Portable X-Ray",
      description: "Advanced imaging for your pets at home",
      features: [
        "Comfort and convenience - we come to you",
        "High-resolution digital imaging",
        "For all animals - dogs, cats, farm animals",
        "Fast WhatsApp report delivery"
      ],
      icon: <GiDogBowl className="text-teal-600 group-hover:text-white transition-colors" size={24} />,
      bg: 'bg-teal-100 group-hover:bg-teal-600',
      border: 'border-teal-200 group-hover:border-teal-600',
      highlight: 'bg-gradient-to-r from-teal-500 to-emerald-600'
    },
    {
      id: 2,
      title: "Home X-Ray Services",
      description: "High-quality X-rays at your home",
      features: [
        "AERB Licensed & RSO Certified",
        "Advanced portable technology",
        "Instant WhatsApp reports",
        "Ideal for elderly & bedridden patients"
      ],
      icon: <GiHouse className="text-indigo-600 group-hover:text-white transition-colors" size={24} />,
      bg: 'bg-indigo-100 group-hover:bg-indigo-600',
      border: 'border-indigo-200 group-hover:border-indigo-600',
      highlight: 'bg-gradient-to-r from-indigo-600 to-blue-600'
    }
  ];

  const trustBadges = [
    {
      icon: <MdVerified className="text-green-500" size={20} />,
      text: "NABL Accredited",
      bg: 'bg-green-50'
    },
    {
      icon: <FaHeartbeat className="text-rose-400" size={20} />,
      text: "1000+ Daily Tests",
      bg: 'bg-rose-50'
    },
    {
      icon: <MdMedicalServices className="text-indigo-500" size={20} />,
      text: "20+ Years Experience",
      bg: 'bg-indigo-50'
    },
    {
      icon: <BsShieldCheck className="text-amber-500" size={20} />,
      text: "Certified Professionals",
      bg: 'bg-amber-50'
    }
  ];

  return (
    <section 
      id="home" 
      className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-blue-50 via-white to-white"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-indigo-100 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-48 h-48 rounded-full bg-teal-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-amber-100 opacity-15 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* 24/7 Home Visit Tag */}
        <motion.div
          className="flex items-center justify-center mb-4 lg:mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
        >
          <div className={`bg-gradient-to-r ${colors.primary} text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300 group`}>
            <FaHome className="mr-2 text-yellow-200 group-hover:animate-pulse" />
            <span className="mr-1">24/7 Home Visit Services</span>
            <span className="animate-pulse">•</span>
          </div>
        </motion.div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col">
          {/* NABL Badge */}
          <motion.div
            className="flex items-center mb-5 justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <div className="flex items-center justify-center bg-teal-100 text-teal-600 rounded-full p-2 mr-3 animate-pulse">
              <GiHealthNormal className="text-lg" />
            </div>
            <span className="text-xs font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              NABL Accredited Lab
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            className="mb-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          >
            <div className="relative inline-block">
              <h1 className="text-2xl sm:text-[1.8rem] font-bold text-gray-900 leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-indigo-600 to-blue-800 text-transparent bg-clip-text">
                  Precision Diagnostics
                </span>
                <span className="block text-gray-800 mt-1 text-sm sm:text-base">With Compassionate</span>
                <span className="block text-indigo-600 mt-1 text-sm sm:text-base">Care At Home</span>
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 mx-auto w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xs sm:text-sm text-gray-600 mb-6 text-center px-4 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            Comprehensive diagnostic services with cutting-edge technology and compassionate care.
          </motion.p>

          {/* Services Section */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          >
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
              Our Diagnostic Services
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className={`group p-3 rounded-lg shadow-sm border ${service.border} transition-all cursor-pointer flex flex-col items-center text-center ${service.bg} hover:shadow-md`}
                  whileHover={{ 
                    y: -4, 
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`p-2 rounded-full mb-2 transition-colors ${service.bg}`}>
                    {service.icon}
                  </div>
                  <h4 className={`text-xs font-medium transition-colors ${service.text}`}>
                    {service.title}
                  </h4>
                  <p className={`text-[10px] mt-1 transition-colors ${service.id === 1 ? 'group-hover:text-indigo-100' : 
                    service.id === 2 ? 'group-hover:text-teal-100' : 
                    service.id === 3 ? 'group-hover:text-amber-100' : 
                    'group-hover:text-rose-100'}`}>
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* First Image */}
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white mb-6 aspect-[4/3]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={homex_rayimg}
              alt="Diagnostic lab"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-blue-900/10"></div>
          </motion.div>

          {/* Home X-Ray Service */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
          >
            {specialServices.filter(s => s.id === 2).map((service) => (
              <div key={service.id} className={`bg-white p-5 rounded-xl shadow-lg border ${service.border} group hover:shadow-xl transition-all`}>
                <div className="flex flex-col items-center mb-4">
                  <div className={`${service.bg} p-4 rounded-full mb-3 transition-colors`}>
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 text-center px-4">{service.description}</p>
                </div>
                <ul className="space-y-3 px-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-0.5">
                        <BsShieldCheck size={16} />
                      </span>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Second Image */}
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white mb-6 aspect-[4/3]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={veterianimg}
              alt="Veterinary X-ray service"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-blue-900/10"></div>
          </motion.div>

          {/* Veterinary Service */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, type: 'spring', stiffness: 100 }}
          >
            {specialServices.filter(s => s.id === 1).map((service) => (
              <div key={service.id} className={`bg-white p-5 rounded-xl shadow-lg border ${service.border} group hover:shadow-xl transition-all`}>
                <div className="flex flex-col items-center mb-4">
                  <div className={`${service.bg} p-4 rounded-full mb-3 transition-colors`}>
                    {service.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 text-center px-4">{service.description}</p>
                </div>
                <ul className="space-y-3 px-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-0.5">
                        <BsClipboard2Pulse size={16} />
                      </span>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Features Highlights */}
          <motion.div
            className="grid grid-cols-2 gap-3 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, type: 'spring', stiffness: 100 }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className={`flex flex-col items-center p-3 rounded-lg shadow-sm text-center border ${feature.border} ${feature.bg} group hover:shadow-md transition-all cursor-pointer`}
                whileHover={{ 
                  y: -4, 
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`p-2 rounded-full mb-2 transition-colors ${feature.bg}`}>
                  {feature.icon}
                </div>
                <span className="text-xs text-gray-700 font-medium group-hover:text-white transition-colors">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 bg-white p-4 rounded-xl shadow-lg border border-gray-100 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 100 }}
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className={`flex items-center text-xs text-gray-700 px-3 py-2 rounded-lg ${badge.bg}`}>
                {badge.icon}
                <span className="ml-1">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col gap-3 items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
          >
            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-5 py-3 rounded-lg inline-flex items-center justify-center gap-2 text-sm font-semibold shadow-lg hover:shadow-xl w-full max-w-xs group"
              whileHover={{ 
                y: -2,
                boxShadow: '0 10px 20px rgba(20, 184, 166, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <FaWhatsapp className="text-white/10 text-3xl transform rotate-12" />
              </div>
              <FaWhatsapp className="text-xl z-10" />
              <span className="z-10">WhatsApp Now</span>
              <FaArrowRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 z-10" />
            </motion.a>

            {/* Phone Button */}
            <motion.a
              href={`tel:${phoneNumber}`}
              className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-5 py-3 rounded-lg inline-flex items-center justify-center gap-2 text-sm font-semibold shadow-lg hover:shadow-xl w-full max-w-xs group"
              whileHover={{ 
                y: -2,
                boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <FaPhone className="text-white/10 text-3xl transform rotate-12" />
              </div>
              <FaPhone className="text-xl z-10" />
              <span className="z-10">Call {phoneNumber}</span>
            </motion.a>

            {/* Book Now Button */}
            <motion.a
              href="#book"
              className="relative overflow-hidden bg-white hover:bg-gray-50 text-gray-800 border-2 border-indigo-100 hover:border-indigo-200 px-5 py-3 rounded-lg inline-flex items-center justify-center gap-2 text-sm font-semibold shadow-lg hover:shadow-xl w-full max-w-xs group"
              whileHover={{ 
                y: -2,
                boxShadow: '0 10px 20px rgba(99, 102, 241, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaCalendarAlt className="text-indigo-600 text-xl z-10" />
              <span className="z-10">Book Now</span>
              <FaArrowRight className="text-indigo-600 ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 z-10" />
            </motion.a>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          {/* Left Content - Text Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center mb-5 justify-start"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-center bg-teal-100 text-teal-600 rounded-full p-2 mr-3 animate-pulse">
                <GiHealthNormal className="text-lg" />
              </div>
              <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                NABL Accredited Lab
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-[3.2rem] lg:text-5xl xl:text-[3.6rem] font-bold text-gray-900 mb-6 leading-tight text-left"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block bg-gradient-to-r from-indigo-600 to-blue-800 text-transparent bg-clip-text">
                Precision Diagnostics
              </span>
              <span className="block text-gray-800">With Compassionate</span>
              <span className="block text-indigo-600">Care At Home</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg text-left"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive diagnostic services with cutting-edge technology and compassionate care.
              Fast, accurate results you can trust.
            </motion.p>

            {/* Main Services Grid */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-left">
                Our Diagnostic Services
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    className={`group p-4 rounded-xl shadow-sm border ${service.border} hover:shadow-md transition-all cursor-pointer ${service.bg}`}
                    whileHover={{ 
                      y: -4, 
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + service.id * 0.1 }}
                  >
                    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                      <div className={`p-3 rounded-full mb-2 sm:mb-0 sm:mr-3 transition-colors ${service.bg}`}>
                        {service.icon}
                      </div>
                      <div>
                        <h4 className={`text-base font-medium transition-colors ${service.text}`}>
                          {service.title}
                        </h4>
                        <p className={`text-sm mt-1 transition-colors ${service.id === 1 ? 'group-hover:text-indigo-100' : 
                          service.id === 2 ? 'group-hover:text-teal-100' : 
                          service.id === 3 ? 'group-hover:text-amber-100' : 
                          'group-hover:text-rose-100'}`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Special Services Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                {specialServices.map((service) => (
                  <motion.div
                    key={service.id}
                    className={`group bg-white p-5 rounded-xl shadow-lg border ${service.border} hover:shadow-xl transition-all cursor-pointer`}
                    whileHover={{ 
                      y: -4, 
                      boxShadow: `0 10px 25px ${service.id === 1 ? 'rgba(20, 184, 166, 0.15)' : 'rgba(99, 102, 241, 0.15)'}`,
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + service.id * 0.1 }}
                  >
                    <div className="flex items-start mb-3">
                      <div className={`p-3 rounded-full mr-4 transition-colors ${service.bg}`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold text-gray-800 transition-colors ${service.id === 1 ? 'group-hover:text-teal-600' : 'group-hover:text-indigo-600'}`}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      </div>
                    </div>
                    <ul className="pl-2 text-sm text-gray-700 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className={`mr-2 mt-0.5 ${service.id === 1 ? 'text-teal-500' : 'text-indigo-500'}`}>
                            <FaCheckCircle size={16} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className={`flex flex-col items-center p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-all cursor-pointer ${feature.bg} border ${feature.border} group`}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: feature.id === 1 ? '#f0f5ff' : 
                                    feature.id === 2 ? '#f0fdfa' : 
                                    feature.id === 3 ? '#fffbeb' : '#fff1f2',
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + feature.id * 0.1 }}
                >
                  <div className={`p-3 rounded-full mb-3 transition-colors ${feature.bg}`}>
                    {feature.icon}
                  </div>
                  <span className={`text-sm text-gray-700 font-medium transition-colors ${feature.id === 1 ? 'group-hover:text-indigo-600' : 
                    feature.id === 2 ? 'group-hover:text-teal-600' : 
                    feature.id === 3 ? 'group-hover:text-amber-600' : 
                    'group-hover:text-rose-600'}`}>
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-start items-stretch"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {/* WhatsApp Button */}
              <motion.a
                href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-4 rounded-xl inline-flex items-center justify-center gap-3 transition-all group text-base font-semibold shadow-lg hover:shadow-xl"
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 10px 20px rgba(20, 184, 166, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaWhatsapp className="text-white/10 text-4xl transform rotate-12" />
                </div>
                <FaWhatsapp className="text-xl z-10" />
                <span className="z-10">WhatsApp Now</span>
                <FaArrowRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 z-10" />
              </motion.a>

              {/* Phone Button */}
              <motion.a
                href={`tel:${phoneNumber}`}
                className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl inline-flex items-center justify-center gap-3 transition-all group text-base font-semibold shadow-lg hover:shadow-xl"
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPhone className="text-white/10 text-4xl transform rotate-12" />
                </div>
                <FaPhone className="text-xl z-10" />
                <span className="z-10">Call {phoneNumber}</span>
              </motion.a>

              {/* Book Now Button */}
              <motion.a
                href="#book"
                className="relative overflow-hidden bg-white hover:bg-gray-50 text-gray-800 border-2 border-indigo-100 hover:border-indigo-200 px-6 py-4 rounded-xl inline-flex items-center justify-center gap-3 transition-all group text-base font-semibold shadow-lg hover:shadow-xl"
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 10px 20px rgba(99, 102, 241, 0.1)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaCalendarAlt className="text-indigo-600 text-xl z-10" />
                <span className="z-10">Book Now</span>
                <FaArrowRight className="text-indigo-600 ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 z-10" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Images Section */}
          <motion.div
            className="w-full lg:w-1/2 mt-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Main Image */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white hover:shadow-3xl transition-all duration-300 aspect-[4/3] mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={homex_rayimg}
                alt="Diagnostic lab"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-blue-900/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Veterinary Services Image */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white hover:shadow-3xl transition-all duration-300 aspect-[4/3] mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={veterianimg}
                alt="Veterinary X-ray service"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-blue-900/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 bg-white p-5 rounded-2xl shadow-lg border border-gray-100">
              {trustBadges.map((badge, index) => (
                <div key={index} className={`flex items-center text-sm text-gray-700 p-3 rounded-lg ${badge.bg}`}>
                  {badge.icon}
                  <span className="ml-2">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;