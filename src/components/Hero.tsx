import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';
import ScrollToSection from './ScrollToSection';
import TrackedSection from './TrackedSection';

const Hero: React.FC = () => {
  return (
    <TrackedSection id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-blue-100 pt-16">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Hexagon className="h-10 w-10 text-primary-600 mr-2" />
              <span className="text-xl font-bold text-primary-800">Rebase IT</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hire top developers from Argentina — fast and flexible
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Rebase IT connects you with high-quality tech talent from Argentina — through flexible recruiting or staffing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollToSection
                targetId="contact"
                className="btn btn-primary text-center"
              >
                Start Hiring
              </ScrollToSection>
              <ScrollToSection
                targetId="contact"
                className="btn btn-secondary text-center"
              >
                Request a Quote
              </ScrollToSection>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:block w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-100 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-100 rounded-full filter blur-3xl opacity-70"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-card overflow-hidden border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Top Talent from Argentina</h3>
                  <p className="text-sm text-gray-600">Ready to join your team</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                      MR
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">Maria Rodriguez</div>
                      <div className="text-sm text-gray-600">Senior React Developer</div>
                      <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <div key={star} className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                    <div className="text-green-600 font-medium">Available</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold">
                      JS
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">Juan Silva</div>
                      <div className="text-sm text-gray-600">Full Stack Engineer</div>
                      <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <div key={star} className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                    <div className="text-green-600 font-medium">Available</div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold">
                      AL
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">Ana Lopez</div>
                      <div className="text-sm text-gray-600">DevOps Specialist</div>
                      <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <div key={star} className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                    <div className="text-orange-600 font-medium">Starting Soon</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-3">500+ verified developers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </TrackedSection>
  );
};

export default Hero;