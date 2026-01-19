"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  number: string;
  title?: string;
  className?: string;
}

export function SectionDivider({ 
  number, 
  title,
  className = "" 
}: SectionDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`relative py-8 md:py-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={isInView ? { opacity: 1, width: "100%" } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div className="relative flex items-center justify-center gap-4">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-4xl md:text-6xl font-bold font-playfair text-foreground/20"
        >
          {number}
        </motion.span>
        {title && (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm md:text-base uppercase tracking-wider text-muted-foreground"
          >
            {title}
          </motion.span>
        )}
      </div>
    </div>
  );
}

