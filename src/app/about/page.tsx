"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timeline = [
  { year: "2023", event: "CodeSpace was founded to teach coding effectively." },
  { year: "2024", event: "Launched interactive tutorials and projects." },
  { year: "2025", event: "Expanded to fullstack frameworks and modern tech." },
];

const team = [
  { name: "Alice Johnson", role: "Founder & CEO", img: "https://i.pravatar.cc/150?img=1" },
  { name: "Bob Smith", role: "Lead Developer", img: "https://i.pravatar.cc/150?img=2" },
  { name: "Clara Lee", role: "UI/UX Designer", img: "https://i.pravatar.cc/150?img=3" },
];

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[28rem] px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-green-400 mb-4"
        >
          About CodeSpace
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-gray-300 text-lg max-w-2xl"
        >
          Discover our journey, meet our team, and see why CodeSpace is your ultimate coding companion.
        </motion.p>
      </section>

      {/* Timeline Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-12">Our Journey</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
          <div className="flex flex-col space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, rotateY: idx % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`relative w-full flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className="w-full md:w-1/2 p-6 bg-gray-800 rounded-3xl shadow-2xl relative z-10 hover:scale-105 transition-transform">
                  <span className="absolute -left-3 md:-left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-green-400 rounded-full shadow-lg"></span>
                  <h3 className="text-xl font-bold text-green-400 mb-2">{item.year}</h3>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-gray-800 rounded-3xl shadow-2xl p-6 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden border-4 border-green-400">
                <Image src={member.img} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-green-400">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-12 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to start coding?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px #22c55e' }}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg transition-all"
        >
          Start Learning
        </motion.button>
      </section>

    </main>
  );
}
