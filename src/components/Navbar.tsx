import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Code } from 'lucide-react';

const navItems = [
  { name: 'Home', to: 'home', offset: 0 },
  { name: 'About', to: 'about', offset: -70 },
  { name: 'Skills', to: 'skills', offset: -70 },
  { name: 'Projects', to: 'projects', offset: -70 },
  { name: 'Experience', to: 'experience', offset: -70 },
  { name: 'Contact', to: 'contact', offset: -70 },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-3 shadow-soft' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-2xl shadow-medium"
          >
            <Code size={24} className="text-white" />
          </motion.div>
          <span className={`font-display font-bold text-xl group-hover:text-purple-600 transition-colors duration-300 ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}>
            Chris<span className="text-purple-600">Thomas</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  className={`font-medium transition-colors duration-300 cursor-pointer relative group ${
                    scrolled 
                      ? 'text-gray-700 hover:text-purple-600' 
                      : 'text-white hover:text-purple-200'
                  }`}
                  activeClass="text-purple-600"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className={`p-3 rounded-2xl transition-all duration-300 shadow-soft ${
              scrolled 
                ? 'bg-white border border-gray-200 hover:bg-gray-50' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X size={24} className={scrolled ? 'text-gray-900' : 'text-white'} />
                ) : (
                  <Menu size={24} className={scrolled ? 'text-gray-900' : 'text-white'} />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 md:hidden shadow-soft"
            >
              <ul className="flex flex-col p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={item.offset}
                      duration={500}
                      className="block py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-xl transition-all duration-300 text-lg font-medium"
                      activeClass="text-purple-600 bg-gray-50"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;