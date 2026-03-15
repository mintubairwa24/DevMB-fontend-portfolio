import React from 'react'
import Skills from '../components/Skills'
import { useTheme } from '../context/ThemeContext'

const SkillsDetails = () => {
  const {isDark} = useTheme();
  
  return (
     <main
      className={`w-full relative z-0 min-h-screen overflow-x-hidden pt-24 sm:pt-28 pb-10 ${
        isDark ? "bg-slate-950" : "bg-white"
      }`}
    >
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <Skills/>
      </section>
    </main>
  )
}

export default SkillsDetails;
