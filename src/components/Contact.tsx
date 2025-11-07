import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Heart, Zap, MessageCircle, User, Calendar } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/chris-thomas-abraham-411458298',
    icon: <Linkedin size={20} />,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ChrisToms14',
    icon: <Github size={20} />,
    color: 'from-gray-700 to-gray-800',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
  },
  {
    name: 'Email',
    url: 'mailto:chrisevanthomas736@gmail.com',
    icon: <Mail size={20} />,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    name: 'Phone',
    url: 'tel:+919656258080',
    icon: <Phone size={20} />,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  }
];

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Wireframe Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '180px 180px'
        }} />
        
        {/* Floating contact elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-purple-200 rounded-3xl flex items-center justify-center"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <MessageCircle className="w-8 h-8 text-purple-300" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 right-20 w-24 h-24 border-2 border-blue-200 rounded-2xl flex items-center justify-center"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mail className="w-6 h-6 text-blue-300" />
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
              GET IN
            </h2>
            <div className="text-7xl md:text-8xl font-black text-purple-600">
              TOUCH
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-purple-300 rounded-3xl rotate-12" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-200 rounded-2xl rotate-45" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
            Let's build something that matters. Ready to collaborate on your next project?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-10 shadow-sm relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-full border-2 border-purple-300 rounded-3xl transform rotate-12" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg">
                    <Send className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">Send Me a Message</h3>
                    <p className="text-gray-600">Let's discuss your project</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                        <User size={16} />
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 shadow-sm font-medium"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Mail size={16} />
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 shadow-sm font-medium"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                      <MessageCircle size={16} />
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 shadow-sm font-medium"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none shadow-sm font-medium"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-lg relative overflow-hidden ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl'
                      }`}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                    {submitSuccess && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 text-center text-sm text-green-600 bg-green-50 p-3 rounded-xl border border-green-200 font-medium"
                      >
                        Message sent successfully! I'll get back to you soon.
                      </motion.p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-10 shadow-sm">
              <h3 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-purple-500" />
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white border-2 border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl shadow-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">Email</h4>
                    <a
                      href="mailto:chrisevanthomas736@gmail.com"
                      className="text-gray-900 hover:text-purple-600 transition-colors duration-300 font-bold text-lg"
                    >
                      chrisevanthomas736@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white border-2 border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl shadow-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">Phone</h4>
                    <a
                      href="tel:+919656258080"
                      className="text-gray-900 hover:text-purple-600 transition-colors duration-300 font-bold text-lg"
                    >
                      +91 96562 58080
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white border-2 border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl shadow-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">Location</h4>
                    <p className="text-gray-900 font-bold text-lg">Trivandrum, Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-10 shadow-sm">
              <h3 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <Zap className="w-8 h-8 text-purple-500" />
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.bgColor} ${link.borderColor} border-2 flex items-center gap-3 p-6 rounded-2xl text-gray-800 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg group`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {link.icon}
                    </div>
                    <span className="font-bold">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-3xl p-10 shadow-sm relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="w-full h-full border-2 border-purple-300 rounded-3xl transform rotate-12" />
              </div>

              <div className="relative z-10">
                <Heart className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">
                  Open for Opportunities
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-center text-lg">
                  Currently available for internships, freelance projects, and collaboration on innovative ideas. 
                  Let's create something amazing together!
                </p>
                <motion.a
                  href="mailto:chrisevanthomas736@gmail.com?subject=Let's%20Work%20Together"
                  className="block text-center px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-black rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk Business
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;