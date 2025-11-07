import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Printer, Cloud, Stethoscope, Shield, Calculator, Gamepad2, ArrowRight, Star, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'PrintEase',
    description: 'A comprehensive digital platform for online printing services with secure file upload, payment integration, and real-time order tracking.',
    icon: <Printer className="w-8 h-8" />,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/ChrisToms14/printease',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: [
      'Secure file upload system',
      'Real-time order tracking',
      'Payment gateway integration',
      'User authentication and profiles',
      'Admin dashboard for order management'
    ]
  },
  {
    id: 2,
    title: 'WeatherShield',
    description: 'Real-time weather alert and disaster-rescue application with interactive maps showing nearby shelters and safety zones.',
    icon: <Cloud className="w-8 h-8" />,
    tags: ['Flutter', 'Firebase', 'Maps API', 'Weather API'],
    github: 'https://github.com/ChrisToms14/weathershield',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    features: [
      'Real-time weather monitoring',
      'Interactive disaster response maps',
      'Emergency contact system',
      'Offline functionality',
      'Resource locator'
    ]
  },
  {
    id: 3,
    title: 'AYUSH AI',
    description: 'Multilingual telemedicine platform powered by AI chatbot offering personalized AYUSH-based treatment recommendations.',
    icon: <Stethoscope className="w-8 h-8" />,
    tags: ['AI/ML', 'React Native', 'NLP', 'Healthcare'],
    github: 'https://github.com/ChrisToms14/ayush-ai',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    features: [
      'Multilingual AI health assistant',
      'AYUSH treatment recommendations',
      'Secure patient data management',
      'Video consultation',
      'Digital health records'
    ]
  },
  {
    id: 4,
    title: 'Smart India Hackathon',
    description: 'Disaster management solution developed in 12 hours showcasing rapid prototyping and team leadership skills.',
    icon: <Shield className="w-8 h-8" />,
    tags: ['React', 'Node.js', 'MongoDB', 'Real-time'],
    github: 'https://github.com/ChrisToms14/sih-project',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    features: [
      'Real-time disaster mapping',
      'Resource coordination system',
      'Emergency response management',
      'Civilian communication',
      'Data analytics dashboard'
    ]
  },
  {
    id: 5,
    title: 'Scientific Calculator',
    description: 'Advanced scientific calculator with complex mathematical operations and intuitive user interface.',
    icon: <Calculator className="w-8 h-8" />,
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Math.js'],
    github: 'https://github.com/ChrisToms14/scientific-calculator',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    features: [
      'Scientific calculations',
      'Trigonometric functions',
      'Logarithmic operations',
      'Memory functions',
      'History tracking'
    ]
  },
  {
    id: 6,
    title: 'Game Collection',
    description: 'Collection of interactive web games including puzzles and arcade-style games built with vanilla JavaScript.',
    icon: <Gamepad2 className="w-8 h-8" />,
    tags: ['JavaScript', 'Canvas API', 'Game Dev', 'Animation'],
    github: 'https://github.com/ChrisToms14/web-games',
    color: 'from-yellow-500 to-red-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    features: [
      'Multiple game types',
      'High score tracking',
      'Responsive controls',
      'Smooth animations',
      'Local storage'
    ]
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const openProject = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const getProject = (id: number | null) => {
    if (id === null) return null;
    return projects.find(project => project.id === id);
  };

  const selectedProjectData = getProject(selectedProject);

  return (
    <section id="projects" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Wireframe Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
        
        {/* Floating wireframe browser windows */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-40 border border-purple-200 rounded-lg"
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2 p-3 border-b border-purple-200">
            <div className="w-3 h-3 bg-red-300 rounded-full" />
            <div className="w-3 h-3 bg-yellow-300 rounded-full" />
            <div className="w-3 h-3 bg-green-300 rounded-full" />
          </div>
          <div className="p-4 space-y-2">
            <div className="w-full h-3 bg-purple-100 rounded" />
            <div className="w-3/4 h-3 bg-purple-100 rounded" />
            <div className="w-1/2 h-3 bg-purple-100 rounded" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 w-48 h-32 border border-blue-200 rounded-2xl"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="w-8 h-8 border border-blue-300 rounded" />
              <div className="w-16 h-2 bg-blue-200 rounded" />
            </div>
            <div className="space-y-2">
              <div className="w-full h-2 bg-blue-100 rounded" />
              <div className="w-2/3 h-2 bg-blue-100 rounded" />
            </div>
          </div>
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
              PORTFOLIO
            </h2>
            {/* Wireframe decorations */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-purple-300 rounded-2xl rotate-12" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-blue-300 rounded-full" />
            <div className="absolute top-4 right-1/4 w-12 h-12 bg-yellow-200 rounded-lg rotate-45" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            A showcase of my most impactful projects and technical achievements
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group cursor-pointer"
              onClick={() => openProject(project.id)}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <div className={`${project.bgColor} ${project.borderColor} border-2 rounded-3xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full border border-current rounded-2xl transform rotate-12" />
                </div>

                {/* Project Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  {project.icon}
                </div>

                {/* Project Info */}
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-white/80 text-gray-700 rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-bold transition-colors duration-300">
                    View Details
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/80 border border-gray-200 rounded-xl hover:bg-white hover:scale-110 transition-all duration-300"
                    aria-label="GitHub Repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} className="text-gray-700" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-3xl p-12 shadow-sm max-w-4xl mx-auto">
            <Zap className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              These projects represent my journey in creating meaningful digital experiences. 
              Each one taught me something new and pushed my boundaries as a developer and designer.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/ChrisToms14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Github size={20} />
                View All Projects
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProjectData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeProject}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className={`${selectedProjectData.bgColor} ${selectedProjectData.borderColor} border-2 rounded-3xl max-w-4xl w-full shadow-2xl`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-12">
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`p-6 rounded-2xl bg-gradient-to-br ${selectedProjectData.color} text-white shadow-lg`}>
                      {selectedProjectData.icon}
                    </div>
                    <div>
                      <h2 className="text-4xl font-black text-gray-900 mb-3">
                        {selectedProjectData.title}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {selectedProjectData.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 text-sm font-medium bg-white/80 text-gray-700 rounded-xl border border-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-xl mb-10 leading-relaxed">
                    {selectedProjectData.description}
                  </p>

                  <div className="mb-10">
                    <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                      <Star className="w-6 h-6 text-yellow-500" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProjectData.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-gray-700 bg-white/80 p-4 rounded-xl border border-gray-200"
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <button
                      onClick={closeProject}
                      className="px-8 py-4 bg-white/80 border border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-white transition-all duration-300"
                    >
                      Close
                    </button>
                    <a
                      href={selectedProjectData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:scale-105"
                    >
                      <Github size={20} />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;