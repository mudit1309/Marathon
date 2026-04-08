"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Simple scroll-triggered reveal wrapper around framer-motion.
 * Use this instead of repeating the same motion config everywhere.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
