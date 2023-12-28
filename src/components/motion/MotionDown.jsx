import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Reveal component that animates its children when it comes into view.
 * @param {Object} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
export const MotionDown = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flexDirection: 'column' 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};