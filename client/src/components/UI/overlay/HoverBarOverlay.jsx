import { motion } from "framer-motion";

export default function HoverBarOverlay({ children, action }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={action}
    >
      {children}
    </motion.div>
  );
}
