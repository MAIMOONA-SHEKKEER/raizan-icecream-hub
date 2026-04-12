"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const MotionSection = ({
  children,
  className = "",
  delay = 0,
}: MotionSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
