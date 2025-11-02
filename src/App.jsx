import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import WorkSection from './components/WorkSection';

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-[#070815] antialiased">
      {/* Simple top nav */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-b-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
        <a href="#home" className="text-sm font-medium text-white/80">
          aayush.dev
        </a>
        <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#work" className="hover:text-white">Work</a>
        </nav>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
      </main>

      <footer className="border-t border-white/10 bg-[#070815] py-8 text-center text-white/60">
        © {new Date().getFullYear()} Aarush — Built with React, Tailwind, Framer Motion, and Spline.
      </footer>
    </div>
  );
};

export default App;
