import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Custom hook for viewport-aware scroll listening
 * Only adds scroll listener when the component is in viewport
 *
 * @param {Function} callback - Function to call on scroll
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element that must be visible (0-1)
 * @param {string} options.rootMargin - Margin around root for early/late triggering
 * @returns {Object} { elementRef, isInView }
 */
export const useViewportScroll = (callback, options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  // Memoize callback to prevent unnecessary re-renders
  const memoizedCallback = useCallback(callback, [callback]);

  // Intersection Observer to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || "0px",
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.rootMargin]);

  // Scroll listener - only active when component is in view
  useEffect(() => {
    if (!isInView) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          memoizedCallback();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView, memoizedCallback]);

  return { elementRef, isInView };
};

/**
 * Specialized hook for parallax effects
 * Provides scroll position relative to element
 */
export const useParallaxScroll = (options = {}) => {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    elementTop: 0,
    progress: 0,
  });

  const updateScrollData = useCallback(() => {
    const scrollY = window.pageYOffset;
    const elementTop = elementRef.current?.offsetTop || 0;
    const elementHeight = elementRef.current?.offsetHeight || 0;
    const progress = Math.max(
      0,
      Math.min(
        1,
        (scrollY - elementTop + window.innerHeight) /
          (elementHeight + window.innerHeight)
      )
    );

    setScrollData({ scrollY, elementTop, progress });
  }, []);

  const { elementRef, isInView } = useViewportScroll(updateScrollData, options);

  return { elementRef, isInView, ...scrollData };
};

/**
 * Specialized hook for timeline/progress animations
 * Provides scroll progress within the element
 */
export const useTimelineScroll = (options = {}) => {
  const [timelineData, setTimelineData] = useState({
    progress: 0,
    isActive: false,
  });

  const updateTimelineData = useCallback(() => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;

    // Calculate progress based on element position in viewport
    const progress = Math.max(
      0,
      Math.min(1, (windowHeight - rect.top) / (elementHeight + windowHeight))
    );
    const isActive = rect.top < windowHeight && rect.bottom > 0;

    setTimelineData({ progress, isActive });
  }, []);

  const { elementRef, isInView } = useViewportScroll(
    updateTimelineData,
    options
  );

  return { elementRef, isInView, ...timelineData };
};
