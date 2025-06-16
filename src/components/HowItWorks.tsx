import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Users, Check } from 'lucide-react';
import TrackedSection from './TrackedSection';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary-500" />,
      title: "Tell us what you need",
      description: "Share the role and ideal candidate profile."
    },
    {
      icon: <Search className="h-10 w-10 text-primary-500" />,
      title: "We screen & interview",
      description: "We handle sourcing, pre-screening, and technical interviews."
    },
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      title: "You interview & select",
      description: "You only meet pre-vetted candidates."
    },
    {
      icon: <Check className="h-10 w-10 text-primary-500" />,
      title: "Hire or staff",
      description: "Choose to hire directly or work with them via Rebase IT."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <TrackedSection id="how-it-works" className="bg-white">
      <div className="container-section">
        <h2 className="section-heading">How our hiring process works</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative bg-white p-8 rounded-xl shadow-card border border-gray-100"
              variants={itemVariants}
            >
              <div className="absolute -top-5 left-8 w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full">
                <span className="text-primary-700 font-semibold">{index + 1}</span>
              </div>
              <div className="mb-5 mt-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </TrackedSection>
  );
};

export default HowItWorks;