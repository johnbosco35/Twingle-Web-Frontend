import { useInView } from "framer-motion";
import { useRef } from "react";


/**
 * Scroll animation presets for Framer Motion
 */

// Fade in on scroll
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// Zoom effects
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export const zoomInRotate = {
  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Flip effects
export const flipInX = {
  hidden: { opacity: 0, rotateX: -80 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.7 },
  },
};

export const flipInY = {
  hidden: { opacity: 0, rotateY: -80 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.7 },
  },
};

// Bounce effects
export const bounceIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Stagger container (for animating multiple children)
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Parallax scroll effect
export const useParallax = (value: number) => {
  return {
    y: value * 0.5, // Adjust multiplier for more/less effect
  };
};

/**
 * Hook for triggering animations on scroll
 */
export function useScrollAnimation(
  variant: "up" | "down" | "left" | "right" | "zoom" | "flip" | "bounce",
) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    up: fadeInUp,
    down: fadeInDown,
    left: fadeInLeft,
    right: fadeInRight,
    zoom: zoomIn,
    flip: flipInX,
    bounce: bounceIn,
  };

  return { ref, isInView, variants: variants[variant] };
}

/**
 * Scroll-triggered stagger animation hook
 */
export function useScrollStagger() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return { ref, isInView };
}
