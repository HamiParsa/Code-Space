"use client";

// ============================================================
// IMPORTS
// ============================================================
import { useState, useEffect } from "react";
import {
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaClock,
  FaUser,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaPlay,
  FaCode,
  FaArrowRight,
  FaFire,
  FaRocket,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiGraphql,
  SiAngular,
  SiFirebase,
  SiVuedotjs,
} from "react-icons/si";
import { MdRocketLaunch, MdSchool, MdWorkspacePremium} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// TUTORIAL CARD - PREMIUM VERSION
// ============================================================
function TutorialCard({
  icon,
  title,
  description,
  level,
  duration,
  author,
  tags,
  rating = 4.5,
  students = 0,
  index = 0,
  isPopular = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  author: string;
  tags: string[];
  rating?: number;
  students?: number;
  index?: number;
  isPopular?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const levelBadge = {
    Beginner: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Intermediate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Advanced: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  };

  const levelIcon = {
    Beginner: <MdSchool className="text-emerald-400" />,
    Intermediate: <FaCode className="text-amber-400" />,
    Advanced: <MdWorkspacePremium className="text-rose-400" />,
  };

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-amber-300 text-xs" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-amber-300 text-xs" />);
    }
    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} className="text-gray-600 text-xs" />);
    }
    return stars;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, type: "spring", stiffness: 100 }}
      whileHover={{ y: -12, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      className="relative group"
      style={{
        transform: `perspective(800px) rotateX(${mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg)`,
        transition: "transform 0.1s ease",
      }}
    >
      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-2xl border border-gray-800 hover:border-amber-400/60 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10">
        
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePos.x * 5 + 50}% ${mousePos.y * 5 + 50}%, rgba(251,146,60,0.1) 0%, transparent 70%)`,
          }}
        />

        {/* Popular badge */}
        {isPopular && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full text-[10px] font-bold text-gray-900 shadow-lg shadow-amber-500/30">
            <FaFire className="text-[10px]" />
            Popular
          </div>
        )}

        {/* Glow ring behind icon */}
        <div
          className={`absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl transition-all duration-700 ${
            isHovered ? "scale-150 opacity-100" : "scale-50 opacity-0"
          }`}
        />

        <div className="relative z-10 p-6">
          {/* Icon with bounce on hover */}
          <motion.div
            animate={{ 
              scale: isHovered ? 1.15 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-5xl mb-4"
          >
            {icon}
          </motion.div>

          {/* Title with gradient on hover */}
          <h3 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-400">
            {title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{description}</p>

          {/* Rating & Students */}
          <div className="flex items-center gap-1 mt-3">
            {renderStars()}
            <span className="text-gray-500 text-xs ml-2">({rating})</span>
            <span className="text-gray-500 text-xs ml-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {students.toLocaleString()}
            </span>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <FaClock className="text-amber-400/70" />
              {duration}
            </span>
            <span className="flex items-center gap-1.5">
              <FaUser className="text-amber-400/70" />
              {author}
            </span>
          </div>

          {/* Level with icon */}
          <div className="mt-3 flex items-center gap-2">
            <span className={`px-3 py-1 text-xs rounded-full border flex items-center gap-1.5 ${levelBadge[level]}`}>
              {levelIcon[level]}
              {level}
            </span>
          </div>

          {/* Tags with hover effect */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 text-[10px] bg-amber-500/10 text-amber-400/80 rounded-full border border-amber-500/20 hover:bg-amber-500/20 transition-all hover:scale-105 cursor-default"
              >
                #{tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2.5 py-0.5 text-[10px] text-gray-500">+{tags.length - 3}</span>
            )}
          </div>

          {/* Action buttons - Slide up on hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.25 }}
            className="mt-4 flex gap-2"
          >
            <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl font-bold text-gray-900 text-sm flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg shadow-amber-500/20 group/btn">
              <FaPlay className="text-xs" />
              Start Learning
              <FaArrowRight className="text-[10px] group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <button className="px-4 py-2.5 border border-gray-700 rounded-xl text-gray-400 hover:bg-gray-800 hover:text-amber-400 transition-all hover:scale-105">
              <FaCode className="text-sm" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// HERO SECTION - EPIC
// ============================================================
function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "console.log('Welcome to CodeSpace! 🚀');";
  
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 30);
    return () => clearInterval(typing);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-20 pt-28 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

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
          Learn. Build. Grow.
          <span className="w-px h-4 bg-amber-500/30" />
          <span className="text-amber-400/80 text-xs">🔥 15K+ students</span>
        </motion.div>

        {/* Main heading with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black leading-[1.1]"
        >
          <span className="text-white">Master</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200 bg-[length:200%] animate-gradient">
            Modern Code
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6"
        >
          Dive into 120+ interactive tutorials with real-world projects,
          live examples, and expert guidance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="group px-10 py-4.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl font-bold text-gray-900 text-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/50 transition-all hover:scale-105 flex items-center gap-3">
            <FaPlay className="text-sm" />
            Start Learning
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="px-10 py-4.5 border-2 border-gray-700 rounded-2xl text-gray-300 hover:bg-gray-800 hover:border-amber-400/50 transition-all hover:scale-105 text-lg">
            Browse All
          </button>
        </motion.div>

        {/* Terminal with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 bg-gray-900/80 border border-gray-800 rounded-2xl p-5 text-left font-mono text-sm max-w-3xl mx-auto shadow-2xl shadow-amber-500/5"
        >
          <div className="flex items-center gap-2 text-gray-500 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="ml-2 text-[10px]">~/terminal</span>
            <span className="ml-auto text-[10px] text-amber-400/50">● connected</span>
          </div>
          <div>
            <span className="text-emerald-400">$</span>
            <span className="text-gray-400 ml-2">node</span>
            <span className="text-gray-400 ml-2">learn.js</span>
          </div>
          <div className="mt-2">
            <span className="text-amber-300">{displayText}</span>
            <span className="inline-block w-2 h-4 bg-amber-400 animate-pulse ml-0.5" />
          </div>
          <div className="text-gray-500 mt-2 text-xs opacity-60">
            Ready to build something amazing 🚀
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// STATS SECTION - ANIMATED
// ============================================================
function StatsSection() {
  const stats = [
    { icon: <FaCode />, value: "120+", label: "Tutorials", color: "from-amber-400 to-orange-400" },
    { icon: <FaPlay />, value: "45+", label: "Video Hours", color: "from-emerald-400 to-cyan-400" },
    { icon: <MdRocketLaunch />, value: "85+", label: "Projects", color: "from-rose-400 to-pink-400" },
    { icon: <FaUser />, value: "15K+", label: "Students", color: "from-blue-400 to-indigo-400" },
  ];

  return (
    <section className="px-6 py-16 border-t border-gray-800/50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.12, type: "spring" }}
            whileHover={{ y: -6, scale: 1.05 }}
            className="text-center p-5 rounded-xl bg-gray-900/40 border border-gray-800 hover:border-amber-400/30 transition-all group"
          >
            <div className="text-3xl mb-1 text-amber-400 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function Tutorials() {
  const [filter, setFilter] = useState("All");

  const tutorials = [
    { title: "JavaScript Mastery", description: "Complete guide to modern JavaScript with ES6+ features.", icon: <FaJs className="text-yellow-400" />, level: "Beginner" as const, duration: "6 hours", author: "Alex Rivera", tags: ["JavaScript", "ES6"], rating: 4.8, students: 12450, isPopular: true },
    { title: "TypeScript Deep Dive", description: "Type-safe development with TypeScript, generics, and advanced types.", icon: <SiTypescript className="text-blue-400" />, level: "Intermediate" as const, duration: "4.5 hours", author: "Sarah Chen", tags: ["TypeScript", "OOP"], rating: 4.7, students: 8920, isPopular: false },
    { title: "React 19 Guide", description: "Build modern UIs with React hooks, context API, and server components.", icon: <FaReact className="text-cyan-400" />, level: "Intermediate" as const, duration: "8 hours", author: "James Wilson", tags: ["React", "Hooks"], rating: 4.9, students: 15600, isPopular: true },
    { title: "Next.js 15 Masterclass", description: "Full-stack React with app router, server actions, and ISR.", icon: <SiNextdotjs className="text-white" />, level: "Advanced" as const, duration: "7 hours", author: "Alex Rivera", tags: ["Next.js", "SSR"], rating: 4.8, students: 10300, isPopular: false },
    { title: "Node.js Backend Pro", description: "Build scalable backend with Express, MongoDB, and JWT auth.", icon: <FaNodeJs className="text-green-500" />, level: "Intermediate" as const, duration: "6.5 hours", author: "Emily Davis", tags: ["Node.js", "API"], rating: 4.6, students: 7800, isPopular: false },
    { title: "Python Programming", description: "Learn Python from basics with data structures and algorithms.", icon: <FaPython className="text-blue-500" />, level: "Beginner" as const, duration: "5 hours", author: "Michael Brown", tags: ["Python", "Algorithms"], rating: 4.5, students: 6500, isPopular: false },
    { title: "Tailwind CSS Pro", description: "Master utility-first CSS with responsive design and animations.", icon: <SiTailwindcss className="text-teal-400" />, level: "Beginner" as const, duration: "3.5 hours", author: "Lisa Park", tags: ["CSS", "Design"], rating: 4.7, students: 9200, isPopular: true },
    { title: "GraphQL API Design", description: "Build flexible GraphQL APIs with Apollo Server and resolvers.", icon: <SiGraphql className="text-pink-500" />, level: "Advanced" as const, duration: "5.5 hours", author: "David Kim", tags: ["GraphQL", "API"], rating: 4.4, students: 5400, isPopular: false },
    { title: "Docker & Kubernetes", description: "Containerize apps with Docker and orchestrate with Kubernetes.", icon: <SiDocker className="text-blue-400" />, level: "Advanced" as const, duration: "8 hours", author: "Robert Smith", tags: ["Docker", "DevOps"], rating: 4.6, students: 7100, isPopular: false },
    { title: "Vue.js 3 Complete", description: "Build reactive UIs with Vue 3, composition API, and Pinia.", icon: <SiVuedotjs className="text-green-400" />, level: "Intermediate" as const, duration: "6 hours", author: "Lisa Park", tags: ["Vue", "Pinia"], rating: 4.5, students: 4800, isPopular: false },
    { title: "Firebase & Supabase", description: "Build full-stack apps with Firebase auth, Firestore, and real-time.", icon: <SiFirebase className="text-orange-400" />, level: "Intermediate" as const, duration: "4.5 hours", author: "Michael Brown", tags: ["Firebase", "Supabase"], rating: 4.4, students: 5200, isPopular: false },
    { title: "Angular Complete", description: "Full Angular with RxJS, dependency injection, and NgRx.", icon: <SiAngular className="text-red-500" />, level: "Advanced" as const, duration: "9 hours", author: "James Wilson", tags: ["Angular", "RxJS"], rating: 4.4, students: 4600, isPopular: false },
  ];

  const filters = ["All", "Beginner", "Intermediate", "Advanced"];

  const filtered = tutorials.filter((t) => filter === "All" ? true : t.level === filter);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ==========================================================
      HERO
      ========================================================== */}
      <HeroSection />

      {/* ==========================================================
      STATS
      ========================================================== */}
      <StatsSection />

      {/* ==========================================================
      TUTORIALS
      ========================================================== */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Tutorials</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {filtered.length} courses • {tutorials.length} total
            </p>
          </div>

          {/* Filters with animation */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const count = tutorials.filter((t) => f === "All" ? true : t.level === f).length;
              return (
                <motion.button
                  key={f}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    filter === f
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 shadow-lg shadow-amber-500/25"
                      : "text-gray-400 hover:text-amber-300 border border-gray-800 hover:border-amber-400/30"
                  }`}
                >
                  {f}
                  <span className={`ml-1.5 text-[10px] ${filter === f ? "text-gray-800" : "text-gray-600"}`}>
                    ({count})
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((tut, idx) => (
              <TutorialCard
                key={idx}
                {...tut}
                index={idx}
                isPopular={tut.isPopular}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg">No tutorials found for {filter}</p>
          </div>
        )}
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
      `}</style>
    </main>
  );
}