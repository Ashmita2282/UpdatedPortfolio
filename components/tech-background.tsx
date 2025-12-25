"use client";

import { motion } from "framer-motion";
import { Code, Zap, Cpu, Database, Terminal } from "lucide-react";

const techIcons: { icon: React.ElementType; delay: number }[] = [
  { icon: Code, delay: 0 },
  { icon: Zap, delay: 0.5 },
  { icon: Cpu, delay: 1 },
  { icon: Database, delay: 1.5 },
  { icon: Terminal, delay: 2 },
];

export default function TechBackground() {
  const positions = [
    { top: "10%", left: "5%" },
    { top: "20%", right: "10%" },
    { top: "50%", left: "3%" },
    { bottom: "30%", right: "5%" },
    { bottom: "10%", left: "15%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {techIcons.map((item, idx) => {
        const Icon = item.icon;
        const pos = positions[idx % positions.length];

        return (
          <motion.div
            key={idx}
            className="absolute text-purple-400/10 dark:text-purple-400/5"
            style={pos}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + idx,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <Icon size={60} />
          </motion.div>
        );
      })}
    </div>
  );
}
