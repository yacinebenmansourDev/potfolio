"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TailwindCSS",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "React Query",
    logo: "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg",
  },
  {
    name: "React Hook Form",
    logo: "https://react-hook-form.com/images/logo/react-hook-form-logo-only.png",
  },
  {
    name: "Zod",
    logo: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
  },
  {
    name: "ShadCN/UI",
    logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
  },
  {
    name: "Expo",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
  },
  {
    name: "Electron",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  },
  {
    name: "Vite",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
  },
  {
    name: "Zustand",
    logo: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  {
    name: "Jest",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];
export default function SkillsSection() {
  return (
    <section className="w-full py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          Technologies & Skills
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
          Here are the tools and technologies I use to build modern, fast, and
          scalable applications across web, mobile, and desktop platforms.
        </p>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group relative cursor-default rounded-full p-px text-sm font-semibold text-white shadow-2xl shadow-zinc-900"
            >
              {/* Glow background */}
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>

              {/* Inner card */}
              <div className="relative flex items-center gap-2 z-10 rounded-full bg-zinc-100 dark:bg-zinc-950 py-1.5 px-4 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={18}
                  height={18}
                  unoptimized
                  className="object-contain"
                />
                <span className="text-sm text-zinc-900 dark:text-neutral-300 ">
                  {skill.name}
                </span>
              </div>

              {/* Subtle underline glow */}
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-sky-400/90 to-blue-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
