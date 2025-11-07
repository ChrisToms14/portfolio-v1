import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Users, Lightbulb, Heart, Star, ArrowRight, Zap } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeMode, setActiveMode] = useState<'designer' | 'developer'>('developer');

  const counters = [
    { label: 'Projects Completed', value: 12, icon: <Code size={24} />, color: 'text-purple-600' },
    { label: 'Organizations', value: 6, icon: <Users size={24} />, color: 'text-blue-600' },
    { label: 'Certifications', value: 4, icon: <Lightbulb size={24} />, color: 'text-green-600' },
  ];

  return (
    <section id="about" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Wireframe Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Floating wireframe elements */}
        <motion.div
          className="absolute top-20 left-20 w-48 h-32 border border-purple-200 rounded-lg"
          animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="p-4">
            <div className="w-full h-3 bg-purple-100 rounded mb-2" />
            <div className="w-3/4 h-3 bg-purple-100 rounded mb-2" />
            <div className="w-1/2 h-3 bg-purple-100 rounded" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-40 right-32 w-40 h-40 border border-blue-200 rounded-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-20 h-20 border border-blue-300 rounded-full" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block relative">
            <h2 className="text-8xl md:text-9xl font-black text-gray-900 mb-4 tracking-tight">
              ABOUT
            </h2>
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-purple-300 rounded-lg rotate-12" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Discover the story behind the code and creativity
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Side - Profile & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-gray-200">
                  <img
                    src="https://ik.imagekit.io/cj5ujtn9k/WhatsApp%20Image%202025-06-16%20at%2018.53.10_c24cee17.jpg?updatedAt=1750082545418"
                    alt="Chris Thomas Abraham"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Chris Thomas Abraham</h3>
                  <p className="text-purple-600 font-medium">Creative Technologist</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                I am a creative technologist who speaks both in visuals and in code. Currently pursuing B.Tech in Computer Science at Mar Baselios College of Engineering and Technology.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for opportunities
                </div>
                <ArrowRight size={16} className="text-purple-600" />
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-3xl p-8">
              <Heart className="w-12 h-12 text-purple-500 mb-4" />
              <blockquote className="text-xl font-medium text-gray-800 mb-4">
                "Design is intelligence made visible — and development is where that intelligence takes shape."
              </blockquote>
              <cite className="text-purple-600 font-medium">— My Design Philosophy</cite>
            </div>
          </motion.div>

          {/* Right Side - Skills Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Toggle Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveMode('developer')}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold transition-all duration-300 ${
                  activeMode === 'developer'
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Code size={20} />
                Developer
              </button>
              <button
                onClick={() => setActiveMode('designer')}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold transition-all duration-300 ${
                  activeMode === 'designer'
                    ? 'bg-pink-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Palette size={20} />
                Designer
              </button>
            </div>

            {/* Content Card */}
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
            >
              {activeMode === 'developer' ? (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-100 rounded-2xl">
                      <Code className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Frontend Developer</h3>
                      <p className="text-gray-600">Building digital experiences</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Frontend Developer who focuses on writing clean, elegant and efficient code that brings designs to life.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {['React & JavaScript', 'Python & FastAPI', 'HTML5 & CSS3', 'Node.js & MongoDB'].map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                        <Star className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium text-gray-800">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-pink-100 rounded-2xl">
                      <Palette className="w-8 h-8 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">UI/UX Designer</h3>
                      <p className="text-gray-600">Crafting beautiful interfaces</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    UI/UX Designer with a passion for designing beautiful and functional user experiences that delight users.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {['Figma & Prototyping', 'Adobe Creative Suite', 'Photography', 'Video Editing'].map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl">
                        <Star className="w-4 h-4 text-pink-500" />
                        <span className="text-sm font-medium text-gray-800">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm group-hover:shadow-lg transition-all duration-500">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className={counter.color}>
                    {counter.icon}
                  </div>
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">
                  {counter.value}+
                </div>
                <div className="text-gray-600 font-medium">
                  {counter.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
