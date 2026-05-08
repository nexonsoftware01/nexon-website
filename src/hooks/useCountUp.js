import { useState, useEffect, useRef } from 'react';

export function useCountUp(end, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration, shouldStart]);

  return count;
}
