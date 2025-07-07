import React from 'react';
import { motion } from 'framer-motion';
import { Container, Settings, GitBranch, Cloud, Layers, Code } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      name: "Docker",
      icon: <Container className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
      description: "Containerization platform for consistent deployments across environments",
      level: "Expert",
      
    },
    {
      name: "Kubernetes",
      icon: <Settings className="h-8 w-8" />,
      color: "from-blue-600 to-indigo-600",
      description: "Container orchestration for scalable, resilient applications",
      level: "Expert",
      
    },
    {
      name: "Jenkins",
      icon: <GitBranch className="h-8 w-8" />,
      color: "from-red-500 to-red-600",
      description: "CI/CD automation server for streamlined development workflows",
      level: "Advanced",
      
    },
    {
      name: "Ansible",
      icon: <Layers className="h-8 w-8" />,
      color: "from-gray-600 to-gray-700",
      description: "Infrastructure as Code for automated configuration management",
      level: "Advanced",
      
    },
    {
      name: "AWS",
      icon: <Cloud className="h-8 w-8" />,
      color: "from-orange-500 to-orange-600",
      description: "Cloud services including EC2, S3, Lambda, and comprehensive AWS ecosystem",
      level: "Expert",
      
    },
    {
      name: "Terraform",
      icon: <Settings className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
      description: "Infrastructure as Code for multi-cloud resource provisioning",
      level: "Advanced",
      
    },
    {
      name: "React.js",
      icon: <Code className="h-8 w-8" />,
      color: "from-cyan-500 to-cyan-600",
      description: "Frontend development for modern user interfaces and applications",
      level: "Intermediate",
      
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Technology </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
              Stack
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expertise in modern DevOps tools and cloud technologies for scalable infrastructure
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full">
              {technologies.map((_, index) => (
                index < technologies.length - 1 && (
                  <motion.line
                    key={index}
                    x1="50%"
                    y1={`${(index + 1) * (100 / technologies.length)}%`}
                    x2="50%"
                    y2={`${(index + 2) * (100 / technologies.length)}%`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                )
              ))}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#bb33ff" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Technology Cards */}
          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className="group relative max-w-2xl w-full">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className={`absolute inset-0 rounded-xl group-hover:shadow-2xl shadow-${tech.color.split('-')[1]}-500/30 transition-shadow duration-300`}></div>
                  
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 group-hover:border-gray-700 transition-all duration-300">
                    <div className="flex items-center gap-6">
                      <div className={`p-4 rounded-lg bg-gradient-to-br ${tech.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {tech.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                            {tech.name}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 text-xs font-medium bg-violet-600/20 text-violet-400 rounded-full border border-violet-500/30">
                              {tech.level}
                            </span>
                           
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full border border-violet-500/30">
            <Settings className="h-5 w-5 text-violet-400 animate-spin-slow" />
            <span className="text-violet-400 font-semibold">Continuously Learning & Adapting</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;