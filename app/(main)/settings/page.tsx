"use client"

import { User, Shield, Bell, Palette, Globe, Database, Upload, EyeOff, Eye, Smartphone, Mail, Phone, Sun, Moon, Monitor, Volume2, VolumeX, Download, RefreshCw, Trash2, Save } from 'lucide-react';
import React, { useState } from 'react';


interface SettingsSection {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const DashboardSettings: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'Software developer with 5+ years of experience...',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    marketingEmails: false,
    securityAlerts: true,
    theme: 'system',
    language: 'en',
    timezone: 'America/New_York',
    soundEnabled: true,
    autoSave: true,
    twoFactorEnabled: false
  });

  const sections: SettingsSection[] = [
    { id: 'profile', title: 'Profile', icon: <User className="w-4 h-4" /> },
    { id: 'security', title: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'notifications', title: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'appearance', title: 'Appearance', icon: <Palette className="w-4 h-4" /> },
    { id: 'preferences', title: 'Preferences', icon: <Globe className="w-4 h-4" /> },
    { id: 'data', title: 'Data & Privacy', icon: <Database className="w-4 h-4" /> },
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Saving settings:', formData);
    // Add your save logic here
  };

  const renderProfile = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Profile Information</h3>
        
        {/* Profile Photo */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            JD
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors cursor-pointer flex items-center">
              <Upload className="w-4 h-4 mr-2" />
              Upload Photo
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">JPG, PNG up to 5MB</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bio</label>
            <textarea
              rows={4}
              value={formData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer resize-none"
              placeholder="Tell us about yourself..."
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Password & Security</h3>
        
        {/* Change Password */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-4">Change Password</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.currentPassword}
                  onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">New Password</label>
              <input
                type="password"
                value={formData.newPassword}
                onChange={(e) => handleInputChange('newPassword', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm New Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security to your account</p>
            </div>
            <button
              onClick={() => handleInputChange('twoFactorEnabled', !formData.twoFactorEnabled)}
              className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors cursor-pointer ${
                formData.twoFactorEnabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block w-4 h-4 bg-white rounded-full transition-transform ${
                  formData.twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          {formData.twoFactorEnabled && (
            <div className="mt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors cursor-pointer flex items-center">
                <Smartphone className="w-4 h-4 mr-2" />
                Setup Authenticator App
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notification Preferences</h3>
      
      {[
        { key: 'emailNotifications', title: 'Email Notifications', desc: 'Receive notifications via email', icon: <Mail className="w-4 h-4" /> },
        { key: 'pushNotifications', title: 'Push Notifications', desc: 'Receive push notifications on your devices', icon: <Bell className="w-4 h-4" /> },
        { key: 'smsNotifications', title: 'SMS Notifications', desc: 'Receive important updates via SMS', icon: <Phone className="w-4 h-4" /> },
        { key: 'marketingEmails', title: 'Marketing Emails', desc: 'Receive promotional content and updates', icon: <Mail className="w-4 h-4" /> },
        { key: 'securityAlerts', title: 'Security Alerts', desc: 'Get notified about security events', icon: <Shield className="w-4 h-4" /> },
      ].map((item) => (
        <div key={item.key} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-gray-500 dark:text-gray-400">{item.icon}</div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            </div>
            <button
              onClick={() => handleInputChange(item.key, !formData[item.key as keyof typeof formData])}
              className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors cursor-pointer ${
                formData[item.key as keyof typeof formData] ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block w-4 h-4 bg-white rounded-full transition-transform ${
                  formData[item.key as keyof typeof formData] ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAppearance = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Appearance Settings</h3>
      
      {/* Theme Selection */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Theme</h4>
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
            { value: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
            { value: 'system', label: 'System', icon: <Monitor className="w-4 h-4" /> },
          ].map((theme) => (
            <button
              key={theme.value}
              onClick={() => handleInputChange('theme', theme.value)}
              className={`p-4 border-2 rounded-lg transition-all cursor-pointer ${
                formData.theme === theme.value
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                {theme.icon}
                <span className="text-sm font-medium text-gray-900 dark:text-white">{theme.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Sound Settings */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-gray-500 dark:text-gray-400">
              {formData.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Sound Effects</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Enable sound effects for notifications</p>
            </div>
          </div>
          <button
            onClick={() => handleInputChange('soundEnabled', !formData.soundEnabled)}
            className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors cursor-pointer ${
              formData.soundEnabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <span
              className={`inline-block w-4 h-4 bg-white rounded-full transition-transform ${
                formData.soundEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">General Preferences</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
          <select
            value={formData.language}
            onChange={(e) => handleInputChange('language', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Timezone</label>
          <select
            value={formData.timezone}
            onChange={(e) => handleInputChange('timezone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
          >
            <option value="America/New_York">Eastern Time</option>
            <option value="America/Chicago">Central Time</option>
            <option value="America/Denver">Mountain Time</option>
            <option value="America/Los_Angeles">Pacific Time</option>
            <option value="Europe/London">London</option>
            <option value="Europe/Paris">Paris</option>
          </select>
        </div>
      </div>

      {/* Auto-save Toggle */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Auto-save</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Automatically save your changes</p>
          </div>
          <button
            onClick={() => handleInputChange('autoSave', !formData.autoSave)}
            className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors cursor-pointer ${
              formData.autoSave ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          >
            <span
              className={`inline-block w-4 h-4 bg-white rounded-full transition-transform ${
                formData.autoSave ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );

  const renderData = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data & Privacy</h3>
      
      {/* Export Data */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Export Your Data</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Download a copy of your data including profile information, settings, and activity history.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors cursor-pointer flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </button>
      </div>

      {/* Clear Cache */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Clear Cache</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Clear cached data to free up space and resolve potential issues.
        </p>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition-colors cursor-pointer flex items-center">
          <RefreshCw className="w-4 h-4 mr-2" />
          Clear Cache
        </button>
      </div>

      {/* Delete Account */}
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <h4 className="font-medium text-red-900 dark:text-red-400 mb-4">Delete Account</h4>
        <p className="text-sm text-red-700 dark:text-red-300 mb-4">
          Permanently delete your account and all associated data. This action cannot be undone.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors cursor-pointer flex items-center">
          <Trash2 className="w-4 h-4 mr-2" />
          Delete Account
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile': return renderProfile();
      case 'security': return renderSecurity();
      case 'notifications': return renderNotifications();
      case 'appearance': return renderAppearance();
      case 'preferences': return renderPreferences();
      case 'data': return renderData();
      default: return renderProfile();
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your account settings and preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
  {/* Sidebar */}
  <div className="lg:w-64 w-full flex-shrink-0">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
      <nav className="grid grid-cols-2 sm:grid-cols-3 lg:block gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center justify-center lg:justify-start px-3 py-2 text-sm rounded-md transition-colors cursor-pointer ${
              activeSection === section.id
                ? 'bg-blue-50 dark:bg-blue-600 text-blue-700 dark:text-white border-r-2 border-blue-700 dark:border-blue-500'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {section.icon}
            <span className="ml-2 hidden lg:inline">{section.title}</span>
          </button>
        ))}
      </nav>
    </div>
  </div>

  {/* Main Content */}
  <div className="flex-1">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      {renderContent()}

      {/* Save Button */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors cursor-pointer flex items-center justify-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default DashboardSettings;