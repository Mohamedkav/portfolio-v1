"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Cpu, MousePointer2 } from "lucide-react";

type Star = {
  x: number; // 0–100 vw
  y: number; // 0–100 vh
  size: number; // px
  twinkle: number; // seconds
  delay: number; // seconds
  blur: number; // px
  opacity: number; // 0–1
};

const genStars = (count = 120): Star[] =>
  Array.from({ length: count }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    twinkle: Math.random() * 2 + 1.2,
    delay: Math.random() * 4,
    blur: Math.random() * 1.5,
    opacity: Math.random() * 0.6 + 0.2,
  }));

export default function BackgroundEffects() {
  // Memoize so the pattern doesn’t re-randomize on re-renders
  const stars = useMemo(() => genStars(140), []);

  // A few slow-floating icons for personality
  const icons = [
    { Comp: Code2, x: "12%", y: "18%", delay: 0 },
    { Comp: Database, x: "78%", y: "26%", delay: 1.2 },
    { Comp: Cpu, x: "22%", y: "72%", delay: 0.6 },
    { Comp: MousePointer2, x: "86%", y: "62%", delay: 1.8 },
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* soft radial vignette so stars pop a bit */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

      {/* Stars */}
      {stars.map((s, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, s.opacity, 0.2] }}
          transition={{
            duration: s.twinkle,
            delay: s.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            left: `${s.x}vw`,
            top: `${s.y}vh`,
            width: s.size,
            height: s.size,
            filter: `blur(${s.blur}px)`,
          }}
          className="absolute rounded-full bg-white/90"
        />
      ))}

      {/* Floating icons (super subtle) */}
      {icons.map(({ Comp, x, y, delay }, idx) => (
        <motion.div
          key={idx}
          className="absolute text-muted-foreground/30"
          style={{ left: x, top: y }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -12, 0], opacity: 1, rotate: [0, 2, 0] }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Comp className="w-8 h-8 md:w-10 md:h-10" />
        </motion.div>
      ))}

      {/* subtle grain for texture (no extra assets) */}
      <div className="absolute inset-0 mix-blend-overlay opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:3px_3px]" />
    </div>
  );
}
