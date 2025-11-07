import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-800 py-12 border-t border-gray-200 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <motion.div
                className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-2xl shadow-medium group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Code size={24} className="text-white" />
              </motion.div>
              <span className="font-display font-bold text-2xl group-hover:text-purple-600 transition-colors duration-300">
                Chris<span className="text-purple-600">Thomas</span>
              </span>
            </Link>
            <p className="text-gray-600 mt-2 text-lg">
              Creative Technologist | Frontend Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-8 mb-4">
              <motion.a
                href="https://linkedin.com/in/chris-thomas-abraham-411458298"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/ChrisToms14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-medium"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="mailto:chrisevanthomas736@gmail.com"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium"
                aria-label="Email"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Email
              </motion.a>
            </div>
            
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              className="group flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300 cursor-pointer bg-white px-4 py-2 rounded-full border border-gray-200 shadow-soft hover:shadow-medium"
            >
              Back to Top 
              <motion.div
                className="ml-2"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp size={16} />
              </motion.div>
            </Link>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Chris Thomas Abraham. All rights reserved.
          </p>
          <div className="flex items-center mt-2 md:mt-0">
            <p className="text-gray-600 text-sm flex items-center">
              Designed & Built with 
              <motion.div
                className="mx-2"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart size={14} className="text-pink-500" />
              </motion.div>
              and lots of coffee
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;