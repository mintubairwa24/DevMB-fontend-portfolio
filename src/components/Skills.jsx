import React, { useEffect, useState } from "react";
import { Code2, Database, Zap, Globe, Brain, GitBranch, Toolbox, Wrench} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();
  const [searchParams] = useSearchParams();
  const [visibleCategories, setVisibleCategories] = useState(new Set());
  const [animatedBars, setAnimatedBars] = useState(new Set());
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  const toggleExpandedCategory = (categoryId) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  // Intersection Observer for scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryId = entry.target.id;
            setVisibleCategories((prev) => new Set([...prev, categoryId]));

            // Trigger skill bars animation quickly after card reveal
            setTimeout(() => {
              setAnimatedBars((prev) => new Set([...prev, categoryId]));
            }, 180);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll("[data-category]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const categoryId = searchParams.get("category");
    window.scrollTo({ top: 0, behavior: "auto" });

    if (!categoryId) {
      return;
    }

    const target = document.getElementById(categoryId);
    if (!target) {
      return;
    }

    const rafId = window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setHoveredCategory(categoryId);
      setVisibleCategories((prev) => new Set([...prev, categoryId]));
      setAnimatedBars((prev) => new Set([...prev, categoryId]));
    });

    const hoverResetTimeout = window.setTimeout(() => {
      setHoveredCategory(null);
    }, 1400);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(hoverResetTimeout);
    };
  }, [searchParams]);

  // Skill categories with proficiency levels.
  // Keep default visible items in `skills` (up to 6) and put extra items in `moreSkills`.
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      hoverColor: {
        dark: "from-blue-900 to-black-900",
        light: "from-sky-700 to-teal-900 hover:text-white",
      },
      iconColor: {
        dark: "text-sky-300 group-hover:text-cyan-200",
        light: "text-sky-600 group-hover:text-white",
      },
      titleColor: {
        dark: "text-white group-hover:text-cyan-100",
        light: "text-slate-900 group-hover:text-white",
      },
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 88 },
        { name: "JavaScript (ES6)", level: 84 },
        { name: "React.js", level: 86 },
        { name: "Tailwind CSS", level: 86 },
        { name: "Bootstrap", level: 90 },
      ],
      moreSkills: [
        { name: "Responsive Web Design", level: 88 },
        { name: "UI Component Design", level: 80 },
        // { name: "Vite", level: 81 },
        { name: "Redux Toolkit", level: 75 },
        { name: "Framer Motion (Animation)", level: 75 },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: Zap,
      color: "from-cyan-500 to-teal-500",
      hoverColor: {
        dark: "from-cyan-950 to-lime-800",
        light: "from-teal-800 to-green-600",
      },
      iconColor: {
        dark: "text-emerald-300 group-hover:text-lime-300",
        light: "text-emerald-600 group-hover:text-white",
      },
      titleColor: {
        dark: "text-white group-hover:text-white",
        light: "text-slate-900 group-hover:text-white",
      },
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "MongoDB", level: 75 },
        { name: "REST API Development", level: 82 },
        { name: "Authentication (JWT)", level: 70 },
        { name: "API Integration", level: 77 },
      ],
      moreSkills: [
        { name: "MVC Architecture", level: 82 },
        { name: "Server-side Architecture ", level: 68 },
        { name: "Error Handling & Middleware ", level: 72 },
        // { name: "Socket.IO", level: 72 },
        { name: "API Rate Limiting", level: 74 },
      ],
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: GitBranch,
      color: "from-green-500 to-emerald-500",
      hoverColor: {
        dark: "from-emerald-800 to-yellow-900",
        light: "from-lime-700 to-emerald-700",
      },
      iconColor: {
        dark: "text-yellow-300 group-hover:text-amber-200",
        light: "text-amber-600 group-hover:text-white",
      },
      titleColor: {
        dark: "text-white group-hover:text-white",
        light: "text-slate-900 group-hover:text-white",
      },
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Vite", level: 80 },
        { name: "Postman (API Testing)", level: 82 },
        { name: "VS Code", level: 90 },
        { name: "MongoDB Compass", level: 78 },
        { name: "Deployment (Vercel)", level: 78 },
      ],
      moreSkills: [
        { name: "npm / Package Management", level: 85 },
        { name: "Chrome DevTools", level: 82 },
        { name: "Vercel", level: 80 },
        { name: "Netlify", level: 76 },
      ],
    },

    {
      id: "languages",
      title: "Programming Languages",
      icon: Code2,
      color: "from-purple-500 to-blue-500",
      hoverColor: {
        dark: "from-fuchsia-800 to-indigo-900",
        light: "from-violet-800 to-sky-600",
      },
      iconColor: {
        dark: "text-white group-hover:text-white",
        light: "text-black group-hover:text-white",
      },
      titleColor: {
        dark: "text-white group-hover:text-fuchsia-100",
        light: "text-slate-900 group-hover:text-white",
      },
      skills: [
        { name: "JavaScript (Project Based)", level: 85 },
        { name: "C++ ( DSA )", level: 80 },
        { name: "C (Fundamentals)", level: 70 },
        { name: "Python (Basic Programming)", level: 70 },
        { name: "Java (Currently Learning)", level: 0 },
      ],
      moreSkills: [
        // { name: "", level: 68 },
        // { name: "SQL", level: 72 },
      ],
    },

    {
      id: "database",
      title: "Database & Data",
      icon: Database,
      color: "from-teal-500 to-green-500",
      hoverColor: {
        dark: "from-emerald-800 to-cyan-900",
        light: "from-green-600 to-cyan-600",
      },
      iconColor: {
        dark: "text-teal-300 group-hover:text-cyan-300",
        light: "text-teal-600 group-hover:text-white",
      },
      titleColor: {
        dark: "text-white group-hover:text-cyan-100",
        light: "text-slate-900 group-hover:text-white",
      },
      skills: [
        { name: "MongoDB (NoSQL Database)", level: 80 },
        { name: "Mongoose ODM (Schema & Data Modeling)", level: 78},
        { name: "CRUD Operations", level: 85 },
        { name: "Data Modeling (Schema Structure)", level: 72 },
        { name: "MongoDB Atlas (Cloud Database)", level: 75 },
      ],
      moreSkills: [
        // { name: "Aggregation Pipeline", level: 70 },
        // { name: "Database Indexing", level: 66 },
      ],
    },

    {
      id: "cs",
      title: "Core CS Fundamentals",
      icon: Brain,
      color: "from-emerald-500 to-blue-500",
      hoverColor: {
        dark: "from-indigo-700 to-cyan-900",
        light: "from-indigo-600 to-blue-800",
      },
      iconColor: {
        dark: "text-indigo-300 group-hover:text-blue-200",
        light: "text-indigo-600 group-hover:text-white",
      },
      titleColor: {
        dark: "text-white group-hover:text-blue-100",
        light: "text-slate-900 group-hover:text-white",
      },
      skills: [
        { name: "Problem Solving", level: 82 },
        { name: "Object Oriented Programming (OOPs)", level: 80 },
        { name: "DBMS", level: 75 },
        { name: "Operating Systems", level: 72 },
        { name: "Computer Networks", level: 70 },
        { name: "Software Engineering", level: 74 },
      ],
      moreSkills: [
        { name: "System Design Basics", level: 65 },
        // { name: "Problem Solving", level: 82 },
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 to-white"}`}
    >
      {/* Animated background elements */}
      <div className="fixed inset-0  ">
        {/* Gradient mesh background */}
        <div
          className={`absolute top-0 -left-40 w-96 h-96 animate-fade-in-up rounded-full mix-blend-multiply opacity-20 blur-3xl animate-pulse ${
            isDark
              ? "bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400"
              : "bg-gradient-to-br from-purple-300 via-blue-200 to-cyan-200"
          }`}
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
        <div
          className={`absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse ${
            isDark
              ? "bg-gradient-to-tl from-cyan-500 via-blue-500 to-purple-500"
              : "bg-gradient-to-tl from-cyan-300 via-blue-200 to-purple-200"
          }`}
          style={{
            animation: "float 6s ease-in-out infinite ",
            animationDirection: "reverse",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-22 pb-20 animate-fade-in-up">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Professional Summary */}
          <div
            className={`inline-block px-6 py-1  rounded-full mb-8 backdrop-blur-sm ${
              isDark
                ? "bg-gradient-to-r from-blue-00 via-purple-500 to-cyan-900 hover:shadow-lg hover:shadow-blue-400 "
                : "bg-gradient-to-r from-blue-200 via-purple-600 to-cyan-600 hover:shadow-lg text-white hover:shadow-blue-400"
            }`}
          >
            <Wrench
              className={`w-4 h-4 inline-block ${isDark ? "text-blue-500" : "text-blue-700"}`}
            />{" "}
            <p className="text-sm inline-block text-white font-semibold tracking-wider uppercase">
              Technical Expertise
            </p>
          </div>

          {/* Main Heading with Gradient */}
          <h1
            className={`text-6xl md:text-7xl font-black mb-6 bg-clip-text text-transparent ${
              isDark
                ? "bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600"
                : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            }`}
          >
            Technical Skills
          </h1>

          {/* Professional Description */}
          <p
            className={`text-lg md:text-xl  mx-auto leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
              Full Stack MERN Developer with strong CS fundamentals,
            </span>{" "}
            building scalable web applications, solving complex problems with
            Data Structures & Algorithms, and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
              exploring AI-driven technologies.
            </span>{" "}
            with strong CS fundamentals.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border:black gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isVisible = visibleCategories.has(category.id);
            const isBarsAnimated = animatedBars.has(category.id);
            const shouldAnimateBars =
              isBarsAnimated || hoveredCategory === category.id;
            const hoverGradient = isDark
              ? category.hoverColor.dark
              : category.hoverColor.light;
            const iconColorClass = isDark
              ? category.iconColor.dark
              : category.iconColor.light;
            const titleColorClass = isDark
              ? category.titleColor.dark
              : category.titleColor.light;
            const isExpanded = expandedCategories.has(category.id);
            const primarySkills = category.skills.slice(0, 6);
            const extraSkills = category.moreSkills || [];
            const skillsToRender = isExpanded
              ? [...primarySkills, ...extraSkills]
              : primarySkills;
            const skillNameClass = isDark
              ? "text-slate-300 group-hover/skill:text-cyan-300"
              : "text-slate-800 group-hover:text-white group-hover:[text-shadow:0_0_12px_rgba(255,255,255,0.9)]";
            const skillLevelClass = isDark
              ? "text-cyan-400/70 group-hover/skill:text-cyan-400"
              : "text-blue-700/80 group-hover:text-white group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.85)]";

            return (
              <div
                key={category.id}
                id={category.id}
                data-category
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`group relative transition-all duration-450 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 60}ms`,
                  scrollMarginTop: "110px",
                }}
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                    isDark
                      ? `bg-gradient-to-r ${hoverGradient} opacity-10`
                      : `bg-gradient-to-r ${hoverGradient} opacity-5`
                  }`}
                />

                {/* Glass Card Container */}
                <div
                  className={`relative backdrop-blur-2xl rounded-2xl p-8 h-full transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 ${
                    isDark
                      ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40 shadow-2xl"
                      : "bg-gradient-to-br from-white/40 to-white/20 border border-white/30 hover:border-white/60 shadow-lg"
                  }`}
                >
                  {/* Inner Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isDark
                        ? `bg-gradient-to-r ${hoverGradient} opacity-5`
                        : `bg-gradient-to-r ${hoverGradient} opacity-5`
                    }`}
                  />

                  {/* Category Header */}
                  <div className="relative z-10 mb-8">
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`p-3 rounded-lg backdrop-blur-xl transition-all duration-300 group-hover:scale-110 ${
                          isDark
                            ? `bg-gradient-to-br ${category.color} bg-opacity-20`
                            : `bg-gradient-to-br ${category.color} bg-opacity-30 hover:text-white`
                        }`}
                      >
                        <IconComponent
                          className={`w-6 h-6 transition-all duration-300 ${iconColorClass}`}
                        />
                      </div>
                      <h3
                        className={`text-xl font-black leading-tight transition-colors duration-300 ${titleColorClass}`}
                      >
                        {category.title}
                      </h3>
                    </div>
                    <div
                      className={`h-1 w-12 rounded-full transition-all duration-500 ${
                        isVisible ? "scale-x-100" : "scale-x-0"
                      } origin-left bg-gradient-to-r ${category.color}`}
                    />
                  </div>

                  {/* Skills List with Animated Bars */}
                  <div className="relative z-10 space-y-5">
                    {skillsToRender.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/skill transition-all duration-500"
                      >
                        {/* Skill Name & Level */}
                        <div className="flex justify-between items-center mb-2">
                          <span
                            className={`text-sm font-semibold transition-all duration-300 ${skillNameClass}`}
                          >
                            {skill.name}
                          </span>
                          <span
                            className={`text-xs font-bold transition-all duration-300 ${skillLevelClass}`}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        {/* Animated Skill Bar */}
                        <div
                          className={`relative h-2 rounded-full overflow-hidden backdrop-blur-sm ${
                            isDark ? "bg-white/10" : "bg-slate-200/50"
                          }`}
                        >
                          {/* Bar Background Glow */}
                          <div
                            className={`absolute inset-0 rounded-full blur-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 ${
                              isDark
                                ? `bg-gradient-to-r ${category.color} opacity-30`
                                : `bg-gradient-to-r ${category.color} opacity-20`
                            }`}
                          />

                          {/* Animated Fill Bar */}
                          <div
                            className={`relative h-full rounded-full transition-all duration-500 ease-out origin-left ${
                              shouldAnimateBars ? "scale-x-100" : "scale-x-0"
                            } bg-gradient-to-r ${category.color} shadow-lg`}
                            style={{
                              width: shouldAnimateBars
                                ? `${skill.level}%`
                                : "0%",
                              transitionDelay: `${skillIndex * 70}ms`,
                            }}
                          >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
                          </div>

                          {/* Trailing Glow */}
                          <div
                            className={`absolute top-0 right-0 h-full w-8 rounded-full blur-lg transition-all duration-500 ease-out ${
                              shouldAnimateBars ? "opacity-50" : "opacity-0"
                            } ${
                              isDark
                                ? "bg-gradient-to-r from-white/40 to-transparent"
                                : "bg-gradient-to-r from-white/60 to-transparent"
                            }`}
                            style={{
                              right: shouldAnimateBars
                                ? `calc(${skill.level}% - 16px)`
                                : "100%",
                              transitionDelay: `${skillIndex * 70}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Per-card expand toggle for additional skills */}
                  <div
                    className={`relative z-10 mt-8 pt-6 border-t ${isDark ? "border-white/10" : "border-slate-300/70"}`}
                  >
                    {extraSkills.length > 0 && (
                      <button
                        type="button"
                        onClick={() => toggleExpandedCategory(category.id)}
                        className={`text-xs px-3 py-1 rounded-full backdrop-blur-xl transition-colors duration-300 ${
                          isDark
                            ? "bg-white/10 text-slate-300 border border-white/20 hover:bg-white/20"
                            : "bg-slate-200/30 text-slate-700 border border-slate-300/30 hover:bg-slate-200/50"
                        }`}
                      >
                        {isExpanded
                          ? "Show less"
                          : `+${extraSkills.length} more skills`}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call-to-Action Section */}
        <div
          className={`mt-20 pt-20 border-t transition-colors duration-300 ${
            isDark ? "border-white/10" : "border-slate-300/20"
          }`}
        >
          <div className="text-center">
            <p
              className={`text-lg mb-6 ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Want to see these skills in action?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <a
                href="/projects"
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-xl ${
                  isDark
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/50"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-blue-400/50"
                }`}
              >
                View My Projects →
              </a> */}
              <a
                href="/contact"
                className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 backdrop-blur-xl ${
                  isDark
                    ? "border-white/20 text-white hover:bg-white/10  hover:border-blue-600 hover:shadow-blue-500 hover:shadow-lg"
                    : "border-slate-400 text-slate-900 hover:bg-slate-100  hover:border-blue-600 hover:shadow-blue-500 hover:shadow-lg"
                }`}
              >
                Let's Connect            
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0px) translateX(0px);
          }
          75% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }       

        /* Smooth scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 5px;
          transition: background 0.3s;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.8);
        }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-pulse {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 1;
            }
          
        `}</style>
    </div>
  );
};

export default Skills;
