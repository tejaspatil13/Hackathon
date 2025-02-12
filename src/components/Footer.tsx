import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span className="font-bold text-xl">EduCareer</span>
            </div>
            <p className="text-gray-400">
              Empowering students with AI-driven insights for better educational and career decisions.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Education</h3>
            <ul className="space-y-2">
              <li><Link to="/admission-predictor" className="text-gray-400 hover:text-white">Admission Predictor</Link></li>
              <li><Link to="/opportunities" className="text-gray-400 hover:text-white">Opportunities</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Career</h3>
            <ul className="space-y-2">
              <li><Link to="/job-market" className="text-gray-400 hover:text-white">Job Market</Link></li>
              <li><Link to="/career-recommendation" className="text-gray-400 hover:text-white">Career Guidance</Link></li>
              <li><Link to="/ai-assistant" className="text-gray-400 hover:text-white">AI Assistant</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EduCareer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;