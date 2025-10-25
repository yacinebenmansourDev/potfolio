"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-24 bg-white dark:bg-black transition-colors duration-300 border-t-1 border-neutral-500"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto"
        >
          Have a question, a project idea, or just want to say hi? Feel free to
          reach out to me using the form below.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left"
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Project collaboration, freelance work, etc."
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your message..."
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="relative bg-slate-800 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300 group"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(59,130,246,0.6)_0%,rgba(59,130,246,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <span className="relative z-10">Send Message</span>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-sky-400/0 via-sky-400/90 to-sky-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
