"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    title: "UI / UX Design",
    description: "Clean, intuitive interfaces focused on real user experience.",
    image: "/pngs/ui.png",
  },
  {
    title: "5+ Years Experience",
    description: "Over five years building and delivering digital products.",
    image: "/pngs/5.png",
  },
  {
    title: "Product Thinking",
    description: "Strong focus on value, scalability, and long-term vision.",
    image: "/pngs/product.png",
  },
  {
    title: "Performance",
    description: "Fast, responsive, and optimized applications.",
    image: "/pngs/perf-1.png",
  },
  {
    title: "Problem Solving",
    description: "Autonomous, analytical, and solution-driven mindset.",
    image: "/pngs/problem.png",
  },
];

export default function SkillsSection() {
  return (
    <section className="w-full py-10 bg-[#FEFDFB] dark:bg-black transition-colors duration-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A171C] dark:text-[#FEFDFB]">
            Skills & Expertise
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-px"
            >
              {/* Outer glow */}
              <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(90%_120%_at_50%_0%,rgba(56,189,248,0.45)_0%,rgba(56,189,248,0)_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div
                className="
                  relative h-full rounded-2xl px-6 py-6 overflow-hidden
                  bg-white/70 dark:bg-zinc-900/60
                  backdrop-blur-xl
                  ring-1 ring-black/5 dark:ring-white/10
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]
                  transition-all duration-300
                  group-hover:-translate-y-1
                "
              >
                {/* Content */}
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {skill.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed relative z-30">
                  {skill.description}
                </p>

                {/* PNG image bottom-right */}
                <div className="pointer-events-none absolute z-10 -bottom-5 -right-2 w-36 h-36 opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                  <Image
                    src={skill.image}
                    alt=""
                    fill
                    className="
                      object-contain
                      blur-[0.3px]
                      drop-shadow-[0_10px_20px_rgba(56,189,248,0.15)]
                      mask-image-[radial-gradient(circle_at_70%_70%,black_40%,transparent_75%)]
                    "
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
