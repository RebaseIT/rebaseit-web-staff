import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const AUTOPLAY_DELAY = 5000; // 5 seconds between transitions

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "We've been able to scale our team efficiently thanks Rebase IT's staffing solutions. The talent from Argentina has been top-notch.",
      author: "Ethan Belanger",
      position: "Engineering Manager at NM tech",
      rating: 5
    },
    {
      quote: "Rebase IT helped us find exceptional developers in record time. Their thorough vetting process saved us countless hours.",
      author: "Shannon Taneja",
      position: "Talent Acquisition Manager at TD Synnex",
      rating: 5
    },
    {
      quote: "The quality of candidates we've hired through Rebase IT has been consistently impressive.",
      author: "Alexandra Esquivel",
      position: "HR Specialist at Premier Tech",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, AUTOPLAY_DELAY);
    
    return () => {
      clearInterval(timer);
    };
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-gray-50">
      <div className="container-section">
        <h2 className="section-heading">What our clients say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-xl shadow-card p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 relative">
                <span className="absolute top-0 left-0 text-6xl text-primary-200 -ml-4 -mt-6">"</span>
                {testimonials[currentIndex].quote}
                <span className="absolute bottom-0 right-0 text-6xl text-primary-200 -mr-4 -mb-12">"</span>
              </blockquote>
              
              <div className="mt-4">
                <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-primary-600" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onFocus={() => setIsAutoPlaying(false)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary-600 w-8' : 'bg-primary-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-primary-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;