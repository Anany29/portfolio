import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (static form)
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "ananysharma28@gmail.com",
      href: "mailto:ananysharma28@gmail.com",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91-9784110060",
      href: "tel:+919784110060",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/Anany29",
      href: "https://github.com/Anany29",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ananya-sharma-31b913235",
      href: "https://www.linkedin.com/in/ananya-sharma-31b913235",
      color: "from-blue-500 to-indigo-500"
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
            <span className="text-white">Get In </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-violet-400" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-violet-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl p-8 border border-violet-500/30"
            >
              <h4 className="text-xl font-bold text-white mb-4">Quick Response</h4>
              <p className="text-gray-300 mb-4">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to call or connect via LinkedIn.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Available for new opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Send className="h-6 w-6 text-violet-400" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:from-violet-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;