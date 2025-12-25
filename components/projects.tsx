"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "YouTube Clone – Full Stack MERN Application",
    description:
      "A full-featured YouTube-like video streaming platform built using the MERN stack. Implemented secure user authentication, video upload & management (CRUD), and optimized state handling using Redux. Focused on scalability, performance, and clean UI architecture.",
    tech: ["React", "Redux", "MongoDB", "Node.js", "Express"],
    gradient: "from-red-500 to-pink-500",
    gitlink: "https://github.com/Ashmita2282/YouTube_CaptionProject",
    liveLink: "https://aquamarine-tarsier-ec2dae.netlify.app/",
  },
  {
    title: "Personal Portfolio Website – MERN Stack",
    description:
      "A secure and responsive personal portfolio website developed using MERN stack. Features JWT-based authentication, MongoDB data storage, reusable React components, and modern Tailwind CSS styling to deliver a fast, SEO-friendly, and professional web presence.",
    tech: ["React", "MongoDB", "JWT", "Tailwind CSS", "Node.js"],
    gradient: "from-purple-500 to-indigo-500",
    gitlink: "https://github.com/Ashmita2282/MERN-Portfolio",
    liveLink: "https://ashmita.onrender.com/",
  },
  {
    title: "Reactogram – Social Media Platform",
    description:
      "A full-stack social media application inspired by Instagram, built with the MERN stack. Includes user authentication, post creation, image uploads using Multer, password encryption with Bcrypt.js, and global state management using Redux for a smooth user experience.",
    tech: ["React", "Redux", "MongoDB", "JWT", "Multer", "Bcrypt.js"],
    gradient: "from-blue-500 to-cyan-500",
    gitlink: "https://github.com/Ashmita2282/Reactogram",
    liveLink: "https://reactogram-ashmita.onrender.com/",
  },
  {
    title: "ShoppyGlobe – E-Commerce Web Application",
    description:
      "A modern e-commerce web application developed using React. Implements dynamic routing, API-based product listing, cart management with Redux, advanced search functionality, and robust error handling to ensure a smooth and scalable shopping experience.",
    tech: ["React", "Redux", "API Integration", "Dynamic Routing"],
    gradient: "from-green-500 to-emerald-500",
    gitlink: "https://github.com/Ashmita2282/ShppyGlobe",
    liveLink: "https://shppyglobe.onrender.com/",
  },
];


export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      aria-labelledby="projects-heading"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.header>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group glass rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all relative border border-purple-500/10 hover:border-purple-500/30"
              whileHover={{ y: -6 }}
            >
              {/* Gradient overlay (NO infinite animation) */}
              <div
                aria-hidden
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Card Header */}
                <header className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                    {project.title}
                  </h3>

                  <div className="flex gap-2">
                    <a
                      href={project.gitlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="p-3 glass rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="p-3 glass rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </header>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white shadow`}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>

  );
}

