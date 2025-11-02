import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const projects = [
  {
    title: 'Pichu AI Assistant',
    desc: 'A lightweight AI voice assistant that understands commands, retrieves information, and performs tasks with a friendly, anime-inspired personality.',
    stack: ['Python', 'NLU', 'Speech', 'Flask'],
    href: '#',
  },
  {
    title: 'College Event Management System',
    desc: 'Full-stack platform for managing university events, registrations, and announcements with analytics for organizers.',
    stack: ['React', 'FastAPI', 'MongoDB'],
    href: '#',
  },
  {
    title: 'AI To-Do Scheduler',
    desc: 'Intelligent planner that prioritizes tasks using ML heuristics, deadlines, and personal productivity patterns.',
    stack: ['Python', 'TensorFlow', 'Next Steps'],
    href: '#',
  },
  {
    title: 'Portfolio Engine',
    desc: 'A performant, animated portfolio template with 3D hero and smooth scroll interactions.',
    stack: ['React', 'Framer Motion', 'Spline'],
    href: '#',
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="relative w-full scroll-mt-24 bg-[#0A0B1E] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.08),transparent_40%),radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(147,51,234,0.16)] backdrop-blur-md"
            >
              <div className="pointer-events-none absolute -inset-10 bg-[conic-gradient(from_180deg,theme(colors.fuchsia.500),theme(colors.violet.500),theme(colors.cyan.500),theme(colors.fuchsia.500))] opacity-10 blur-3xl transition-opacity group-hover:opacity-20" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/80">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 transition-colors hover:bg-cyan-500/20"
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-fuchsia-500/10 to-cyan-500/10 p-8 backdrop-blur-md"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="mt-3 text-white/80">
                Have an opportunity, collaboration, or just want to say hi? I’d love to connect.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/90 hover:bg-white/15"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/90 hover:bg-white/15"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="mailto:aarush@example.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/90 hover:bg-white/15"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = data.get('name');
                alert(`Thanks ${name}! Your message has been sent.`);
                form.reset();
              }}
              className="grid gap-4"
            >
              <div>
                <label className="mb-1 block text-sm text-white/80">Name</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-fuchsia-400/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-fuchsia-400/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-fuchsia-400/50"
                  placeholder="How can I help?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg border border-fuchsia-500/40 bg-gradient-to-r from-fuchsia-600 to-cyan-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
