import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionTitle from "../components/SectionTitle";
import { skillCategories } from "../data/skills";

const categories = Object.keys(skillCategories);

export default function Skills() {
  const [active, setActive] = useState("Frontend");

  const skills = skillCategories[active];

  // Split skills into left and right columns
  const middle = Math.ceil(skills.length / 2);

  const leftSkills = skills.slice(0, middle);
  const rightSkills = skills.slice(middle);

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        px-6
        py-32
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            -top-40
            h-96
            w-96
            rounded-full
            bg-violet-600/10
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-40
            -right-40
            h-96
            w-96
            rounded-full
            bg-purple-700/10
            blur-[120px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* ================================================= */}
        {/* SECTION TITLE */}
        {/* ================================================= */}

        <SectionTitle
          label="My Skills"
          title="Technologies I use to build digital products."
          description="My current technical skills across frontend development, backend development and AI."
        />

        {/* ================================================= */}
        {/* CATEGORY BUTTONS */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-10 mt-10 flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActive(category)}
              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className={`
                rounded-full
                px-5
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300

                ${
                  active === category
                    ? `
                      bg-violet-600
                      text-white
                      shadow-lg
                      shadow-violet-600/20
                    `
                    : `
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-gray-400
                      hover:border-violet-500/50
                      hover:bg-violet-500/10
                      hover:text-white
                    `
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* ================================================= */}
        {/* SKILLS CONTAINER */}
        {/* ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
            backdrop-blur-xl
            sm:p-10
          "
        >

          {/* Container Glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_60%)]
            "
          />

          {/* ================================================= */}
          {/* CATEGORY ANIMATION */}
          {/* ================================================= */}

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -30,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="
                relative
                grid
                gap-x-14
                gap-y-8
                md:grid-cols-2
              "
            >

              {/* ================================================= */}
              {/* LEFT COLUMN */}
              {/* ================================================= */}

              <div className="space-y-8">
                {leftSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>

              {/* ================================================= */}
              {/* RIGHT COLUMN */}
              {/* ================================================= */}

              <div className="space-y-8">
                {rightSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index + leftSkills.length}
                  />
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


/* ================================================= */
/* SKILL BAR COMPONENT */
/* ================================================= */

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group"
    >
      {/* Skill name + percentage */}
      <div className="mb-3 flex items-center justify-between">
        <motion.span
          whileHover={{ x: 3 }}
          className="
            font-medium
            text-gray-200
            transition-colors
            group-hover:text-violet-200
          "
        >
          {skill.name}
        </motion.span>

        <span className="text-sm font-medium text-violet-400">
          {skill.level}%
        </span>
      </div>

      {/* Smooth Progress Bar */}
      <div
        className="
          relative
          h-3
          w-full
          overflow-hidden
          rounded-full
          bg-white/10
        "
      >
        {/* Progress */}
        <motion.div
          initial={{
            width: "0%",
          }}
          animate={{
            width: `${skill.level}%`,
          }}
          transition={{
            duration: 1.8,
            delay: 0.15 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            h-full
            rounded-full
            bg-gradient-to-r
            from-violet-700
            via-purple-500
            to-fuchsia-500
            shadow-[0_0_12px_rgba(139,92,246,0.45)]
          "
        >
          {/* Moving glow */}
          <motion.div
            animate={{
              x: ["-100%", "300%"],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "linear",
              delay: 1.8,
            }}
            className="
              absolute
              inset-y-0
              w-1/3
              bg-gradient-to-r
              from-transparent
              via-white/40
              to-transparent
              blur-sm
            "
          />

          {/* Bright progress tip */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.9, 1.15, 0.9],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-0
              top-1/2
              h-5
              w-5
              -translate-y-1/2
              rounded-full
              bg-violet-200
              shadow-[0_0_15px_5px_rgba(139,92,246,0.7)]
            "
          />
        </motion.div>
      </div>
    </motion.div>
  );
}