"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppShowcase() {
  return (
    <section className="w-full py-24 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          Découvrez l&apos;application mobile
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-16">
          Une expérience fluide et intuitive, disponible sur tous vos appareils.
        </p>

        {/* === Showcase Container === */}
        <div className="relative flex justify-center items-center gap-6 md:gap-12">
          {/* Phone 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative w-40 md:w-56 lg:w-64"
          >
            <Image
              src="/iphone.png"
              alt="iPhone mockup left"
              width={400}
              height={800}
              className="drop-shadow-2xl transition-transform duration-700 hover:scale-105 rotate-[-8deg]"
            />
          </motion.div>

          {/* Phone 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-44 md:w-64 lg:w-72 z-10"
          >
            <Image
              src="/iphone.png"
              alt="iPhone mockup center"
              width={400}
              height={800}
              className="drop-shadow-2xl transition-transform duration-700 hover:scale-105 rotate-0"
            />
          </motion.div>

          {/* Phone 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative w-40 md:w-56 lg:w-64"
          >
            <Image
              src="/iphone.png"
              alt="iPhone mockup right"
              width={400}
              height={800}
              className="drop-shadow-2xl transition-transform duration-700 hover:scale-105 rotate-[8deg]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
