"use client";

import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section className="relative w-full py-10 bg-[#FEFDFB] dark:bg-black transition-colors duration-300">
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center text-3xl md:text-4xl font-bold text-[#0A171C] dark:text-[#FEFDFB] mb-12"
        >
          About Me
        </motion.h2>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-px"
        >
          {/* Glow */}

          {/* Content */}
          <div className="relative z-10  space-y-6 text-center">
            {/* Intro */}
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              I’m Benmansour Mohamed Yacine, a developer from Algeria with a
              strong focus on building clean, modern, and high-performance
              digital products.
            </p>

            {/* Background */}
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              With a background in Computer Science and years of self-driven
              learning, I specialize in turning ideas and designs into reliable,
              production-ready applications across web and mobile platforms.
            </p>

            {/* Philosophy */}
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              My approach combines solid engineering, attention to detail, and
              performance-first thinking. I handle UI/UX at a practical level
              and collaborate with designers when deeper visual expertise is
              required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
