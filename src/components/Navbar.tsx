import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/technologies', label: 'Technologies' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-violet-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Settings className="h-8 w-8 text-violet-500 animate-spin-slow" />
            <span className="text-xl font-bold text-white">
              Ananya<span className="text-violet-500">Sharma</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-violet-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200 group"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="h-5 w-5 text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-violet-400" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-violet-500/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-violet-400 bg-violet-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;