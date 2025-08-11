// components/FadeInOnScroll.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInOnScroll = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.2, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
