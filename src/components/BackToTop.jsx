import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-violet-500/30 bg-violet-600/80 text-white shadow-lg shadow-violet-900/30 backdrop-blur-md transition hover:bg-violet-500"
        >
          <ArrowUp size={19} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}