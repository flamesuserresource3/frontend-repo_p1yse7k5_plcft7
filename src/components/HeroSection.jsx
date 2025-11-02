import React, { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

function TypingText({ text, speed = 60, className = '' }) {
  const [display, setDisplay] = useState('');
  const indexRef = useRef(0);
  const chars = useMemo(() => text.split(''), [text]);

  useEffect(() => {
    setDisplay('');
    indexRef.current = 0;
    const interval = setInterval(() => {
      setDisplay((prev) => prev + chars[indexRef.current]);
      indexRef.current += 1;
      if (indexRef.current >= chars.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [chars, speed]);

  return <span className={className}>{display}</span>;
}

const HeroSection = () => {
  const handleExplore = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#070815] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient aura overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#070815]/60 to-[#070815]" />
      <div className="pointer-events-none absolute -inset-x-20 top-0 h-80 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-fuchsia-400" />
          <span className="text-sm text-white/80">Futuristic • AI • Minimal</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Aarush
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-3 text-xl text-white/80 sm:text-2xl"
        >
          <TypingText text="AI & ML Student | Developer | Innovator" />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Building intelligent systems that think, learn, and assist humans.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <button
            onClick={handleExplore}
            className="group inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-gradient-to-r from-fuchsia-600 to-cyan-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#070815]"
          >
            Explore My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
