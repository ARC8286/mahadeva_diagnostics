import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHome } from 'react-icons/fa';
import { MdOutlineScience, MdMedicalServices, MdHealthAndSafety } from 'react-icons/md';
import { GiMedicalPack, GiMedicinePills, GiHeartBeats, GiDogHouse } from 'react-icons/gi';
import { BiScan } from 'react-icons/bi';
import { RiHeartPulseLine } from 'react-icons/ri';
import SectionTitle from './SectionTitle';

const services = [
  { 
    id: 'home-xray',
    name: 'Home X-ray Services', 
    icon: <FaHome size={24} />, 
    desc: 'Certified home X-ray services with quick digital delivery',
    color: 'from-cyan-500 to-cyan-700'
  },
  { 
    id: 'digital-xray',
    name: 'Digital X-ray', 
    icon: <MdOutlineScience size={24} />, 
    desc: 'High-resolution digital imaging for accurate diagnosis',
    color: 'from-blue-500 to-blue-700'
  },
  { 
    id: 'portable-xray',
    name: 'Portable X-ray', 
    icon: <GiMedicalPack size={24} />, 
    desc: 'Mobile X-ray services for home-bound patients',
    color: 'from-purple-500 to-purple-700'
  },
  { 
    id: 'veterinary-xray',
    name: 'Veterinary X-ray', 
    icon: <GiDogHouse size={24} />, 
    desc: 'Portable X-ray services for pets and animals at your doorstep',
    color: 'from-fuchsia-500 to-fuchsia-700'
  },
  { 
    id: 'ecg-home',
    name: 'ECG at Home', 
    icon: <GiMedicalPack size={24} />, 
    desc: 'Electrocardiogram tests performed at your residence',
    color: 'from-emerald-500 to-emerald-700'
  },
  { 
    id: 'ct-scan',
    name: 'CT Scan', 
    icon: <MdMedicalServices size={24} />, 
    desc: 'Advanced computed tomography scanning',
    color: 'from-rose-500 to-rose-700'
  },
  { 
    id: 'mri',
    name: 'MRI', 
    icon: <MdHealthAndSafety size={24} />, 
    desc: 'Magnetic resonance imaging with latest technology',
    color: 'from-indigo-500 to-indigo-700'
  },
  { 
    id: '2d-echo',
    name: '2D-Echo', 
    icon: <RiHeartPulseLine size={24} />, 
    desc: 'Two-dimensional echocardiography for heart examination',
    color: 'from-red-500 to-red-700'
  },
  { 
    id: 'color-doppler',
    name: 'Colour Doppler', 
    icon: <GiMedicinePills size={24} />, 
    desc: 'Ultrasound imaging for blood flow analysis',
    color: 'from-teal-500 to-teal-700'
  },
  { 
    id: 'sonography',
    name: 'Sonography', 
    icon: <BiScan size={24} />, 
    desc: 'Ultrasound imaging for various diagnostic purposes',
    color: 'from-amber-500 to-amber-700'
  },
  { 
    id: 'dexa-scan',
    name: 'Dexa Scan', 
    icon: <GiHeartBeats size={24} />, 
    desc: 'Bone density scanning for osteoporosis detection',
    color: 'from-green-500 to-green-700'
  },
  { 
    id: 'mammography',
    name: 'Mammography', 
    icon: <GiMedicalPack size={24} />, 
    desc: 'Breast imaging for early cancer detection',
    color: 'from-pink-500 to-pink-700'
  }
];

const ServicesSection = () => {
  const handleBookNow = (serviceName) => {
    try {
      sessionStorage.setItem('selectedService', serviceName);
      const bookingSection = document.getElementById('book');
      if (bookingSection) {
        bookingSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        window.history.pushState(null, '', '#book');
        
        setTimeout(() => {
          const serviceField = document.querySelector(
            'input[name="service"], input[name="service-name"], #service, #service-name'
          );
          if (serviceField) {
            serviceField.value = serviceName;
            serviceField.focus();
            const event = new Event('change', { bubbles: true });
            serviceField.dispatchEvent(event);
          }
        }, 700);
      }
    } catch (error) {
      console.error('Booking error:', error);
      window.location.hash = '#book';
    }
  };

  return (
    <section 
      id="services" 
      className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white w-full"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Our Imaging Services"
          subtitle="Advanced radiology services with precision and care"
          center={true}
        />

        <div className="w-full overflow-hidden">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  when: "beforeChildren"
                }
              }
            }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 w-full max-w-xs flex flex-col items-center text-center"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.color}`} />
                
                <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} mb-5 text-white`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-5 flex-grow">
                  {service.desc}
                </p>
                
                <button
                  onClick={() => handleBookNow(service.name)}
                  className="text-sm font-medium flex items-center group mt-auto"
                  aria-label={`Book ${service.name}`}
                >
                  <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    Book Now
                  </span>
                  <FaArrowRight 
                    className={`ml-2 transition-transform group-hover:translate-x-1 ${service.color.replace('bg-gradient-to-r', 'text')}`} 
                    size={14}
                  />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;