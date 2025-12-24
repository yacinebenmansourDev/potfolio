"use client";

import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Image from "next/image";

export function HeroHighlightComponent() {
  return (
    <section className="min-h-svh">
      <HeroHighlight>
        <div className="min-h-svh flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <Image
              src="/avatar-4.png"
              alt="Yacine's Avatar"
              width={140}
              height={140}
              className="rounded-full w-40 h-40 object-cover border-4 border-gray-200 dark:border-gray-700 shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-neutral-800 dark:text-white leading-tight max-w-4xl"
          >
            Hi, I&apos;m Benmansour Mohamed Yacine
            <br />
            <Highlight className="text-black dark:text-white">
              Front-End Developer
            </Highlight>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mt-6 mb-10"
          >
            I craft{" "}
            <span className="font-semibold text-neutral-800 dark:text-white">
              smooth, modern, and connected digital experiences
            </span>{" "}
            that look beautiful and perform flawlessly across every platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full shadow-md transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/40 cursor-pointer"
            >
              View My Work
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-full transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/40 cursor-pointer"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
}
