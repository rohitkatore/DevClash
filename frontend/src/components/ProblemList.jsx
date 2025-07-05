import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Clock,
  CheckCircle,
  Circle,
  Star,
  Code,
  Database,
  Zap,
  Brain,
  Hash,
  TreePine,
  Layers,
  Target,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ProblemList = () => {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Mock data for problems
  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      topic: "Arrays",
      description: "Find two numbers in an array that add up to a target sum",
      completed: true,
      acceptanceRate: 47.5,
      submissions: 1250000,
      likes: 1520,
      companies: ["Google", "Amazon", "Microsoft"],
      timeEstimate: "15 min",
    },
    {
      id: 2,
      title: "Binary Tree Inorder Traversal",
      difficulty: "Medium",
      topic: "Trees",
      description: "Traverse a binary tree in inorder and return the values",
      completed: false,
      acceptanceRate: 74.3,
      submissions: 890000,
      likes: 892,
      companies: ["Facebook", "Apple", "Netflix"],
      timeEstimate: "25 min",
    },
    {
      id: 3,
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      topic: "Linked Lists",
      description:
        "Merge k sorted linked lists and return it as one sorted list",
      completed: false,
      acceptanceRate: 42.1,
      submissions: 567000,
      likes: 2103,
      companies: ["Amazon", "Microsoft", "Google"],
      timeEstimate: "45 min",
    },
    {
      id: 4,
      title: "Valid Parentheses",
      difficulty: "Easy",
      topic: "Stacks",
      description: "Check if a string of parentheses is valid",
      completed: true,
      acceptanceRate: 40.7,
      submissions: 1100000,
      likes: 1876,
      companies: ["Google", "Facebook", "Amazon"],
      timeEstimate: "20 min",
    },
    {
      id: 5,
      title: "Maximum Subarray",
      difficulty: "Medium",
      topic: "Dynamic Programming",
      description: "Find the contiguous subarray with the largest sum",
      completed: false,
      acceptanceRate: 49.5,
      submissions: 780000,
      likes: 1456,
      companies: ["Microsoft", "Apple", "LinkedIn"],
      timeEstimate: "30 min",
    },
    {
      id: 6,
      title: "N-Queens",
      difficulty: "Hard",
      topic: "Backtracking",
      description:
        "Place N queens on an N×N chessboard so that no two queens attack each other",
      completed: false,
      acceptanceRate: 59.8,
      submissions: 234000,
      likes: 987,
      companies: ["Amazon", "Google", "Facebook"],
      timeEstimate: "60 min",
    },
    {
      id: 7,
      title: "Palindrome Number",
      difficulty: "Easy",
      topic: "Math",
      description: "Determine whether an integer is a palindrome",
      completed: true,
      acceptanceRate: 50.2,
      submissions: 1350000,
      likes: 2234,
      companies: ["Apple", "Microsoft", "Google"],
      timeEstimate: "15 min",
    },
    {
      id: 8,
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      topic: "Strings",
      description: "Find the longest palindromic substring in a string",
      completed: false,
      acceptanceRate: 33.1,
      submissions: 920000,
      likes: 1678,
      companies: ["Facebook", "Amazon", "Netflix"],
      timeEstimate: "35 min",
    },
  ];

  const topics = [
    "all",
    "Arrays",
    "Trees",
    "Linked Lists",
    "Stacks",
    "Dynamic Programming",
    "Backtracking",
    "Math",
    "Strings",
  ];
  const difficulties = ["all", "Easy", "Medium", "Hard"];
  const statuses = ["all", "completed", "not-completed"];

  const getTopicIcon = (topic) => {
    const iconMap = {
      Arrays: Hash,
      Trees: TreePine,
      "Linked Lists": Layers,
      Stacks: Database,
      "Dynamic Programming": Brain,
      Backtracking: Target,
      Math: Zap,
      Strings: Code,
    };
    return iconMap[topic] || Circle;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg shadow-green-400/25";
      case "Medium":
        return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-400/25";
      case "Hard":
        return "bg-gradient-to-r from-red-400 to-red-500 text-white shadow-lg shadow-red-400/25";
      default:
        return "bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg shadow-gray-400/25";
    }
  };

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const matchesSearch =
        problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        problem.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty =
        selectedDifficulty === "all" ||
        problem.difficulty === selectedDifficulty;
      const matchesTopic =
        selectedTopic === "all" || problem.topic === selectedTopic;
      const matchesStatus =
        selectedStatus === "all" ||
        (selectedStatus === "completed" && problem.completed) ||
        (selectedStatus === "not-completed" && !problem.completed);

      return (
        matchesSearch && matchesDifficulty && matchesTopic && matchesStatus
      );
    });
  }, [searchTerm, selectedDifficulty, selectedTopic, selectedStatus]);

  const stats = useMemo(() => {
    const total = problems.length;
    const completed = problems.filter((p) => p.completed).length;
    const easy = problems.filter((p) => p.difficulty === "Easy").length;
    const medium = problems.filter((p) => p.difficulty === "Medium").length;
    const hard = problems.filter((p) => p.difficulty === "Hard").length;

    return { total, completed, easy, medium, hard };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 transition-colors duration-300">
      {/* Page Header */}
      <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-lg shadow-xl dark:shadow-dark-700/20 border-b border-gray-200 dark:border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent animate-fade-in">
                  Problems
                </h1>
                <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
                  Solve coding challenges and improve your programming skills ⚡
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:ml-6">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 dark:text-green-400 font-medium">
                      Easy: {stats.easy}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-2 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-yellow-700 dark:text-yellow-400 font-medium">
                      Medium: {stats.medium}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-700 dark:text-red-400 font-medium">
                      Hard: {stats.hard}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Progress
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stats.completed}/{stats.total} solved
              </span>
            </div>
          </div>
          <div className="relative w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full transition-all duration-700 ease-out shadow-lg"
              style={{ width: `${(stats.completed / stats.total) * 100}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-lg rounded-2xl shadow-xl dark:shadow-dark-700/20 border border-gray-200 dark:border-dark-700 p-6 mb-8 animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5 group-focus-within:text-primary-500 transition-colors duration-200" />
                <input
                  type="text"
                  placeholder="Search problems..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 min-w-[140px] transition-all duration-200"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === "all" ? "All Difficulties" : difficulty}
                  </option>
                ))}
              </select>

              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 min-w-[140px] transition-all duration-200"
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic === "all" ? "All Topics" : topic}
                  </option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 min-w-[140px] transition-all duration-200"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status === "all"
                      ? "All Problems"
                      : status === "completed"
                      ? "Completed"
                      : "Not Completed"}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Problem List */}
        <div className="space-y-6">
          {filteredProblems.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-lg rounded-2xl shadow-xl dark:shadow-dark-700/20 border border-gray-200 dark:border-dark-700 p-12">
                <Filter className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  No problems found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Try adjusting your filters or search criteria
                </p>
              </div>
            </div>
          ) : (
            filteredProblems.map((problem, index) => {
              const TopicIcon = getTopicIcon(problem.topic);
              return (
                <div
                  key={problem.id}
                  className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-lg rounded-2xl shadow-xl dark:shadow-dark-700/20 border border-gray-200 dark:border-dark-700 hover:shadow-2xl dark:hover:shadow-dark-700/40 transition-all duration-300 hover:scale-[1.01] group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          {problem.completed ? (
                            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 animate-bounce-subtle" />
                          ) : (
                            <Circle className="h-6 w-6 text-gray-400 dark:text-gray-500 flex-shrink-0 group-hover:text-primary-500 transition-colors duration-200" />
                          )}
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors duration-200 group-hover:scale-105">
                            {problem.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                          {problem.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                          <div className="flex items-center space-x-2 bg-gray-50 dark:bg-dark-700 px-3 py-2 rounded-lg">
                            <TopicIcon className="h-4 w-4" />
                            <span className="font-medium">{problem.topic}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 dark:bg-dark-700 px-3 py-2 rounded-lg">
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">
                              {problem.timeEstimate}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 dark:bg-dark-700 px-3 py-2 rounded-lg">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="font-medium">{problem.likes}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 dark:bg-dark-700 px-3 py-2 rounded-lg">
                            <Users className="h-4 w-4" />
                            <span className="font-medium">
                              {problem.acceptanceRate}% acceptance
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {problem.companies.map((company) => (
                            <span
                              key={company}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg shadow-blue-400/25 hover:shadow-blue-400/40 transition-shadow duration-200"
                            >
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-4 ml-6">
                        <span
                          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105 ${getDifficultyColor(
                            problem.difficulty
                          )}`}
                        >
                          {problem.difficulty}
                        </span>
                        <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800">
                          {problem.completed ? "✨ Solve Again" : "🚀 Solve"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Load More Button */}
        {filteredProblems.length > 0 && (
          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-600 text-gray-700 dark:text-gray-200 rounded-xl hover:from-gray-200 hover:to-gray-300 dark:hover:from-dark-600 dark:hover:to-dark-500 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800">
              Load More Problems 📚
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemList;
