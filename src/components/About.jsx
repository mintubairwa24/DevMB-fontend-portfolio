import React, { useEffect, useState } from "react";
import {
  Code2,
  Zap,
  Database,
  GitBranch,
  ArrowRight,
  Sparkles,
  Terminal,
  Braces,
  Cpu,
  Server,
  Bot,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDark } = useTheme();
  const [visibleElements, setVisibleElements] = useState(new Set());

  const theme = {
    bg: {
      main: isDark
        ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        : "bg-gradient-to-br from-slate-50 via-white to-slate-100",
      card: isDark
        ? "bg-gradient-to-br from-white/10 to-white/5"
        : "bg-gradient-to-br from-white/40 to-white/20",
      hover: isDark ? "hover:bg-white/15" : "hover:bg-white/30",
    },
    border: {
      base: isDark ? "border-white/20" : "border-white/30",
      hover: isDark ? "hover:border-white/40" : "hover:border-white/60",
    },
    text: {
      primary: isDark ? "text-white" : "text-slate-900",
      secondary: isDark ? "text-slate-300" : "text-slate-700",
      tertiary: isDark ? "text-slate-400" : "text-slate-600",
    },
    badge: isDark
      ? "bg-white/5 border-white/20 text-cyan-400"
      : "bg-blue-100/30 border-blue-300/50 text-blue-700",
    glow: isDark
      ? "from-purple-600 to-cyan-600"
      : "from-purple-300 to-cyan-400",
  };

  const mindset = [
    {
      title: "Problem-Solving Architecture",
      description:
        "Breaking down complex problems into scalable, elegant solutions with performance-first thinking.",
      icon: "🎯",
    },
    {
      title: "Clean Code Philosophy",
      description:
        "Writing readable, maintainable code with clear naming conventions and proper documentation.",
      icon: "📐",
    },
    {
      title: "Scalable Mindset",
      description:
        "Designing systems that grow seamlessly, anticipating future requirements and bottlenecks.",
      icon: "📈",
    },
    {
      title: "User-First Engineering",
      description:
        "Building beautiful UIs that perform exceptionally, with accessibility and responsiveness in mind.",
      icon: "👥",
    },
  ];

  // Intersection Observer for scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.id;
          setVisibleElements((prev) => new Set([...prev, elementId]));
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0 },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Code2,
      skills: [
        "Building interactive interfaces with React.js",
        "Writing modern JavaScript (ES6+)",
        "Creating responsive UI layouts",
        "Styling with Tailwind CSS",
        "Developing reusable components",
        "Integrating APIs with frontend applications",
        "Improving UI performance and user experience",
        // "Lazy Loading & Code Splitting",
      ],
      color: "from-blue-800 to-cyan-900",
    },
    {
      title: "Backend Engineering",
      icon: Zap,
      skills: [
        "Developing APIs using Node.js and Express",
        "Designing RESTful API structures",
        "Implementing authentication using JWT",
        "Handling middleware and routing",
        "Connecting backend services with databases",
        "Basic error handling and backend optimization",
      ],
      color: "from-purple-800 to-blue-900",
    },
    {
      title: "Database Architecture",
      icon: Database,
      skills: [
        "Working with MongoDB",
        "Designing simple data models",
        "Implementing CRUD operations",
        "Writing optimized queries",
        "Understanding indexing basics",
        "Managing application data efficiently",
        "Performance Tuning",
        "Data Validation",
      ],
      color: "from-green-700 to-teal-800",
    },
    {
      title: "AI & Modern Tech",
      icon: GitBranch,
      skills: [
        "Exploring AI API Integrations",
        "Learning Prompt Engineering Basics",
        "Experimenting with OpenAI APIs",
        "AI-powered UI Ideas",
        "Understanding how AI can enhance web applications",
        "Automation Mindset",
        "Future-ready Tech Stack",
        "Emerging Technologies",
        "Innovation Exploration",
      ],
      color: "from-orange-700 to-pink-900",
    },
  ];

  const journey = [
    {
      year: "2021",
      title: "Started Learning Programming",
      description:
        "Began learning programming with C and C++, focusing on understanding basic programming concepts and logical thinking.",
      icon: (
        <Terminal className={`w-10 h-10 text-cyan-300 drop-shadow-[0_0_14px_rgba(34,211,238,0.9)] rotate-6 animate-[spin_10s_linear_infinite] ${ isDark ? " " : "border shadow-lg border-slate-300 rounded " }`} />
      ),
    },
    {
      year: "2022",
      title: "First Web Development Projects",
      description:
        "Built my first static websites using HTML, CSS, and JavaScript, which sparked my interest in web development.",
      icon: (
        <Braces className={`w-10 h-10 text-purple-300 drop-shadow-[0_0_14px_rgba(168,85,247,0.9)] -rotate-6 animate-[float_3.2s_ease-in-out_infinite]  ${ isDark ? " " : "border shadow-lg border-slate-300 rounded " }`} />
      ),
    },
    {
      year: "2023",
      title: "Learning React and Modern Frontend",
      description:
        "Started learning React.js and building more interactive and responsive web applications.",
      icon: (
        <Cpu className={`w-10 h-10 text-blue-300 drop-shadow-[0_0_14px_rgba(59,130,246,0.9)] animate-pulse ${ isDark ? " " : "border shadow-lg border-slate-300 rounded " } `} />
      ),
    },
    {
      year: "2024",
      title: "Full-Stack Development with MERN",
      description:
        "Began developing full-stack applications using MongoDB, Express, React, and Node.js, connecting frontend interfaces with backend APIs.",
      icon: (
        <Server className={`w-10 h-10 text-emerald-300 drop-shadow-[0_0_14px_rgba(16,185,129,0.9)] rotate-3 animate-[spin_12s_linear_infinite] ${ isDark ? " " : "border shadow-lg border-slate-300 rounded " }`} />
      ),
    },
    {
      year: "2025",
      title: "DSA Practice & AI Exploration",
      description:
        "Currently focusing on improving Data Structures & Algorithms, building better backend systems, and exploring AI integrations in web applications.",
      icon: (
        <Bot className={`w-10 h-10 text-pink-300 drop-shadow-[0_0_14px_rgba(236,72,153,0.9)] -rotate-3 animate-[float_2.6s_ease-in-out_infinite] ${ isDark ? " " : "border shadow-lg border-slate-300 rounded " }`} />
      ),
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 `}>
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-40 overflow-hidden">
        <div
          className={`absolute -top-40 -left-40 w-80 h-80 rounded-full mix-blend-screen opacity-30 blur-3xl animate-pulse ${
            isDark
              ? "bg-gradient-to-br from-purple-600 to-cyan-600"
              : "bg-gradient-to-br from-purple-300 to-cyan-400"
          }`}
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
        <div
          className={`absolute -bottom-40 -right-40 w-80 h-80 rounded-full mix-blend-screen opacity-30 blur-3xl animate-pulse ${
            isDark
              ? "bg-gradient-to-tl from-cyan-600 to-blue-600"
              : "bg-gradient-to-tl from-cyan-300 to-blue-400"
          }`}
          style={{
            animation: "float 6s ease-in-out infinite",
            animationDirection: "reverse",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-2 pt-8 pb-8">
        {/* HERO SECTION */}

        <section className="mb-32 text-center">
          <div
            id="hero-expertise"
            data-reveal
            className={`transition-all duration-700 transform ${
              visibleElements.has("hero-expertise")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-6 py-2 rounded-full mb-6 backdrop-blur-xl ${
                isDark
                  ? "bg-gradient-to-r from-blue-900 via-purple-500 to-cyan-900 text-white hover:shadow-lg hover:shadow-blue-400"
                  : "bg-gradient-to-r from-blue-200 via-purple-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-400"
              }`}
            >
              <Sparkles
                className={`w-4 h-4 ${isDark ? "text-cyan-300" : "text-blue-100"}`}
              />
              <p className="text-sm inline-block font-semibold tracking-wider uppercase">
                Learning, Building & Growing as a Developer
              </p>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl  md:text-5xl lg:text-6xl mb-4 font-extrabold bg-clip-text text-transparent leading-tight ${
                isDark
                  ? "bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                  : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 "
              }`}
            >
              Engineering Scalable Digital Experiences
            </h1>

            {/* Subheading */}
            <h2
              className={`text-xl md:text-2xl font-semibold mb-8 ${
                isDark
                  ? " border-white/20 text-white/90"
                  : " border-blue-300/50 text-blue-700"
              }`}
            >
              BCA Final Year Student |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
                MERN Stack Developer
              </span>{" "}
              |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 font-bold">
                DSA Enthusiast{" "}
              </span>
              |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-400">
                Exploring AI
              </span>
            </h2>

            {/* Intro Paragraph */}
            <p
              className={`text-lg italic max-w-5xl mx-auto leading-relaxed mb-12 about-intro ${
                isDark ? "text-slate-200" : "text-slate-700"
              }`}
            >
              I'm a final-year Bachelor of Computer Applications student who
              enjoys building{" "}
              <span className="about-gradient-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                modern web applications and learning how scalable systems{" "}
              </span>
              work behind the scenes.{" "}
              <span className="about-gradient-text bg-gradient-to-r from-blue-400 to-indigo-600 font-semibold">
                My main focus is full-stack development using the MERN
                stack,{" "}
              </span>
              focusing on modern UI engineering and{" "}
              <span className="about-gradient-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">
                AI-integrated applications{" "}
              </span>
              <span className="about-gradient-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                along with strengthening my problem-solving skills through Data
                Structures & Algorithms.{" "}
              </span>
              I'm constantly exploring{" "}
              <span className="about-gradient-text bg-gradient-to-r from-cyan-400 to-teal-400 font-semibold">
                new technologies, experimenting with ideas,
              </span>{" "}
              and working on projects that help me grow as a developer.
            </p>

            {/* CTA */}
            {/* <div className="flex gap-4 justify-center">
              <a
                href="#expertise"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Explore My Expertise <ArrowRight className="w-4 h-4" />
              </a>
            </div> */}
          </div>
        </section>

        {/* PROFESSIONAL SUMMARY CARD */}
        <section className="mb-32">
          <div
            id="summary"
            data-reveal
            className={`relative transition-all duration-500 transform ${
              visibleElements.has("summary")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Gradient Border Effect */}
            <div
              className={`absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 blur-2xl ${
                isDark
                  ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400"
                  : "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-10"
              }`}
            />

            {/* Card */}
            <div
              className={`relative backdrop-blur-2xl rounded-3xl p-8 md:p-12  duration-500 hover:scale-105 hover:-translate-y-2 ${
                isDark
                  ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40  "
                  : "bg-gradient-to-br from-white/40 to-white/20 border border-white/30 hover:border-white/60 shadow-lg"
              }`}
            >
              {/* Inner Glow */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 border-2   transition-opacity duration-500 ${
                  isDark
                    ? "bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-slate-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 "
                    : "bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-purple-400/5  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400"
                }`}
              />

              <div className="relative ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                  {/* Left Column */}
                  <div>
                    <h3
                      className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                      Academic Background
                    </h3>
                    <ul
                      className={`space-y-4 ${isDark ? "text-slate-300" : "text-slate-700"}`}
                    >
                      <li className="flex gap-3">
                        <span className="text-cyan-400 font-bold">→</span>
                        <span>
                          <strong>Degree:</strong> Bachelor of Computer
                          Applications (BCA)
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 font-bold">→</span>
                        <span>
                          <strong>Status:</strong> Final Year Student
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-cyan-400 font-bold">→</span>
                        <span>
                          <strong>Focus:</strong> Full-Stack Web Development,
                          Data Structures & Algorithms, Software Engineering
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3
                      className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      <Code2 className="w-6 h-6 text-blue-400" />
                      Technical Expertise
                    </h3>
                    <ul
                      className={`space-y-4 ${isDark ? "text-slate-300" : "text-slate-700"}`}
                    >
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span>
                          <strong>Stack:</strong> MERN Stack (MongoDB,
                          Express.js, React.js, Node.js)
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span>
                          <strong>Specialization:</strong> Full-Stack Web
                          Development & Scalable Backend APIs
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span>
                          <strong>Passion:</strong> Clean Code, Performance
                          Optimization & Modern UI/UX
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Key Skills Section */}
                <div className="mt-12 pt-12 border-t border-white/10">
                  <h3
                    className={`text-lg font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    What I Know Best
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "REST API Development",
                      "Authentication Systems",
                      "MERN Stack Applications",
                      "Responsive UI Development",
                      "Database Design Basics",
                      "Problem Solving (DSA)",
                      "API Integration",
                      "Clean Code Practices",
                    ].map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 rounded-full backdrop-blur-xl border transition-all duration-300 hover:scale-110 ${
                          isDark
                            ? "bg-white/10 border-white/20 text-cyan-300 hover:bg-white/20  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400"
                            : "bg-blue-100/30 border-blue-300/50 text-blue-700 hover:bg-blue-100/50  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS GRID SECTION */}
        <section className="mb-32">
          <div id="skills-heading" className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent ${
                isDark ? "bg-white" : "bg-black"
              }`}
            >
              Advanced Technical Expertise
            </h2>
            <p className={isDark ? "text-slate-300" : "text-slate-600"}>
              Expert-level mastery across the full development stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;

              return (
                <div key={idx} id={`skill-${idx}`} className="group relative">
                  {/* Gradient Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${
                      isDark
                        ? `bg-gradient-to-r ${category.color} opacity-20`
                        : `bg-gradient-to-r ${category.color} opacity-10`
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`relative backdrop-blur-2xl rounded-2xl p-6 h-full transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 ${
                      isDark
                        ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40 shadow-2xl"
                        : "bg-gradient-to-br from-white/40 to-white/20 border border-white/30 hover:border-white/60 shadow-lg"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`p-4 rounded-xl w-fit mb-4 transition-all duration-300 group-hover:scale-110 ${
                        isDark
                          ? `bg-gradient-to-br ${category.color} bg-opacity-20`
                          : `bg-gradient-to-br ${category.color} bg-opacity-30`
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${isDark ? "text-cyan-300" : "text-white group-hover:text-white"}`}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        isDark
                          ? "text-white"
                          : "text-slate-900 group-hover:text-white"
                      }`}
                    >
                      {category.title}
                    </h3>

                    {/* Skills List */}
                    <ul
                      className={`space-y-2 ${
                        isDark
                          ? "text-slate-300"
                          : "text-slate-700 group-hover:text-white"
                      }`}
                    >
                      {category.skills.map((skill, sidx) => (
                        <li key={sidx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. DEVELOPER MINDSET SECTION */}
        {/* <section className="mb-32">
          <div
            id="mindset-heading"
            data-reveal
            className={`text-center mb-16 transition-all duration-500 transform ${
              visibleElements.has("mindset-heading")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Engineering Philosophy
            </h2>
            <p className={theme.text.tertiary}>
              How I approach building robust, scalable systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mindset.map((item, idx) => (
              <div
                key={idx}
                className={`group transition-all duration-500 transform ${
                  visibleElements.has("mindset-heading")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  contentVisibility: "auto",
                  containIntrinsicSize: "300px",
                }}
              >
                <div
                  className={`backdrop-blur-md rounded-2xl p-8 ${theme.bg.card} border ${theme.border.base} ${theme.border.hover} transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 h-full`}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3
                    className={`text-xl font-bold mb-3 ${theme.text.primary}`}
                  >
                    {item.title}
                  </h3>
                  <p className={theme.text.tertiary}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* JOURNEY TIMELINE SECTION */}
        <section className="mb-32 animate-fade-in-up">
          <div
            id="journey-heading"
            data-reveal
            className={`text-center mb-16 transition-all duration-500 transform ${
              visibleElements.has("journey-heading")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className={`text-5xl md:text-6xl  font-black mb-4 bg-clip-text  ${
                isDark ? "text-white" : "bg-black"
              }`}
            >
              My Journey
            </h2>
            <p className={isDark ? "text-slate-400" : "text-slate-600"}>
              How I became passionate about building amazing things
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className={`absolute left-6 md:left-1/2 top-8 bottom-8 w-0.5 ${
                isDark
                  ? "bg-gradient-to-b from-cyan-500 to-purple-500"
                  : "bg-gradient-to-b from-cyan-400 to-purple-400"
              }`}
            />

            {/* Timeline Items */}
            <div className="space-y-8 relative">
              {journey.map((item, idx) => {
                const isVisible = visibleElements.has(`journey-${idx}`);
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    id={`journey-${idx}`}
                    data-reveal
                    className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 transition-all duration-500 transform ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${idx * 90}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-6 top-2 md:left-1/2 md:top-6 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl backdrop-blur-xl border-2 transition-all duration-300 ${
                        isDark
                          ? "bg-slate-950 border-cyan-400 shadow-[0_0_25px_-8px_rgba(34,211,238,0.8)]"
                          : "bg-white border-cyan-500 shadow-[0_0_25px_-10px_rgba(14,116,144,0.55)]"
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Content - alternate sides on desktop */}
                    <div
                      className={`ml-6 pr-2 pt-14 md:ml-0 md:px-0 md:pt-16 ${isLeft ? "md:col-start-1 md:justify-self-end " : "md:col-start-2 md:justify-self-start"}`}
                    >
                      <div
                        className={`group relative w-full max-w-[30rem] backdrop-blur-xl rounded-2xl px-4 py-2.5 border-2 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                          isDark
                            ? "bg-gradient-to-br from-white/10 to-white/5 border-white/50  hover:shadow-lg hover:border-blue-600 hover:shadow-blue-400"
                            : "bg-gradient-to-br from-white/40 to-white/20 border-slate-300 hover:border-cyan-600/50"
                        }`}
                      >
                        <div
                          className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                            isDark
                              ? "bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
                              : "bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
                          }`}
                        />
                        <div
                          className={`relative z-10 text-right text-xs font-semibold mb-1 ${
                            isDark ? "text-cyan-400" : "text-cyan-600"
                          }`}
                        >
                          {item.year}
                        </div>
                        <h3
                          className={`relative z-10 text-base font-bold mb-1 ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`relative z-10 text-sm leading-relaxed ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative">
          <div
            id="cta"
            data-reveal
            className={`text-center transition-all duration-500 transform ${
              visibleElements.has("cta")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Gradient Border Effect */}
            <div
              className={`absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 blur-3xl ${
                isDark
                  ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-30"
                  : "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-20"
              }`}
            />

            {/* Content */}
            <div className="relative">
              <h2
                className={`text-4xl md:text-5xl font-black mb-6   ${
                  isDark
                    ? "text-white"
                    : "text-black"
                }`}
              >
                Let's Build Something Amazing Together
              </h2>

              <p
                className={`text-lg md:text-xl  mx-auto mb-8 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <span className={`text-xl md:text-xl font-semibold mb-8 ${
                isDark
                  ? " border-white/20 text-white/90"
                  : " border-blue-300/50 text-blue-700"
              }`}>
                  I'm always open to learning opportunities, collaborations, and
                interesting project ideas. {" "} <br />
                  </span>  <span className={`max-w-2xl`}>
                    If you're building something exciting
                or looking for a passionate developer to work with, feel free to
                connect.
                  </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4  justify-center">
                <a
                  href="/contact"
                  className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 group ${
                    isDark
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/50"
                      : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-400/50"
                  }`}
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                {/* <a
                  href="/projects"
                  className={`px-8 py-4 rounded-lg font-bold border-2 transition-all duration-300 ${
                    isDark
                      ? "border-white/20 text-white hover:bg-white/10 hover:shadow-lg hover:border-blue-600 hover:shadow-blue-400"
                      : "border-slate-300 text-slate-900 hover:bg-slate-100/50 hover:shadow-lg hover:border-blue-600 hover:shadow-blue-400"
                  }`}
                >
                  View My Work
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes introGlow {
          0%, 100% {
            text-shadow: 0 0 0 rgba(34, 211, 238, 0);
          }
          50% {
            text-shadow: 0 0 14px rgba(34, 211, 238, 0.25);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .about-intro {
          animation: introGlow 3.4s ease-in-out infinite;
        }

        .about-gradient-text {
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 220% 220%;
          animation: gradientShift 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
