import { useRef } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";

/**
 * Custom hooks for common animation patterns
 */

/**
 * Fade in on scroll - simple wrapper
 */
export function useScrollFadeIn(amount: number = 0.3) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return {
    ref,
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.6 },
  };
}

/**
 * Stagger animation for multiple children
 */
export function useScrollStagger( amount: number = 0.3) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return {
    ref,
    containerProps: {
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      variants: {
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
          },
        },
      },
    },
    itemVariants: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
  };
}

/**
 * Parallax scroll effect
 */
export function useParallaxScroll(offset: number = 50) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return { ref, y };
}

/**
 * Number counter animation (useful for stats)
 */
export function useCountUp(
  targetNumber: number,
  trigger: boolean = true,
) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const displayValue = useTransform(
    useScroll().scrollY,
    [0, 1000],
    [0, trigger && isInView ? targetNumber : 0],
  );

  return { ref, displayValue };
}

/**
 * Infinite rotation animation
 */
export function useInfiniteRotate(duration: number = 2) {
  return {
    animate: {
      rotate: 360,
      transition: {
        duration,
        repeat: Infinity,
        linear: true,
      },
    },
  };
}

/**
 * Pulse effect
 */
export function usePulseEffect(duration: number = 2) {
  return {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
}

/**
 * Floating/hovering effect
 */
export function useFloatingEffect(offset: number = 10, duration: number = 3) {
  return {
    animate: {
      y: [-offset, offset, -offset],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
}

/**
 * Shake effect (for alerts/errors)
 */
export function useShakeEffect(duration: number = 0.5) {
  return {
    animate: {
      x: [-10, 10, -10, 10, 0],
      transition: {
        duration,
        repeat: 1,
      },
    },
  };
}

/**
 * Bounce effect on enter
 */
export function useBounceIn(delay: number = 0) {
  return {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: {
      delay,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  };
}

/**
 * Slide from direction
 */
export function useSlideIn(
  direction: "up" | "down" | "left" | "right",
  distance: number = 50,
) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return {
    initial: { opacity: 0, ...directionMap[direction] },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };
}
