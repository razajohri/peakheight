"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: "glitch" | "gradient" | "reveal" | "split" | "shimmer" | "magnetic" | "wave";
  delay?: number;
  duration?: number;
}

export function AnimatedText({
  text,
  className = "",
  variant = "reveal",
  delay = 0,
  duration = 0.5,
}: AnimatedTextProps) {
  switch (variant) {
    case "glitch":
      return <GlitchText text={text} className={className} delay={delay} />;
    case "gradient":
      return <GradientText text={text} className={className} delay={delay} />;
    case "split":
      return <SplitText text={text} className={className} delay={delay} duration={duration} />;
    case "shimmer":
      return <ShimmerText text={text} className={className} delay={delay} />;
    case "magnetic":
      return <MagneticText text={text} className={className} delay={delay} />;
    case "wave":
      return <WaveText text={text} className={className} delay={delay} />;
    default:
      return <RevealText text={text} className={className} delay={delay} duration={duration} />;
  }
}

// Glitch Effect
function GlitchText({ text, className, delay }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.3 }}
        className="relative z-10"
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-red-500 opacity-0 z-0"
        animate={{
          opacity: [0, 1, 0],
          x: [0, -2, 2, 0],
        }}
        transition={{
          duration: 0.3,
          delay: delay! + 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          repeatType: "loop",
        }}
        style={{ clipPath: "inset(0 0 45% 0)" }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-cyan-500 opacity-0 z-0"
        animate={{
          opacity: [0, 1, 0],
          x: [0, 2, -2, 0],
        }}
        transition={{
          duration: 0.3,
          delay: delay! + 0.55,
          repeat: Infinity,
          repeatDelay: 3,
          repeatType: "loop",
        }}
        style={{ clipPath: "inset(45% 0 0 0)" }}
      >
        {text}
      </motion.span>
    </span>
  );
}

// Gradient Animation
function GradientText({ text, className, delay }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent bg-[length:200%_100%] ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        backgroundPosition: {
          delay: delay! + 0.5,
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    >
      {text}
    </motion.span>
  );
}

// Letter by Letter Reveal
function RevealText({
  text,
  className,
  delay,
  duration,
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const letters = text.split("");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }
              : {}
          }
          transition={{
            delay: delay! + index * 0.03,
            duration: duration! * 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}

// Split Text (Characters fly in from sides)
function SplitText({
  text,
  className,
  delay,
  duration,
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const letters = text.split("");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {letters.map((letter, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: isEven ? -100 : 100, rotate: isEven ? -45 : 45 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                  }
                : {}
            }
            transition={{
              delay: delay! + index * 0.05,
              duration: duration!,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </span>
  );
}

// Shimmer/Shine Effect
function ShimmerText({ text, className, delay }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span
      className={`relative inline-block overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          delay: delay! + 0.8,
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "linear",
        }}
      />
    </motion.span>
  );
}

// Magnetic Text (follows mouse)
function MagneticText({ text, className, delay }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const maxDistance = 100;
    if (distance < maxDistance) {
      x.set(distanceX * 0.3);
      y.set(distanceY * 0.3);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block cursor-default ${className}`}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      {text}
    </motion.span>
  );
}

// Wave Text (letters wave up and down)
function WaveText({ text, className, delay }: { text: string; className?: string; delay?: number }) {
  const letters = text.split("");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: [0, -10, 0],
                }
              : {}
          }
          transition={{
            opacity: { delay: delay! + index * 0.05, duration: 0.3 },
            y: {
              delay: delay! + index * 0.05 + 0.3,
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}

