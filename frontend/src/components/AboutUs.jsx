import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { FaUserMd, FaHeartbeat, FaVials, FaFlask, FaAward, FaClinicMedical, FaHome, FaPaw, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { GiHealthNormal, GiMedicalDrip } from 'react-icons/gi';
import { BsSpeedometer2, BsCalendarCheck } from 'react-icons/bs';
import { MdHealthAndSafety } from 'react-icons/md';
import aboutusimg from "../assets/aboutus2.png"

const AboutUs = () => {
  const phoneNumber = "+918291215999";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
  
  const scrollToBook = () => {
    const bookSection = document.getElementById('book');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <FaUserMd className="text-xl sm:text-2xl" />,
      title: "Expert Team",
      description: "Experienced radiologists, pathologists, and technicians.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <FaHeartbeat className="text-xl sm:text-2xl" />,
      title: "Patient-Centric",
      description: "Home collection and same-day reports available.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: <FaVials className="text-xl sm:text-2xl" />,
      title: "Quality & Accuracy",
      description: "Strict quality standards for reliable results.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaAward className="text-xl sm:text-2xl" />,
      title: "Accredited Facility",
      description: "NABL accredited quality standards.",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const services = [
    {
      title: "Veterinary X-Ray",
      icon: <FaPaw className="text-lg sm:text-xl" />,
      highlights: [
        "At your doorstep service",
        "For all animals",
        "Instant WhatsApp reports",
        "AERB Licensed Technicians"
      ],
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "Home X-Ray",
      icon: <FaHome className="text-lg sm:text-xl" />,
      highlights: [
        "Certified technicians",
        "Portable technology",
        "WhatsApp report sharing",
        "Ideal for elderly patients"
      ],
      color: "bg-gradient-to-br from-blue-500 to-indigo-600"
    }
  ];

  return (
    <section id="about" className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-purple-200 to-transparent rounded-full opacity-20 -translate-y-1/3 translate-x-1/4 blur-xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-b from-blue-200 to-transparent rounded-full opacity-20 translate-y-1/4 -translate-x-1/4 blur-xl" />
      
      <div className="container mx-auto relative">
        <SectionTitle 
          title="About Mahadeva Diagnostics" 
          subtitle="Precision Diagnostics for Better Healthcare Outcomes"
          center={false}
          highlightColor="bg-amber-100 text-amber-800"
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Image section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9 border-2 md:border-4 border-white">
              <img 
                src={aboutusimg}
                alt="Scientist working in modern diagnostic lab" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating experience badge */}
            <motion.div
              className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-gradient-to-r from-amber-400 to-amber-500 p-2 md:p-3 rounded-lg shadow-md z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center text-white">
                <div className="bg-white/20 p-1 md:p-2 rounded-full mr-1 md:mr-2">
                  <GiHealthNormal className="text-sm md:text-lg" />
                </div>
                <div>
                  <div className="font-bold text-xs md:text-sm">15+ Years</div>
                  <div className="text-[10px] md:text-xs font-medium text-amber-100">Trusted Service</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content section */}
          <motion.div
            className="space-y-5 md:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              At <span className="font-semibold text-blue-600">Mahadeva Diagnostics</span>, we combine cutting-edge technology with compassionate care to deliver precise diagnostic results.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow transition-all border border-gray-100 group`}
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="flex items-start">
                    <div className={`bg-gradient-to-br ${feature.color} p-1 md:p-2 rounded-full mr-2 md:mr-3 text-white`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-xs md:text-sm mb-0.5">{feature.title}</h4>
                      <p className="text-gray-600 text-[10px] md:text-xs">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Compact Services */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 mt-3 md:mt-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`${service.color} rounded-lg overflow-hidden text-white`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="p-2 md:p-3">
                    <div className="flex items-center mb-1 md:mb-2">
                      <div className="bg-white/20 p-1 md:p-2 rounded-full mr-1 md:mr-2">
                        {service.icon}
                      </div>
                      <h3 className="text-xs md:text-sm font-bold">{service.title}</h3>
                    </div>
                    <ul className="text-[10px] md:text-xs space-y-0.5 md:space-y-1 pl-1">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons - Updated for mobile */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mt-4 md:mt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-2 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors shadow-sm w-12 h-12 sm:w-auto sm:h-auto sm:px-3"
              >
                <span className="hidden sm:inline"><FaWhatsapp className="mr-1.5 text-sm md:text-base" /></span>
                <span className="sm:hidden"><FaWhatsapp className="text-base" /></span>
                <span className="hidden sm:inline">WhatsApp Us</span>
              </a>
              
              <a 
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-2 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors shadow-sm w-12 h-12 sm:w-auto sm:h-auto sm:px-3"
              >
                <span className="hidden sm:inline"><FaPhone className="mr-1.5 text-sm md:text-base" /></span>
                <span className="sm:hidden"><FaPhone className="text-base" /></span>
                <span className="hidden sm:inline">Call Now</span>
              </a>
              
              <button 
                onClick={scrollToBook}
                className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-black p-2 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors shadow-sm w-12 h-12 sm:w-auto sm:h-auto sm:px-3"
              >
                <span className="hidden sm:inline"><BsCalendarCheck className="mr-1.5 text-sm md:text-base" /></span>
                <span className="sm:hidden"><BsCalendarCheck className="text-base" /></span>
                <span className="hidden sm:inline">Book Now</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Accreditation badges */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-8 md:mt-10 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-2 md:p-3 text-white max-w-xs">
            <div className="bg-white/20 p-1 md:p-2 rounded-full mr-2 md:mr-3">
              <FaClinicMedical className="text-sm md:text-lg" />
            </div>
            <div>
              <div className="font-medium text-xs md:text-sm">NABL Accredited</div>
              <div className="text-[10px] md:text-xs text-blue-100">Quality Certified Lab</div>
            </div>
          </div>

          <div className="flex items-center bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-2 md:p-3 text-white max-w-xs">
            <div className="bg-white/20 p-1 md:p-2 rounded-full mr-2 md:mr-3">
              <FaFlask className="text-sm md:text-lg" />
            </div>
            <div>
              <div className="font-medium text-xs md:text-sm">Advanced Technology</div>
              <div className="text-[10px] md:text-xs text-purple-100">Modern Equipment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;