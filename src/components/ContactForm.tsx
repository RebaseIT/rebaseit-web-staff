import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { ReactTyped } from 'react-typed';
import { useNavigate } from 'react-router-dom';
import TrackedSection from './TrackedSection';

interface ContactFormProps {
  prefilledRole?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ prefilledRole }) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    roleNeeded: prefilledRole || '',
    timeline: '',
    notes: ''
  });

  // Update form when prefilledRole changes
  React.useEffect(() => {
    if (prefilledRole) {
      setFormData(prevState => ({
        ...prevState,
        roleNeeded: prefilledRole
      }));
    }
  }, [prefilledRole]);
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Replace this with actual API call
      console.log('Form data:', formData);
      
      // Email service
      const emailData = {
        from_name: formData.fullName,
        email: formData.email,
        subject: 'Staff Augmentation Request ' + formData.companyName,
        'Company Name': formData.companyName,
        'Role needed': formData.roleNeeded,
        'Recruitment timeline': formData.timeline,
        'Notes': formData.notes
      }
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...emailData, access_key: import.meta.env.VITE_WEB3FORMS_KEY}),
      });
      
      // Redirect to thank you page on success
      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (you can add error state here later)
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const generateProjectDescription = () => {
    setIsGenerating(true);
    
    // Array of 10 different project descriptions
    const projectDescriptions = [
      "We're building a B2B SaaS platform and need 2 full stack developers and 1 DevOps engineer to join our team for a 3–6 month contract. Stack: React, Node.js, AWS.",
      "Our fintech startup is looking for 3 senior frontend developers to build a modern trading dashboard. We need expertise in React, TypeScript, and real-time data visualization.",
      "E-commerce platform expansion requires 2 backend engineers and 1 mobile developer. Project duration: 4-5 months. Tech stack: Python, Django, React Native, PostgreSQL.",
      "Healthcare app development needs 1 full stack developer and 1 UI/UX designer for a 6-month project. Focus on HIPAA compliance and user experience. Stack: Vue.js, Express, MongoDB.",
      "AI-powered analytics tool requires 2 machine learning engineers and 1 data engineer. 8-month project with potential for extension. Technologies: Python, TensorFlow, Apache Spark.",
      "Gaming platform seeking 3 backend developers and 1 DevOps specialist for multiplayer infrastructure. Real-time gaming experience focus. Stack: Node.js, Socket.io, Redis, Kubernetes.",
      "EdTech platform needs 2 full stack developers for interactive learning modules. 5-month timeline with modern web technologies. Stack: React, GraphQL, Prisma, Next.js.",
      "IoT dashboard development requires 1 frontend specialist and 2 backend engineers. Focus on real-time data processing and visualization. Stack: Angular, .NET Core, InfluxDB.",
      "Blockchain project looking for 2 smart contract developers and 1 frontend engineer. DeFi application with 6-month development cycle. Stack: Solidity, Web3.js, React.",
      "Social media platform expansion needs 3 full stack developers and 1 mobile engineer. Scalability and performance focus. Stack: React, Node.js, Flutter, PostgreSQL, Redis."
    ];
    
    // Randomly select one description
    const randomDescription = projectDescriptions[Math.floor(Math.random() * projectDescriptions.length)];
    
    // Store the selected description for the typing animation
    setSelectedDescription(randomDescription);
  };
  
  const [selectedDescription, setSelectedDescription] = useState('');

  return (
    <TrackedSection id="contact" className="bg-white">
      <div className="container-section">
        <h2 className="section-heading" id="contact">Let's get started</h2>
        <p className="section-subheading">
          Fill out the form below to tell us about your hiring needs. We'll get back to you within 24 hours.
        </p>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-primary-600 p-6 text-white">
            <h3 className="text-xl font-semibold">Tell us about your project</h3>
            <p className="text-primary-100">We'll find the perfect talent match for your needs</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name*
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                  placeholder="Acme Inc."
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="roleNeeded" className="block text-sm font-medium text-gray-700 mb-1">
                Role or Talent Needed*
              </label>
              <input
                type="text"
                id="roleNeeded"
                name="roleNeeded"
                value={formData.roleNeeded}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="e.g. Frontend Developer, Full Stack Engineer"
              />
            </div>
            
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                Desired Timeline*
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
              >
                <option value="">Select timeline...</option>
                <option value="ASAP">ASAP</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="Within a month">Within a month</option>
                <option value="Within 3 months">Within 3 months</option>
              </select>
            </div>
            
            <div className="relative">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Additional Notes
                </label>
                <button 
                  type="button" 
                  onClick={generateProjectDescription}
                  className="flex items-center text-sm text-primary-600 hover:text-primary-700 transition-colors duration-200 cursor-pointer"
                >
                  <Wand2 className="h-4 w-4 mr-1" />
                  Auto-generate
                </button>
              </div>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                placeholder="Tell us about your project, tech stack, and specific requirements..."
              />
              
              {isGenerating && (
                <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
                  <ReactTyped
                    strings={[selectedDescription]}
                    startDelay={300}
                    typeSpeed={20}
                    backDelay={1000}
                    showCursor={true}
                    className="text-gray-700"
                    onStringTyped={() => {
                      setFormData(prevState => ({
                        ...prevState,
                        notes: selectedDescription
                      }));
                      setIsGenerating(false);
                    }}
                  />
                </div>
              )}
            </div>
            
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Start Hiring'
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </TrackedSection>
  );
};

export default ContactForm;