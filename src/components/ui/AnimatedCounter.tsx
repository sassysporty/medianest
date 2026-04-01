"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  label,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/[\d,]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[0].replace(/,/g, ""), 10);
    const prefix = value.slice(0, value.indexOf(numericMatch[0]));
    const suffix = value.slice(
      value.indexOf(numericMatch[0]) + numericMatch[0].length
    );

    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(target * eased);

      if (currentValue >= target) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(
          `${prefix}${currentValue.toLocaleString()}${suffix}`
        );
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <div className="text-3xl md:text-4xl font-bold">{displayValue}</div>
      <div className="text-sm mt-1 opacity-70">{label}</div>
    </motion.div>
  );
}
