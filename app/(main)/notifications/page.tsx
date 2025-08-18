"use client"
import React, { useState } from "react";
import { 
  ChevronDown, 
  ChevronRight, 
  Bell, 
  Mail, 
  AlertTriangle, 
  Info, 
  Settings, 
  CheckCircle, 
  Menu 
} from "lucide-react";

interface NotificationItem {
  title: string;
  details: string;
  time: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
}

interface ExpandedSections {
  [key: string]: boolean;
}

interface NotificationContent {
  [key: string]: NotificationItem[];
}

const NotificationsPage: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});
  const [activeCategory, setActiveCategory] = useState<string>("system");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const categories: Category[] = [
    { id: "system", title: "System Alerts", icon: <Bell className="w-4 h-4" /> },
    { id: "messages", title: "Messages", icon: <Mail className="w-4 h-4" /> },
    { id: "updates", title: "Updates", icon: <Info className="w-4 h-4" /> },
    { id: "warnings", title: "Warnings", icon: <AlertTriangle className="w-4 h-4" /> },
  ];

  const notificationContent: NotificationContent = {
    system: [
      { title: "Server restarted successfully", details: "The main server was restarted at 3:00 AM.", time: "2h ago" },
      { title: "Database backup completed", details: "A new backup was created at 12:00 AM.", time: "5h ago" },
    ],
    messages: [
      { title: "New message from Admin", details: "Please review the updated terms and conditions.", time: "1h ago" },
      { title: "Team reminder", details: "Weekly meeting scheduled for tomorrow at 10 AM.", time: "3h ago" },
    ],
    updates: [
      { title: "New feature released", details: "Dark mode is now available in settings.", time: "1 day ago" },
      { title: "Version 2.1 deployed", details: "Performance improvements and bug fixes applied.", time: "2 days ago" },
    ],
    warnings: [
      { title: "High memory usage detected", details: "Server memory usage exceeded 80%.", time: "30m ago" },
      { title: "Unusual login attempt", details: "Login attempt from unknown device in Egypt.", time: "45m ago" },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Header */}
      <div className="mb-6 sm:mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Notifications</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Stay updated with the latest alerts and messages.
          </p>
        </div>
        {/* Toggle sidebar on mobile */}
        <button 
          className="lg:hidden p-2 rounded-md border border-gray-300 dark:border-gray-600"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <div className="flex gap-6 lg:gap-8">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? "block" : "hidden"} lg:block lg:w-64 flex-shrink-0`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="font-semibold mb-4">Categories</h3>
            <nav className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSidebarOpen(false); // auto close on mobile
                  }}
                  className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors
                    ${activeCategory === category.id
                      ? "bg-blue-50 dark:bg-blue-600 text-blue-700 dark:text-white border border-blue-700"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900"
                    }`}
                >
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 capitalize">
            {categories.find(c => c.id === activeCategory)?.title}
          </h2>
          <div className="space-y-4">
            {notificationContent[activeCategory].map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleSection(`${activeCategory}-${index}`)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">{item.title}</h3>
                    <span className="text-xs text-gray-500">{item.time}</span>
                  </div>
                  {expandedSections[`${activeCategory}-${index}`] ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedSections[`${activeCategory}-${index}`] && (
                  <div className="px-4 sm:px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{item.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-blue-500 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark All as Read
          </button>
          <button className="w-full sm:w-auto bg-white dark:bg-gray-700 text-blue-600 dark:text-white border border-blue-600 dark:border-gray-600 px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors flex items-center justify-center">
            <Settings className="w-4 h-4 mr-2" />
            Notification Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
