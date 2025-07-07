import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Water Wave Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="wave-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black/50 to-purple-900/20"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
              Ananya Sharma
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8"
          >
            <span className="text-violet-400">DevOps Engineer</span> crafting scalable solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Passionate about cloud infrastructure, automation, and building efficient CI/CD pipelines. 
            Specializing in Kubernetes, AWS, and modern DevOps practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <a
              href="/resume.pdf"
              download
              className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:from-violet-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25"
            >
              <span className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/Anany29"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/25"
            >
              <Github className="h-6 w-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/ananya-sharma-31b913235"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-blue-400" />
            </a>
            <a
              href="mailto:ananysharma28@gmail.com"
              className="group p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
            >
              <Mail className="h-6 w-6 text-gray-300 group-hover:text-green-400" />
            </a>
            <a
              href="tel:+919784110060"
              className="group p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
            >
              <Phone className="h-6 w-6 text-gray-300 group-hover:text-orange-400" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-violet-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;