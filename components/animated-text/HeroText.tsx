"use client";

import { AnimatedText } from "./AnimatedText";
import { motion } from "framer-motion";

interface HeroTextProps {
  mainText: string;
  subText: string;
  className?: string;
}

export function HeroText({ mainText, subText, className = "" }: HeroTextProps) {
  return (
    <div className={`text-center space-y-6 ${className}`}>
      <motion.h1
        className="text-6xl md:text-8xl lg:text-9xl font-bold font-playfair tracking-tight leading-[1.1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatedText text={mainText} variant="split" delay={0.2} duration={0.8} />
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <AnimatedText text={subText} variant="gradient" delay={1.2} />
      </motion.p>
    </div>
  );
}

