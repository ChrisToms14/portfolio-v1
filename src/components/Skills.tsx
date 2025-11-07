import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Users, Zap, Star, ArrowRight, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technical',
    icon: <Code className="text-white" size={24} />,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    skills: [
      { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
      { name: 'Python', level: 80, color: 'bg-green-500' },
      { name: 'React', level: 90, color: 'bg-blue-500' },
      { name: 'Node.js', level: 75, color: 'bg-green-600' },
      { name: 'HTML & CSS', level: 95, color: 'bg-orange-500' },
    ],
  },
  {
    title: 'Creative',
    icon: <Palette className="text-white" size={24} />,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    skills: [
      { name: 'Figma', level: 95, color: 'bg-purple-500' },
      { name: 'Adobe Photoshop', level: 70, color: 'bg-blue-600' },
      { name: 'Illustrator', level: 75, color: 'bg-orange-600' },
      { name: 'Video Editing', level: 80, color: 'bg-red-500' },
      { name: 'Photography', level: 85, color: 'bg-gray-600' },
    ],
  },
  {
    title: 'Leadership',
    icon: <Users className="text-white" size={24} />,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    skills: [
      { name: 'Team Management', level: 90, color: 'bg-green-500' },
      { name: 'Project Coordination', level: 85, color: 'bg-blue-500' },
      { name: 'Public Speaking', level: 80, color: 'bg-purple-500' },
      { name: 'Strategic Planning', level: 85, color: 'bg-indigo-500' },
      { name: 'Mentoring', level: 80, color: 'bg-pink-500' },
    ],
  },
  {
    title: 'Innovation',
    icon: <Zap className="text-white" size={24} />,
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    skills: [
      { name: 'Problem Solving', level: 95, color: 'bg-red-500' },
      { name: 'Critical Thinking', level: 90, color: 'bg-purple-500' },
      { name: 'Rapid Prototyping', level: 85, color: 'bg-blue-500' },
      { name: 'Design Thinking', level: 80, color: 'bg-pink-500' },
      { name: 'Innovation Strategy', level: 75, color: 'bg-green-500' },
    ],
  },
];

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" ref={ref} className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Wireframe Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-32 right-20 w-32 h-32 border border-purple-200 rounded-2xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute bottom-32 left-20 w-24 h-24 border border-blue-200 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
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
              SKILLS
            </h2>
            <div className="absolute -top-6 -left-6 w-20 h-20 border-2 border-blue-300 rounded-2xl rotate-12" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-200 rounded-full" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            A comprehensive showcase of my technical and creative abilities
          </p>
        </motion.div>

        {/* Skills Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white border border-gray-200 text-gray-700 hover:shadow-md hover:scale-102'
              }`}
              whileHover={{ scale: activeTab === index ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`p-2 rounded-xl ${activeTab === index ? 'bg-white/20' : 'bg-gradient-to-br ' + category.color}`}>
                {activeTab === index ? (
                  category.icon
                ) : (
                  React.cloneElement(category.icon, { className: 'text-white' })
                )}
              </div>
              <span className="text-lg">{category.title}</span>
              {activeTab === index && <ArrowRight size={18} />}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className={`${skillCategories[activeTab].bgColor} ${skillCategories[activeTab].borderColor} border-2 rounded-3xl p-12 shadow-sm`}>
            {/* Category Header */}
            <div className="flex items-center gap-6 mb-12">
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${skillCategories[activeTab].color} shadow-lg`}>
                {skillCategories[activeTab].icon}
              </div>
              <div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">
                  {skillCategories[activeTab].title} Skills
                </h3>
                <p className="text-gray-600 text-lg">
                  Expertise and proficiency in {skillCategories[activeTab].title.toLowerCase()} areas
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories[activeTab].skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * skillIndex }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 ${skill.color} rounded-full`} />
                      <span className="text-lg font-bold text-gray-900">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp size={16} className="text-green-500" />
                      <span className="text-sm font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.3 + 0.1 * skillIndex, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-sm max-w-4xl mx-auto">
            <Star className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              I believe in the power of continuous learning and staying updated with the latest technologies and design trends. 
              My diverse skill set allows me to bridge the gap between technical implementation and creative vision.
            </p>
            <div className="flex justify-center gap-4">
              <div className="px-6 py-3 bg-purple-100 text-purple-700 rounded-xl font-medium">
                Always Learning
              </div>
              <div className="px-6 py-3 bg-blue-100 text-blue-700 rounded-xl font-medium">
                Always Growing
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;