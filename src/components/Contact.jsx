import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Check,
  AlertCircle,
  Loader,
  Sparkles,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// connecting to Backend (Vite only exposes vars prefixed with VITE_)
const API_URL =
  import.meta.env.VITE_API_URL_MB ||
  import.meta.env.VITE_API_URL ||
  "";
const API_BASE = API_URL ? API_URL.replace(/\/+$/, "") : "";
const CONTACT_ENDPOINT = API_BASE ? `${API_BASE}/api/contact` : "/api/contact";
const HEALTH_ENDPOINT = API_BASE ? `${API_BASE}/api/health` : "/api/health";
const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "web-development",
    message: "",
    budget: "5k-10k",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Warm up backend (Render cold start)
  useEffect(() => {
    fetch(HEALTH_ENDPOINT).catch(() => {});
  }, []);

   // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : null;

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          projectType: "web-development",
          message: "",
          budget: "5k-10k",
        });
        setFormErrors({});
        setTimeout(() => setSubmitted(false), 1000);
      } else {
        setFormErrors(
          data?.errors || { general: data?.message || "Failed to send message." }
        );
      }
    } catch (error) {
      if (error.name === "AbortError") {
        setFormErrors({
          general:
            "The server is waking up. Please try again in a few seconds.",
        });
      } else {
        setFormErrors({ general: "Something went wrong. Please try again." });
      }
    } finally {
      clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  // Theme configuration
  const theme = {
    bg: {
      main: isDark
        ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        : "bg-gradient-to-br from-slate-50 via-white to-slate-100",
      card: isDark
        ? "bg-gradient-to-br from-white/10 to-white/5"
        : "bg-gradient-to-br from-white/40 to-white/20",
      input: isDark ? "bg-white/5" : "bg-white/20",
      success: isDark
        ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-400/50"
        : "bg-gradient-to-br from-green-100/40 to-emerald-100/30 border-green-300/40",
    },
    border: {
      base: isDark ? "border-white/20" : "border-slate-300",
      hover: isDark ? "hover:border-white/40" : "hover:border-white/60",
      focus: isDark ? "focus:ring-cyan-500" : "focus:ring-cyan-600",
      error: "border-red-500",
    },
    text: {
      primary: isDark ? "text-white" : "text-slate-900",
      secondary: isDark ? "text-slate-300" : "text-slate-700",
      tertiary: isDark ? "text-slate-400" : "text-slate-600",
      error: isDark ? "text-red-400" : "text-red-600",
      success: isDark ? "text-green-400" : "text-green-600",
      muted: isDark ? "text-slate-300" : "text-slate-400",
    },
    badge: isDark
      ? "bg-white/5 border-white/20 text-cyan-400"
      : "bg-blue-100/30 border-blue-300/50 text-blue-700",
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

  const optionClass = isDark
    ? "bg-slate-900 text-white"
    : "bg-white text-slate-900";

 

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 (123) 456-7890",
      link: "tel:+911234567890",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: null,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@yourprofile",
      link: "https://github.com/yourprofile",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Your Name",
      link: "https://linkedin.com/in/yourprofile",
      color: "from-red-500 to-orange-500",
    },
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/yourprofile", label: "GitHub" },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    { icon: Twitter, url: "https://twitter.com/yourprofile", label: "Twitter" },
    { icon: Mail, url: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <div
      className={`min-h-screen  text-white overflow-hidden relative transition-colors duration-300`}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-40 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-40 -left-40 w-80 h-80 rounded-full mix-blend-screen opacity-30 blur-3xl bg-gradient-to-br ${theme.glow}`}
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className={`absolute -bottom-40 -right-40 w-80 h-80 rounded-full mix-blend-screen opacity-30 blur-3xl bg-gradient-to-tl ${theme.glow}`}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-6xl mx-auto px-4 py-20"
      >
        {/* 1. HERO SECTION */}
        <motion.section className="mb-20 text-center" variants={itemVariants}>
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`inline-block px-6 py- rounded-full backdrop-blur-xl  mb-8`}
            >
              {" "}
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
                  Let's Connect & Collaborate
                </p>
              </div>
            </motion.div>

            <h1
              className={`text-6xl md:text-6xl font-black mb-6 bg-clip-text text-transparent  ${
                isDark
                  ? "bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                  : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 "
               } `}
            >
              Let's Connect and Work Together
            </h1>

            <p
              className={`text-xl ${theme.text.secondary} max-w-5xl mx-auto mb-8`}
            >
              I'm always open to learning opportunities, collaboration, and interesting project ideas,
              and exploring
              <span className="text-blue-400 font-semibold">
                {" "}
                AI-driven solutions. {" "}
              </span>
              So, feel free to reach out...
            </p>
          </motion.div>
        </motion.section>

        <div className="grid grid-cols-1 place-items-center gap-8 mb-10">
          {/* 2. CONTACT FORM */}
          <motion.section
            className="w-full flex justify-center"
            variants={itemVariants}
          >
            <div className="relative group w-full max-w-3xl">
              {/* Glow background */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl ${ isDark ? "bg-gradient-to-r from-cyan-800 via-blue-900 to-purple-800 "
                : "bg-blue-600"
              }`} />

              {/* Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={`relative backdrop-blur-2xl rounded-3xl p-10  border-2  transition-all duration-500  ${
                      isDark
                        ? " border-2 border-white/20 text-white hover:border-blue-600 hover:shadow-xl  hover:shadow-blue-400 hover:bg-white/10"
                        : "border-2 border-slate-400 text-slate-900  hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400 hover:bg-slate-100"
                    } `}
              >
                {/* Success State */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`absolute inset-0 rounded-3xl backdrop-blur-2xl ${theme.bg.success} border flex flex-col items-center justify-center z-20`}
                  >
                    <motion.div
                      animate={{ scale: [0.8, 1, 0.8] }}
                      transition={{ duration: 0.5 }}
                      className="mb-4"
                    >
                      <Check className={`w-16 h-16 ${theme.text.success}`} />
                    </motion.div>
                    <h3
                      className={`text-2xl font-bold ${theme.text.success} mb-2`}
                    >
                      Message Sent!
                    </h3>
                    <p className={theme.text.muted}>
                      I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                <h2 className={`text-3xl font-bold mb-8 ${theme.text.primary}`}>
                  Send Me a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div variants={itemVariants}>
                    <label
                      className={`block text-sm font-semibold mb-3 ${
                        isDark
                        ? "text-white  "
                        : "text-black "
                      }`}
                    >
                      Full Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 rounded-xl backdrop-blur-xl ${theme.bg.input}  hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400 border-2 transition-all duration-300 focus:outline-none focus:ring-2 ${theme.border.focus} ${theme.text.primary} placeholder-slate-400 ${
                        formErrors.name
                          ? `${theme.border.error}`
                          : `${theme.border.base} hover:${theme.border.hover}`
                      }`}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center gap-2 mt-2 ${theme.text.error} text-sm`}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.name}
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={itemVariants}>
                    <label
                      className={`block text-sm font-semibold mb-3 ${
                        isDark
                        ? "text-white "
                        : "text-black "
                      }`}
                    >
                      Email Address
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 rounded-xl backdrop-blur-xl ${theme.bg.input}  hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400 border-2 transition-all duration-300 focus:outline-none focus:ring-2 ${theme.border.focus} ${theme.text.primary} placeholder-slate-400 ${
                        formErrors.email
                          ? theme.border.error
                          : `${theme.border.base} hover:${theme.border.hover} `
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center gap-2 mt-2 ${theme.text.error} text-sm`}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.email}
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Project Type */}
                  <motion.div variants={itemVariants}>
                    <label
                      className={`block text-sm font-semibold mb-3 ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      Project Type
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.01 }}
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 rounded-xl backdrop-blur-xl ${theme.bg.input} hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400 border-2 ${theme.border.base} hover:${theme.border.hover} transition-all duration-300 focus:outline-none focus:ring-2 ${theme.border.focus} ${theme.text.primary}`}
                    >
                      <option className={optionClass} value="web-development">
                        Web Development
                      </option>
                      <option className={optionClass} value="full-stack">
                        Full Stack Project
                      </option>
                      <option className={optionClass} value="ai-integration">
                        AI Integration
                      </option>
                      <option className={optionClass} value="consulting">
                        Consulting
                      </option>
                      <option className={optionClass} value="other">
                        Other
                      </option>
                    </motion.select>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div variants={itemVariants}>
                    <label
                      className={`block text-sm font-semibold mb-3 ${
                        isDark
                        ? "text-white "
                        : "text-black "
                      }`}
                    >
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-5 py-3 rounded-xl backdrop-blur-xl ${theme.bg.input}  hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400 border-2 transition-all duration-300 focus:outline-none focus:ring-2 ${theme.border.focus} resize-none ${theme.text.primary} placeholder-slate-400 ${
                        formErrors.message
                          ? theme.border.error
                          : `${theme.border.base} hover:${theme.border.hover}`
                      }`}
                      placeholder="Tell me about your project..."
                    />
                    {formErrors.message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center gap-2 mt-2 ${theme.text.error} text-sm`}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.message}
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Budget Range */}
                  <motion.div variants={itemVariants}>
                    <label
                      className={`block text-sm font-semibold mb-3 ${isDark ? "text-white" : " text-black"}`}
                    >
                      Budget Range (Optional)
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.01 }}
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 rounded-xl backdrop-blur-xl ${theme.bg.input}  hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400 border-2 ${theme.border.base} hover:${theme.border.hover} transition-all duration-300 focus:outline-none focus:ring-2 ${theme.border.focus} ${theme.text.primary}`}
                    >
                      <option className={optionClass} value="under-5k">
                        Under $5K
                      </option>
                      <option className={optionClass} value="5k-10k">
                        $5K - $10K
                      </option>
                      <option className={optionClass} value="10k-25k">
                        $10K - $25K
                      </option>
                      <option className={optionClass} value="25k+">
                        $25K+
                      </option>
                    </motion.select>
                  </motion.div>

                  {formErrors.general && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 mt-2 ${theme.text.error} text-sm`}
                    >
                      <AlertCircle className="w-4 h-4" />
                      {formErrors.general}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading}
                    className={`w-full mt-8 px-8 py-4  hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400 border-2  rounded-xl font-bold transition-all duration-300 flex items-center justify-center ${theme.border.base} gap-2 disabled:opacity-70`}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Loader className="w-5 h-5" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.section>

          {/* 3. CONTACT INFO + AVAILABILITY */}
          {/* <motion.div className="space-y-8" variants={itemVariants}> */}
            {/* Availability Badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div
                className={`relative backdrop-blur-2xl rounded-2xl p-6 ${theme.bg.card} border-2 ${theme.border.base}`}
              >
                <motion.div
                  animate={pulseVariants.animate}
                  className="flex items-center gap-3"
                >
                  <motion.div className="w-4 h-4 rounded-full bg-green-400" />
                  <div>
                    <p className="text-sm font-semibold  text-green-400">
                      Currently Available
                    </p>
                    <p className={`text-xs ${theme.text.muted}`}>
                      For new projects
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div> */}

            {/* Contact Info Cards */}
            {/* <div className="space-y-4">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={idx}
                    href={item.link || "#"}
                    target={
                      item.link &&
                      !item.link.startsWith("mailto") &&
                      !item.link.startsWith("tel")
                        ? "_blank"
                        : "_self"
                    }
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="group relative block"
                  >
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg ${isDark ? "bg-gradient-to-r from-cyan-700 to-blue-500" : "bg-slate-200  "} `} />

                    <div
                      className={`relative backdrop-blur-xl rounded-xl p-4 ${theme.bg.card}  hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400 border-2 ${theme.border.base}  transition-all duration-300`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-20`}
                        >
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className={`text-xs ${theme.text.muted}`}>
                            {item.label}
                          </p>
                          <p
                            className={`text-sm font-semibold ${theme.text.primary}`}
                          >
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div> */}
          {/* </motion.div> */}
        </div>

        {/* 5. SOCIAL MEDIA GRID */}
        {/* <motion.section className="mb-20" variants={itemVariants}>
          <h2
            className={`text-3xl font-bold mb-12 text-center ${theme.text.primary}`}
          >
            Connect on Social
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.1 }}
                  className="group relative "
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl " />

                  <div
                    className={`relative backdrop-blur-xl rounded-2xl p-8 ${theme.bg.card} border ${theme.border.base}   hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400 border-2 transition-all duration-300 flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 text-cyan-400 transition-colors duration-300 ${isDark ? "group-hover:text-white " : "group-hover:text-black "}`} />
                  </div>

                  <p
                    className={`text-center mt-3 text-sm font-semibold group-hover:text-cyan-400 transition-colors duration-300 ${theme.text.secondary}`}
                  >
                    {social.label}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </motion.section> */}

        {/* 6. QUOTE SECTION */}
        {/* <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative group"
        >
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-r from-purple-500 to-cyan-500" />

          <div
            className={`relative backdrop-blur-2xl rounded-3xl p-12 ${theme.bg.card} border ${theme.border.base} ${theme.border.hover} transition-all duration-500 text-center`}
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"
            />

            <p
              className={`text-2xl font-bold leading-relaxed mb-6 ${theme.text.primary}`}
            >
              "Great products are built with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                clean code
              </span>
              ,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {" "}
                scalable systems
              </span>
              , and
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                {" "}
                creative thinking
              </span>
              ."
            </p>

            <p className={theme.text.muted}>
              — Building the future, one line at a time
            </p>
          </div>
        </motion.section> */}
      </motion.div>
    </div>
  );
};

export default Contact;
