import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Smartphone, Hash, Atom, Box, Coffee, 
  Code, FileJson, Gem, Palette, FileCode,
  ExternalLink, Clock, Award, GraduationCap, Mail, Phone
} from 'lucide-react';
import StarfieldBackground from '../components/StarfieldBackground';
import TypewriterEffect from '../components/TypewriterEffect';

// Animation variants for scroll reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Tech Stack Data
const interests = [
  { name: "Azure", icon: Cloud, color: "text-blue-400" },
  { name: "Android Dev", icon: Smartphone, color: "text-green-400" },
  { name: "C#", icon: Hash, color: "text-purple-400" },
  { name: "React", icon: Atom, color: "text-cyan-400" },
  { name: "Docker", icon: Box, color: "text-blue-500" },
  { name: "Java", icon: Coffee, color: "text-orange-400" },
];

const familiar = [
  { name: "HTML", icon: Code, color: "text-orange-500" },
  { name: "Python", icon: FileCode, color: "text-yellow-300" },
  { name: "CSS", icon: Palette, color: "text-blue-300" },
  { name: "React", icon: Atom, color: "text-cyan-400" },
  { name: "JavaScript", icon: FileJson, color: "text-yellow-400" },
  { name: "Ruby", icon: Gem, color: "text-red-500" },
];

export default function Index() {
  return (
    <div className="relative w-full">
      <StarfieldBackground />

      {/* Hero Section */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center p-4 md:p-6 relative pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center shadow-2xl shadow-black/50"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              Jouji Okache Ogar
            </span>
            <motion.span
              className="inline-block cursor-default text-5xl md:text-6xl"
              whileHover={{ 
                rotate: [0, 14, -8, 14, -4, 10, 0, 0],
                transition: { duration: 0.5 }
              }}
              style={{ originX: 0.7, originY: 0.7 }}
            >
              👋
            </motion.span>
          </h1>
          <TypewriterEffect />

          {/* Monochrome Overview & Contents */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-6"
          >
            {/* Monochrome Overview */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 text-neutral-500 text-[10px] md:text-sm font-mono">
              <div className="flex flex-col items-center gap-2 hover:text-neutral-300 transition-colors cursor-default">
                <div className="w-10 h-10 rounded-full bg-neutral-950/50 border border-white/5 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span>CS Student</span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:text-neutral-300 transition-colors cursor-default">
                <div className="w-10 h-10 rounded-full bg-neutral-950/50 border border-white/5 flex items-center justify-center">
                  <Code className="w-4 h-4" />
                </div>
                <span>Web Dev</span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:text-neutral-300 transition-colors cursor-default">
                <div className="w-10 h-10 rounded-full bg-neutral-950/50 border border-white/5 flex items-center justify-center">
                  <Palette className="w-4 h-4" />
                </div>
                <span>UI Design</span>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:jou.ji357@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950/50 border border-white/5 text-neutral-400 text-sm hover:bg-white/5 hover:text-white transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              <a 
                href="tel:+310620969778"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950/50 border border-white/5 text-neutral-400 text-sm hover:bg-white/5 hover:text-white transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 text-neutral-500 text-sm animate-bounce"
        >
          Scroll to explore
        </motion.div>
      </section>

      {/* About & Values Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div 
            variants={fadeInUp} 
            className="group relative bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-neutral-900/60 transition-colors duration-300 overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">My Values</h3>
              <ul className="space-y-4 text-neutral-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                  Simple, yet fun interactive designs that don't overwhelm the senses.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                  Privacy and security of software is of great importance. Data leaks must be taken seriously.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                  I believe in writing clean, maintainable code that serves a purpose.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="group relative bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-neutral-900/60 transition-colors duration-300 overflow-hidden"
          >
             {/* Shimmer Effect */}
             <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">About Me</h3>
              <p className="text-neutral-300 leading-relaxed mb-4">
                I'm Jouji, 20 years old, born on May 31st 2005. I enjoy drawing, video games, web design, and tinkering in CSS to see what I can create.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Currently working towards studying for a Bachelor's degree in Computer Science at Open University.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-10 text-center text-white">Projects</motion.h2>
          
          <div className="flex flex-col gap-6">
            {/* Project 1 - Ogar Golf Spirit */}
            <motion.a 
              href="https://ogargolfspirit.com" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group relative overflow-hidden bg-neutral-900/40 border border-white/5 hover:border-purple-500/30 rounded-xl p-6 flex items-center justify-between transition-all duration-300 hover:bg-neutral-800/40"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
                    Ogar Golf Spirit
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </h3>
                  <p className="text-neutral-400 mt-1">
                    A professional website developed for my father's golf business.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                  <span className="px-2 py-1 bg-neutral-800 rounded border border-white/5">Live</span>
                  <span className="px-2 py-1 bg-neutral-800 rounded border border-white/5">Web Design</span>
                </div>
              </div>
            </motion.a>

            {/* Project 2 - Coming Soon */}
            <motion.div 
              variants={fadeInUp}
              className="bg-neutral-900/20 border border-white/5 rounded-xl p-6 flex items-center justify-between opacity-70 grayscale"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-neutral-500 flex items-center gap-2">
                  Project Coming Soon
                  <Clock className="w-4 h-4" />
                </h3>
                <p className="text-neutral-500 mt-1">
                  Currently in development.
                </p>
              </div>
            </motion.div>

            {/* Project 3 - Coming Soon */}
            <motion.div 
              variants={fadeInUp}
              className="bg-neutral-900/20 border border-white/5 rounded-xl p-6 flex items-center justify-between opacity-70 grayscale"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-neutral-500 flex items-center gap-2">
                  Project Coming Soon
                  <Clock className="w-4 h-4" />
                </h3>
                <p className="text-neutral-500 mt-1">
                  Currently in development.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="max-w-5xl mx-auto px-6 py-20 scroll-mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-10 text-center text-white">Certifications</motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-900/20 to-neutral-900/40 border border-blue-500/10 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Microsoft Azure Fundamentals</h3>
                <p className="text-sm text-blue-300">AZ-900</p>
                <div className="mt-2 text-xs px-2 py-0.5 bg-blue-500/20 text-blue-200 rounded inline-block">
                  In Progress
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-900/20 to-neutral-900/40 border border-blue-500/10 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Microsoft 365 Fundamentals</h3>
                <p className="text-sm text-blue-300">MS-900</p>
                <div className="mt-2 text-xs px-2 py-0.5 bg-blue-500/20 text-blue-200 rounded inline-block">
                  In Progress
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Interests */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h4 variants={fadeInUp} className="text-xl md:text-2xl font-medium text-center mb-10 text-neutral-200">
            I am interested in expanding my knowledge in
          </motion.h4>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="flex flex-col items-center justify-center p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:bg-neutral-800/50 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <item.icon className={`w-10 h-10 mb-3 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-neutral-300">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Familiar */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h4 variants={fadeInUp} className="text-xl md:text-2xl font-medium text-center mb-10 text-neutral-200">
            I have programmed in these languages before
          </motion.h4>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {familiar.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="flex flex-col items-center justify-center p-6 bg-neutral-900/30 border border-white/5 rounded-xl hover:bg-neutral-800/50 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <item.icon className={`w-10 h-10 mb-3 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-neutral-300">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Goals & Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 mb-20 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Goals */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/40 to-neutral-900/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-10"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Goals</h2>
            <ul className="space-y-4">
              {["Bachelor's degree in Computer Science", "Become a competent Software Engineer", "Develop accessible software", "Improve my problem-solving skills"].map((goal, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-200">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                  </div>
                  {goal}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-900/40 to-neutral-900/40 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-10 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Contact</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-neutral-400 mb-1 uppercase tracking-wider">Email</p>
                <a href="mailto:jou.ji357@gmail.com" className="text-xl text-indigo-300 hover:text-white transition-colors">
                  jou.ji357@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-neutral-400 mb-1 uppercase tracking-wider">Phone</p>
                <a href="tel:+310620969778" className="text-xl text-indigo-300 hover:text-white transition-colors">
                  +31 06 20969778
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}