"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiCode,
  FiLayers,
  FiZap,
  FiTarget,
} from "react-icons/fi";

/* -------------------- Static Data (SEO Friendly) -------------------- */

const values = [
  {
    icon: FiCode,
    title: "Clean Code",
    description:
      "Writing readable, maintainable, and scalable code that developers actually enjoy working with.",
  },
  {
    icon: FiLayers,
    title: "Strong Architecture",
    description:
      "Designing structured frontend and backend systems that scale smoothly with growth.",
  },
  {
    icon: FiZap,
    title: "Performance Focused",
    description:
      "Optimizing UI and APIs for speed, responsiveness, and smooth user experience.",
  },
  {
    icon: FiTarget,
    title: "Problem Solver",
    description:
      "Breaking down complex problems into simple, practical, and effective solutions.",
  },
];

const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Redux",
  "Tailwind CSS",
];

/* -------------------- Animation Configs (Reused) -------------------- */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* -------------------- Heading -------------------- */}
        <motion.header
          {...fadeUp}
          animate={inView ? fadeUp.animate : fadeUp.initial}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold"
          >
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A quick look into who I am, what I do, and how I think as a full stack
            developer.
          </p>

          <div className="w-24 h-1 mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.header>

        {/* -------------------- Content -------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.article
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              I’m a{" "}
              <strong className="text-cyan-400 font-semibold">
                Full Stack Developer
              </strong>{" "}
              passionate about building modern, scalable web applications that
              solve real-world problems. I enjoy turning ideas into clean,
              functional, and user-friendly products.
            </p>

            <p className="text-lg leading-relaxed">
              I specialize in the{" "}
              <strong className="text-purple-400 font-semibold">
                MERN stack
              </strong>{" "}
              and enjoy working with modern tools like{" "}
              <strong className="text-cyan-400 font-semibold">
                Next.js
              </strong>{" "}
              and{" "}
              <strong className="text-green-400 font-semibold">
                TypeScript
              </strong>
              . My focus is on writing code that is not only functional, but
              structured, readable, and future-proof.
            </p>

            <p className="text-lg leading-relaxed">
              I’m constantly learning, improving, and refining my skills —
              whether it’s enhancing UI interactions, improving performance, or
              exploring new technologies.
            </p>

            {/* Tech Stack */}
            <div className="pt-4">
              <p className="text-sm font-mono text-cyan-400 mb-3">
                Technologies I work with:
              </p>

              <ul className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.3 + index * 0.05,
                      type: "spring",
                    }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="px-3 py-1 rounded-full text-sm font-mono
                      bg-[#0f1419] border border-cyan-500/20
                      text-gray-300 hover:text-cyan-400
                      hover:border-cyan-400/60 transition-all cursor-default"
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative p-6 rounded-2xl
                  bg-[#0f1419]/80 backdrop-blur
                  border border-cyan-500/20
                  hover:border-cyan-400/50
                  transition-all"
              >
                <value.icon
                  aria-hidden="true"
                  className="w-8 h-8 text-cyan-400 mb-4"
                />

                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {value.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>

                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 hover:opacity-100 blur-xl transition-opacity -z-10" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
