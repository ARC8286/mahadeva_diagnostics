import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaFlask, FaXRay, FaHeartbeat, FaClinicMedical, FaSearch } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

// Color themes for different categories
const categoryColors = {
  Pathology: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-800',
    icon: 'text-blue-500',
    button: 'bg-blue-600 hover:bg-blue-700',
    gradient: 'from-blue-100 to-blue-50',
  },
  Radiology: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-800',
    icon: 'text-purple-500',
    button: 'bg-purple-600 hover:bg-purple-700',
    gradient: 'from-purple-100 to-purple-50',
  },
  Cardiology: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-800',
    icon: 'text-red-500',
    button: 'bg-red-600 hover:bg-red-700',
    gradient: 'from-red-100 to-red-50',
  },
  Other: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-800',
    icon: 'text-green-500',
    button: 'bg-green-600 hover:bg-green-700',
    gradient: 'from-green-100 to-green-50',
  },
  all: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-800',
    icon: 'text-indigo-500',
    button: 'bg-indigo-600 hover:bg-indigo-700',
    gradient: 'from-indigo-100 to-indigo-50',
  },
};

// Define test data with unique IDs
const diagnosticTests = [
  // Pathology Tests (Blood Tests)
  { id: 'cbc', name: 'Complete Blood Count (CBC)', category: 'Pathology' },
  { id: 'lipid', name: 'Lipid Profile', category: 'Pathology' },
  { id: 'thyroid', name: 'Thyroid Function Tests', category: 'Pathology' },
  { id: 'liver', name: 'Liver Function Tests', category: 'Pathology' },
  { id: 'kidney', name: 'Kidney Function Tests', category: 'Pathology' },
  { id: 'glucose', name: 'Blood Glucose Tests', category: 'Pathology' },
  { id: 'hba1c', name: 'HbA1c (Glycated Hemoglobin)', category: 'Pathology' },
  { id: 'vitamin-d', name: 'Vitamin D Test', category: 'Pathology' },
  { id: 'iron', name: 'Iron Studies', category: 'Pathology' },
  { id: 'hiv', name: 'HIV Screening', category: 'Pathology' },
  { id: 'hepatitis', name: 'Hepatitis Panel', category: 'Pathology' },
  { id: 'coagulation', name: 'Coagulation Profile', category: 'Pathology' },
  { id: 'electrolytes', name: 'Electrolytes Test', category: 'Pathology' },
  { id: 'crp', name: 'CRP (C-Reactive Protein)', category: 'Pathology' },
  
  // Radiology Tests
  { id: 'digital-xray', name: 'Digital X-ray', category: 'Radiology' },
  { id: 'portable-xray', name: 'Portable X-ray', category: 'Radiology' },
  { id: 'ct-scan', name: 'CT Scan', category: 'Radiology' },
  { id: 'mri', name: 'MRI', category: 'Radiology' },
  { id: 'mammography', name: 'Mammography', category: 'Radiology' },
  { id: 'sonography', name: 'Sonography', category: 'Radiology' },
  { id: 'dexa-scan', name: 'Dexa Scan', category: 'Radiology' },
  { id: 'ultrasound', name: 'Ultrasound', category: 'Radiology' },
  
  // Cardiology Tests
  { id: 'ecg', name: 'ECG at Home', category: 'Cardiology' },
  { id: '2d-echo', name: '2D-Echo', category: 'Cardiology' },
  { id: 'color-doppler', name: 'Colour Doppler', category: 'Cardiology' },
  { id: 'tmt', name: 'Treadmill Test (TMT)', category: 'Cardiology' },
  { id: 'echocardiogram', name: 'Echocardiogram', category: 'Cardiology' },
  { id: 'holter', name: 'Holter Monitoring', category: 'Cardiology' },
  
  // Other Tests
  { id: 'eeg', name: 'EEG', category: 'Neurology' },
  { id: 'pft', name: 'Pulmonary Function Test (PFT)', category: 'Pulmonology' },
  { id: 'bone-density', name: 'Bone Densitometry', category: 'Orthopedics' },
];

// Define category icons
const categoryIcons = {
  'Pathology': <FaFlask size={18} />,
  'Radiology': <FaXRay size={18} />,
  'Cardiology': <FaHeartbeat size={18} />,
  'Other': <FaClinicMedical size={18} />,
  'all': <FaSearch size={18} />,
};

const TestsSection = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const categories = React.useMemo(() => [
    { 
      id: 'all',
      name: 'All Tests', 
      tests: diagnosticTests,
      icon: categoryIcons['all']
    },
    { 
      id: 'pathology',
      name: 'Pathology', 
      tests: diagnosticTests.filter(test => test.category === 'Pathology'),
      icon: categoryIcons['Pathology']
    },
    { 
      id: 'radiology',
      name: 'Radiology', 
      tests: diagnosticTests.filter(test => test.category === 'Radiology'),
      icon: categoryIcons['Radiology']
    },
    { 
      id: 'cardiology',
      name: 'Cardiology', 
      tests: diagnosticTests.filter(test => test.category === 'Cardiology'),
      icon: categoryIcons['Cardiology']
    },
    { 
      id: 'other',
      name: 'Other', 
      tests: diagnosticTests.filter(test => !['Pathology', 'Radiology', 'Cardiology'].includes(test.category)),
      icon: categoryIcons['Other']
    },
  ], []);

  const filteredTests = React.useMemo(() => {
    const selectedCategory = categories.find(cat => cat.id === activeCategory);
    const testsToFilter = selectedCategory ? selectedCategory.tests : diagnosticTests;
    
    return testsToFilter.filter(test => 
      test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, activeCategory, categories]);

  const handleBookTest = (testName) => {
    sessionStorage.setItem('selectedTest', testName);
    const bookingSection = document.getElementById('book');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const serviceInput = document.getElementById('service-input');
        if (serviceInput) {
          serviceInput.value = testName;
        }
      }, 500);
    }
  };

  return (
    <section 
      id="tests" 
      className="py-12 md:py-16 px-4 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
      aria-labelledby="tests-section-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Comprehensive Diagnostic Tests"
          subtitle="Accurate and timely diagnostics for better health outcomes"
          center
        />
        
        {/* Search and Filter Section */}
        <div className="mt-8 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for tests..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search diagnostic tests"
            />
          </motion.div>
          
          {/* Category Filter Chips - Now wrapped */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => {
              const colors = categoryColors[category.id === 'all' ? 'all' : category.name] || categoryColors.Other;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category.id 
                      ? `${colors.button} text-white shadow-md`
                      : `${colors.bg} ${colors.text} border ${colors.border} hover:bg-opacity-80 shadow-sm`
                  }`}
                  aria-label={`Filter by ${category.name}`}
                >
                  <span className={`mr-2 ${activeCategory === category.id ? 'text-white' : colors.icon}`}>
                    {category.icon}
                  </span>
                  {category.name}
                  {category.id !== 'all' && (
                    <span className={`ml-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${
                      activeCategory === category.id 
                        ? 'bg-white bg-opacity-20' 
                        : `${colors.bg.replace('50', '100')} ${colors.text}`
                    }`}>
                      {category.tests.length}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
        
        {/* Test Results */}
        <div className="mt-6 md:mt-8">
          {filteredTests.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-lg font-medium text-gray-700">No tests found</h3>
              <p className="mt-2 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredTests.map((test) => {
                const colors = categoryColors[test.category] || categoryColors.Other;
                return (
                  <motion.div
                    key={test.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    className={`bg-white rounded-xl shadow-sm border ${colors.border} overflow-hidden hover:shadow-md transition-all duration-200`}
                    aria-labelledby={`test-${test.id}-heading`}
                  >
                    <div className={`p-4 md:p-5 bg-gradient-to-r ${colors.gradient}`}>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 
                            id={`test-${test.id}-heading`}
                            className="text-base md:text-lg font-semibold text-gray-800"
                          >
                            {test.name}
                          </h3>
                          <p className={`mt-1 text-xs md:text-sm ${colors.text} flex items-center`}>
                            <span className={`mr-2 ${colors.icon}`}>
                              {categoryIcons[test.category] || categoryIcons['Other']}
                            </span>
                            {test.category}
                          </p>
                        </div>
                        <button
                          onClick={() => handleBookTest(test.name)}
                          className={`ml-4 flex-shrink-0 ${colors.icon} hover:${colors.text} flex items-center justify-center p-2 rounded-full ${colors.bg} hover:bg-opacity-70 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:${colors.icon.replace('text', 'ring')}`}
                          aria-label={`Book ${test.name} test`}
                        >
                          <FaArrowRight className="text-xs md:text-sm" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-5 bg-white">
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => handleBookTest(test.name)}
                          className={`inline-flex items-center px-3 py-1.5 border border-transparent text-xs md:text-sm font-medium rounded-md shadow-sm text-black ${colors.button} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:${colors.icon.replace('text', 'ring')}`}
                        >
                          Book Now
                        </button>
                        <span className="text-xs md:text-sm text-gray-500">
                          Results in 12-24h
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
        
        {/* CTA Section */}
        <div className="mt-10 md:mt-12 text-center">
          <motion.button
            onClick={() => {
              const bookingSection = document.getElementById('book');
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Book a test now"
          >
            Book a Test Now
            <FaArrowRight className="ml-2 -mr-1" />
          </motion.button>
          
          <p className="mt-4 text-sm text-gray-500">
            Can't find what you're looking for? <a href="#contact" className="text-blue-600 hover:text-blue-700 hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestsSection;