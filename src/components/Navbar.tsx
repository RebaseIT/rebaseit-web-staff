import React, { useState, useEffect } from 'react';
import { Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollToSection from './ScrollToSection';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'How It Works', to: 'how-it-works' },
    { name: 'Services', to: 'services' },
    { name: 'Roles', to: 'roles' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <ScrollToSection
            targetId="hero"
            className="flex items-center cursor-pointer"
          >
            <Hexagon className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-primary-800">Rebase IT</span>
          </ScrollToSection>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <ScrollToSection
                key={link.to}
                targetId={link.to}
                className={`cursor-pointer transition-all duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-800 hover:text-primary-500'
                }`}
              >
                {link.name}
              </ScrollToSection>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <ScrollToSection
              targetId="contact"
              className="btn btn-primary"
            >
              Start Hiring
            </ScrollToSection>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
          >
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map(link => (
                <ScrollToSection
                  key={link.to}
                  targetId={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-primary-600 py-2 text-left"
                >
                  {link.name}
                </ScrollToSection>
              ))}
              <ScrollToSection
                targetId="contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary text-center"
              >
                Start Hiring
              </ScrollToSection>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;