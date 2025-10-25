"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description:
      "A short description about this project, explaining what it does and its main features.",
    image: "/placeholder-project.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Project Two",
    description:
      "A sleek and modern app designed to demonstrate advanced UI and performance.",
    image: "/placeholder-project.png",
    tech: ["React", "Supabase", "Node.js"],
  },
  {
    title: "Project Three",
    description:
      "An interactive dashboard built for visualizing data with clean animations.",
    image: "/placeholder-project.png",
    tech: ["Vite", "Recharts", "Shadcn/UI"],
  },
  {
    title: "Project Four",
    description:
      "A powerful API-integrated web app showcasing seamless backend connectivity.",
    image: "/placeholder-project.png",
    tech: ["Express", "MongoDB", "JWT"],
  },
  {
    title: "Project Five",
    description:
      "A portfolio website with elegant transitions, smooth scrolling, and minimalism.",
    image: "/placeholder-project.png",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
  },
  {
    title: "Project Six",
    description:
      "A mobile-friendly PWA offering dynamic offline support and fast performance.",
    image: "/placeholder-project.png",
    tech: ["PWA", "React Query", "Zustand"],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-24 bg-white dark:bg-black transition-colors duration-300 border-t-1 border-neutral-500"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto"
        >
          A selection of my favorite work — blending design, performance, and
          modern web technologies.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                <CardHeader className="p-0 relative">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 text-left">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/80 text-white dark:bg-zinc-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="default"
                      className="bg-slate-800 hover:bg-slate-700 text-white rounded-full flex items-center gap-2 transition-transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/10 text-white hover:bg-white/10 rounded-full flex items-center gap-2 transition-transform hover:scale-105"
                    >
                      <Github size={16} />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
