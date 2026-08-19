"use client";

// ============================================================
// IMPORTS
// ============================================================
import { useEffect, useState, useRef } from "react";
import {
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiAngular,
  SiLeetcode,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";
import { MdRocketLaunch, MdArrowForward } from "react-icons/md";
import { IoMdFlash, IoMdStar } from "react-icons/io";
import { GiServerRack, GiShield } from "react-icons/gi";

// ============================================================
// MATRIX RAIN - Pastel Orange
// ============================================================
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]|\\!@#$%^&*()";
    const columns = Math.floor(canvas.width / 18);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 18;
        const y = drops[i] * 18;

        const intensity = Math.random() * 0.3 + 0.5;
        const colors = [
          `rgba(253, 186, 116, ${intensity * 0.7})`, // Orange-300
          `rgba(254, 215, 170, ${intensity * 0.6})`, // Orange-200
          `rgba(251, 146, 60, ${intensity * 0.5})`,  // Orange-400
        ];
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.font = "16px monospace";

        if (Math.random() > 0.97) {
          ctx.shadowColor = "rgba(251, 146, 60, 0.6)";
          ctx.shadowBlur = 20;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-15 pointer-events-none z-0"
    />
  );
}

// ============================================================
// NEON BACKGROUND - Pastel Orange
// ============================================================
function NeonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    const circles: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      angle: number;
      color: string;
      opacity: number;
      phase: number;
    }> = [];

    const colors = [
      "rgba(253, 186, 116, ", // Orange-300
      "rgba(254, 215, 170, ", // Orange-200
      "rgba(251, 146, 60, ",  // Orange-400
      "rgba(255, 237, 213, ", // Orange-50
    ];

    for (let i = 0; i < 12; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 200 + 80,
        speed: Math.random() * 0.004 + 0.001,
        angle: Math.random() * Math.PI * 2,
        color: colors[i % colors.length],
        opacity: Math.random() * 0.05 + 0.02,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(
        width / 2 + Math.sin(time * 0.0003) * 200,
        height / 2 + Math.cos(time * 0.0005) * 200,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, "rgba(20, 15, 10, 0.3)");
      gradient.addColorStop(0.5, "rgba(15, 10, 8, 0.5)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.8)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      circles.forEach((circle, i) => {
        circle.x += Math.sin(time * 0.001 + i * 0.5) * 0.4;
        circle.y += Math.cos(time * 0.001 + i * 0.7) * 0.4;
        circle.angle += circle.speed;

        const x = circle.x + Math.sin(circle.angle + circle.phase) * 50;
        const y = circle.y + Math.cos(circle.angle * 0.7 + circle.phase) * 50;

        const pulse = Math.sin(time * 0.002 + i) * 0.3 + 0.7;

        const gradient2 = ctx.createRadialGradient(x, y, 0, x, y, circle.radius);
        gradient2.addColorStop(0, circle.color + (circle.opacity * pulse) + ")");
        gradient2.addColorStop(0.3, circle.color + (circle.opacity * 0.5 * pulse) + ")");
        gradient2.addColorStop(0.7, circle.color + (circle.opacity * 0.2 * pulse) + ")");
        gradient2.addColorStop(1, circle.color + "0)");

        ctx.fillStyle = gradient2;
        ctx.beginPath();
        ctx.arc(x, y, circle.radius, 0, Math.PI * 2);
        ctx.fill();

        if (i % 2 === 0) {
          ctx.strokeStyle = circle.color + (circle.opacity * 0.15 * pulse) + ")";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, circle.radius * 0.6, 0, Math.PI * 2);
          ctx.stroke();

          ctx.strokeStyle = circle.color + (circle.opacity * 0.08 * pulse) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, circle.radius * 0.8, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
}

// ============================================================
// MOUSE TRACKER - Pastel Orange
// ============================================================
function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-300/5 via-orange-200/5 to-orange-100/5 blur-3xl transition-all duration-300 ease-out"
        style={{
          left: position.x - 250,
          top: position.y - 250,
        }}
      />
      <div
        className="fixed pointer-events-none z-40 w-32 h-32 rounded-full border border-orange-300/20 blur-sm transition-all duration-200 ease-out"
        style={{
          left: position.x - 64,
          top: position.y - 64,
        }}
      />
    </>
  );
}

// ============================================================
// GLITCH TEXT - Pastel Orange
// ============================================================
function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-block font-black ${className}`}>
      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-200">
        {text}
      </span>
      <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400 blur-sm opacity-60 animate-pulse">
        {text}
      </span>
      <span
        className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 opacity-20 blur-md animate-pulse"
        style={{ animationDelay: "0.5s" }}
      >
        {text}
      </span>
    </span>
  );
}

// ============================================================
// TERMINAL - Pastel Orange
// ============================================================
function LiveTerminal() {
  const [lines, setLines] = useState<string[]>([
    "> ⚡ Initializing DevSpace...",
    "> 🔄 Loading environment...",
    "> 📦 Installing dependencies...",
  ]);
  const [currentLine, setCurrentLine] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const lineIndex = useRef(0);
  const charIndex = useRef(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  const codeLines = [
    "const developer = {",
    "  name: 'Alex Rivera',",
    "  role: 'Full Stack Architect',",
    "  stack: ['React', 'Node', 'Python', 'Go'],",
    "  passion: 'Building scalable systems',",
    "  status: '🚀 Coding the future'",
    "};",
    "",
    "developer.build();",
    "// ✅ System initialized successfully ✨",
  ];

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, currentLine]);

  useEffect:void(() => {
    if (lineIndex.current >= codeLines.length) {
      setIsComplete(true);
      const resetTimeout = setTimeout(() => {
        setLines([
          "> 🔄 Restarting session...",
          "> 📦 Loading environment...",
        ]);
        lineIndex.current = 0;
        charIndex.current = 0;
        setCurrentLine("");
        setIsComplete(false);
      }, 5000);
      return () => clearTimeout(resetTimeout);
    }

    const timeout = setTimeout(() => {
      const currentCodeLine = codeLines[lineIndex.current];

      if (charIndex.current < currentCodeLine.length) {
        setCurrentLine((prev) => prev + currentCodeLine[charIndex.current]);
        charIndex.current++;
      } else {
        if (currentCodeLine.trim()) {
          setLines((prev) => [...prev, `> ${currentCodeLine}`]);
        } else {
          setLines((prev) => [...prev, ""]);
        }
        lineIndex.current++;
        charIndex.current = 0;
        setCurrentLine("");
      }
    }, 20);

    return () => clearTimeout(timeout);
  });

  return (
    <div className="bg-black/90 backdrop-blur-2xl border border-orange-300/30 rounded-2xl p-4 font-mono text-sm shadow-2xl shadow-orange-300/10 hover:shadow-orange-300/20 transition-all duration-500 hover:scale-[1.01] relative z-10">
      <div className="flex items-center gap-2 mb-3 border-b border-orange-300/20 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-orange-300/50 text-xs ml-2 font-mono">terminal@devspace</span>
        <span className="text-orange-300/30 text-xs ml-auto font-mono">
          {isComplete ? "✅ ready" : "⏳ building"}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse ml-1" />
      </div>
      <div ref={terminalRef} className="text-orange-300 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300/20">
        {lines.map((line, idx) => (
          <div key={idx} className="mb-1 opacity-90 leading-relaxed">
            {line}
          </div>
        ))}
        {currentLine && (
          <div className="mb-1">
            {currentLine}
            <span className="inline-block w-2 h-4 bg-orange-300 animate-pulse ml-1" />
          </div>
        )}
        {isComplete && (
          <div className="text-green-400 animate-pulse mt-2 flex items-center gap-2">
            <span>✓</span>
            <span>System ready. Deploying to production...</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// 3D TILT CARD - Pastel Orange
// ============================================================
function TiltCard({
  icon,
  title,
  description,
  tech,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string[];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    setRipple(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative bg-gradient-to-br from-orange-200/10 to-orange-300/10 backdrop-blur-sm p-8 rounded-2xl border border-orange-300/30 hover:border-orange-400/60 transition-all duration-300 shadow-xl shadow-orange-300/10 hover:shadow-2xl hover:shadow-orange-300/20 overflow-hidden group cursor-pointer z-10"
      style={{ transition: "transform 0.1s ease" }}
    >
      {ripple && (
        <div
          className="absolute w-32 h-32 rounded-full bg-orange-300/20 pointer-events-none animate-ripple"
          style={{ left: ripple.x - 64, top: ripple.y - 64 }}
        />
      )}

      <div className="relative z-10">
        <div className="text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-orange-400 to-orange-300 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-orange-300/15 text-orange-200 rounded-full border border-orange-300/20 hover:bg-orange-300/25 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// STATS COUNTER - Pastel Orange
// ============================================================
function AnimatedCounter({
  target,
  label,
  icon,
  delay = 0,
}: {
  target: number;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

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
    <div ref={ref} className="text-center group z-10 relative">
      {icon && (
        <div className="text-3xl mb-2 text-orange-300 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-200">
        {isVisible ? count : 0}+
      </div>
      <div className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
        {label}
      </div>
    </div>
  );
}

// ============================================================
// TOPIC CARD - Pastel Orange
// ============================================================
function TopicCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 p-4 transition-all duration-500 hover:-translate-y-3 cursor-pointer z-10 relative">
      <div className="text-5xl group-hover:scale-125 transition-transform duration-500 group-hover:drop-shadow-[0_0_30px_rgba(251,146,60,0.3)]">
        {icon}
      </div>
      <h4 className="text-xs font-medium text-gray-500 group-hover:text-orange-300 transition-colors duration-300">
        {title}
      </h4>
    </div>
  );
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function Home() {
  // ============================================================
  // DATA
  // ============================================================
  const topics = [
    { icon: <FaJs className="text-yellow-400" />, title: "JavaScript" },
    { icon: <SiTypescript className="text-blue-400" />, title: "TypeScript" },
    { icon: <FaPython className="text-blue-500" />, title: "Python" },
    { icon: <FaReact className="text-cyan-400" />, title: "React" },
    { icon: <SiNextdotjs className="text-white" />, title: "Next.js" },
    { icon: <FaNodeJs className="text-green-500" />, title: "Node.js" },
    { icon: <FaHtml5 className="text-orange-500" />, title: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, title: "CSS" },
    { icon: <SiTailwindcss className="text-teal-400" />, title: "Tailwind" },
    { icon: <SiAngular className="text-red-500" />, title: "Angular" },
    { icon: <SiDocker className="text-blue-400" />, title: "Docker" },
    { icon: <SiKubernetes className="text-blue-600" />, title: "Kubernetes" },
    { icon: <SiMongodb className="text-green-400" />, title: "MongoDB" },
    { icon: <SiPostgresql className="text-blue-400" />, title: "PostgreSQL" },
    { icon: <SiRedis className="text-red-500" />, title: "Redis" },
    { icon: <SiGraphql className="text-pink-500" />, title: "GraphQL" },
  ];

  const projects = [
    {
      icon: <GiServerRack />,
      title: "Distributed Systems",
      description: "Microservices architecture handling 1M+ daily requests with 99.99% uptime",
      tech: ["Go", "Kafka", "Docker", "Kubernetes"],
    },
    {
      icon: <GiShield />,
      title: "Cloud Native Platform",
      description: "Serverless platform with auto-scaling across 5 global regions",
      tech: ["AWS", "Lambda", "DynamoDB", "Terraform"],
    },
    {
      icon: <GiShield />,
      title: "Security Suite",
      description: "Zero-trust authentication system with military-grade encryption",
      tech: ["Rust", "OpenSSL", "JWT", "OAuth2"],
    },
  ];

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <>
      {/* ==========================================================
      BACKGROUND LAYERS
      ========================================================== */}
      <MatrixRain />
      <NeonBackground />
      <MouseTracker />

      {/* ==========================================================
      HERO SECTION
      ========================================================== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-300/10 border border-orange-300/30 rounded-full text-orange-300 text-sm animate-pulse">
              <IoMdFlash className="text-yellow-400" />
              <span>Next-Gen Development Platform</span>
              <IoMdStar className="text-yellow-400 text-xs" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <GlitchText text="Build the" />
              <br />
              <span className="text-white">Future with</span>
              <br />
              <GlitchText text="Code" />
              <span className="text-orange-300">.</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Where innovation meets execution. Build scalable, production-ready
              applications with modern architecture and cutting-edge technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-orange-300 to-orange-400 rounded-xl font-bold text-gray-900 shadow-xl hover:shadow-orange-300/40 transition-all hover:scale-105 flex items-center gap-2">
                <span className="relative z-10">Start Building</span>
                <MdArrowForward className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              <button className="px-8 py-4 border border-orange-300/50 rounded-xl text-gray-300 hover:bg-orange-300/10 hover:border-orange-400 transition-all hover:scale-105">
                View Portfolio
              </button>
            </div>

            <div className="flex gap-6 pt-4">
              {[FaGithub, FaLinkedin, FaTwitter, SiLeetcode].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-500 hover:text-orange-300 text-2xl transition-all hover:scale-125 hover:-translate-y-1"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Terminal */}
          <div className="w-full z-10 relative">
            <LiveTerminal />
          </div>
        </div>
      </section>

      {/* ==========================================================
      STATS SECTION
      ========================================================== */}
      <section className="relative px-6 py-20 border-t border-orange-300/20 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter target={500} label="Projects Built" icon={<GiServerRack />} />
          <AnimatedCounter target={120} label="Happy Clients" icon={<IoMdStar />} delay={200} />
          <AnimatedCounter target={30} label="Tech Stack" icon={<FaAws />} delay={400} />
          <AnimatedCounter target={99} label="Uptime %" icon={<GiShield />} delay={600} />
        </div>
      </section>

      {/* ==========================================================
      TOPICS SECTION
      ========================================================== */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Tech</span>{" "}
                <GlitchText text="Stack" />
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Modern tools & frameworks I work with daily
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6 md:gap-8">
            {topics.map((topic, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <TopicCard icon={topic.icon} title={topic.title} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
      PROJECTS SECTION
      ========================================================== */}
      <section className="relative px-6 py-20 bg-black/40 backdrop-blur-sm border-t border-orange-300/20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Featured</span>{" "}
                <GlitchText text="Projects" />
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Real-world solutions built with modern architecture
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ScrollReveal key={idx} delay={idx * 200}>
                <TiltCard
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
      CTA SECTION
      ========================================================== */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="relative overflow-hidden bg-gradient-to-br from-orange-900/20 to-orange-800/20 p-12 rounded-3xl border border-orange-300/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-orange-300/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300/5 via-orange-200/5 to-orange-100/5 animate-pulse" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Ready to{" "}
                  <GlitchText text="Innovate" />
                  ?
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Lets build something extraordinary together. Start your next project
                  with cutting-edge technology.
                </p>
                <button className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-200 rounded-xl font-bold text-gray-900 shadow-xl hover:shadow-2xl hover:shadow-orange-300/40 transition-all hover:scale-105 text-lg">
                  <span className="relative z-10 flex items-center gap-2">
                    <MdRocketLaunch className="group-hover:rotate-12 transition-transform" />
                    Launch Project
                    <MdArrowForward className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================================
      STYLES
      ========================================================== */}
      <style jsx global>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}