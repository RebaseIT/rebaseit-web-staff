import React from 'react';
import { Hexagon, Linkedin, Mail } from 'lucide-react';
import ScrollToSection from './ScrollToSection';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'How It Works', to: 'how-it-works' },
    { name: 'Services', to: 'services' },
    { name: 'Roles', to: 'roles' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Hexagon className="h-8 w-8 text-primary-400" />
              <a 
                href="https://rebaseit.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 text-xl font-bold text-white hover:text-primary-400 transition-colors duration-200"
              >
                Rebase IT
              </a>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting businesses with top tech talent from Argentina through flexible recruiting and staffing solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:sales@rebaseit.tech" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <ScrollToSection
                    targetId={link.to}
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </ScrollToSection>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <ScrollToSection
                  targetId="services"
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Recruiting
                </ScrollToSection>
              </li>
              <li>
                <ScrollToSection
                  targetId="services"
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Staffing
                </ScrollToSection>
              </li>
              <li>
                <ScrollToSection
                  targetId="roles"
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Tech Talent
                </ScrollToSection>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              <a href="mailto:sales@rebaseit.tech" className="hover:text-white transition-colors duration-200">
                sales@rebaseit.tech
              </a>
            </p>
            <ScrollToSection
              targetId="contact"
              className="btn btn-primary inline-block mt-4 cursor-pointer"
            >
              Get Started
            </ScrollToSection>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Rebase IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;