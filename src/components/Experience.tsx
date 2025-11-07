import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Palette, Code, Users, Heart, Award, Star, Briefcase, Zap, Target } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Graphic Design Intern',
    company: 'GTECH Mulearn',
    period: 'Feb 2024 - Aug 2024',
    location: 'Trivandrum, Kerala',
    type: 'Internship',
    description: 'Creating visual assets for digital platforms, designing event posters and marketing materials, and supporting the media team with creative solutions.',
    highlights: [
      'Created branding materials for tech events and workshops',
      'Designed UI mockups for web applications',
      'Collaborated on visual storytelling initiatives',
      'Supported social media campaigns with creative assets'
    ],
    icon: <Palette className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
  },
  {
    id: 2,
    title: 'Mastermind',
    company: 'Mulearn MBCET Campus Chapter',
    period: '2023 - Present',
    location: 'MBCET, Trivandrum',
    type: 'Leadership',
    description: 'Leading the campus chapter strategic initiatives, organizing tech meetups, and coordinating between student members and the parent organization.',
    highlights: [
      'Organized 10+ technical workshops and hackathons',
      'Managed a team of 15+ student volunteers',
      'Increased campus chapter membership by 40%',
      'Established new partnerships with industry professionals'
    ],
    icon: <Target className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
  },
  {
    id: 3,
    title: 'Design & Media Volunteer',
    company: 'IEEE',
    period: '2023 - 2024',
    location: 'MBCET, Trivandrum',
    type: 'Volunteer',
    description: 'Creating visual content for IEEE events, managing social media communications, and supporting technical workshops with design assets.',
    highlights: [
      'Designed promotional materials for IEEE conferences',
      'Created technical event documentation',
      'Supported website updates and content management',
      'Collaborated on multi-disciplinary tech projects'
    ],
    icon: <Code className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    id: 4,
    title: 'Design Volunteer & Secretary',
    company: 'CSI',
    period: '2023 - 2025',
    location: 'MBCET, Trivandrum',
    type: 'Leadership',
    description: 'Initially worked as a design volunteer creating visual assets for events, later elected as Secretary to lead organizational initiatives.',
    highlights: [
      'Led the design team for annual technical symposium',
      'Coordinated industry-academia collaboration events',
      'Managed documentation and reporting for the chapter',
      'Organized programming competitions and tech talks'
    ],
    icon: <Users className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    id: 5,
    title: 'NSS Volunteer',
    company: 'National Service Scheme',
    period: 'Since 2021',
    location: 'MBCET, Trivandrum',
    type: 'Community Service',
    description: 'Participating in community service projects, environmental initiatives, and social awareness campaigns as part of the National Service Scheme.',
    highlights: [
      'Participated in rural development projects',
      'Organized blood donation and health camps',
      'Conducted digital literacy workshops',
      'Supported disaster relief coordination efforts'
    ],
    icon: <Heart className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    id: 6,
    title: 'Team Leader',
    company: 'Smart India Hackathon Prelims 2024',
    period: 'Team Eigengrau',
    location: 'MBCET, Trivandrum',
    type: 'Competition',
    description: 'Led a cross-functional team in developing innovative solutions for disaster management challenges during the prestigious Smart India Hackathon.',
    highlights: [
      'Coordinated development of disaster response platform',
      'Managed team of developers, designers and domain experts',
      'Presented technical solution to industry judges',
      'Oversaw rapid prototyping and MVP development'
    ],
    icon: <Award className="w-6 h-6" />,
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  }
];

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Internship': return <Briefcase className="w-4 h-4" />;
      case 'Leadership': return <Target className="w-4 h-4" />;
      case 'Volunteer': return <Heart className="w-4 h-4" />;
      case 'Community Service': return <Users className="w-4 h-4" />;
      case 'Competition': return <Award className="w-4 h-4" />;
      default: return <Briefcase className="w-4 h-4" />;
    }
  };

  return (
    <section id="experience" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Wireframe Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '140px 140px'
        }} />
        
        {/* Floating organizational charts */}
        <motion.div
          className="absolute top-20 right-20 w-48 h-32 border border-purple-200 rounded-2xl"
          animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="p-4">
            <div className="flex justify-center mb-2">
              <div className="w-8 h-8 border border-purple-300 rounded" />
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-6 h-6 border border-purple-300 rounded" />
              <div className="w-6 h-6 border border-purple-300 rounded" />
              <div className="w-6 h-6 border border-purple-300 rounded" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 w-32 h-32 border border-blue-200 rounded-full flex items-center justify-center"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-16 h-16 border border-blue-300 rounded-full" />
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
              EXPERIENCE
            </h2>
            <div className="text-4xl md:text-5xl font-black text-purple-600 mt-2">
              & ROLES
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-20 h-20 border-2 border-purple-300 rounded-3xl rotate-12" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-200 rounded-2xl rotate-45" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
            My journey through leadership positions and professional experiences
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group h-full"
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <div className={`${exp.bgColor} ${exp.borderColor} border-2 rounded-3xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full border border-current rounded-3xl transform rotate-12" />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${exp.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {exp.icon}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full border border-gray-200">
                    {getTypeIcon(exp.type)}
                    <span className="text-xs font-medium text-gray-600">{exp.type}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-2 leading-tight">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-bold text-purple-600 mb-4">
                      {exp.company}
                    </h4>
                  </div>

                  {/* Meta Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 bg-white/60 p-2 rounded-lg">
                      <Calendar size={14} className="text-gray-500" />
                      <span className="font-medium text-gray-700">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/60 p-2 rounded-lg">
                      <MapPin size={14} className="text-gray-500" />
                      <span className="font-medium text-gray-700">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h5 className="font-black text-gray-800 text-sm flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      Key Achievements
                    </h5>
                    <div className="space-y-2">
                      {exp.highlights.slice(0, 3).map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-gray-600 text-sm"
                        >
                          <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-3xl p-12 shadow-sm relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
              <div className="w-full h-full border-2 border-purple-300 rounded-3xl transform -rotate-12" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <Heart className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                <h3 className="text-4xl font-black text-gray-900 mb-6">
                  Core Leadership Principles
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  Through my various roles and experiences, I've developed a strong foundation in leadership, 
                  collaboration, and innovation. Each position has taught me valuable lessons about teamwork, 
                  responsibility, and making a positive impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/80 border border-purple-200 p-8 rounded-2xl shadow-sm">
                  <Target className="w-8 h-8 text-purple-500 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation through Collaboration</h4>
                  <p className="text-gray-600">
                    Building bridges between technical and creative teams to deliver exceptional results
                  </p>
                </div>
                
                <div className="bg-white/80 border border-blue-200 p-8 rounded-2xl shadow-sm">
                  <Zap className="w-8 h-8 text-blue-500 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Building with Purpose</h4>
                  <p className="text-gray-600">
                    Every project and initiative is driven by the goal to create meaningful impact and value
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

export default Experience;