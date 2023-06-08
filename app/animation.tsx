"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Animation({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence initial={true} >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
