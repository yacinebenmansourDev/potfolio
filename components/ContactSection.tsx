"use client";
import { motion } from "framer-motion";
// We import the specific event types from 'react'
import React, { useState, ChangeEvent, FormEvent } from "react";
import { fromHalfFloat } from "three/src/extras/DataUtils.js";

export default function ContactSection() {
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  // =======================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // FIX: Initialized status with an empty string ('') instead of null to resolve TypeScript errors.
  const [status, setStatus] = useState(""); // '' is initial, then 'success', 'error', or 'sending'

  // ADDED TYPE: ChangeEvent for inputs and text areas
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Note: e.target.id is used here, matching the input IDs below.
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ADDED TYPE: FormEvent for form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Basic validation check
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("error");
      return;
    }

    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // CRITICAL: Formspree uses the _replyto field to correctly set the sender's email.
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
        } else {
          // Handle server-side errors (e.g., rate limits, invalid fields)
          setStatus("error");
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case "success":
        return (
          <p className="text-green-500 font-medium mt-4">
            Thank you! Your message has been sent successfully. I will be in
            touch soon.
          </p>
        );
      case "error":
        return (
          <p className="text-red-500 font-medium mt-4">
            Oops! There was an issue sending your message. Please check the form
            and ensure the email address is valid.
          </p>
        );
      case "sending":
        // Optionally display a dedicated sending state message
        return (
          <p className="text-blue-500 font-medium mt-4">
            Sending your message...
          </p>
        );
      default:
        // Returns null for the initial/clear state ('')
        return null;
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-24 bg-white dark:bg-black transition-colors duration-300 border-t border-neutral-200 dark:border-neutral-800"
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
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left"
        >
          {/* Name Field */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          {/* Subject Field */}
          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Project collaboration, freelance work, etc."
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-2 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
            />
          </div>

          <div className="md:col-span-2 flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "sending"}
              className="relative bg-slate-800 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(59,130,246,0.6)_0%,rgba(59,130,246,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <span className="relative z-10">
                {status === "sending" ? "Sending..." : "Send Message"}
              </span>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-sky-400/0 via-sky-400/90 to-sky-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </motion.button>

            {/* Status Message Display */}
            {getStatusMessage()}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
