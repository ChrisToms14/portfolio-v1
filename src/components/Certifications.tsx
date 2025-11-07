import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink, Linkedin, Star, Trophy, AlignCenterVertical as Certificate, BookOpen, Target, Zap } from 'lucide-react';

const Certifications: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const certificationCategories = [
    {
      title: 'Technical Skills',
      icon: <Award className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Programming, Web Development, and Software Engineering certifications',
      count: '8+'
    },
    {
      title: 'Design & Creative',
      icon: <Star className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      description: 'UI/UX Design, Graphic Design, and Creative Tools certifications',
      count: '6+'
    },
    {
      title: 'Leadership & Soft Skills',
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'Project Management, Team Leadership, and Communication skills',
      count: '4+'
    }
  ];

  return (
    <section id="certifications" ref={ref} className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Wireframe Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }} />
        
        {/* Floating certificate icons */}
        <motion.div
          className="absolute top-32 left-20 w-20 h-20 border-2 border-purple-200 rounded-2xl flex items-center justify-center"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Certificate className="w-8 h-8 text-purple-300" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 right-20 w-16 h-16 border-2 border-blue-200 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <BookOpen className="w-6 h-6 text-blue-300" />
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
            <h2 className="text-7xl md:text-8xl font-black text-gray-900 mb-4 tracking-tight">
              CERTIFICATIONS
            </h2>
            <div className="text-4xl md:text-5xl font-black text-purple-600 mt-2">
              & LEARNING
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 border-2 border-purple-300 rounded-2xl rotate-12" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-200 rounded-full" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
            Professional qualifications and continuous learning journey
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <div className="relative group max-w-2xl w-full">
            <div className="bg-gradient-to-br from-[#0077B5] to-[#004182] rounded-3xl p-12 shadow-xl group-hover:shadow-2xl transition-all duration-500 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <div className="w-full h-full border-2 border-white rounded-3xl transform rotate-12" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <Linkedin className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-2">
                      Professional Certifications
                    </h3>
                    <p className="text-blue-100 text-lg">
                      Verified credentials and achievements
                    </p>
                  </div>
                </div>
                
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Explore my verified certifications and continuous learning journey on LinkedIn. 
                  Each certification represents a milestone in my professional development.
                </p>

                <motion.a
                  href="https://linkedin.com/in/chris-thomas-abraham-411458298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0077B5] rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={24} />
                  View All Certifications
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certification Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {certificationCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`${category.bgColor} ${category.borderColor} border-2 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 group relative overflow-hidden`}
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className="w-full h-full border border-current rounded-2xl transform rotate-12" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-gray-900">{category.count}</div>
                    <div className="text-sm text-gray-600 font-medium">Certifications</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-12 shadow-sm relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
              <div className="w-full h-full border-2 border-purple-300 rounded-3xl transform -rotate-12" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <Target className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                <h3 className="text-4xl font-black text-gray-900 mb-6">
                  Continuous Learning Journey
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  My commitment to continuous learning drives me to stay updated with the latest technologies, 
                  design trends, and industry best practices. Each certification represents not just knowledge gained, 
                  but a step forward in my professional journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 p-8 rounded-2xl">
                  <Zap className="w-8 h-8 text-purple-500 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Always Learning</h4>
                  <p className="text-gray-600">
                    Staying ahead of the curve with emerging technologies and industry standards
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Knowledge Sharing</h4>
                  <p className="text-gray-600">
                    Applying learned concepts in real projects and sharing knowledge with the community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;