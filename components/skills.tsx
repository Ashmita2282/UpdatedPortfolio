"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    subtitle: "UI, UX & client-side logic",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "HTML & CSS",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend",
    subtitle: "APIs, databases & authentication",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Bcrypt.js",
      "Multer",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database",
    subtitle: "Data storage & modeling",
    skills: ["MongoDB", "MySQL", "Mongoose", "Database Design"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tools & Others",
    subtitle: "Development & collaboration tools",
    skills: ["Git", "GitHub", "Postman", "ClickUp", "AI Tools"],
    color: "from-orange-500 to-red-500",
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-120px",
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8
      bg-[linear-gradient(to_right,#ffffff0A_1px,transparent_1px),
      linear-gradient(to_bottom,#ffffff0A_1px,transparent_1px)]
      bg-[size:30px_30px]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Core technologies I use as a Full Stack MERN Developer to build
            scalable, high-performance web applications.
          </p>

          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative glass rounded-2xl p-6 md:p-7
              border border-white/10 hover:border-white/20
              transition-all overflow-hidden"
            >
              {/* Soft glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color}
                opacity-[0.07] blur-2xl`}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-1">
                  <span className="gradient-text">{category.title}</span>
                </h3>

                <p className="text-sm text-gray-400 mb-5">
                  {category.subtitle}
                </p>

                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : undefined}
                      transition={{ delay: 0.2 + idx * 0.06 }}
                      whileHover={{ scale: 1.06 }}
                      className={`relative overflow-hidden px-4 py-2 rounded-lg
                      text-sm font-medium text-white
                      bg-gradient-to-r ${category.color}
                      shadow-md cursor-default`}
                    >
                      <span className="relative z-10">{skill}</span>

                      {/* Shine effect */}
                      <span
                        className="absolute inset-0 bg-white/20
                        -translate-x-full hover:translate-x-full
                        transition-transform duration-700"
                        aria-hidden="true"
                      />
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
