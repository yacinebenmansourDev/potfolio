"use client";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section className="relative w-full py-24 bg-white dark:bg-black transition-colors duration-300 shadow-[inset_0_80px_100px_-60px_rgba(59,130,246,0.15)] dark:shadow-[inset_0_80px_100px_-60px_rgba(59,130,246,0.25)]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-6 leading-relaxed text-lg"
        >
          My name is{" "}
          <span className="text-blue-500 font-semibold">
            Benmansour Mohamed Yacine
          </span>
          , a passionate developer from Algeria. I studied Computer Science at
          university and continued learning by myself, specializing in modern
          technologies such as{" "}
          <span className="text-blue-400 font-medium">React</span>,{" "}
          <span className="text-blue-400 font-medium">Next.js</span>,{" "}
          <span className="text-blue-400 font-medium">React Native</span>, and{" "}
          <span className="text-blue-400 font-medium">Electron</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-6 leading-relaxed text-lg"
        >
          I work as a{" "}
          <span className="text-blue-400 font-semibold">freelancer</span> and
          content creator, and I&apos;m the founder of{" "}
          <span className="text-blue-500 font-semibold">Atome</span> — a
          development company that&apos;s soon opening its own office.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed text-lg"
        >
          I&apos;m a highly professional developer focused on delivering
          pixel-perfect and high-performance applications. I do basic{" "}
          <span className="text-blue-400">UI/UX design</span>, but when I need a
          more advanced touch, I collaborate with designers to bring ideas to
          life. I can transform any{" "}
          <span className="text-blue-400 font-medium">Figma design</span> into a
          fully functional web or mobile app — as long as it&apos;s possible to
          code.
        </motion.p>
      </div>
    </section>
  );
}
