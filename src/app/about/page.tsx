"use client";

// ============================================================
// IMPORTS
// ============================================================
import { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaRocket,
  FaUsers,
  FaGlobe,
  FaLightbulb,
  FaHeart,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import {
  SiNextdotjs,
} from "react-icons/si";
import { MdSchool, MdWorkspacePremium } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";

// ============================================================
// COUNTER COMPONENT
// ============================================================
function Counter({ target, label, icon, color = "from-amber-400 to-orange-400" }: {
  target: number;
  label: string;
  icon: React.ReactNode;
  color?: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-3xl mb-2 text-amber-400 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${color}`}>
        {isVisible ? count.toLocaleString() : 0}+
      </div>
      <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">{label}</div>
    </div>
  );
}

// ============================================================
// TIMELINE DATA
// ============================================================
const timeline = [
  {
    year: "2023",
    event: "CodeSpace was founded with a mission to make coding accessible to everyone.",
    icon: <FaRocket className="text-amber-400" />,
    color: "from-amber-400 to-orange-400",
  },
  {
    year: "2024",
    event: "Launched 50+ interactive tutorials and real-world projects.",
    icon: <FaCode className="text-amber-400" />,
    color: "from-emerald-400 to-cyan-400",
  },
  {
    year: "2025",
    event: "Expanded to fullstack frameworks and modern tech stack.",
    icon: <SiNextdotjs className="text-amber-400" />,
    color: "from-rose-400 to-pink-400",
  },
  {
    year: "2026",
    event: "Reached 15,000+ students worldwide. Community of passionate developers.",
    icon: <FaUsers className="text-amber-400" />,
    color: "from-blue-400 to-indigo-400",
  },
];

// ============================================================
// TEAM DATA
// ============================================================
const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    bio: "Full-stack architect with 10+ years of experience. Passionate about education.",
    img: "https://i.pravatar.cc/150?img=11",
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    bio: "React & Node.js expert. Former FAANG engineer. Loves teaching complex topics simply.",
    img: "https://i.pravatar.cc/150?img=12",
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "James Wilson",
    role: "UI/UX Designer",
    bio: "Award-winning designer. Creates beautiful, accessible interfaces that users love.",
    img: "https://i.pravatar.cc/150?img=13",
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Emily Davis",
    role: "Content Creator",
    bio: "Technical writer and educator. Turns complex concepts into easy-to-understand content.",
    img: "https://i.pravatar.cc/150?img=14",
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
];

// ============================================================
// STATS DATA
// ============================================================
const stats = [
  { icon: <FaCode />, value: 120, label: "Tutorials", color: "from-amber-400 to-orange-400" },
  { icon: <FaUsers />, value: 15000, label: "Students", color: "from-emerald-400 to-cyan-400" },
  { icon: <FaGlobe />, value: 50, label: "Countries", color: "from-rose-400 to-pink-400" },
  { icon: <FaRocket />, value: 85, label: "Projects", color: "from-blue-400 to-indigo-400" },
];

// ============================================================
// VALUES DATA
// ============================================================
const values = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "We embrace new technologies and teaching methods to stay ahead of the curve.",
  },
  {
    icon: <FaHeart />,
    title: "Community",
    desc: "We believe in learning together and supporting each other's growth journey.",
  },
  {
    icon: <MdSchool />,
    title: "Quality",
    desc: "Every tutorial is crafted with care to ensure the best learning experience.",
  },
  {
    icon: <MdWorkspacePremium />,
    title: "Excellence",
    desc: "We strive for excellence in everything we create and teach.",
  },
];

// ============================================================
// ABOUT CARD - Enhanced
// ============================================================
function AboutCard({ icon, title, desc, index }: { icon: React.ReactNode; title: string; desc: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-amber-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden group cursor-default"
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
          isHovered ? "bg-gradient-to-r from-amber-500/5 to-orange-500/5" : ""
        }`}
      />

      <div className="relative z-10">
        <div className="text-3xl mb-3 text-amber-400 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
          {desc}
        </p>
      </div>

      {/* Corner accent */}
      <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-amber-400/5 to-transparent rounded-tr-2xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />
    </motion.div>
  );
}

// ============================================================
// TEAM CARD - Enhanced
// ============================================================
function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-amber-400/50 transition-all duration-500 p-6 text-center hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden relative"
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-amber-500/5 to-transparent`}
      />

      {/* Image with glow ring */}
      <div className="relative w-28 h-28 mx-auto mb-4">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 p-1 transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}>
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-black">
            <Image
              src={member.img}
              alt={member.name}
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
        </div>
        {/* Pulse ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-amber-400/20 transition-all duration-700 ${isHovered ? "scale-125 opacity-0" : "scale-100 opacity-100"}`} />
      </div>

      <div className="relative z-10">
        <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-sm text-amber-400/80 font-medium">{member.role}</p>
        <p className="text-gray-400 text-xs mt-2 leading-relaxed group-hover:text-gray-300 transition-colors">
          {member.bio}
        </p>

        <div className="flex justify-center gap-3 mt-4">
          <a href="#" className="text-gray-500 hover:text-amber-400 transition-all hover:scale-110 hover:-translate-y-0.5">
            <FaGithub className="text-sm" />
          </a>
          <a href="#" className="text-gray-500 hover:text-amber-400 transition-all hover:scale-110 hover:-translate-y-0.5">
            <FaLinkedin className="text-sm" />
          </a>
          <a href="#" className="text-gray-500 hover:text-amber-400 transition-all hover:scale-110 hover:-translate-y-0.5">
            <FaTwitter className="text-sm" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function About() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ==========================================================
      HERO SECTION - SPECTACULAR
      ========================================================== */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-28 pt-36 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-rose-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out ${Math.random() * 5}s infinite`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl">
          {/* Badge with glow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-sm mb-8 shadow-lg shadow-amber-500/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            <FaRocket className="text-amber-400" />
            Who We Are
            <span className="w-px h-4 bg-amber-500/30" />
            <span className="text-amber-400/80 text-xs">🔥 15K+ community</span>
          </motion.div>

          {/* Heading with gradient animation */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black leading-[1.1]"
          >
            <span className="text-white">About</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 bg-[length:200%] animate-gradient">
              CodeSpace
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6"
          >
            Were on a mission to make coding accessible, fun, and rewarding.
            Discover our journey, meet our team, and see what drives us.
          </motion.p>

          {/* Stats with counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats.map((stat) => (
              <Counter
                key={stat.label}
                target={stat.value}
                label={stat.label}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-5 h-8 border border-gray-700 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-amber-400 rounded-full mt-1.5"
            />
          </div>
        </motion.div>
      </section>

      {/* ==========================================================
      MISSION & VALUES
      ========================================================== */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Mission with animated underline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-xs mb-4">
              <FaRocket className="text-xs" />
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Empowering</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 bg-[length:200%] animate-gradient">
                Developers Worldwide
              </span>
            </h2>

            {/* Animated underline */}
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mb-6" />

            <p className="text-gray-400 text-lg leading-relaxed">
              We believe that anyone can learn to code. Our mission is to provide
              high-quality, interactive tutorials that make learning programming
              accessible, engaging, and effective.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mt-4">
              From beginners taking their first steps to experienced developers
              leveling up their skills — were here for every step of the journey.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2.5 text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-xl border border-gray-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Quality Content
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-xl border border-gray-800">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Hands-on Learning
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-xl border border-gray-800">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                Community First
              </div>
            </div>
          </motion.div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, idx) => (
              <AboutCard key={idx} icon={value.icon} title={value.title} desc={value.desc} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
      TIMELINE SECTION - Enhanced
      ========================================================== */}
      <section className="px-6 py-24 border-t border-gray-800/50 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-xs mb-4">
              <FaRocket className="text-xs" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">How We</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 ml-3">
                Grew
              </span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              From idea to impact — our journey of building CodeSpace.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-400/50 via-orange-400/30 to-transparent" />

            <div className="flex flex-col space-y-16">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative w-full flex ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  {/* Timeline dot with pulse */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-5 h-5 bg-amber-400 rounded-full border-4 border-black shadow-lg shadow-amber-400/20" />
                    <div className="absolute inset-0 w-5 h-5 bg-amber-400 rounded-full animate-ping opacity-30" />
                  </div>

                  <div
                    className={`w-full md:w-[44%] p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-amber-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 group ${
                      idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                      {item.event}
                    </p>
                    <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-amber-400/50 to-transparent rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
      TEAM SECTION - Enhanced
      ========================================================== */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-xs mb-4">
            <FaUsers className="text-xs" />
            Meet the Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">The People</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 ml-3">
              Behind CodeSpace
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Passionate educators, developers, and designers dedicated to your learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <TeamCard key={idx} member={member} index={idx} />
          ))}
        </div>
      </section>

      {/* ==========================================================
      TESTIMONIAL
      ========================================================== */}
      <section className="px-6 py-20 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/20 p-12 rounded-3xl border border-gray-800 hover:border-amber-400/30 transition-all duration-500"
          >
            {/* Quote icon */}
            <FaQuoteLeft className="absolute top-6 left-6 text-6xl text-amber-400/10" />

            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400" />
                  ))}
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed max-w-3xl mx-auto">
                CodeSpace changed my life. I went from knowing nothing about coding
                to building full-stack applications in just 6 months. The tutorials
                are clear, practical, and actually fun to follow.
              </blockquote>
              <div className="mt-6">
                <p className="text-amber-400 font-bold text-lg">— Maria Rodriguez</p>
                <p className="text-gray-500 text-sm">Full Stack Developer • Class of 2025</p>
                <div className="flex justify-center gap-2 mt-3">
                  <span className="px-3 py-1 text-[10px] bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/20">
                    🌟 4.9/5 Rating
                  </span>
                  <span className="px-3 py-1 text-[10px] bg-amber-500/20 text-amber-400 rounded-full border border-amber-500/20">
                    📚 12+ Courses
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================
      ANIMATED GRADIENT STYLES
      ========================================================== */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(15px) translateX(10px); }
        }
      `}</style>
    </main>
  );
}