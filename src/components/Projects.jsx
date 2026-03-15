import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  Star,
  Users,
  Calendar,
  ArrowRight,
  Award,
  ShoppingBag,
  ClipboardCheck,
  CloudSun,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const { isDark } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      tagline:
        "Full-stack MERN e-commerce platform with authentication, product management, shopping cart, and secure payment integration.",
      icon: ShoppingBag,
      status: "Completed",
      date: "Jan 2024",
      rating: 4.8,
      team: "Solo",
      description:
        "A complete e-commerce platform built with modern technologies. Features include user authentication, product catalog with filters, shopping cart, payment integration with Stripe, and admin dashboard for inventory management.",
      features: [
        "User authentication with JWT",
        "Product catalog with advanced filtering",
        "Shopping cart with persistent storage",
        "Stripe payment integration",
        "Admin dashboard for product management",
        "Order tracking system",
        "Responsive design",
      ],
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Stripe API",
        "Tailwind CSS",
        "Redux",
      ],
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
      metrics: {
        users: "500+",
        products: "1000+",
        revenue: "Test Mode",
      },
    },
    {
      id: 2,
      title: "Task Management App",
      tagline:
        "Real-time task management application for organizing workflows, managing tasks, and improving productivity.",
      icon: ClipboardCheck,
      status: "Completed",
      date: "Dec 2023",
      rating: 4.7,
      team: "2 people",
      description:
        "A real-time collaborative task management application that allows teams to organize, assign, and track tasks. Built with WebSockets for real-time updates and MongoDB for flexible data management.",
      features: [
        "Real-time task updates with Socket.io",
        "User collaboration and team management",
        "Task prioritization and status tracking",
        "Comments and attachments on tasks",
        "Activity timeline",
        "Dark/Light theme support",
        "Mobile responsive design",
      ],
      tech: [
        "React.js",
        "Express.js",
        "Socket.io",
        "MongoDB",
        "JWT Auth",
        "Tailwind CSS",
      ],
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
      metrics: {
        teams: "50+",
        tasks: "5000+",
        users: "150+",
      },
    },
    {
      id: 3,
      title: "Weather Dashboard",
      tagline:
        "Modern weather dashboard that fetches real-time weather data from APIs and displays it through a clean and responsive interface.",
      icon: CloudSun,
      status: "Completed",
      date: "Nov 2023",
      rating: 4.5,
      team: "Solo",
      description:
        "A feature-rich weather application that provides current weather conditions, hourly forecasts, and 14-day predictions. Integrates with OpenWeather API and uses geolocation for automatic location detection.",
      features: [
        "Current weather with detailed info",
        "Hourly and 14-day forecasts",
        "Geolocation-based weather",
        "Search locations globally",
        "Weather alerts system",
        "Temperature unit conversion",
        "Responsive design",
      ],
      tech: [
        "React.js",
        "OpenWeather API",
        "Tailwind CSS",
        "Axios",
        "React Hooks",
      ],
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
      metrics: {
        locations: "10000+",
        requests: "50000+",
        ratings: "4.5/5",
      },
    },
  ];

  const current = projects[selectedProject];

  useEffect(() => {
    const projectParam = Number(searchParams.get("project"));

    if (
      !Number.isNaN(projectParam) &&
      projectParam >= 1 &&
      projectParam <= projects.length
    ) {
      setSelectedProject(projectParam - 1);
    }
  }, [searchParams, projects.length]);

  const handleSelectProject = (idx) => {
    setSelectedProject(idx);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("project", String(projects[idx].id));
    setSearchParams(nextParams);
  };

  return (
    <div
      className={`w-full ${isDark ? "text-white" : "text-slate-900"} py-6 sm:py-8`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center animate-fade-in-up mb-20 ">
          {/* Professional Summary */}
          <div
            className={`inline-block px-6 py-2 rounded-full mb-6 backdrop-blur-xl   ${
              isDark
                ? "bg-gradient-to-r from-blue-00 via-purple-500 to-cyan-900 hover:shadow-lg hover:shadow-blue-400 "
                : "bg-gradient-to-r from-blue-200 via-purple-600 to-cyan-600 hover:shadow-lg text-white hover:shadow-blue-400"
            }`}
          >
            <Award
              className={`w-4 h-4 inline-block ${isDark ? "text-blue-500" : "text-blue-700"}`}
            />{" "}
            <p className="text-sm inline-block font-semibold tracking-wider uppercase">
              FEATURED WORK
            </p>
          </div>

          {/* Main Heading with Gradient */}
          <h1
            className={`text-6xl md:text-7xl font-black mb-10 bg-clip-text text-transparent ${
              isDark
                ? "bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            }`}
          >
            Featured Projects
          </h1>

          {/* Professional Description */}
          <p
            className={`text-base sm:text-xl ${isDark ? "text-slate-200" : "text-slate-600"}`}
          >
            A collection of real-world projects showcasing
          </p>
          <p
            className={`text-lg md:text-xl mx-auto leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            my skills in full-stack development, problem solving,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
              scalable and modern web applications,
            </span>{" "}
            with strong CS fundamentals.
          </p>
        </div>

        {/* Projects Tabs */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3  gap-4 mb-10 sm:mb-12 `}
        >
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => handleSelectProject(idx)}
              className={`animate-fade-in-up p-6 rounded-xl text-left transition-all border-2 duration-500  ${
                selectedProject === idx
                  ? isDark
                    ? "border-2 border-white/50 text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-white/10"
                    : "border-2 border-slate-400 text-slate-900  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-slate-200"
                  : isDark
                    ? "bg-white/10 border border-white/10 hover:border-white/20"
                    : "bg-slate-200/20 border border-slate-400 hover:border-slate-300/30"
              }`}
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <project.icon
                className={`w-8 h-8 mb-3 ${isDark ? "text-cyan-300" : "text-cyan-700"}`}
              />
              <h3
                className={`font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {project.title}
              </h3>
              <p
                className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                {project.tagline}
              </p>
            </button>
          ))}
        </div>

        {/* Project Details */}
        <div
          className={`animate-fade-in-up rounded-2xl overflow-hidden border-2 ${isDark ? "bg-white/10 border border-white/10  hover:border-blue-600 hover:shadow-xl hover:shadow-blue-400" : "bg-slate-200/20 border border-slate-300/20  hover:border-blue-600 hover:shadow-xl hover:shadow-blue-400"}`}
        >
          <div
            key={current.id}
            className={`animate-pop-in p-6 sm:p-8 md:p-12 ${isDark ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/10" : "bg-gradient-to-br from-blue-400/20 to-cyan-400/10"}`}
          >
            {/* Title Section */}
            <div className="mb-8 animate-fade-in-up">
              <current.icon
                className={`w-12 h-12 mb-4 ${isDark ? "text-cyan-300" : "text-cyan-700"}`}
              />
              <h2
                className={`text-3xl sm:text-4xl font-black mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {current.title}
              </h2>
              <p
                className={`text-base sm:text-lg mb-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}
              >
                {current.description}
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "80ms" }}
                >
                  <p
                    className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Status
                  </p>
                  <p
                    className={`font-bold ${isDark ? "text-cyan-400" : "text-cyan-600"}`}
                  >
                    {current.status}
                  </p>
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "130ms" }}
                >
                  <p
                    className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Completed
                  </p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <p
                      className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {current.date}
                    </p>
                  </div>
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "180ms" }}
                >
                  <p
                    className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Rating
                  </p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <p
                      className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {current.rating}
                    </p>
                  </div>
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "230ms" }}
                >
                  <p
                    className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Team
                  </p>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <p
                      className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {current.team}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
              {/* Features */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "120ms" }}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {current.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="animate-fade-in-up flex items-start gap-3"
                      style={{ animationDelay: `${180 + idx * 45}ms` }}
                    >
                      <ArrowRight
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}
                      />
                      <span
                        className={isDark ? "text-slate-300" : "text-slate-700"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "160ms" }}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Project Metrics
                </h3>
                <div className="space-y-4">
                  {Object.entries(current.metrics).map(([key, value], idx) => (
                    <div
                      key={key}
                      className={`animate-fade-in-up p-4 border-2 rounded-lg ${isDark ? "bg-white/5" : "bg-white/50"} isDark
                        ? "border-2 border-white/20 text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500 hover:bg-white/10"
                        : "border-2 border-slate-400 text-slate-900  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-slate-200"`}
                      style={{ animationDelay: `${220 + idx * 60}ms` }}
                    >
                      <p
                        className={`text-sm font-semibold mb-1 ${isDark ? "text-slate-400" : "text-slate-600"} capitalize`}
                      >
                        {key}
                      </p>
                      <p
                        className={`text-2xl font-bold ${isDark ? "text-cyan-400" : "text-cyan-600"}`}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div
              className="mb-8 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"} `}
              >
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {current.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`animate-fade-in-up px-4 py-2 rounded-full font-semibold border-2 transition-all ${
                      isDark
                        ? "bg-white/10 border-white/20 text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500 hover:bg-white/15"
                        : "bg-slate-100 border-slate-400/70 text-slate-900 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500 hover:bg-slate-200"
                    }`}
                    style={{ animationDelay: `${260 + idx * 40}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href={current.links.demo}
                className={`animate-fade-in-up flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                  isDark
                    ? "bg-blue-400 hover:bg-blue-600 text-white"
                    : "bg-blue-400 hover:bg-blue-700 text-white"
                }`}
                style={{ animationDelay: "280ms" }}
              >
                <span>View Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={current.links.github}
                className={`animate-fade-in-up flex items-center gap-2 px-6 py-3 rounded-lg font-bold border transition-all ${
                  isDark
                    ? "border-2 border-white/20 text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-white/10"
                    : "border-2 border-slate-400 text-slate-900  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-slate-200"
                }`}
                style={{ animationDelay: "330ms" }}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.985) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.55s ease-out both;
        }

        .animate-pop-in {
          animation: popIn 0.4s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Projects;
