"use client";

import { motion, AnimatePresence } from "framer-motion";

export const AnimationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
    <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    >
      {children}
    </motion.div>
);
