import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import SectionTitle from './SectionTitle';

const ContactSection = () => {
    const contactInfo = [
        {
            icon: <FaPhone className="text-indigo-600 text-xl" />,
            title: "Phone",
            details: [
                { text: "+91 82912 15999", link: "tel:+918291215999", icon: <IoMdCall className="text-green-600 mr-1" /> },
                { text: "+91 98765 43211 (Emergency)", link: "tel:+919876543211", icon: <IoMdCall className="text-red-500 mr-1" /> },
                { text: "Chat on WhatsApp", link: "https://wa.me/918291215999", icon: <FaWhatsapp className="text-green-500 mr-1" /> }
            ],
            bgColor: "bg-indigo-50",
            iconBg: "bg-indigo-100"
        },
        {
            icon: <MdEmail className="text-purple-600 text-2xl" />,
            title: "Email",
            details: [
                { text: "mahadevadiagnostics1@gmail.com", link: "mailto:mahadevadiagnostics1@gmail.com" },
                { text: "support@mahadevadiagnostics.com", link: "mailto:support@mahadevadiagnostics.com" }
            ],
            bgColor: "bg-purple-50",
            iconBg: "bg-purple-100"
        },
        {
            icon: <FaMapMarkerAlt className="text-amber-600 text-xl" />,
            title: "Location",
            details: [
                "Flat No. 304, Devangi Apartment",
                "Behind Vishnu Vihar, Kargil Nagar",
                "Manvel Pada Road, Virar East",
                "Palghar, Maharashtra - 401303"
            ],
            bgColor: "bg-amber-50",
            iconBg: "bg-amber-100"
        }
    ];

    const workingHours = [
        { day: "Monday - Friday", time: "7:00 AM - 9:00 PM", icon: <FaCalendarAlt className="text-blue-500 mr-2" /> },
        { day: "Saturday", time: "8:00 AM - 8:00 PM", icon: <FaCalendarAlt className="text-blue-500 mr-2" /> },
        { day: "Sunday", time: "9:00 AM - 2:00 PM", icon: <FaCalendarAlt className="text-blue-500 mr-2" /> }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5
            }
        },
        hover: {
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        },
        tap: {
            scale: 0.97
        }
    };

    const renderDetail = (detail) => {
        if (typeof detail === 'string') {
            return <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{detail}</p>;
        }
        
        return (
            <a 
                href={detail.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center text-sm sm:text-base ${
                    detail.text.includes('Emergency') 
                        ? 'text-red-600 font-medium' 
                        : detail.text.includes('WhatsApp') 
                            ? 'text-green-600 font-medium'
                            : 'text-gray-700 hover:text-indigo-600'
                } transition-colors duration-200 py-1`}
                onClick={(e) => e.stopPropagation()}
            >
                {detail.icon && detail.icon}
                {detail.text}
            </a>
        );
    };

    return (
        <section id="contact" className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto max-w-6xl">
                <SectionTitle 
                    title="Contact Us" 
                    subtitle="Get in touch with our diagnostic center" 
                    className="mb-10 md:mb-14 text-center"
                />
                
                <motion.div 
                    className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                    {/* Contact Information */}
                    <div className="lg:w-1/2 space-y-6 md:space-y-8">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`${item.bgColor} p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-opacity-10 border-gray-300`}
                                variants={itemVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <div className="flex items-start">
                                    <div className={`${item.iconBg} p-3 rounded-xl mr-4 flex-shrink-0`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{item.title}</h3>
                                        <div className="space-y-2">
                                            {item.details.map((detail, i) => (
                                                <div key={i} className="hover:underline transition-colors">
                                                    {renderDetail(detail)}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Working Hours */}
                        <motion.div 
                            className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-opacity-10 border-gray-300"
                            variants={itemVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <div className="flex items-center mb-4 sm:mb-5">
                                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                                    <FaClock className="text-blue-600 text-xl sm:text-2xl" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Working Hours</h3>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                {workingHours.map((item, index) => (
                                    <div 
                                        key={index}
                                        className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-2 px-1 rounded-lg ${
                                            index % 2 === 0 ? 'bg-blue-50' : 'bg-white'
                                        } ${index < workingHours.length - 1 ? 'mb-2' : ''}`}
                                    >
                                        <div className="flex items-center text-gray-700 mb-1 sm:mb-0">
                                            {item.icon}
                                            <span className="text-sm sm:text-base font-medium">{item.day}</span>
                                        </div>
                                        <span className="font-semibold text-gray-800 text-sm sm:text-base bg-blue-100 px-3 py-1 rounded-full">
                                            {item.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Map with updated address */}
                    <motion.div 
                        className="lg:w-1/2 h-80 sm:h-96 md:h-[32rem] lg:h-[36rem] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                        variants={itemVariants}
                        whileTap="tap"
                    >
                        <iframe 
                            src="https://maps.google.com/maps?q=Flat+No.+304,+Devangi+Apartment+Behind+Vishnu+Vihar,+Kargil+Nagar+Manvel+Pada+Road,+Virar+East+Palghar,+Maharashtra+-+401303&output=embed" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            title="Mahadeva Diagnostics Location"
                            className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
                            aria-label="Location map of Mahadeva Diagnostics"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </motion.div>

                {/* Quick Contact CTA for Mobile */}
                <div className="lg:hidden mt-10 grid grid-cols-2 gap-4">
                    <a 
                        href="tel:+918291215999" 
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                        <IoMdCall className="mr-2 text-xl" />
                        Call Now
                    </a>
                    <a 
                        href="https://wa.me/918291215999" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                        <FaWhatsapp className="mr-2 text-xl" />
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;