import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserSearch, Users, X, Check } from 'lucide-react';
import ScrollToSection from './ScrollToSection';

interface ServiceModalData {
  title: string;
  description: string;
  keyBenefits: string[];
  whoIsItFor: string[];
  color: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceModalData | null>(null);

  const services = [
    {
      icon: <UserSearch className="h-12 w-12 text-primary-500 mb-4" />,
      title: "Recruiting",
      benefits: [
        "Direct hires for your internal team.",
        "Access to top-tier, pre-screened candidates.",
        "Onboarding support included."
      ],
      color: "blue",
      modalData: {
        title: "Recruiting Services",
        description: "Our recruiting service helps you find and hire top-tier developers directly for your internal team. We handle the entire recruitment process from sourcing to final selection, ensuring you get the best talent for your specific needs.",
        keyBenefits: [
          "Access to our network of 500+ pre-vetted developers.",
          "Comprehensive technical and cultural fit screening.",
          "Dedicated recruitment specialist assigned to your search.",
          "Average time-to-hire of 2-3 weeks.",
          "30-day replacement guarantee.",
          "Onboarding support and integration assistance.",
          "Competitive rates with transparent pricing."
        ],
        whoIsItFor: [
          "Companies looking to expand their permanent team.",
          "Startups scaling their technical workforce.",
          "Organizations needing specialized technical skills.",
          "Businesses wanting full control over their hires.",
          "Companies with long-term project requirements.",
          "Teams looking for cultural fit and long-term commitment."
        ],
        color: "blue"
      }
    },
    {
      icon: <Users className="h-12 w-12 text-secondary-500 mb-4" />,
      title: "Staffing",
      benefits: [
        "Contract developers via Rebase IT.",
        "Fast, flexible team scaling.",
        "We manage payroll, HR, and admin."
      ],
      color: "purple",
      modalData: {
        title: "Staffing Solutions",
        description: "Our staffing solution provides you with skilled developers who work as an extension of your team while remaining employed by Rebase IT. This flexible approach allows for rapid scaling and reduced administrative overhead.",
        keyBenefits: [
          "Immediate access to available talent.",
          "Flexible contract terms (short-term to long-term).",
          "No HR overhead - we handle payroll, benefits, and admin.",
          "Easy scaling up or down based on project needs.",
          "Dedicated project management support.",
          "Quality assurance and performance monitoring.",
          "Seamless integration with your existing workflows."
        ],
        whoIsItFor: [
          "Companies with fluctuating project demands.",
          "Businesses needing quick team augmentation.",
          "Organizations wanting to test talent before hiring.",
          "Startups with limited HR infrastructure.",
          "Companies working on specific project timelines.",
          "Teams needing specialized skills for short periods."
        ],
        color: "purple"
      }
    }
  ];

  const openModal = (modalData: ServiceModalData) => {
    setSelectedService(modalData);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <section id="services" className="bg-gray-50">
        <div className="container-section">
          <h2 className="section-heading">Flexible hiring options</h2>
          <p className="section-subheading">
            Choose the hiring model that works best for your business needs and objectives.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-card border-t-4 ${
                  service.color === 'blue' ? 'border-primary-500' : 'border-secondary-500'
                } transition-all duration-300 hover:shadow-card-hover cursor-pointer`}
                variants={itemVariants}
                onClick={() => openModal(service.modalData)}
              >
                <div className={`p-8 ${
                  service.color === 'blue' ? 'bg-primary-50' : 'bg-secondary-50'
                }`}>
                  {service.icon}
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg 
                          className={`h-6 w-6 ${
                            service.color === 'blue' ? 'text-primary-500' : 'text-secondary-500'
                          } mr-3 flex-shrink-0 mt-0.5`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-center">
                    <span className={`text-sm font-medium ${
                      service.color === 'blue' ? 'text-primary-600' : 'text-secondary-600'
                    }`}>
                      Click to learn more →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`p-6 ${
                selectedService.color === 'blue' ? 'bg-primary-600' : 'bg-secondary-600'
              } text-white relative`}>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
                <h3 className="text-2xl font-bold mb-2">{selectedService.title}</h3>
                <p className="text-lg opacity-90">{selectedService.description}</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Key Benefits */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">Key Benefits</h4>
                  <ul className="space-y-3">
                    {selectedService.keyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className={`h-5 w-5 ${
                          selectedService.color === 'blue' ? 'text-primary-500' : 'text-secondary-500'
                        } mr-3 flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who is it for */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">Who is it for?</h4>
                  <ul className="space-y-3">
                    {selectedService.whoIsItFor.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`h-2 w-2 rounded-full ${
                          selectedService.color === 'blue' ? 'bg-primary-500' : 'bg-secondary-500'
                        } mr-3 mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <ScrollToSection
                    targetId="contact"
                    onClick={closeModal}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      selectedService.color === 'blue'
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-secondary-600 hover:bg-secondary-700 text-white'
                    } cursor-pointer text-center block`}
                  >
                    Get Started with {selectedService.title}
                  </ScrollToSection>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;