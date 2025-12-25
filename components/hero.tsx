"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowDown, Code, Zap, Instagram } from "lucide-react";
import Image from "next/image";
import TypingEffect from "./typingEffect";

/* ------------------ Animated Code Snippet ------------------ */
const CodeSnippet = () => {
  const codeLines = [
    { text: "const developer = {", delay: 0 },
    { text: "  name: 'Full Stack Developer',", delay: 0.2 },
    { text: "  stack: ['MongoDB', 'Express', 'React', 'Node'],", delay: 0.4 },
    { text: "  passion: 'Building amazing apps'", delay: 0.6 },
    { text: "};", delay: 0.8 },
  ];

  return (
    <aside
      aria-hidden="true"
      className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 glass rounded-xl p-4 font-mono text-xs opacity-60"
    >
      <div className="flex gap-2 mb-2">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {codeLines.map((line) => (
        <motion.div
          key={line.text}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: line.delay, duration: 0.3 }}
          className="text-purple-300 dark:text-purple-400"
        >
          {line.text}
        </motion.div>
      ))}
    </aside>
  );
};

/* ------------------ Animation Variants ------------------ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ------------------ Hero Section ------------------ */
export default function Hero() {
  return (
    <section
      id="home"
      role="banner"
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* SEO Keywords (Hidden) */}
      <p className="sr-only">
        Full Stack Developer portfolio. MERN Stack Developer skilled in MongoDB,
        Express.js, React.js, Node.js, Next.js, TypeScript, REST APIs, secure
        authentication, scalable web applications.
      </p>

      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-pink-900/40"
      />

      {/* Grid Pattern */}
      <div aria-hidden="true" className="absolute inset-0 opacity-20 dark:opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        aria-hidden="true"
        className="absolute top-20 left-10 text-purple-400/20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Code size={40} />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-20 right-20 text-blue-400/20"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <Zap size={40} />
      </motion.div>

      <CodeSnippet />

      <motion.header
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-4 border border-purple-500/30"
            >
              👋 Welcome to my Portfolio
            </motion.span>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-xl sm:text-xl md:text-xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="block text-gray-700 text-2xl dark:text-gray-300">
                Hi, I'm
              </span>

              <motion.span
                className="block gradient-text"
                animate={{ backgroundPosition: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Ashmita Shrivas
              </motion.span>

              <TypingEffect />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
            >
              Building scalable, high-performance web applications with clean UI,
              strong backend architecture, secure authentication, and real-world
              problem solving.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6"
            >
              <motion.a
                href="#contact"
                className="px-8 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold flex items-center gap-2 shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <Mail size={20} aria-hidden="true" /> Hire Me
              </motion.a>

              <motion.a
                href="#projects"
                className="px-8 py-2 glass rounded-xl flex items-center justify-center flex-col font-semibold border border-purple-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <span>View My Projects</span>
                <ArrowDown size={18} aria-hidden="true" />
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              🚀 Open to Full-Time | Internship | Freelance Opportunities
            </motion.div>

            {/* SOCIALS */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 mt-6 p-4 justify-center lg:justify-start"

            >
              <a
                href="https://github.com/Ashmita2282"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl border border-purple-500/20 hover:scale-105 transition-transform"
                aria-label="GitHub profile"

              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/ashmita-shrivas-566265202/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl border border-purple-500/20 hover:scale-105 transition-transform"
                aria-label="LinkedIn profile"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:your.shrivasashmita@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl border border-purple-500/20 hover:scale-105 transition-transform"
                aria-label="LinkedIn profile"
              >
                <Mail />
              </a>
              <a
                href="https://www.instagram.com/shrivasashmita/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl border border-purple-500/20 hover:scale-105 transition-transform"
                aria-label="Instagram profile"
              >
                <Instagram />
              </a>
            </motion.div>
          </div>

          {/* RIGHT AVATAR */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 relative lg:-mt-[36px]"
          >
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glowing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Avatar Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
                {/* Placeholder Avatar - Replace with your image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-6xl font-bold">
                  FS
                </div>

                <Image
                  src="https://res.cloudinary.com/dq8hyeknf/image/upload/v1766680303/Ashmita_Avtar_mj4r00.png"
                  alt="Profile"
                  fill
                  className="object-cover transition-transform duration-300 scale-[1.3] hover:scale-[1.5]"
                  priority
                />

              </div>

              {/* Floating Tech Badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  React
                </span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Node.js
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-500"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown size={24} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </motion.header>
    </section>
  );
}
