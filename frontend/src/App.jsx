// src/App.jsx - VERIFIED
import React from 'react';

// Check every line here carefully!
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import StatsSection from './components/StatsSection.jsx';
import AboutUs from './components/AboutUs.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import TestsSection from './components/TestsSection.jsx';
import AppointmentSection from './components/AppointmentSection.jsx';
import CallbackSection from './components/CallbackSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutUs />
        <ServicesSection />
        <TestsSection />
        <AppointmentSection />
        <CallbackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;