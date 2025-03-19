/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect} from "react";

const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '', darkMode }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start > end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          observer.unobserve(countRef.current);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);
  
  return (
    <div ref={countRef} className="text-3xl font-bold">
      <span className={darkMode ? "text-violet-400" : "text-teal-600"}>{prefix}</span>
      <span>{count}</span>
      <span className={darkMode ? "text-violet-400" : "text-teal-600"}>{suffix}</span>
    </div>
  );
};

export default AnimatedCounter;