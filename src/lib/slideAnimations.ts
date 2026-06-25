import {  useEffect, useState } from "react";

/**
 * Auto-slide animations using Framer Motion
 */

// Auto-slide animation (continuous)
export const autoSlide = {
  animate: {
    x: [0, -100, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Carousel slide animation
export const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// Fade slide
export const fadeSlideVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5 },
  },
};

// Rotating carousel
export const rotatingVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    rotateY: direction < 0 ? 90 : -90,
    opacity: 0,
  }),
};

// Pulse animation
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// Floating animation
export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Rotating animation
export const rotatingAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      linear: true,
    },
  },
};

// Wave animation (for water/wave effects)
export const waveAnimation = {
  animate: {
    pathLength: [0, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// Shimmer/Loading animation
export const shimmerAnimation = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/**
 * Hook for auto-cycling through items
 */
export function useAutoSlide(itemCount: number, intervalMs: number = 5000) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % itemCount);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [itemCount, intervalMs]);

  return current;
}

/**
 * Hook for carousel with manual controls
 */
export function useCarousel(itemCount: number) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + itemCount) % itemCount);
  };

  const next = () => paginate(1);
  const prev = () => paginate(-1);
  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return { current, direction, next, prev, goTo };
}
