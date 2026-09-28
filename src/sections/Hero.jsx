import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
} from "lucide-react";

import HeroScene from "../components3d/HeroScene";

const roles = [
  "WEB DEVELOPMENT",
  "FRONTEND DEVELOPMENT",
  "AI DEVELOPMENT",
  "FULL STACK DEVELOPMENT",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Purple atmospheric glow */}
      <div className="pointer-events-none absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-fuchsia-700/10 blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-[1px] w-10 bg-violet-500" />

              <span className="text-xs uppercase tracking-[0.4em] text-violet-400">
                Welcome to my portfolio
              </span>
            </motion.div>

            <h1 className="text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Sehar
              <span className="block bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Developer.
              </span>
            </h1>

            {/* Animated title */}
            <div className="relative mt-8 h-10 overflow-hidden">
              <motion.div
                animate={{
                  y: [0, -40, -80, -120, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {roles.map((role) => (
                  <div
                    key={role}
                    className="flex h-10 items-center text-lg font-semibold tracking-widest text-gray-300"
                  >
                    <span className="mr-3 text-violet-500">
                      //
                    </span>

                    {role}
                  </div>
                ))}
              </motion.div>
            </div>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400">
              I create modern, responsive and interactive digital
              experiences using React, Node.js, JavaScript,
              Tailwind CSS and AI technologies.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group flex items-center gap-3 rounded-full bg-violet-600 px-7 py-3.5 font-medium shadow-[0_0_30px_rgba(139,92,246,0.25)] transition hover:bg-violet-500"
              >
                Explore Projects

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 font-medium backdrop-blur-md transition hover:border-violet-500/70 hover:text-violet-400"
              >
                Let's Talk
              </motion.a>
            </div>

            {/* Social links */}
            <div className="mt-10 mb-10 flex items-center gap-3">
              <a
                href="https://github.com/Sehar024"
                className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-400 transition hover:border-violet-500 hover:text-violet-400"
              >
                <span className="font-medium">
                    GitHub
                  </span>
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-400 transition hover:border-violet-500 hover:text-violet-400"
              >
                <span className="font-medium">
                    LinkedIn
                  </span>
              </a>
              <a
                  href="/src/assets/Sehar-Qamar-Resume(QH).pdf"
                  download
                  className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-gray-400 transition hover:border-violet-500 hover:text-violet-400"
                >
                Download CV
              </a>

            </div>
          </motion.div>

          {/* RIGHT SPACE FOR 3D OBJECT */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-gray-500 transition hover:text-violet-400"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
