"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const items = [
  {
    type: "certificate",
    title: "Full Stack Development",
    subtitle: "Internshala Trainings",
    description:
      "Comprehensive training in full stack development covering MERN stack technologies.",
    gradient: "from-yellow-500 to-orange-500",
    link: "#",
  },
  {
    type: "achievement",
    title: "Finalist",
    subtitle: "KAVACH’23 Hackathon",
    description:
      "National-level cybersecurity hackathon organized by AICTE and the Ministry of Education.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    type: "responsibility",
    title: "Founder",
    subtitle: "The Wings GGCT (Student Club)",
    meta: "Led a team of 40 members",
    points: [
      "Trained 200+ students in C programming",
      "Organized 10+ technical and community events",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="certificates"
      ref={ref}
      aria-labelledby="certificates-heading"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2
            id="certificates-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Certificates &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="sr-only">
            Professional certifications and achievements in full stack
            development, leadership, and cybersecurity.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.header>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              className="group glass rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
              aria-label={item.title}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient} text-white`}
                  aria-hidden="true"
                >
                  {item.type === "responsibility" ? "👥" : <Award size={24} />}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-purple-500 dark:text-purple-400 font-semibold text-sm">
                    {item.subtitle}
                  </p>

                  {item.meta && (
                    <p className="text-gray-400 text-xs mt-0.5">{item.meta}</p>
                  )}
                </div>
              </div>

              {/* Body */}
              {item.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
              )}

              {item.points && (
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}

              {/* Link */}
              {item.link && (
                <a
                  href="https://res.cloudinary.com/dq8hyeknf/image/upload/v1743335316/Screenshot_1057_if2dua.png"
                  aria-label={`View ${item.title} certificate`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                >
                  View Certificate <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
