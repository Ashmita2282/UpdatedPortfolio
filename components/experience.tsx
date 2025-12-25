"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    type: "experience",
    title: "Full Stack Developer Intern",
    company: "Gristip Software's",
    // period: "Jan 2024 – Apr 2024",
    description: [
      "Developed and maintained multiple MERN stack applications with optimized performance and responsive UI",
      "Implemented secure authentication using JWT and Bcrypt.js",
      "Designed RESTful APIs using Node.js and Express.js",
      "Integrated MongoDB and tested APIs using Postman",
    ],
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
  },
  // {
  //   type: "education",
  //   title: "Master of Technology – Computer Science & Engineering",
  //   company: "Global Engineering College, Jabalpur",
  //   period: "2025 – 2027",
  //   description: ["CGPA: 8.5"],
  //   icon: GraduationCap,
  //   color: "from-purple-500 to-pink-500",
  // },
  {
    type: "education",
    title: "B.Tech – CSE",
    company: "Gyan Ganga College of Technology",
    // period: "2020 – 2024",
    description: ["CGPA: 8.9",
      "Specialized in software development and algorithms",
      "Participated in coding competitions and workshops",
      "Developed strong problem-solving and teamwork skills"
    ],
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
};

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-labelledby="experience-heading"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8
      bg-[linear-gradient(to_right,#ffffff0A_1px,transparent_1px),
      linear-gradient(to_bottom,#ffffff0A_1px,transparent_1px)]
      bg-[size:30px_30px]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="experience-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Experience & <span className="gradient-text">Education</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            My professional journey as a Full Stack Developer and my academic
            background in Computer Science.
          </p>

          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.header>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5
            bg-gradient-to-b from-purple-600 via-blue-600 to-pink-600
            md:-translate-x-1/2"
            aria-hidden="true"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experience.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={`${item.type}-${item.title}`}
                  variants={itemVariants}
                  className={`relative flex items-start gap-6 ${index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full
                    bg-gradient-to-r from-purple-600 to-blue-600
                    -translate-x-1/2 z-10 border-4 border-white dark:border-gray-900"
                    aria-hidden="true"
                  />

                  {/* Content Card */}
                  <div
                    className={`flex-1 glass rounded-2xl p-6 md:p-8 shadow-xl ml-12 md:ml-0 ${index % 2 === 0
                      ? "md:mr-auto md:max-w-md"
                      : "md:ml-auto md:max-w-md"
                      }`}
                  >
                    <header className="flex items-start gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${item.color} text-white`}
                      >
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1">
                          {item.title}
                        </h3>

                        <p className="text-purple-400 font-semibold">
                          {item.company}
                        </p>

                        {/* <time className="text-sm text-gray-400">
                          {item.period}
                        </time> */}
                      </div>
                    </header>

                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {item.description.map((desc) => (
                        <li key={desc}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
