"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollAnimation.module.css";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "scale-up";
  delay?: number; // ms
}

export default function ScrollAnimation({
  children,
  animation = "fade-up",
  delay = 0,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.container} ${isVisible ? styles[animation] : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
