import React from 'react'
import HeroPage from '../components/HeroPage'
import { useTheme } from '../context/ThemeContext';


const Home = () => {
  const { isDark } = useTheme()
  return (
    <main className={`w-full relative z-0 min-h-screen overflow-x-hidden px-4 sm:px-6 lg:px-8 pt=20 sm:pt-24 pb-8 sm:pb-12 ${ 
      isDark ? 'bg-slate-950' : 'bg-white'
     }`}>
      <HeroPage />
    </main>
  )
}

export default Home
