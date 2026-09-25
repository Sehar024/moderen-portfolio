import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
}