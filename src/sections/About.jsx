import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Brain,
  Server,
  Sparkles,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";

const stats = [
  {
    number: "20+",
    label: "Projects",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "2+",
    label: "Years Learning",
  },
  {
    number: "∞",
    label: "Curiosity",
  },
];

const interests = [
  {
    icon: Code2,
    title: "Frontend",
    text: "Building responsive and interactive interfaces.",
  },
  {
    icon: Server,
    title: "Backend",
    text: "Creating APIs and scalable server-side applications.",
  },
  {
    icon: Brain,
    title: "AI",
    text: "Exploring intelligent applications and automation.",
  },
  {
    icon: Sparkles,
    title: "UI / UX",
    text: "Creating clean and engaging digital experiences.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <SectionTitle
          label="About Me"
          title="I turn ideas into modern digital experiences."
          description="A developer who enjoys combining clean code, thoughtful design and modern technologies to build useful digital products."
        />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Main About Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="glass glass-hover rounded-3xl p-8 sm:p-10"
          >
            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-gray-300">
                I'm a passionate developer focused on creating
                modern, responsive and user-friendly web
                applications.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                I enjoy working with React, JavaScript, Node.js,
                Tailwind CSS and other modern technologies. I'm
                also interested in AI-powered applications,
                automation and building products that solve
                real-world problems.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                My goal is to continuously improve my skills,
                explore new technologies and turn ideas into
                useful products.
              </p>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 text-violet-400 transition hover:text-violet-300"
              >
                Let's work together

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="glass glass-hover flex min-h-[160px] flex-col justify-center rounded-3xl p-6"
              >
                <span className="text-4xl font-bold text-violet-400">
                  {stat.number}
                </span>

                <span className="mt-2 text-sm text-gray-500">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="glass glass-hover rounded-3xl p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}