import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Mail, Hexagon } from 'lucide-react';
import ScrollToSection from './ScrollToSection';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-4">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 border border-gray-100">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6"
          >
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We've received your request and our team will be contacting you within the next 72 hours.
            </p>
          </motion.div>

          {/* What happens next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 rounded-xl p-6 mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">What happens next?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-700 font-semibold text-sm">1</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">Review & Analysis</p>
                  <p className="text-sm text-gray-600">We'll analyze your requirements and identify the best talent matches.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-700 font-semibold text-sm">2</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">Initial Contact</p>
                  <p className="text-sm text-gray-600">Our team will reach out within 72 hours to discuss your project in detail.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-700 font-semibold text-sm">3</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">Candidate Presentation</p>
                  <p className="text-sm text-gray-600">We'll present you with pre-vetted candidates that match your requirements.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="border-t border-gray-200 pt-6"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary-600" />
              <span className="text-gray-700">Expected response time: Within 72 hours</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mail className="h-5 w-5 text-primary-600" />
              <span className="text-gray-700">Questions? Contact us at </span>
              <a 
                href="mailto:sales@rebaseit.tech" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                sales@rebaseit.tech
              </a>
            </div>

            {/* Back to home button */}
            <button
              onClick={() => window.location.href = '/'}
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Hexagon className="h-5 w-5" />
              Back to Rebase IT
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;