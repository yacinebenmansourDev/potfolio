"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Project {
  title: string;
  description?: string;
  image?: string;
  tech?: string[];
  href?: string;
}

const projects: Project[] = [
  {
    title: "Boutique Escale",
    description:
      "Boutique Escale is a modern e-commerce platform featuring both a responsive website and a mobile app, designed to provide a seamless shopping experience with elegant UI, smooth navigation, and real-time inventory management which is a private web app.",
    image: "/dark.png",
    tech: ["Next.js", "Expo", "Supabase"],
    href: "/boutique-escale",
  },
  { title: "Upcoming..." },
  { title: "Upcoming..." },
  { title: "Upcoming..." },
  { title: "Upcoming..." },
  { title: "Upcoming..." },
];

export default function ProjectsSection() {
  const router = useRouter();

  return (
    <section
      id="projects"
      className="w-full py-24 bg-white dark:bg-black transition-colors duration-300 border-t border-neutral-500"
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
              key={project.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {project.image ? (
                <Card className="group overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="relative w-full h-77">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="text-sm text-neutral-700 dark:text-neutral-300 text-left">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech?.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/80 text-white dark:bg-zinc-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      {project.href && (
                        <Button
                          variant="default"
                          className="bg-slate-800 hover:bg-slate-700 text-white rounded-full flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer"
                          onClick={() => router.push(project.href!)}
                        >
                          <ExternalLink size={16} />
                          Visit
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="flex items-center justify-center h-72 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <span className="text-lg font-semibold text-neutral-600 dark:text-neutral-400">
                    Upcoming...
                  </span>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
