import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Lightbulb, Users, Presentation, Star, Crown, Award, Zap, Target } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Second Runner-up – Intra-College Karma Hunt',
    description: 'Secured third place in a competitive problem-solving and treasure hunt competition.',
    icon: <Trophy className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    category: 'Competition'
  },
  {
    id: 2,
    title: 'Selected Team Lead – Smart India Hackathon Prelims',
    description: 'Led Team Eigengrau to develop an innovative disaster management solution.',
    icon: <Medal className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    category: 'Leadership'
  },
  {
    id: 3,
    title: 'Design & Media Head',
    description: 'Appointed as the head of design and media for various college events and technical bodies.',
    icon: <Lightbulb className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    category: 'Leadership'
  },
  {
    id: 4,
    title: 'Volunteer Leader',
    description: 'Led volunteer teams for multiple events in IEEE, CSI, and MuLearn.',
    icon: <Users className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    category: 'Community'
  },
  {
    id: 5,
    title: 'Speaker/Coordinator',
    description: 'Served as coordinator at MBCET meetups, MuV Talks, and In50hrs Hackathon.',
    icon: <Presentation className="w-8 h-8" />,
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    category: 'Speaking'
  }
];

const Achievements: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Competition': return <Trophy className="w-4 h-4" />;
      case 'Leadership': return <Crown className="w-4 h-4" />;
      case 'Community': return <Users className="w-4 h-4" />;
      case 'Speaking': return <Presentation className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <section id="achievements" ref={ref} className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Wireframe Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '160px 160px'
        }} />
        
        {/* Floating trophy and award elements */}
        <motion.div
          className="absolute top-32 left-20 w-24 h-24 border-2 border-yellow-200 rounded-3xl flex items-center justify-center"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Trophy className="w-8 h-8 text-yellow-300" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 right-20 w-20 h-20 border-2 border-purple-200 rounded-2xl flex items-center justify-center"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Award className="w-6 h-6 text-purple-300" />
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
              ACHIEVEMENTS
            </h2>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 border-2 border-yellow-300 rounded-3xl rotate-12" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 rounded-2xl rotate-45" />
            <div className="absolute top-4 left-1/4 w-12 h-12 border-2 border-green-300 rounded-full" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
            Recognitions and accomplishments throughout my journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group h-full"
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <div className={`${achievement.bgColor} ${achievement.borderColor} border-2 rounded-3xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full border border-current rounded-3xl transform rotate-12" />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full border border-gray-200">
                    {getCategoryIcon(achievement.category)}
                    <span className="text-xs font-medium text-gray-600">{achievement.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Achievement badge */}
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Star className="w-12 h-12 text-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: '5+', label: 'Major Achievements', icon: <Trophy className="w-6 h-6" /> },
            { number: '3+', label: 'Leadership Roles', icon: <Crown className="w-6 h-6" /> },
            { number: '10+', label: 'Events Organized', icon: <Users className="w-6 h-6" /> },
            { number: '15+', label: 'Speaking Sessions', icon: <Presentation className="w-6 h-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-sm group-hover:shadow-lg transition-all duration-500">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-12 shadow-sm relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-40 h-40 opacity-5">
              <div className="w-full h-full border-2 border-purple-300 rounded-3xl transform -rotate-12" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <Target className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                <h3 className="text-4xl font-black text-gray-900 mb-6">
                  Achievement Philosophy
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  Every achievement represents not just personal success, but a step forward in my journey 
                  to make a meaningful impact. These recognitions fuel my passion for continuous growth, 
                  innovation, and contributing to the community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 p-8 rounded-2xl shadow-sm">
                  <Zap className="w-8 h-8 text-purple-500 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Driven by Impact</h4>
                  <p className="text-gray-600">
                    Every project and initiative is motivated by the desire to create positive change and value
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-2xl shadow-sm">
                  <Target className="w-8 h-8 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Continuous Excellence</h4>
                  <p className="text-gray-600">
                    Striving for excellence in every endeavor while maintaining humility and eagerness to learn
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

export default Achievements;