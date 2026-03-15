 import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LogoBadge from "./LogoBadge";
import LetsTalk from "./Lets_Talk";
import { useTheme } from "../context/ThemeContext";

const KEYFRAMES = `
  @keyframes spinRing {
    to { transform: rotate(360deg); }
  }
  @keyframes pulseDot {
    0%, 100% { opacity: 0.7; transform: scale(1);    }
    50%       { opacity: 1;   transform: scale(1.4);  }
  }
  @keyframes shimmerText {
    from { background-position: -200% center; }
    to   { background-position:  200% center; }
  }
  @keyframes scanBadge {
    0%        { left: -30%; opacity: 0; }
    15%, 85%  { opacity: 1;             }
    100%      { left: 130%; opacity: 0; }
  }

  .spin-ring    { animation: spinRing   4s  linear      infinite;        }
  .pulse-dot    { animation: pulseDot   2s  ease-in-out infinite;        }
  .scan-line    { animation: scanBadge  3.5s ease-in-out infinite 0.8s;  }
  .logo-shimmer { animation: shimmerText 1.2s linear forwards;           }

  /* Gradient text */
  .grad-text {
    font-weight: 800;
    font-size: clamp(0.82rem, 2.4vw, 1.05rem);
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "skills", label: "Skills", path: "/skills" },
    // { id: "projects", label: "Projects", path: "/projects" },
    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <div className={isDark ? "dark bg-slate-950 text-white" : "bg-white text-slate-900"}>
      {/* Animated linear background */}
      <div className="fixed top-0 left-0 right-0 inset-0 -z-40">
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            isDark ? "bg-slate-950" : "bg-slate-50"
          }`}
        ></div>

        {/* Animated linear orbs */}
        <div
          className={`absolute top-0 -left-40 w-80 h-80 rounded-full mix-blend-screen opacity-30 blur-3xl animate-pulse ${
            isDark
              ? "bg-gradient-to-br from-purple-600 via-blue-500 to-transparent"
              : "bg-gradient-to-br from-purple-400 via-blue-300 to-transparent"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 -right-40 w-80 h-80 rounded-full mix-blend-screen opacity-30 blur-3xl animate-pulse ${
            isDark
              ? "bg-gradient-to-tl from-cyan-500 via-blue-500 to-transparent"
              : "bg-gradient-to-tl from-cyan-400 via-blue-300 to-transparent"
          }`}
        ></div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        {/* Glassmorphic background */}
        <div
          className={`absolute inset-0 -z-10 transition-all duration-500 ${
            scrolled
              ? isDark
                ? "bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl"
                : "bg-white/10 backdrop-blur-xl border-b border-slate-200/20 shadow-lg"
              : isDark
              ? "bg-white/3 backdrop-blur-md border-b border-white/5"
              : "bg-white/5 backdrop-blur-md border-b border-slate-200/10"
          }`}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 gap-4">
            {/* Logo - Clickable Link */}
            <div className="justify-self-start min-w-0">
  
                <LogoBadge isDark={isDark} />
              
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center  justify-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-all duration-300 group ${
                    isDark
                      ? "text-white/80 hover:text-white"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {link.label}

                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 transition-all duration-500 ${
                      isActive(link.path)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>

                  {/* Glow effect on hover */}
                  <span className="absolute -inset-2 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-400/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 blur"></span>
                </Link>
              ))}
            </div>

            {/* Right side - CTA and Theme Toggle */}
            <div className="flex items-center gap-4 justify-self-end">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`relative transition-all duration-300 inline-flex items-center max-w-full pl-1.75 pr-2 py-1.75 rounded-full border no-underline cursor-pointer overflow-hidden duration-280ms ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10 text-white border-white/10"
                    : "bg-slate-200 hover:bg-slate-300 text-slate-900 border-slate-300"
                }`}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun size={22} /> : <Moon size={22} />}
              </button>

              {/* CTA Button */}
              <button className="relative hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-sm group rounded-full no-underline cursor-pointer">
                <div className="hidden sm:flex items-center">
                  <div className="origin-right scale-75 md:scale-90 lg:scale-100">
                    <LetsTalk isDark={isDark} />
                  </div>
                </div>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2.5 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10 text-white"
                    : "bg-slate-200 hover:bg-slate-300 text-slate-900"
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div
              className={`md:hidden mt-4 p-4 rounded-2xl border-2 transition-all duration-300 ${
                isDark
                  ? "border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(59,130,246,0.55)]"
                  : "border-slate-300  bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(99,102,241,0.35)]"
              } animate-in slide-in-from-top-2`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-semibold  tracking-[0.2em] uppercase ${
                    isDark ? "text-cyan-300/80" : "text-slate-600"
                  }`}
                >
                  Navigation
                </span>
                {/* <span
                  className={`h-1 w-10 rounded-full ${
                    isDark
                      ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                      : "bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                  }`}
                /> */}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-xl mb-2 transition-all duration-300 border-2 ${
                    isActive(link.path)
                      ? isDark
                        ? "bg-gradient-to-r from-purple-600/25 via-blue-500/25 to-cyan-400/25 text-white border-cyan-400/40 shadow-[0_10px_30px_-18px_rgba(34,211,238,0.8)]"
                        : "bg-gradient-to-r from-purple-400/25  via-blue-400/25 to-cyan-400/25  text-slate-900 border-blue-400/40 shadow-[0_10px_30px_-18px_rgba(59,130,246,0.6)]"
                      : isDark
                      ? "text-white/70 border-white/10 hover:text-white hover:bg-white/10"
                      : "text-slate-600 border-slate-300 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                to={"/contact"}
                onClick={() => setIsOpen(false)}
                className="w-full mt-4 relative px-6 py-3 rounded-xl font-semibold text-sm overflow-hidden group inline-flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500"></div>
                <span className="relative text-white tracking-wide">
                  Let's Talk
                </span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
