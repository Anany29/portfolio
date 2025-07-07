import React from 'react';
import { motion } from 'framer-motion';
import { Server, GitBranch, Cloud, Cpu, Zap, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Kubernetes Cluster Setup",
      description: "Designed and implemented a highly available Kubernetes cluster with 99.9% uptime, featuring automated scaling, load balancing, and multi-zone deployment. Achieved 98.5% efficiency in resource utilization through intelligent pod scheduling and resource optimization.",
      icon: <Server className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/30",
      technologies: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana"],
      metrics: "99.9% Uptime • 98.5% Resource Efficiency"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built a comprehensive CI/CD pipeline using Jenkins, Docker, and ArgoCD that reduced deployment time by 85% and increased deployment frequency by 300%. Implemented automated testing, security scanning, and rollback mechanisms achieving 99.2% deployment success rate.",
      icon: <GitBranch className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      glowColor: "shadow-green-500/30",
      technologies: ["Jenkins", "Docker", "ArgoCD", "GitHub Actions", "SonarQube"],
      metrics: "85% Faster Deployments • 99.2% Success Rate"
    },
    {
      title: "AWS Microservices Architecture",
      description: "Architected a scalable microservices solution on AWS utilizing SNS, S3, EC2, EBS, Transcribe, Cognito, VPC, and SSM. Optimized performance achieving 98.7% system efficiency with auto-scaling groups and implemented robust security measures including WAF and encryption.",
      icon: <Cloud className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/30",
      technologies: ["AWS", "Lambda", "API Gateway", "DynamoDB", "CloudFormation"],
      metrics: "98.7% System Efficiency • 50% Cost Reduction"
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
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming infrastructure challenges into scalable solutions with modern DevOps practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className={`absolute inset-0 rounded-2xl group-hover:shadow-2xl ${project.glowColor} transition-shadow duration-300`}></div>
              
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full group-hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-violet-400 transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">{project.metrics}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 group-hover:border-violet-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full border border-violet-500/30">
            <Cpu className="h-5 w-5 text-violet-400" />
            <span className="text-violet-400 font-semibold">Average System Efficiency: 98.8%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;