import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Roles from './components/Roles';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [selectedRole, setSelectedRole] = useState<string>('');

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const HomePage = () => (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Roles onRoleSelect={handleRoleSelect} />
        <Testimonials />
        <ContactForm prefilledRole={selectedRole} />
      </main>
      <Footer />
    </>
  );
  return (
    <Router>
      <div className="font-['Inter',sans-serif]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;