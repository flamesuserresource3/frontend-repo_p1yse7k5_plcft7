import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full scroll-mt-24 bg-[#0A0B1E] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
        >
          About Me
        </motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-md"
          >
            <p className="text-white/80">
              I am Aarush, an MCA student specializing in Artificial Intelligence and Machine Learning at Lovely Professional University. My journey started with a BCA, where I built a strong foundation in computer science and software development. Today, I focus on crafting intelligent systems that are practical, ethical, and human-centric.
            </p>
            <p className="mt-4 text-white/70">
              Beyond the code, I love anime, movies, and gaming—they inspire creativity, world-building, and problem-solving in my projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-white/5 to-cyan-500/20 p-6 backdrop-blur-md"
          >
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-1 h-5 w-5 text-cyan-300" />
              <div>
                <h3 className="text-lg font-semibold">Education</h3>
                <ul className="mt-2 space-y-2 text-white/80">
                  <li>
                    <span className="font-medium">MCA (AI & ML)</span> — Lovely Professional University
                  </li>
                  <li>
                    <span className="font-medium">BCA</span> — Foundations in programming, data structures, and web technologies
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3">
              <Sparkles className="mt-1 h-5 w-5 text-fuchsia-300" />
              <div>
                <h3 className="text-lg font-semibold">Certifications</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
                  <li>Deep Learning Specialization (Coursera)</li>
                  <li>TensorFlow Developer Certificate (Google/DeepLearning.AI)</li>
                  <li>Machine Learning with Python (IBM)</li>
                  <li>Advanced Python Programming</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3">
              <Heart className="mt-1 h-5 w-5 text-rose-300" />
              <div>
                <h3 className="text-lg font-semibold">Interests</h3>
                <p className="mt-2 text-white/80">AI research, model optimization, full‑stack development, anime, movies, and immersive gaming experiences.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
