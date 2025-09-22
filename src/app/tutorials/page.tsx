"use client";

import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const tutorials = [
  {
    title: "JavaScript Basics",
    desc: "Learn fundamentals of JS.",
    icon: <FaJs className="text-yellow-400 text-5xl" />,
  },
  {
    title: "TypeScript Essentials",
    desc: "Type-safe JS development.",
    icon: <SiTypescript className="text-blue-400 text-5xl" />,
  },
  {
    title: "React Guide",
    desc: "Build dynamic UIs with React.",
    icon: <FaReact className="text-cyan-400 text-5xl" />,
  },
  {
    title: "Next.js 15",
    desc: "Fullstack React framework.",
    icon: <SiNextdotjs className="text-white text-5xl" />,
  },
  {
    title: "Node.js Backend",
    desc: "Create servers and APIs.",
    icon: <FaNodeJs className="text-green-600 text-5xl" />,
  },
  {
    title: "Tailwind CSS",
    desc: "Rapidly style your apps.",
    icon: <SiTailwindcss className="text-teal-400 text-5xl" />,
  },
  {
    title: "HTML5",
    desc: "Structure of web pages.",
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
  },
  {
    title: "CSS3",
    desc: "Style your pages beautifully.",
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
  },
];

export default function Tutorials() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center h-80 bg-gradient-to-r from-green-500 via-gray-900 to-green-500 overflow-hidden px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-white mb-4"
        >
          Tutorials
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-gray-200 text-lg max-w-2xl"
        >
          Explore interactive tutorials with live code examples and projects.
        </motion.p>
        <motion.pre
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="mt-8 bg-gray-900/80 text-green-400 p-6 rounded-3xl shadow-xl font-mono w-full max-w-2xl overflow-x-auto whitespace-pre-wrap"
        >
          <code>{`console.log("Start coding with CodeSpace!");`}</code>
        </motion.pre>
      </section>

      {/* Tutorials Grid */}
      <section className="px-4 mt-30 sm:px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {tutorials.map((tut, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-6 bg-gray-800 rounded-3xl shadow-2xl hover:bg-gray-700 transition-transform transform hover:-translate-y-3 hover:scale-105 cursor-pointer overflow-visible"
            >
              <div className="flex flex-col items-center text-center">
                {tut.icon}
                <h3 className="text-xl font-bold mt-4 mb-2 group-hover:text-green-400">
                  {tut.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">{tut.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
