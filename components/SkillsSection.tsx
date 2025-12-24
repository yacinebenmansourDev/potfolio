"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "UI / UX Design",
    description: "Clean, intuitive interfaces focused on real user experience.",
  },
  {
    title: "5+ Years Experience",
    description: "Over five years building and delivering digital products.",
  },
  {
    title: "Product Thinking",
    description: "Strong focus on value, scalability, and long-term vision.",
  },
  {
    title: "Performance",
    description: "Fast, responsive, and optimized applications.",
  },
  {
    title: "Problem Solving",
    description: "Autonomous, analytical, and solution-driven mindset.",
  },
];

export default function SkillsSection() {
  return (
    <section className="w-full py-10 bg-[#FEFDFB] dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A171C] dark:text-[#FEFDFB] mb-4">
            Skills & Expertise
          </h2>
        </div>

        {/* Horizontal cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-px"
            >
              {/* Outer glow */}
              <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(80%_120%_at_50%_0%,rgba(56,189,248,0.45)_0%,rgba(56,189,248,0)_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Card */}
              <div
                className="relative z-10 h-full rounded-2xl px-6 py-6
    bg-linear-to-br
    from-white
    via-slate-50
    to-slate-100
    dark:from-zinc-950
    dark:via-zinc-900
    dark:to-zinc-800
    ring-1 ring-black/5 dark:ring-white/10
    backdrop-blur
    transition-all duration-300
    group-hover:-translate-y-1
  "
              >
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {skill.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {skill.description}
                </p>

                {/* Bottom accent line */}
                <span
                  className="pointer-events-none absolute inset-x-6 bottom-3 h-px
      bg-linear-to-r from-transparent via-sky-400/40 to-transparent
      opacity-0 transition-opacity duration-300 group-hover:opacity-100
    "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
