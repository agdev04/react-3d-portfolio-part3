"use client";

import { motion } from "framer-motion";

export default function Section({ children }) {
  return (
    <motion.section
      className={`min-h-screen w-screen p-8 max-w-7xl mx-auto flex flex-col item-start justify-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    >
      {children}
    </motion.section>
  );
}
