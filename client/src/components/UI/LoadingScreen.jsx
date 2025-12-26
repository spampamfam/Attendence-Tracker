import { motion } from "framer-motion";

export default function LoadingScreen({
  fullscreen = false,
  message = "Loading...",
}) {
  const base = (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-black/20 border-t-white "
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
      <p className="text-white">{message}</p>
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center  bg-primary-color">
        {base}
      </div>
    );
  }

  return base;
}
