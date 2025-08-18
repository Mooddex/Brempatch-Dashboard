"use client"
import React, { useState } from 'react';
import { 
  ChevronDown, ChevronRight, BookOpen, Settings, 
  BarChart3, Users, HelpCircle, Mail, 
  MessageCircle, ExternalLink, Download, Menu, X 
} from 'lucide-react';

interface HelpItem {
  question: string;
  answer: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
}

interface ExpandedSections {
  [key: string]: boolean;
}

interface HelpContent {
  [key: string]: HelpItem[];
}

const DashboardHelpContent: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});
  const [activeCategory, setActiveCategory] = useState<string>('getting-started');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const categories: Category[] = [
    { id: 'getting-started', title: 'Getting Started', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'dashboard-features', title: 'Dashboard Features', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'user-management', title: 'User Management', icon: <Users className="w-4 h-4" /> },
    { id: 'settings', title: 'Settings & Configuration', icon: <Settings className="w-4 h-4" /> },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const helpContent: HelpContent = {
    'getting-started': [
      {
        question: 'How do I get started with the dashboard?',
        answer: 'After logging in, you\'ll see your main dashboard overview...'
      }
    ],
    'dashboard-features': [
      {
        question: 'How do I view analytics?',
        answer: 'Navigate to the Analytics section to view charts and graphs...'
      }
    ],
    'user-management': [
      {
        question: 'How do I invite new users?',
        answer: 'Navigate to Users > Invite Users and enter email addresses...'
      }
    ],
    'settings': [
      {
        question: 'Where can I update my account settings?',
        answer: 'Click on your profile avatar > Account Settings.'
      }
    ],
    'troubleshooting': [
      {
        question: 'The dashboard is slow. What should I do?',
        answer: 'Try refreshing, clearing cache, or checking your internet connection.'
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Header */}
      <div className="mb-6 sm:mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Help Center</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Find answers to common questions and learn how to use your dashboard effectively.
          </p>
        </div>
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)} 
          className="lg:hidden p-2 rounded-md border border-gray-300 dark:border-gray-700"
        >
          {sidebarOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-64 flex-shrink-0`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="font-semibold mb-4">Categories</h3>
            <nav className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSidebarOpen(false); // close on mobile
                  }}
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-50 dark:bg-blue-600 text-blue-700 dark:text-white border-r-2 border-blue-700'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mt-6">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                <ExternalLink className="w-4 h-4 mr-2" /> User Guide (PDF)
              </a>
              <a href="#" className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                <MessageCircle className="w-4 h-4 mr-2" /> Live Chat Support
              </a>
              <a href="#" className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline">
                <Mail className="w-4 h-4 mr-2" /> Contact Support
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 capitalize">
            {categories.find(c => c.id === activeCategory)?.title}
          </h2>
          <div className="space-y-4">
            {helpContent[activeCategory].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => toggleSection(`${activeCategory}-${index}`)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <h3 className="font-medium">{item.question}</h3>
                  {expandedSections[`${activeCategory}-${index}`] ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>
                {expandedSections[`${activeCategory}-${index}`] && (
                  <div className="px-4 sm:px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-blue-500 rounded-lg p-4 sm:p-6">
          <h3 className="font-semibold text-blue-900 dark:text-white mb-2">Still need help?</h3>
          <p className="text-blue-700 dark:text-gray-300 mb-4 text-sm sm:text-base">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
              <Mail className="w-4 h-4 mr-2" /> Email Support
            </button>
            <button className="bg-white dark:bg-gray-700 text-blue-600 dark:text-white border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-600 flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" /> Live Chat
            </button>
            <button className="bg-white dark:bg-gray-700 text-blue-600 dark:text-white border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-600 flex items-center">
              <Download className="w-4 h-4 mr-2" /> Download Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHelpContent;
