import { motion } from "framer-motion";

export default function SectionTitle({
  label,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className="mb-14"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-violet-500" />

        <span className="text-xs font-medium uppercase tracking-[0.35em] text-violet-400">
          {label}
        </span>
      </div>

      <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
