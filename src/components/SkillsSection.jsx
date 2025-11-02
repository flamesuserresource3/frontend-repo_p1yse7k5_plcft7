import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, FlaskConical } from 'lucide-react';

const skills = [
  { name: 'Python', color: 'from-yellow-400 to-orange-400' },
  { name: 'TensorFlow', color: 'from-amber-500 to-yellow-400' },
  { name: 'PyTorch', color: 'from-red-500 to-rose-500' },
  { name: 'Flask', color: 'from-emerald-400 to-teal-400' },
  { name: 'SQL', color: 'from-sky-400 to-cyan-400' },
  { name: 'AI/ML Tools', color: 'from-fuchsia-500 to-violet-500' },
];

const iconMap = {
  Python: <Code2 className="h-4 w-4" />,
  TensorFlow: <Brain className="h-4 w-4" />,
  PyTorch: <Brain className="h-4 w-4" />,
  Flask: <FlaskConical className="h-4 w-4" />,
  SQL: <Database className="h-4 w-4" />,
  'AI/ML Tools': <Brain className="h-4 w-4" />,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative w-full scroll-mt-24 bg-[#070815] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
        >
          Skills
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6"
        >
          {skills.map((s) => (
            <motion.div
              key={s.name}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 text-center shadow-[0_0_20px_rgba(139,92,246,0.12)] transition-transform hover:scale-[1.03]`}
            >
              <div className={`pointer-events-none absolute -inset-6 bg-gradient-to-br ${s.color} opacity-20 blur-2xl`} />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="rounded-md bg-white/10 p-2 text-white/90">{iconMap[s.name]}</div>
                <span className="text-sm text-white/90">{s.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
