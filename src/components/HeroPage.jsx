import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Single icon import
import {
  CheckCircle, Cloud, Package,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code,
  Rocket,
  Star,
  Download,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import resumeFile from "../assets/Resume.pdf";

const HeroPage = () => {
  const { isDark } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("home");
  const [visibleElements, setVisibleElements] = useState(new Set());

  const fileName = "Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    const sections = ["hero", "about", "skills", "projects", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < 300 && rect.bottom > 300) {
          setActiveSection(section);
        }
      }
    });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { icon: "🎯", text: "Built 8+ full-stack projects with React & Node.js" },
    { icon: "🏆", text: "Solved 200+ DSA problems on LeetCode" },
    { icon: "🚀", text: "CGPA: 8.7/10 | Dean's List 2 semesters" },
  ];

  const stats = [
    { number: "4+", label: "Projects Built", icon: Code },
    { number: "15+", label: "Technologies", icon: Rocket },
    { number: "6+", label: "GitHub Repos", icon: Github },
    { number: "8+", label: "CGPA / 10", icon: Star },
  ];

  const skills = [
    {
      category: "Frontend",
      targetId: "frontend",
      items: ["React.js", "Tailwind CSS", "JavaScript", "Redux"],
    },
    {
      category: "Backend",
      targetId: "backend",
      items: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools",
      targetId: "tools",
      items: ["Git / Git-Hub", "AWS", "Postman", "VS Code"],
    },
  ];

  return (
    <div
      className={`min-h-screen ${isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900"}`}
    >
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
          {/* Floating gradient orbs */}
          <div
            className={`absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse ${
              isDark
                ? "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
                : "bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10"
            }`}
            style={{
              transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.2}px)`,
            }}
          />
          <div
            className={`absolute top-1/3 -left-48 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse ${
              isDark
                ? "bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20"
                : "bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-blue-400/10"
            }`}
            style={{
              animationDelay: "2s",
              transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.3}px)`,
            }}
          />
          <div
            className={`absolute -bottom-32 right-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse ${
              isDark
                ? "bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20"
                : "bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-purple-400/10"
            }`}
            style={{
              animationDelay: "4s",
              transform: `translate(${scrollY * 0.25}px, ${scrollY * 0.15}px)`,
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center pt-16 pb-14">
            <div className="max-w-6xl mx-auto w-full">
              {/* Top Badge */}
              <div className={`flex justify-center mb-4 mt-18 px-4 animate-fade-in-up`}>
                <div
                  className={`inline-flex w-full sm:w-auto items-center justify-center flex-wrap gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm max-w-[28rem] sm:max-w-none text-center whitespace-normal ${
                      isDark
                        ? "bg-gradient-to-r from-blue-900 via-purple-500 to-cyan-700 hover:shadow-lg hover:border-blue-600 hover:shadow-blue-400"
                        : "bg-gradient-to-r from-blue-200 via-purple-600 to-cyan-600 hover:shadow-lg text-white hover:shadow-blue-400"
                    }`}
                >
                  <Rocket
                    className={`w-4 h-4 shrink-0 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                  />
                  <span
                    className={`text-xs sm:text-sm font-semibold  leading-snug text-center ${isDark ? "text-white" : "text-slate-200"}`}
                  >
                    BCA Final Year Student | Aspiring Software Engineer
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center mb-12 ">
                {/* Name */}
                <h1
                  className={`text-6xl italic font-semibold  md:text-7xl lg:text-8xl mb-4  bg-clip-text animate-fade-in-up text-transparent   ${
                    isDark
                      ? "bg-gradient-to-r from-pink-600 via-purple-600 [-webkit-text-stroke:1px_white]"
                      : "bg-slate-800"
                  }`}
                  style={{ animationDelay: "100ms" }}
                >
                  {" "}
                  Mintu Bairwa
                </h1>

                {/* Title & Tagline */}
                <div
                  className="mb-8 animate-fade-in-up"
                  style={{ animationDelay: "200ms" }}
                >
                  <p
                    className={`text-3xl md:text-2xl font-semibold mb-3 ${
                      isDark ? "text-slate-200" : "text-slate-700"
                    }  `}
                  >
                    Computer Science Student |
                    <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400">
                      {" "}
                      MERN Stack Enthusiast
                    </span>
                  </p>
                  <p
                    className={`text-lg md:text-xl mx-auto ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Passionate Full Stack Developer focused on building scalable
                    web applications,
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                      solving complex problems with Data Structures &
                      Algorithms,
                    </span>{" "}
                    and exploring AI-powered technologies to create smarter
                    digital experiences....
                  </p>
                </div>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
                  style={{ animationDelay: "400ms" }}
                >
                  {/* Primary Button */}
                  <button
                    className={`group relative px-8 py-4 text-lg font-bold rounded-xl overflow-hidden inline-flex items-center justify-center gap-2 ${
                      isDark
                        ? "bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:shadow-lg  hover:border-blue-600 hover:shadow-blue-400 "
                        : "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:shadow-lg hover:shadow-blue-400"
                    }`}
                  >
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isDark
                          ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                          : "bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"
                      }`}
                    />
                    <Link to={"/projects"}>
                      <span className="relative z-10 text-white">
                        View My Projects
                      </span>
                    </Link>
                    <ArrowRight
                      className={`w-5 h-5 relative z-10 bg-clip-text group-hover:translate-x-1 transition-transform ${
                        isDark ? "bg-black" : " bg-white"
                      }`}
                    />
                  </button>

                  {/* Secondary Button */}
                  {/* <button
                    onClick={handleDownload}
                    className={`group relative px-8 py-4 text-lg font-bold rounded-xl inline-flex items-center justify-center gap-2 transition-all duration-300 ${
                      isDark
                        ? "border-2 border-white/20 text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-white/10"
                        : "border-2 border-slate-400 text-slate-900  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-slate-200"
                    }`}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </button> */}

                  {/* Tertiary Button */}
                  <button
                    className={`group relative border-2 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 ${
                      isDark
                        ? "bg-white/10 border-white/20 text-white hover:bg-white/20  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 "
                        : "bg-slate-200 border-slate-300 text-slate-900  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-slate-300 "
                    }`}
                  >
                    <Link to={"/contact"}>Get In Touch</Link>
                  </button>
                </div>

                {/* Social Links */}
                <div
                  className="flex justify-center gap-6 animate-fade-in-up"
                  style={{ animationDelay: "500ms" }}
                >
                  {[
                    { icon: Github, link: "https://github.com/mintubairwa24", label: "GitHub" },
                    { icon: Linkedin, link: "https://www.linkedin.com/in/mintu-bairwa-8b622a264?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvSpA7GoyR%2FK8pMFvv1e4Lw%3D%3D", label: "LinkedIn" },
                    { icon: Mail, link: "mailto:mintubairwa20@gmail.com", label: "Email" },
                  ].map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-3 rounded-lg border transition-all duration-300 ${
                          isDark
                            ? "bg-white/10 border-white/20  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-white/20"
                            : "bg-slate-200 border-slate-300  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-slate-300"
                        }`}
                        title={social.label}
                      >
                        <Icon
                          className={`w-6 h-6 group-hover:scale-110 transition-all ${
                            isDark
                              ? "text-slate-300 group-hover:text-white"
                              : "text-slate-700 group-hover:text-slate-900 "
                          }`}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="flex text-blue-600 justify-center mt-12 animate-bounce">
                <div
                  className={` text-xl flex flex-col items-center gap-2 ${isDark ? "text-slate-400 hover:bor" : "text-slate-600"}`}
                >
                  <span className="">Scroll to explore</span>
                  <div
                    className={`w-0.5 h-8 rounded ${
                      isDark
                        ? "bg-gradient-to-b from-white/50 to-transparent"
                        : "bg-gradient-to-b from-slate-400/50 to-transparent"
                    }`}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ===== ABOUT SECTION ===== */}
          <section
            id="about"
            className={`min-h-screen flex items-center py-5 px-2 `}
          >
            <div className="max-w-6xl mx-auto w-full">
              <h2
                className={`text-5xl font-black mb-12 text-center ${isDark ? "text-white" : "text-slate-900"}`}
              >
                About Me
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left - Text */}
                <div
                  className={`${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  <p className="text-lg leading-relaxed mb-6">
                    Aspiring Software Engineer and BCA final-year student
                    passionate about building scalable web applications, solving
                    real-world problems with Data Structures & Algorithms, and
                    exploring AI-powered technologies to create intelligent
                    digital experiences.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    My journey in tech started with curiosity and has evolved
                    into a commitment to becoming a skilled Software Development
                    Engineer. I believe in continuous learning and staying
                    updated with the latest technologies.
                  </p>
                  <div className="space-y-3">
                    <p>
                      <strong>Education:</strong> BCA Final Year
                    </p>
                    <p>
                      {" "}
                      <strong>CGPA:</strong> 8+
                    </p>
                    <p>
                      <strong>Location:</strong> India
                    </p>
                    <p>
                      <strong>Languages:</strong> English, Hindi
                    </p>
                  </div>
                </div>

                {/* Right - Stats */}

                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 ">
                  {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={idx}
                        id={`stat-${idx}`}
                        data-reveal
                        className={`group relative p-6 md:p-8 border-2 rounded-xl backdrop-blur-lg transition-all duration-500 overflow-hidden text-center ${
                          isDark
                            ? "bg-white/10 border-white/20  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-white/20"
                            : "bg-slate-200 border-slate-300  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-slate-300 "
                        } ${
                          visibleElements.has(`stat-${idx}`)
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl ${
                            isDark
                              ? "bg-gradient-to-r from-slate-500 via-cyan-400/15 to-blue-300/20"
                              : "bg-gradient-to-r from-blue-600/12 via-sky-500/10 to-cyan-500/12"
                          }`}
                        />
                        <div className="relative z-10">
                          <Icon
                            className={`w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 ${
                              isDark
                                ? "text-white group-hover:text-cyan-300"
                                : "text-black group-hover:text-white"
                            }`}
                          />
                          <div
                            className={`text-3xl  md:text-4xl font-black bg-clip-text text-transparent mb-2 ${
                              isDark
                                ? "bg-white hover:text-cyan-300"
                                : "bg-black hover:text-white"
                            }`}
                          >
                            {stat.number}
                          </div>
                          <div
                            className={`text-xs md:text-sm font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`}
                          >
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <hr className="mt-2 mb-0 "/> */}
              <div
                className={`mt-4 flex inline-block items-center b gap-2 hover:text-cyan-500 opacity-100 group-hover:opacity-100 transition-opacity ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                <Link to={`/about`}>
                  <span className="text-x font-semibold">
                    Learn <span className=""> More About Me →</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </section>

          {/* Skills Cloud */}
          <section
            id="skills"
            className="relative min-h-screen flex items-center py-20 px-4 animate-fade-in-up"
          >
            <div className="max-w-6xl mx-auto w-full">
              <h2
                className={`text-5xl font-black mb-12 text-center ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Skills & Technologies
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skillGroup, idx) => (
                  <div
                    key={idx}
                    id={`skill-group-${idx}`}
                    data-reveal
                    className={`group relative p-6 md:p-8 border-2 rounded-xl backdrop-blur-lg transition-all duration-500 overflow-hidden text-center ${
                      isDark
                        ? "bg-white/10 border-white/10  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-white/20"
                        : "bg-slate-300/70 border-slate-300  hover:border-blue-600 hover:shadow-xl hover:shadow-blue-200 hover:bg-slate-300"
                    } ${
                      visibleElements.has(`stat-${idx}`)
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  >
                    <h3
                      className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-3 ">
                      {skillGroup.items.map((skill, sidx) => (
                        <div
                          key={sidx}
                          className={`flex items-center gap-3 p-3 border-2 font-semibold rounded-lg hover:animate-fade-in-up ${
                            isDark
                              ? "bg-slate-600 border-slate-300/30  hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-400"
                              : "bg-slate-400/90 border-slate-400  hover:bg-slate-400 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg hover:text-white hover:shadow-blue-400  "
                          }  `}
                          style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                          <Code
                            className={`text-x  w-6 h-6 ${isDark ? "text-cyan-400 " : "hover:text-blue-500 "}`}
                          />
                          <span
                            className={`
                              ${isDark ? "text-white hover:text-white " : "hover:text-white "}
                            `}
                          >
                            <div className="">{skill}</div>
                          </span>
                        </div>
                      ))}
                      <div
                        className={`mt-4 flex items-center b gap-2 opacity-100 group-hover:opacity-100 transition-opacity ${
                          isDark
                            ? "text-white  hover:text-blue-400 "
                            : "text-black  hover:text-blue-600"
                        }`}
                      >
                        <Link to={`/skills?category=${skillGroup.targetId}`}>
                          <span className="text-x font-semibold">
                            View More
                            <ExternalLink className="w-4 h-4" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Projects Preview */}
          <section className="relative py-20 px-4 mb-12">
            <div className="max-w-6xl mx-auto w-full">
              <div className="text-center mb-12">
                <h2
                  className={`text-4xl font-black ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Featured Projects
                </h2>
                <p
                  className={`mt-3 text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  Something awesome is coming soon...
                </p>
              </div>


              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    id: 1,
                    title: "E-Commerce Platform",
                    description:
                      "Full-stack web application with React, Node.js, and MongoDB",
                    tech: ["React", "Node.js", "MongoDB"],
                    icon: Package,
                  },
                  {
                    id: 2,
                    title: "Task Management App",
                    description:
                      "Real-time collaborative task manager with socket.io",
                    tech: ["React", "Express", "Socket.io"],
                    icon: CheckCircle,
                  },
                  {
                    id: 3,
                    title: "Weather Dashboard",
                    description:
                      "Weather app with API integration and geolocation",
                    tech: ["React", "Tailwind", "API"],
                    icon: Cloud,
                  },
                ].map((project, idx) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={project.id}
                      id={`project-${idx}`}
                      data-reveal
                      className={`group relative p-6 rounded-xl border-2 backdrop-blur-lg hover:transition-all duration-500 overflow-hidden ${
                        isDark
                          ? "bg-slate-600 border-slate-300/30 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-400"
                          : "bg-slate-300 border-slate-400 hover:bg-slate-200/30 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400"
                      } ${
                        visibleElements.has(`project-${idx}`)
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <div
                        className={`inline-flex p-3 rounded-full mb-4 transition-all border-2 border-slate-200 duration-300 group-hover:scale-110 ${
                          isDark
                            ? "bg-slate-500 text-white "
                            : "bg-slate-100 text-slate-900"
                        }`}
                      >
                        <Icon className="w-7 h-7   " />
                      </div>
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100  transition-opacity duration-500 rounded-xl  ${
                          isDark
                            ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 "
                            : "bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10"
                        }`}
                      />

                      <div className="relative z-10">
                        <h3
                          className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`text-sm mb-4 ${isDark ? "text-slate-200" : "text-slate-600"}`}
                        >
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, tidx) => (
                            <span
                              key={tidx}
                              className={`text-xs font-semibold px-2 py-1 rounded-full border-2 hover:border-blue-400 ${
                                isDark
                                  ? "bg-white/10 border-white/20 text-slate-300"
                                  : "bg-slate-200 border-slate-300 text-slate-700"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/projects?project=${project.id}`}
                          className={`mt-4 inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity ${
                            isDark ? "text-cyan-400" : "text-cyan-600"
                          }`}
                        >
                          <span className="text-sm font-semibold">
                            View Project
                          </span>
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </section>

          {/* CTA Banner */}
          {/* <section className="relative py-20 px-4 mb-12">
            <div className="max-w-4xl mx-auto w-full">
              <div
                className={`group relative rounded-2xl backdrop-blur-xl p-12 md:p-16 overflow-hidden text-center border ${
                  isDark
                    ? "bg-gradient-to-r from-white/10 via-white/5 to-transparent border-white/20"
                    : "bg-gradient-to-r from-slate-200/20 via-slate-100/20 to-transparent border-slate-300/20"
                }`}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${
                    isDark
                      ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20"
                      : "bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10"
                  }`}
                />

                <div className="relative z-10">
                  <h2
                    className={`text-4xl md:text-5xl font-black mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    Ready to Collaborate?
                  </h2>
                  <p
                    className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}
                  >
                    I'm actively looking for internship opportunities and
                    exciting projects to work on. Let's build something amazing
                    together!
                  </p>

                  <button
                    className={`group/cta relative px-8 py-4 text-lg font-bold rounded-xl overflow-hidden inline-flex items-center gap-3 ${
                      isDark
                        ? "bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                        : "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"
                    }`}
                  >
                    <div className="absolute inset-0 opacity-100 group-hover/cta:opacity-0 transition-opacity duration-300" />
                    <div
                      className={`absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 ${
                        isDark
                          ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                          : "bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"
                      }`}
                    />
                    <span className="relative z-10 text-white">
                      Let's Connect
                    </span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover/cta:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </section> */}
        </div>

        <style>{`
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
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroPage;
