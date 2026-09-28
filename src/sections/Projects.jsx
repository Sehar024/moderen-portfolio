import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";

const categories = [
  "All",
  "Frontend",
  "Full Stack",
  "AI",
  "Automation",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        projects-section-bg
        px-6
        py-32
      "
    >
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top Left Glow */}
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
            bg-violet-600/20
            blur-[120px]
          "
        />

        {/* Bottom Right Glow */}
        <motion.div
          animate={{
            x: [0, -25, 0],
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
            bg-purple-700/20
            blur-[120px]
          "
        />

        {/* Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-96
            w-96
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-indigo-600/10
            blur-[150px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <SectionTitle
          label="Portfolio"
          title="Projects I've built."
          description="A selection of applications, experiments and projects I've worked on."
        />

        {/* ================================================= */}
        {/* CATEGORY FILTERS */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 mt-10 flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
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
                  activeCategory === category
                    ? `
                      bg-violet-600
                      text-white
                      shadow-[0_0_25px_rgba(139,92,246,0.4)]
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
        {/* PROJECT GRID */}
        {/* ================================================= */}

        <motion.div
          layout
          style={{
            perspective: 1200,
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id || project.title}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.95,
                  rotateX: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.9,
                  rotateX: -8,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  rotateX: 2,
                  rotateY: -2,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-violet-500/30
                  project-card-bg
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-violet-400/70
                  hover:shadow-[0_20px_80px_rgba(109,40,217,0.20)]
                "
              >

                {/* ================================================= */}
                {/* CARD GLOW */}
                {/* ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_75%_45%,rgba(139,92,246,0.14),transparent_35%)]
                    opacity-70
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* ================================================= */}
                {/* PROJECT VISUAL */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    h-60
                    overflow-hidden
                  "
                >

                  {/* Background Glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_75%_50%,rgba(139,92,246,0.30),transparent_45%)]
                    "
                  />

                  {/* ================================================= */}
                  {/* PROJECT IMAGE */}
                  {/* ================================================= */}

                  {project.image && (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      initial={{
                        scale: 1.05,
                      }}
                      whileHover={{
                        scale: 1.15,
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        opacity-30
                        transition-opacity
                        duration-500
                        group-hover:opacity-50
                      "
                    />
                  )}

                  {/* Dark Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      project-image-overlay
                    "
                  />

                  {/* ================================================= */}
                  {/* PROJECT NUMBER */}
                  {/* ================================================= */}

                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.2 + index * 0.08,
                    }}
                    className="
                      absolute
                      left-7
                      top-7
                      z-10
                      text-lg
                      font-medium
                      text-violet-300
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>

                  {/* ================================================= */}
                  {/* CATEGORY */}
                  {/* ================================================= */}

                  <motion.span
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                      absolute
                      bottom-6
                      left-6
                      z-20
                      rounded-full
                      border
                      border-violet-500/30
                      bg-black/30
                      px-3
                      py-1
                      text-xs
                      text-violet-300
                      backdrop-blur-md
                    "
                  >
                    {project.category}
                  </motion.span>

                  {/* ================================================= */}
                  {/* DEMO ARROW */}
                  {/* ================================================= */}

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.12,
                      rotate: 8,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="
                      absolute
                      right-6
                      top-6
                      z-20
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-violet-500/60
                      bg-black/20
                      text-violet-400
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:border-violet-300
                      hover:bg-violet-500/10
                      hover:text-white
                    "
                  >
                    <ArrowUpRight size={23} />
                  </motion.a>

                  {/* ================================================= */}
                  {/* 3D PROJECT SHAPE */}
                  {/* ================================================= */}

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 3, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.12,
                      rotate: 8,
                    }}
                    className="
                      absolute
                      right-12
                      top-1/2
                      h-32
                      w-32
                      -translate-y-1/2
                      rounded-[2rem]
                      border
                      border-white/20
                      bg-gradient-to-br
                      from-violet-400
                      via-purple-700
                      to-fuchsia-900
                      shadow-[0_0_80px_rgba(139,92,246,0.45)]
                    "
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Inner Glow */}

                    <div
                      className="
                        absolute
                        inset-3
                        rounded-[1.5rem]
                        border
                        border-white/10
                        bg-white/5
                      "
                    />

                    {/* Highlight */}

                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        h-5
                        w-5
                        rounded-full
                        bg-white/30
                        blur-sm
                      "
                    />
                  </motion.div>

                  {/* ================================================= */}
                  {/* ORBITAL RING 1 */}
                  {/* ================================================= */}

                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      right-2
                      top-1/2
                      h-20
                      w-60
                      -translate-y-1/2
                      rotate-[-8deg]
                      rounded-[50%]
                      border
                      border-violet-500/40
                    "
                  />

                  {/* ================================================= */}
                  {/* ORBITAL RING 2 */}
                  {/* ================================================= */}

                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      right-8
                      top-1/2
                      h-28
                      w-48
                      -translate-y-1/2
                      rotate-[15deg]
                      rounded-[50%]
                      border
                      border-purple-400/20
                    "
                  />

                  {/* ================================================= */}
                  {/* FLOATING SPARKS */}
                  {/* ================================================= */}

                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      x: [0, 4, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.3, 0.8],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      right-20
                      top-20
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-white
                      shadow-[0_0_12px_4px_rgba(255,255,255,0.5)]
                    "
                  />

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                    }}
                    className="
                      absolute
                      right-40
                      top-12
                      h-1
                      w-1
                      rounded-full
                      bg-violet-300
                      shadow-[0_0_10px_3px_rgba(139,92,246,0.7)]
                    "
                  />

                  {/* ================================================= */}
                  {/* BOTTOM GLOW */}
                  {/* ================================================= */}

                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      -bottom-16
                      right-20
                      h-32
                      w-32
                      rounded-full
                      bg-violet-600/30
                      blur-3xl
                    "
                  />
                </div>

                {/* ================================================= */}
                {/* CONTENT */}
                {/* ================================================= */}

                <div className="relative z-10 p-7">

                  {/* Title */}

                  <motion.h3
                    whileHover={{
                      x: 3,
                    }}
                    className="project-card-title text-2xl font-bold text-white transition-colors group-hover:text-violet-200"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}

                  <p className="project-card-description mt-3 max-w-xl leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* ================================================= */}
                  {/* TECHNOLOGIES */}
                  {/* ================================================= */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay:
                            0.35 +
                            index * 0.08 +
                            techIndex * 0.05,
                        }}
                        whileHover={{
                          y: -3,
                          scale: 1.05,
                        }}
                        className="
                          rounded-full
                          border
                          border-violet-500/40
                          bg-violet-500/10
                          px-3
                          py-1
                          text-xs
                          text-violet-300
                          transition
                          hover:border-violet-400
                          hover:bg-violet-500/20
                        "
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* ================================================= */}
                  {/* GITHUB */}
                  {/* ================================================= */}

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      x: 4,
                    }}
                    className="project-github-link mt-7 inline-flex items-center gap-3 text-sm text-gray-300 transition hover:text-white">
                    

                    <span className="font-medium">
                      GitHub
                    </span>

                    <span className="text-gray-500">
                      Source Code
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="
                        text-violet-400
                        transition
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================================================= */}
        {/* NO PROJECTS */}
        {/* ================================================= */}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              py-20
              text-center
              text-gray-500
            "
          >
            No projects found in this category.
          </motion.div>
        )}

        {/* ================================================= */}
        {/* SHOW MORE / SHOW LESS */}
        {/* ================================================= */}

        {filteredProjects.length > 4 && (
          <div className="mt-12 flex justify-center">

            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-violet-500/60
                bg-violet-500/5
                px-8
                py-3
                text-sm
                font-medium
                text-violet-400
                shadow-[0_0_20px_rgba(139,92,246,0.08)]
                transition-all
                duration-300
                hover:border-violet-400
                hover:bg-violet-500/10
                hover:text-white
                hover:shadow-[0_0_30px_rgba(139,92,246,0.20)]
              "
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={showAll ? "less" : "more"}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {showAll ? "Show Less" : "Show More"}
                </motion.span>
              </AnimatePresence>

              <motion.div
                animate={{
                  y: showAll ? -2 : 2,
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.6,
                }}
              >
                {showAll ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </motion.div>
            </motion.button>

          </div>
        )}
      </div>
    </section>
  );
}