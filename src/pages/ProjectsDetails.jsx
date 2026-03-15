import React, { useEffect } from "react";
import Projects from "../components/Projects";
import { useTheme } from "../context/ThemeContext";

const ProjectsDetails = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main
      className={`w-full relative z-0 min-h-screen overflow-x-hidden pt-24 sm:pt-28 pb-10 ${
        isDark ? "bg-slate-950" : "bg-white"
      }`}
    >
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <Projects />
      </section>
    </main>
  );
};

export default ProjectsDetails;
