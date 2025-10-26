// components/[YourProjectName]Showcase.tsx

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// --- Framer Motion Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardHover = {
  scale: 1.05,
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
  transition: { duration: 0.3 },
};

interface TechStackProps {
  category: string;
  tech: string;
  rationale: string;
}

const techStack: TechStackProps[] = [
  {
    category: "Framework",
    tech: "Next.js",
    rationale: "Hybrid rendering (SSR/SSG) and performance optimization.",
  },
  {
    category: "Styling",
    tech: "Tailwind CSS",
    rationale: "Utility-first approach for rapid, consistent styling.",
  },
  {
    category: "Animation",
    tech: "Framer Motion",
    rationale: "Declarative, fluid animations for a polished UX.",
  },
  {
    category: "State Mgt.",
    tech: "Zustand / Redux",
    rationale: "Predictable and efficient global state management.",
  },
];

const screenshots = [
  {
    src: "/dark.png",
    alt: "Website Hero Section",
    description:
      "The captivating landing page, designed for immediate engagement with a subtle slide-up animation on content.",
  },
  {
    src: "/dark.png",
    alt: "Dashboard View",
    description:
      "Showcasing a complex, data-rich internal view built with custom, reusable components.",
  },
  {
    src: "/dark.png",
    alt: "Interactive Component",
    description:
      "Highlighting a key interactive element (e.g., a form or graph) with custom feedback animations.",
  },
];

const ZLayoutSection: React.FC = () => {
  return (
    <motion.section
      className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <header className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-gray-100"
          variants={itemVariants}
        >
          Boutique Escale
        </motion.h2>
        <motion.p
          className="mt-4 text-xl text-gray-600 dark:text-gray-400"
          variants={itemVariants}
        >
          A dynamic, full-stack e-commerce application based in algeria.
        </motion.p>
      </header>
      {/* --- Main Hero Image --- */}
      <motion.div
        className="w-full relative shadow-2xl rounded-xl overflow-hidden mb-16 "
        variants={itemVariants}
      >
        <Image
          src="/dark.png"
          alt="Full desktop view of the website"
          layout="responsive"
          objectFit="cover"
          priority
          width={1200}
          height={675}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
      </motion.div>

      <div className="space-y-12">
        {screenshots.map((shot, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl`}
            variants={itemVariants}
          >
            <motion.div
              className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 0.5 : -0.5 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                layout="responsive"
                objectFit="cover"
                width={600}
                height={400}
                className="transition-transform duration-500"
              />
            </motion.div>
            <div className="w-full md:w-1/2">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {shot.alt}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {shot.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ZLayoutSection;
