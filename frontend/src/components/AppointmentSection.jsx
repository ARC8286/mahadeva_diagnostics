import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import {
  FaCalendarAlt, FaCheck, FaArrowRight, FaFlask, FaXRay, FaHeartbeat,
  FaUser, FaBirthdayCake, FaPhone, FaEnvelope, FaMapMarkerAlt, FaVenusMars,
  FaExclamationCircle, FaInfoCircle, FaUpload, FaTimes, FaFileAlt, FaPlus
} from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';

const diagnosticTests = [
  { name: 'Complete Blood Count (CBC)', category: 'Pathology', icon: <FaFlask className="text-purple-500" /> },
  { name: 'Lipid Profile', category: 'Pathology', icon: <FaFlask className="text-purple-500" /> },
  { name: 'Thyroid Function Tests', category: 'Pathology', icon: <FaFlask className="text-purple-500" /> },
  { name: 'Liver Function Tests', category: 'Pathology', icon: <FaFlask className="text-purple-500" /> },
  { name: 'Kidney Function Tests', category: 'Pathology', icon: <FaFlask className="text-purple-500" /> },
  { name: 'Blood Glucose Tests', category: 'Pathology', icon: <FaFlask className="text-purple-500" /> },
  { name: 'HbA1c (Glycated Hemoglobin)', category: 'Pathology', icon: <FaFlask className="text-purple-500" /> },
  { name: 'Digital X-ray', category: 'Radiology', icon: <FaXRay className="text-teal-500" /> },
  { name: 'Portable X-ray', category: 'Radiology', icon: <FaXRay className="text-teal-500" /> },
  { name: 'CT Scan', category: 'Radiology', icon: <FaXRay className="text-teal-500" /> },
  { name: 'MRI', category: 'Radiology', icon: <FaXRay className="text-teal-500" /> },
  { name: 'Mammography', category: 'Radiology', icon: <FaXRay className="text-teal-500" /> },
  { name: 'Sonography', category: 'Radiology', icon: <FaXRay className="text-teal-500" /> },
  { name: 'Dexa Scan', category: 'Radiology', icon: <FaXRay className="text-teal-500" /> },
  { name: 'Ultrasound', category: 'Radiology', icon: <FaXRay className="text-teal-500" /> },
  { name: 'ECG at Home', category: 'Cardiology', icon: <FaHeartbeat className="text-red-500" /> },
  { name: '2D-Echo', category: 'Cardiology', icon: <FaHeartbeat className="text-red-500" /> },
  { name: 'Colour Doppler', category: 'Cardiology', icon: <FaHeartbeat className="text-red-500" /> },
  { name: 'Treadmill Test (TMT)', category: 'Cardiology', icon: <FaHeartbeat className="text-red-500" /> },
  { name: 'Echocardiogram', category: 'Cardiology', icon: <FaHeartbeat className="text-red-500" /> },
  { name: 'Holter Monitoring', category: 'Cardiology', icon: <FaHeartbeat className="text-red-500" /> },
  { name: 'EEG', category: 'Neurology', icon: <MdHealthAndSafety className="text-indigo-500" /> },
  { name: 'Pulmonary Function Test (PFT)', category: 'Pulmonology', icon: <MdHealthAndSafety className="text-indigo-500" /> },
  { name: 'Bone Densitometry', category: 'Orthopedics', icon: <MdHealthAndSafety className="text-indigo-500" /> },
];

const categories = ['All', 'Pathology', 'Radiology', 'Cardiology', 'Other'];

const AppointmentSection = () => {
  const [formData, setFormData] = useState({ 
    name: '', age: '', gender: '', dob: '', 
    contact: '', services: [], address: '', email: '' 
  });
  const [errors, setErrors] = useState({ email: '', contact: '', form: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAllFieldsError, setShowAllFieldsError] = useState(false);
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [usePrescription, setUsePrescription] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (formData.age && !formData.dob) {
      const currentYear = new Date().getFullYear();
      const birthYear = currentYear - parseInt(formData.age);
      setFormData(prev => ({
        ...prev,
        dob: `${birthYear}-01-01`
      }));
    }
  }, [formData.age, formData.dob]);

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  const handleDobChange = (e) => {
    const dobValue = e.target.value;
    if (dobValue) {
      const dobDate = new Date(dobValue);
      const ageDifMs = Date.now() - dobDate.getTime();
      const ageDate = new Date(ageDifMs);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      
      setFormData(prev => ({
        ...prev,
        dob: dobValue,
        age: calculatedAge.toString()
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        dob: '',
        age: ''
      }));
    }
  };

  const filteredTests = activeCategory === 'All' 
    ? diagnosticTests 
    : diagnosticTests.filter(test => test.category === activeCategory);

  const validateEmail = (email) => {
    if (!email) return '';
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) ? '' : 'Please enter a valid email address';
  };

  const validateContact = (contact) => {
    if (!contact) return 'Contact number is required';
    return contact.length === 10 ? '' : 'Please enter a valid 10-digit mobile number';
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, form: 'File size should be less than 5MB' }));
        return;
      }
      setPrescriptionFile(file);
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => setFilePreview(reader.result);
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
      setErrors(prev => ({ ...prev, form: '' }));
    }
  };

  const removePrescription = () => {
    setPrescriptionFile(null);
    setFilePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validateForm = () => {
    const newErrors = {
      email: validateEmail(formData.email),
      contact: validateContact(formData.contact),
      form: ''
    };
    
    if (!formData.name || !formData.age || !formData.gender || !formData.contact || !formData.address) {
      newErrors.form = 'Please fill all required fields marked with *';
      setShowAllFieldsError(true);
    } else if (!usePrescription && formData.services.length === 0) {
      newErrors.form = 'Please select at least one test or upload a prescription';
      setShowAllFieldsError(true);
    } else if (usePrescription && !prescriptionFile) {
      newErrors.form = 'Please upload your prescription or select tests manually';
      setShowAllFieldsError(true);
    } else {
      setShowAllFieldsError(false);
    }
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const formDataToSend = new FormData();
      
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'services') {
          formDataToSend.append(key, usePrescription ? 'Prescription uploaded' : value.join(', '));
        } else {
          formDataToSend.append(key, value || 'Not provided');
        }
      });
      
      formDataToSend.append('usePrescription', usePrescription.toString());
      
      if (usePrescription && prescriptionFile) {
        formDataToSend.append('prescription', prescriptionFile);
      }

      const response = await fetch('https://mahadeva-diagnostics.onrender.com/api/book-appointment', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ 
          name: '', age: '', gender: '', dob: '', 
          contact: '', services: [], address: '', email: '' 
        });
        removePrescription();
        setUsePrescription(false);
      } else {
        throw new Error(result.message || 'Failed to submit appointment');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(prev => ({ 
        ...prev, 
        form: error.message || 'An error occurred. Please try again.' 
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleService = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleContactChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) value = value.substring(0, 10);
    setFormData(prev => ({ ...prev, contact: value }));
  };

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      
      <section id="book" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <SectionTitle 
            title="Book Your Diagnostic Test" 
            subtitle="Schedule your test with our expert healthcare professionals" 
            center 
          />
          
          <motion.form 
            onSubmit={handleAppointmentSubmit}
            className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl border border-blue-100/50 relative overflow-hidden backdrop-blur-sm"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            encType="multipart/form-data"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 -z-10"></div>
            
            <AnimatePresence>
              {submitSuccess && (
                <motion.div 
                  className="fixed inset-0 bg-white/95 flex items-center justify-center z-50 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center max-w-md mx-auto">
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                      initial={{ scale: 0.8, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <FaCheck className="text-white text-3xl" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Appointment Booked Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for booking with us. Our team will contact you shortly to confirm your appointment details.
                    </p>
                    {formData.email && (
                      <p className="text-sm text-gray-500 mb-6">
                        A confirmation has been sent to <span className="font-medium text-indigo-600">{formData.email}</span>
                      </p>
                    )}
                    <motion.button 
                      type="button" 
                      className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                      onClick={() => setSubmitSuccess(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                    <p className="text-xs text-gray-400 mt-4">
                      This message will auto-close in 20 seconds
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {(showAllFieldsError || errors.form) && (
              <motion.div 
                className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 text-red-700 rounded-lg text-sm sm:text-base shadow-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start">
                  <FaExclamationCircle className="mr-2 mt-0.5 flex-shrink-0 text-red-500" />
                  <p>{errors.form || 'Please fill all required fields marked with *'}</p>
                </div>
              </motion.div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10">
              <div className="relative">
                <label className="block text-gray-800 mb-2 text-sm sm:text-base font-medium">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-blue-500 text-sm sm:text-base" />
                  </div>
                  <input 
                    type="text" 
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base text-gray-900 bg-white/80 placeholder-gray-400 shadow-sm"
                    value={formData.name} 
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} 
                    placeholder="John Doe"
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 mb-2 text-sm sm:text-base font-medium">
                  Age / Gender<span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-3 sm:space-x-4">
                  <div className="w-1/3 relative">
                    <input 
                      type="number" 
                      placeholder="Age"
                      min="1"
                      max="120"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base text-gray-900 bg-white/80 placeholder-gray-400 shadow-sm"
                      value={formData.age} 
                      onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))} 
                      required 
                      inputMode="numeric"
                    />
                  </div>
                  <div className="flex-grow relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaVenusMars className="text-blue-500 text-sm sm:text-base" />
                    </div>
                    <select 
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base text-gray-900 bg-white/80 appearance-none shadow-sm"
                      value={formData.gender} 
                      onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))} 
                      required
                    >
                      <option value="" className="text-gray-400">Select Gender</option>
                      <option value="male" className="text-gray-900">Male</option>
                      <option value="female" className="text-gray-900">Female</option>
                      <option value="other" className="text-gray-900">Other</option>
                      <option value="prefer-not-to-say" className="text-gray-900">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-gray-800 mb-2 text-sm sm:text-base font-medium">Date of Birth</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaBirthdayCake className="text-blue-500 text-sm sm:text-base" />
                  </div>
                  <input 
                    type="date" 
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base text-gray-900 bg-white/80 shadow-sm"
                    value={formData.dob} 
                    onChange={handleDobChange}
                    max={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-gray-800 mb-2 text-sm sm:text-base font-medium">
                  Contact Number<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition shadow-sm">
                  <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-r border-gray-200 flex items-center text-sm sm:text-base">
                    <FaPhone className="mr-2" />
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    className="flex-1 px-4 py-3 focus:outline-none text-sm sm:text-base text-gray-900 bg-white/80 placeholder-gray-400"
                    placeholder="9876543210"
                    value={formData.contact}
                    onChange={handleContactChange}
                    maxLength={10}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                  />
                </div>
                {errors.contact && (
                  <div className="mt-2 flex items-center text-red-500 text-xs sm:text-sm">
                    <FaExclamationCircle className="mr-1 flex-shrink-0" />
                    {errors.contact}
                  </div>
                )}
                {formData.contact && formData.contact.length < 10 && (
                  <div className="mt-2 text-xs sm:text-sm text-gray-500 flex items-center">
                    <FaInfoCircle className="mr-1 text-blue-500" />
                    {10 - formData.contact.length} digits remaining
                  </div>
                )}
              </div>

              <div className="relative">
                <label className="block text-gray-800 mb-2 text-sm sm:text-base font-medium">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-blue-500 text-sm sm:text-base" />
                  </div>
                  <input 
                    type="email" 
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base text-gray-900 bg-white/80 placeholder-gray-400 shadow-sm"
                    value={formData.email} 
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, email: e.target.value }));
                      setErrors(prev => ({ ...prev, email: validateEmail(e.target.value) }));
                    }}
                    placeholder="john@example.com"
                    inputMode="email"
                  />
                  {errors.email && (
                    <div className="absolute -bottom-5 left-0 flex items-center text-red-500 text-xs mt-1">
                      <FaExclamationCircle className="mr-1 flex-shrink-0" />
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>

              <div className="md:col-span-2 relative">
                <label className="block text-gray-800 mb-2 text-sm sm:text-base font-medium">
                  Address<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 sm:top-4 text-blue-500 text-sm sm:text-base">
                    <FaMapMarkerAlt />
                  </div>
                  <textarea 
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base text-gray-900 bg-white/80 placeholder-gray-400 shadow-sm" 
                    rows="3" 
                    value={formData.address} 
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))} 
                    placeholder="Enter your full address"
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6 space-y-3 sm:space-y-0 sm:space-x-4">
                <motion.label 
                  className={`inline-flex items-center cursor-pointer px-4 py-2 rounded-lg transition ${
                    !usePrescription 
                      ? 'bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 shadow-sm' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={!usePrescription}
                    onChange={() => setUsePrescription(false)}
                  />
                  <div className="relative w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-2 text-sm font-medium text-gray-800">Select tests manually</span>
                </motion.label>
                <motion.label 
                  className={`inline-flex items-center cursor-pointer px-4 py-2 rounded-lg transition ${
                    usePrescription 
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 shadow-sm' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={usePrescription}
                    onChange={() => setUsePrescription(true)}
                  />
                  <div className="relative w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  <span className="ml-2 text-sm font-medium text-gray-800">Upload prescription</span>
                </motion.label>
              </div>

              {usePrescription ? (
                <motion.div 
                  className="border-2 border-dashed border-blue-200 rounded-2xl p-6 text-center bg-gradient-to-br from-blue-50/50 to-indigo-50/50 relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {prescriptionFile ? (
                    <div className="flex flex-col items-center">
                      {filePreview ? (
                        <div className="mb-4 max-w-xs">
                          <div className="relative group">
                            <img 
                              src={filePreview} 
                              alt="Prescription preview" 
                              className="max-h-40 mx-auto rounded-xl border-2 border-blue-100 shadow-md transition group-hover:shadow-lg" 
                            />
                            <button
                              type="button"
                              onClick={removePrescription}
                              className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full p-1 hover:from-red-600 hover:to-pink-600 transition shadow-lg flex items-center justify-center"
                              aria-label="Remove prescription"
                            >
                              <FaTimes className="text-xs" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-4 p-4 bg-white rounded-xl border border-blue-100 shadow-sm group hover:shadow-md transition">
                          <div className="relative">
                            <FaFileAlt className="text-3xl text-blue-500 mx-auto mb-2 group-hover:text-blue-600 transition" />
                            <p className="text-sm text-gray-800 truncate max-w-xs">{prescriptionFile.name}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex space-x-3">
                        <motion.button
                          type="button"
                          onClick={removePrescription}
                          className="px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 text-red-600 rounded-lg hover:from-red-100 hover:to-pink-100 transition text-sm font-medium shadow-sm"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          Remove
                        </motion.button>
                        <label className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition cursor-pointer text-sm font-medium shadow-sm">
                          Change File
                          <input 
                            type="file" 
                            className="hidden" 
                            onChange={handleFileChange}
                            accept="image/*,.pdf,.doc,.docx"
                            ref={fileInputRef}
                          />
                        </label>
                      </div>
                    </div>
                  ) : (
                    <label className="cursor-pointer">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-white rounded-full flex items-center justify-center mb-4 shadow-inner group hover:shadow-md transition">
                          <FaUpload className="text-3xl text-blue-500 group-hover:text-blue-600 transition" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Upload your prescription</h4>
                        <p className="text-sm text-gray-600 mb-4">Supported formats: JPG, PNG, PDF, DOC (Max 5MB)</p>
                        <motion.div 
                          className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition text-base font-medium shadow-md"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          Select File
                        </motion.div>
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept="image/*,.pdf,.doc,.docx"
                        ref={fileInputRef}
                      />
                    </label>
                  )}
                </motion.div>
              ) : (
                <>
                  <div className="flex flex-wrap gap-3 mb-6 overflow-x-auto pb-3 -mx-2 px-2">
                    {categories.map((category) => (
                      <motion.button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap shadow-sm ${
                          activeCategory === category 
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {category} {category !== 'All' && `(${diagnosticTests.filter(t => t.category === category).length})`}
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[300px] sm:max-h-[400px] overflow-y-auto p-2">
                    {filteredTests.map((test, index) => (
                      <motion.div 
                        key={`${test.name}-${index}`} 
                        whileHover={{ y: -3 }}
                        className="relative"
                        layout
                      >
                        <input 
                          type="checkbox" 
                          id={`service-${test.name}-${index}`} 
                          className="absolute opacity-0 w-0 h-0" 
                          checked={formData.services.includes(test.name)} 
                          onChange={() => toggleService(test.name)} 
                        />
                        <label 
                          htmlFor={`service-${test.name}-${index}`} 
                          className={`p-4 border rounded-xl cursor-pointer transition-all flex items-start group ${
                            formData.services.includes(test.name) 
                              ? 'border-blue-600 bg-gradient-to-br from-blue-50/70 to-indigo-50/70 shadow-inner' 
                              : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50/30 shadow-sm'
                          }`}
                        >
                          <div className="mr-3 mt-0.5">
                            {formData.services.includes(test.name) ? 
                              <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md flex items-center justify-center text-white shadow-sm">
                                <FaCheck className="text-xs" />
                              </div> : 
                              <div className="w-5 h-5 border border-gray-300 rounded-md hover:border-blue-400 group-hover:shadow-sm"></div>
                            }
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <span className="mr-2">{test.icon}</span>
                              <span className="font-medium text-gray-800 text-sm">{test.name}</span>
                            </div>
                            <span className="text-xs text-gray-600 block">{test.category}</span>
                          </div>
                        </label>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <motion.button 
              type="submit" 
              className={`mt-8 px-8 py-4 rounded-xl transition w-full flex items-center justify-center ${
                isSubmitting 
                  ? 'bg-gradient-to-r from-blue-400 to-indigo-400' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
              } text-white font-semibold text-lg shadow-xl hover:shadow-2xl relative overflow-hidden`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              disabled={isSubmitting}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition"></div>
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <FaCalendarAlt className="mr-3 text-xl" />
                  <span>Book Appointment Now</span>
                  <FaArrowRight className="ml-3 text-lg" />
                </>
              )}
            </motion.button>

            <div className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center">
              <MdHealthAndSafety className="mr-2 text-blue-500" />
              <p>Your information is secure and will not be shared with third parties</p>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default AppointmentSection;