"use client";

import AppShowcase from "@/components/AppShowcase";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaApple, FaGlobe, FaGooglePlay } from "react-icons/fa";

import Footer from "@/components/Footer";
import ZLayoutSection from "@/components/ZLayoutSection";
import { ArrowBigLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
export default function EscaleShowcase() {
  const router = useRouter();
  return (
    <section className="relative w-full min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <button
        className="fixed top-4 left-4 z-50 h-12 w-12 rounded-full bg-white dark:bg-neutral-900 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <ArrowBigLeft className="h-6 w-6 text-neutral-500" />
      </button>
      <section className="w-full bg-neutral-50 dark:bg-neutral-900 pt-24">
        <div className="max-w-8xl mx-auto px-6">
          {/* --- Header --- */}
          <header className="text-center mb-12">
            <motion.h2
              className="text-4xl font-extrabold text-gray-900 dark:text-gray-100"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Boutique Escale
            </motion.h2>
            <motion.p
              className="mt-4 text-xl text-gray-600 dark:text-gray-400"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              A dynamic, full-stack e-commerce application based in Algeria.
            </motion.p>
          </header>

          {/* --- Main Hero Image --- */}
          <motion.div
            className="max-w-6xl mx-auto relative shadow-2xl rounded-xl overflow-hidden mb-20"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Image
              src="/dark.png"
              alt="Full desktop view of Boutique Escale"
              layout="responsive"
              objectFit="cover"
              priority
              width={1200}
              height={675}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* --- Description Section --- */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-24"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              About the project
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Boutique Escale is a modern e-commerce platform designed for a
              physical clothing store that also sells online. The goal was to
              create a seamless experience between the online and offline store,
              with automatic stock synchronization.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The project was built using <strong>Next.js 14</strong> (App
              Router),
              <strong> Supabase</strong> for backend and authentication,
              <strong> TailwindCSS</strong> and <strong>ShadCN UI</strong> for
              styling, and <strong>React Query</strong> for efficient data
              fetching.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Features include product management, dynamic promotions, user
              profiles, dark mode, and real-time cart updates. The website is
              fully responsive and designed to deliver a fast and elegant
              shopping experience on both mobile and desktop.
            </p>
          </motion.div>

          {/* --- Screenshots Section --- */}
          <motion.div
            className="max-w-8xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Website Screenshots
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "/dark.png",
                "/dark.png",
                "/dark.png",
                "/dark.png",
                "/dark.png",
                "/dark.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative w-full h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg group"
                >
                  <Image
                    src={src}
                    alt={`Escale screenshot ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <AppShowcase />
      <section className="w-full bg-neutral-50 dark:bg-neutral-900 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* === Heading === */}
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Découvrez ce projet
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-12">
            Une application moderne et responsive, conçue pour offrir une
            expérience fluide sur le web, Android et iOS.
          </p>

          {/* === Buttons === */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Website Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="https://boutique-escale.com"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-neutral-800 dark:bg-white text-white dark:text-neutral-900 font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
              >
                <FaGlobe className="text-lg" />
                <span>Voir le site web</span>
              </Link>
            </motion.div>

            {/* Play Store Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 bg-green-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
              >
                <FaGooglePlay className="text-lg" />
                <span>Google Play</span>
              </Link>
            </motion.div>

            {/* App Store Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
              >
                <FaApple className="text-lg" />
                <span>App Store</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
