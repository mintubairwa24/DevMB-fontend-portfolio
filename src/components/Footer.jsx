import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import LogoBadge from "./LogoBadge";

const Footer = () => {
  const { isDark } = useTheme();
  // Theme configuration (same system as About & Contact pages)
  const theme = {
    bg: {
      main: isDark
        ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        : "bg-slate-300/20",
      card: isDark
        ? "bg-gradient-to-br from-white/10 to-white/5"
        : "bg-gradient-to-br from-white/40 to-white/20",
      hover: isDark ? "hover:bg-white/15" : "hover:bg-white/30",
    },
    border: {
      base: isDark ? "border-slate-400" : "border-white/30",
      hover: isDark ? "hover:border-blue-500" : "hover:border-white/60",
    },
    text: {
      primary: isDark ? "text-white" : "text-slate-900",
      secondary: isDark ? "text-slate-300" : "text-slate-700",
      tertiary: isDark ? "text-slate-300" : "text-slate-600",
      muted: isDark ? "text-slate-500" : "text-slate-400",
    },
    divider: isDark ? "border-white/10" : "border-white/20",
    glow: isDark
      ? "from-purple-600 to-cyan-600"
      : "from-purple-300 to-cyan-400",
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    // { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
    // { label: "Resume", href: "/" },
  ];

  const techStack = [
    "React",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Framer Motion",
    "Vite",
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/mintubairwa24",
      color: "cyan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mintu-bairwa-8b622a264?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvSpA7GoyR%2FK8pMFvv1e4Lw%3D%3D",
      color: "blue",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:mintubairwa20@gmail.com",
      color: "purple",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://x.com/mintubairwa20",
      color: "pink",
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden transition-colors duration-300 ${theme.bg.main}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-40 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-40 -left-40 w-80 h-80 rounded-full mix-blend-screen opacity-20 blur-3xl bg-gradient-to-br ${theme.glow}`}
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className={`absolute -bottom-40 -right-40 w-80 h-80 rounded-full mix-blend-screen opacity-20 blur-3xl bg-gradient-to-tl ${theme.glow}`}
        />
      </div>

      {/* Top Gradient Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent origin-center"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
      >
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {/* 1. BRAND SECTION */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="relative text-center  md:text-left items-center md:items-start group">
              {/* Brand Name with Gradient */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-black mb-4 flex justify-center md:justify-start"
              >
                <span className="inline-flex justify-center md:justify-start">
                <LogoBadge className={``} isDark={isDark} />
                </span>
              </motion.h2>

              {/* Tagline */}
              <motion.p
                variants={itemVariants}
                className={`text-sm leading-relaxed ${theme.text.tertiary}`}
              >
               Building scalable web applications with modern technologies, strong problem-solving skills, and a passion for clean, efficient code.

              </motion.p>

              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 blur-lg -z-10 group-hover:opacity-20 transition-opacity"
              />
            </div>
          </motion.div>

          {/* 2. QUICK LINKS */}
          <motion.div variants={itemVariants}>
            <h3
              className={`text-sm font-bold uppercase flex justify-center md:justify-start tracking-widest mb-6 ${theme.text.secondary}`}
            >
              Navigation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-y-2 gap-x-4">
              {navigationLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="group flex font-semibold justify-center md:justify-start items-center gap-2 relative"
                >
                  <span
                    aria-hidden="true"
                    className={`text-x leading-none
                      ${ isDark ? "text-white" : "text-black" }`}
                  >
                    •
                  </span>
                  <span
                    className={`${theme.text.tertiary} group-hover:${theme.text.secondary} transition-colors duration-300`}
                  >
                    {link.label}
                  </span>
                  <ArrowRight className={`w-4 h-4  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   ${
                    isDark
                    ? "text-white" 
                    : "text-black"
                   
                   
                   }`} />

                  {/* Underline animation */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 origin-left"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 4. AVAILABILITY STATUS */}
          <motion.div variants={itemVariants}>
            <h3
              className={`text-sm font-bold uppercase tracking-widest mb-6 text-center md:text-left ${theme.text.secondary}`}
            >
              Status
            </h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className={`p-4 rounded-xl border-2 backdrop-blur-xl text-left ${isDark
                          ? "bg-slate-600 border-slate-300/30 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-400"
                          : "bg-slate-300 border-slate-400 hover:bg-slate-200/30 hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400"} border ${theme.border.base}`}
            >
              <motion.div
                animate={pulseVariants.animate}
                className="flex items-center gap-3"
              >
                <motion.div className="w-3 h-3 rounded-full mt-0 mb-7 bg-green-400" />
                <div>
                  <p className="text-sm font-bold text-green-400">Available</p>
                  <p className={`text-xs ${isDark ? "text-slate-300 " : ""}`}>
                    <span className="inline-flex items-center gap-1">
                      Currently Seeking
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="block">
                      Software Engineering Opportunities
                    </span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 3. TECH STACK */}
          {/* <motion.div variants={itemVariants}>
            <h3
              className={`text-sm font-bold uppercase tracking-widest mb-6 ${theme.text.secondary}`}
            >
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`px-3 py-1.5 rounded-full backdrop-blur-xl ${theme.bg.card} border ${theme.border.base} group hover:${theme.border.hover} transition-all duration-300`}
                >
                  <span
                    className={`text-xs font-semibold ${theme.text.secondary} group-hover:text-cyan-400 transition-colors`}
                  >
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
          <motion.div variants={itemVariants}>
            <h3
              className={`text-sm font-bold uppercase tracking-widest mb-6 text-center md:text-left ${theme.text.secondary}`}
            >
              Connect
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative rounded-2xl  `}
                  >
                    {/* Glow background */}
                    {/* <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg bg-gradient-to-r from-cyan-500 to-blue-500" /> */}

                    {/* Icon button */}
                    <div
                      className={`relative w-12 h-12 rounded-lg border-2 backdrop-blur-xl group flex items-center justify-center transition-all duration-300  ${isDark
                          ? "bg-slate-600 border-slate-300/30 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-400"
                          : "bg-slate-300 border-slate-400 hover:bg-slate-200/30  hover:text-black hover:-translate-y-1  hover:shadow-lg   hover:border-blue-600 hover:shadow-xl hover:shadow-blue-400"}`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors ${
                          isDark
                            ? "text-cyan-400 group-hover:text-white"
                            : "text-slate-700 group-hover:text-black"
                        }`}
                      />
                    </div>

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      whileHover={{ opacity: 1, y: -5 }}
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-950 rounded text-xs font-semibold whitespace-nowrap pointer-events-none text-cyan-400`}
                    >
                      {social.label}
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          
        </div>

        {/* DIVIDER */}
        {/* <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12 origin-center`}
        /> */}

        {/* MIDDLE SECTION - Social + CTA */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"> */}
          {/* 5. SOCIAL LINKS */}
          

          {/* 6. CTA SECTION */}
          {/* <motion.div variants={itemVariants}>
            <h3
              className={`text-sm font-bold uppercase tracking-widest mb-6 ${theme.text.secondary}`}
            >
              Start a Project
            </h3> */}

            {/* <div className="relative group"> */}
              {/* Glow */}
              {/* <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-cyan-500 to-blue-500" /> */}

              {/* CTA Card */}
              {/* <div
                className={`relative p-6 rounded-xl backdrop-blur-xl ${theme.bg.card} border ${theme.border.base} group-hover:${theme.border.hover} transition-all duration-300`}
              >
                <p className={`text-sm mb-4 ${theme.text.secondary}`}>
                  Let's build something extraordinary together
                </p>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold transition-all duration-300"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div> */}

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6 origin-center`}
        />

        {/* 7. COPYRIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={`text-center ${theme.text.tertiary}`}
        >
          <p className="text-sm">
            © 2026{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
              MB.Dev — Transforming ideas into digital experiences.
            </span>
            {" — Crafted with passion using "}
            <span className="font-semibold text-cyan-400">MERN STACK</span>
            {" & "}
            <span className="font-semibold text-blue-400">Tailwind CSS</span>
          </p>

          {/* Additional Credits */}
          <p className={`text-xs ${theme.text.muted} mt-3`}>
            Powered by Dev.MB → Deployed on Vercel
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
