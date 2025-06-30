import React from 'react';
import { 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaClinicMedical,
  FaUserMd,
  FaHome,
  FaFlask,
  FaCalendarAlt,
  FaEnvelope,
  FaXRay,
  FaHeartbeat,
  FaProcedures
} from 'react-icons/fa';
import { MdEmail, MdMedicalServices } from 'react-icons/md';
import MahadevLogo from '../assets/Mahadev.jpeg';

const Footer = () => {
  // Updated contact info with clickable links
  const contactInfo = {
    address: "Shop No. 5, Sai Darshan CHS, S.V. Road, Borivali West, Mumbai - 400092",
    phones: [
      { number: "+91 98765 43210", label: "Primary" },
      { number: "+91 98765 43211", label: "Emergency" }
    ],
    emails: [
      { address: "info@mahadevadiagnostics.com", label: "General Inquiry" },
      { address: "support@mahadevadiagnostics.com", label: "Customer Support" }
    ]
  };

  const quickLinks = [
    { name: 'Home', icon: <FaHome size={14} />, href: '#home' },
    { name: 'About', icon: <FaUserMd size={14} />, href: '#about' },
    { name: 'Services', icon: <FaClinicMedical size={14} />, href: '#services' },
    { name: 'Tests', icon: <FaFlask size={14} />, href: '#tests' },
    { name: 'Book', icon: <FaCalendarAlt size={14} />, href: '#booking' },
    { name: 'Contact', icon: <FaEnvelope size={14} />, href: '#contact' }
  ];

  const services = [
    { name: 'Digital X-ray', icon: <FaXRay size={14} /> },
    { name: 'Portable X-ray', icon: <FaXRay size={14} /> },
    { name: 'ECG at Home', icon: <FaHeartbeat size={14} /> },
    { name: 'CT Scan', icon: <FaProcedures size={14} /> },
    { name: 'MRI', icon: <FaProcedures size={14} /> },
    { name: 'Ultrasound', icon: <MdMedicalServices size={14} /> }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF size={16} />, href: '#' },
    { name: 'Twitter', icon: <FaTwitter size={16} />, href: '#' },
    { name: 'Instagram', icon: <FaInstagram size={16} />, href: '#' },
    { name: 'LinkedIn', icon: <FaLinkedinIn size={16} />, href: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Sitemap', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 w-full">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand Info - Kept your original logo and name */}
          <div className="mb-8">
            <div className="flex items-center mb-4 md:mb-5">
              <img 
                src={MahadevLogo} 
                alt="Mahadeva X-Ray & Diagnostics Logo"
                className="w-12 h-12 rounded-full mr-3 object-cover border-2 border-blue-400"
                loading="lazy"
              />
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Mahadeva <span className="text-white block md:inline">X-RAY & DIAGNOSTICS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-5 md:mb-6 text-sm md:text-base leading-relaxed">
              Advanced diagnostic imaging and laboratory services with precision and care. 
              Serving the community with cutting-edge technology and compassionate service.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-all transform hover:-translate-y-1 p-2 rounded-full bg-gray-700 hover:bg-gray-600"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-5 pb-2 border-b border-gray-700 flex items-center">
              <FaArrowRight className="mr-2 text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-all flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                    <span className="mr-2">{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-5 pb-2 border-b border-gray-700 flex items-center">
              <FaClinicMedical className="mr-2 text-blue-400" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-blue-400 transition-all flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                    <span className="mr-2">{service.icon}</span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Updated with clickable links */}
          <div className="mb-8">
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-5 pb-2 border-b border-gray-700 flex items-center">
              <FaEnvelope className="mr-2 text-blue-400" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-500/10 p-2 rounded-full mr-3">
                  <FaMapMarkerAlt className="text-blue-400" />
                </div>
                <div>
                  <h5 className="font-medium text-white">Our Location</h5>
                  <p className="text-gray-400 text-sm">{contactInfo.address}</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500/10 p-2 rounded-full mr-3">
                  <FaPhone className="text-blue-400" />
                </div>
                <div>
                  <h5 className="font-medium text-white">Phone Numbers</h5>
                  {contactInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.number.replace(/\s+/g, '')}`}
                      className="block text-gray-400 hover:text-blue-400 text-sm py-1 transition-all"
                    >
                      {phone.number} <span className="text-xs text-blue-400">({phone.label})</span>
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500/10 p-2 rounded-full mr-3">
                  <MdEmail className="text-blue-400" size={18} />
                </div>
                <div>
                  <h5 className="font-medium text-white">Email Address</h5>
                  {contactInfo.emails.map((email, index) => (
                    <a
                      key={index}
                      href={`mailto:${email.address}`}
                      className="block text-gray-400 hover:text-blue-400 text-sm py-1 transition-all break-all"
                    >
                      {email.address} <span className="text-xs text-blue-400">({email.label})</span>
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 md:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} Mahadeva X-Ray and Diagnostics Centre. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {legalLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-500 hover:text-white text-xs md:text-sm transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;