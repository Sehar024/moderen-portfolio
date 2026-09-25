import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";

const timeline = [
  {
    year: "2024 — Present",
    title: "Full Stack Development",
    organization: "Personal & Freelance Projects",
    description:
      "Building responsive web applications using React, Node.js, APIs and modern UI technologies.",
    icon: Briefcase,
  },
  {
    year: "2023 — 2024",
    title: "Web Development",
    organization: "Learning & Projects",
    description:
      "Developed frontend interfaces and explored backend development, databases and APIs.",
    icon: Briefcase,
  },
  {
    year: "Education",
    title: "BS in Software Engineering",
    organization: "University of Sialkot, Pakistan",
    description:
      "Studying computer science and developing practical software engineering skills.",
    icon: GraduationCap,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-5xl">

        <SectionTitle
          label="My Journey"
          title="Experience & Education"
          description="A timeline of my development journey and technical growth."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-violet-500 via-purple-500/40 to-transparent sm:block" />

          <div className="space-y-10">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title + index}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline icon */}
                  <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-[#08050f] text-violet-400 sm:flex">
                    <Icon size={18} />
                  </div>

                  <div className="glass glass-hover rounded-3xl p-7">
                    <span className="text-sm text-violet-400">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.organization}
                    </p>

                    <p className="mt-4 leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
