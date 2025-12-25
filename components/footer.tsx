"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Website footer"
      className="border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            © {currentYear} Made with{" "}
            <Heart
              size={16}
              className="text-red-500"
              aria-hidden="true"
            />{" "}
            by Full Stack Developer
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-label="Footer social links"
          >
            <motion.a
              href="https://github.com/Ashmita2282"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} aria-hidden="true" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ashmita-shrivas-566265202/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} aria-hidden="true" />
            </motion.a>

            <motion.a
              href="mailto:your.shrivasashmita@gmail.com"
              aria-label="Send email"
              className="p-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} aria-hidden="true" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
