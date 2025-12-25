import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "MERN Stack Specialist",
  "Next.js Enthusiast",
  "TypeScript Developer",
];

const TypingEffect = ({ inView = true }: { inView?: boolean }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex, inView]);

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.5 }}
      className="h-16 md:h-20 flex items-center justify-center lg:justify-start mt-6"
    >
      <div className="relative">
        <h2 className="text-2xl md:text-4xl font-mono text-cyan-300 bg-[#0f1419]/80 px-6 py-3 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
          <span className="text-green-400" aria-hidden="true">$</span>{" "}
          <span className="text-cyan-300">
            {displayedText || "npm start"}
          </span>
          <motion.span
            aria-hidden="true"
            className="inline-block ml-1 text-green-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            ▊
          </motion.span>
        </h2>
        <div
          className="absolute inset-0 bg-cyan-500/5 rounded-lg blur-xl -z-10"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};

export default TypingEffect;
