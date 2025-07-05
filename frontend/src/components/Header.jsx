import React from "react";
import {
  Code,
  Trophy,
  Users,
  BookOpen,
  Settings,
  Bell,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg shadow-lg dark:shadow-dark-700/20 border-b border-gray-200 dark:border-dark-700 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group">
              <div className="relative">
                <Code className="h-8 w-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-200" />
                <div className="absolute inset-0 bg-primary-600 dark:bg-primary-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-200"></div>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent">
                DevClash
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            <a
              href="#"
              className="relative px-4 py-2 text-primary-600 dark:text-primary-400 font-medium text-sm rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all duration-200"
            >
              Problems
              <div className="absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400"></div>
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-all duration-200"
            >
              Contests
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-all duration-200"
            >
              Discuss
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-all duration-200"
            >
              Interview
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-800 transition-all duration-200 group"
            >
              {isDark ? (
                <Sun className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
              ) : (
                <Moon className="h-5 w-5 group-hover:-rotate-12 transition-transform duration-200" />
              )}
            </button>

            {/* Notifications */}
            <button className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-800 transition-all duration-200 group">
              <Bell className="h-5 w-5 group-hover:animate-bounce-subtle" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">2</span>
              </span>
            </button>

            {/* Settings */}
            <button className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-800 transition-all duration-200 group">
              <Settings className="h-5 w-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200 dark:border-dark-700">
              <div className="relative">
                <div className="h-8 w-8 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 rounded-full flex items-center justify-center ring-2 ring-primary-100 dark:ring-primary-900/50 hover:ring-4 transition-all duration-200">
                  <span className="text-white text-sm font-bold">JD</span>
                </div>
                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-dark-900"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                  John Doe
                </span>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Pro Member
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
