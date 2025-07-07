import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, School } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "PIET (Poornima Institute of Engineering & Technology)",
      grade: "8.75 CGPA",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "from-violet-500 to-purple-600",
      description: "Specialized in Computer Science Engineering with focus on software development and system design"
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "Kendriya Vidyalaya Beawar",
      grade: "90.4%",
      icon: <School className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-600",
      description: "Science stream with Mathematics, Physics, and Chemistry as core subjects"
    },
    {
      degree: "Secondary (10th)",
      institution: "Kendriya Vidyalaya Beawar",
      grade: "86.4%",
      icon: <Award className="h-8 w-8" />,
      color: "from-green-500 to-emerald-600",
      description: "Strong foundation in Mathematics and Science with excellent academic performance"
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
            <span className="text-white">Educational </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building strong foundations through quality education and continuous learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 via-purple-500 to-violet-500 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`relative w-full max-w-md ${
                  index % 2 === 0 ? 'mr-8' : 'ml-8'
                }`}>
                  <div className="group relative">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${edu.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    <div className={`absolute inset-0 rounded-2xl group-hover:shadow-2xl shadow-${edu.color.split('-')[1]}-500/30 transition-shadow duration-300`}></div>
                    
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 group-hover:border-gray-700 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${edu.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {edu.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-violet-400 font-semibold">
                              {edu.institution}
                            </p>
                            <div className="px-4 py-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full border border-violet-500/30">
                              <span className="text-violet-400 font-bold">
                                {edu.grade}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-gray-300 leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-black shadow-lg shadow-violet-500/50"></div>
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
            <GraduationCap className="h-5 w-5 text-violet-400" />
            <span className="text-violet-400 font-semibold">Committed to Lifelong Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;