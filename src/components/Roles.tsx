import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Server, Palette, Database, LineChart } from 'lucide-react';
import ScrollToSection from './ScrollToSection';

interface RolesProps {
  onRoleSelect?: (role: string) => void;
}

const Roles: React.FC<RolesProps> = ({ onRoleSelect }) => {
  const roles = [
    {
      icon: <Code className="h-8 w-8 text-primary-500" />,
      title: "Frontend Developer",
      skills: ["React", "Vue", "Angular"],
      description: "Expert UI developers who create responsive, modern web applications"
    },
    {
      icon: <Server className="h-8 w-8 text-primary-500" />,
      title: "Backend Developer",
      skills: ["Node.js", "Python", "Java"],
      description: "Backend specialists building scalable APIs and microservices"
    },
    {
      icon: <Layers className="h-8 w-8 text-primary-500" />,
      title: "Full Stack Developer",
      skills: ["MERN", "MEAN", "Django"],
      description: "Versatile developers who handle both frontend and backend development"
    },
    {
      icon: <Palette className="h-8 w-8 text-primary-500" />,
      title: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Sketch"],
      description: "Creative designers crafting intuitive user experiences"
    },
    {
      icon: <Database className="h-8 w-8 text-primary-500" />,
      title: "DevOps Engineer",
      skills: ["AWS", "Docker", "Kubernetes"],
      description: "Infrastructure experts managing cloud and deployment pipelines"
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary-500" />,
      title: "Project Manager",
      skills: ["Agile", "Scrum", "Kanban"],
      description: "Experienced leaders who ensure project success and team efficiency"
    }
  ];

  const handleHireClick = (roleTitle: string) => {
    if (onRoleSelect) {
      onRoleSelect(roleTitle);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="roles" className="bg-white">
      <div className="container-section">
        <h2 className="section-heading">We help you hire for</h2>
        <p className="section-subheading">
          Our network includes a wide range of specialized technical talent across multiple disciplines.
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-card flex flex-col h-full"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-primary-50 flex items-center justify-center">
                {role.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{role.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{role.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {role.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-2 py-1 rounded-full bg-primary-50 text-primary-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <ScrollToSection
                  targetId="contact"
                  onClick={() => handleHireClick(role.title)}
                  className="btn btn-primary text-center cursor-pointer inline-block"
                >
                  Hire
                </ScrollToSection>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Roles;