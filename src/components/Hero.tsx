import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { Download, Github, Linkedin, ArrowDown, Code, Palette, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
      {/* Wireframe Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Wireframe Elements */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-40 border-2 border-white/30 rounded-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="p-4">
            <div className="w-full h-4 bg-white/20 rounded mb-2" />
            <div className="w-3/4 h-4 bg-white/20 rounded mb-2" />
            <div className="w-1/2 h-4 bg-white/20 rounded" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-40 right-32 w-48 h-32 border-2 border-white/30 rounded-lg"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="p-3">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 border border-white/30 rounded mr-2" />
              <div className="w-20 h-3 bg-white/20 rounded" />
            </div>
            <div className="w-full h-3 bg-white/20 rounded mb-1" />
            <div className="w-2/3 h-3 bg-white/20 rounded" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-32 w-56 h-36 border-2 border-white/30 rounded-lg"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="w-8 h-8 border border-white/30 rounded" />
              <div className="w-8 h-8 border border-white/30 rounded" />
              <div className="w-8 h-8 border border-white/30 rounded" />
            </div>
            <div className="w-full h-3 bg-white/20 rounded mb-2" />
            <div className="w-4/5 h-3 bg-white/20 rounded" />
          </div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-60 right-20 w-16 h-16 border-2 border-white/30 rounded-xl flex items-center justify-center"
          animate={{ rotate: 360, y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Code className="w-8 h-8 text-white/60" />
        </motion.div>

        <motion.div
          className="absolute bottom-60 right-40 w-16 h-16 border-2 border-white/30 rounded-xl flex items-center justify-center"
          animate={{ rotate: -360, y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Palette className="w-8 h-8 text-white/60" />
        </motion.div>
      </div>

      {/* Hire Me Button - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute top-8 right-8 z-20"
      >
        <a
          href="mailto:chrisevanthomas736@gmail.com?subject=Let's%20Work%20Together"
          className="px-8 py-3 bg-white text-purple-700 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          HIRE ME
        </a>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-tight">
                I AM
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                  CHRIS THOMAS
                </span>
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl text-purple-200 font-medium">
                  ABRAHAM
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white h-16"
            >
              <TypeAnimation
                sequence={[
                  'DEVELOPER',
                  2000,
                  'DESIGNER',
                  2000,
                  'BUILDER',
                  2000,
                  'INNOVATOR',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl md:text-2xl text-purple-100 max-w-2xl leading-relaxed"
            >
              A coder with an eye for design. I merge logic and creativity to build purposeful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://ik.imagekit.io/cj5ujtn9k/WhatsApp%20Image%202025-06-16%20at%2018.53.10_c24cee17.jpg?updatedAt=1750082545418"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                download
              >
                <Download size={20} />
                DOWNLOAD RESUME
              </a>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-700 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                VIEW PORTFOLIO
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex gap-6"
            >
              <a
                href="https://github.com/ChrisToms14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} className="text-white" />
              </a>
              <a
                href="https://linkedin.com/in/chris-thomas-abraham-411458298"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-white" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="https://ik.imagekit.io/cj5ujtn9k/WhatsApp%20Image%202025-06-16%20at%2018.53.10_c24cee17.jpg?updatedAt=1750082545418"
                  alt="Chris Thomas Abraham"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                animate={{ rotate: 360, y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Zap size={24} className="text-purple-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="flex flex-col items-center text-white hover:text-purple-200 transition-colors cursor-pointer"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center mb-2">
            <motion.div 
              className="w-1 h-3 bg-current rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <ArrowDown size={16} className="animate-bounce" />
          <span className="mt-2 text-sm font-medium">SCROLL</span>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;