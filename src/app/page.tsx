"use client";

import { useEffect, useState } from "react";
import { FaJs, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiAngular } from "react-icons/si";
import Image from "next/image";

// Typing animation component
function TypingText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[index].length) {
        setDisplayed(displayed + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayed("");
          setCharIndex(0);
          setIndex((index + 1) % texts.length);
        }, 1500);
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [charIndex, index, displayed, texts]);

  return <span className="text-green-400">{displayed}</span>;
}

// Code Block Component
function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-gray-900 text-green-400 p-6 rounded-2xl overflow-x-auto shadow-2xl text-sm font-mono">
      <code>{code}</code>
    </pre>
  );
}

export default function Home() {
  const heroTexts = ["Learn to Code", "Build Real Projects", "Become a Developer"];
  const codeExample = `function greet(name: string) {
  return \`Hello, \${name} 👋\`;
}
console.log(greet("Developer"));`;

  const topics = [
    { icon: <FaJs className="text-yellow-400 text-4xl" />, title: "JavaScript" },
    { icon: <SiTypescript className="text-blue-400 text-4xl" />, title: "TypeScript" },
    { icon: <FaPython className="text-blue-500 text-4xl" />, title: "Python" },
    { icon: <FaReact className="text-cyan-400 text-4xl" />, title: "React" },
    { icon: <SiNextdotjs className="text-white text-4xl" />, title: "Next.js" },
    { icon: <FaNodeJs className="text-green-600 text-4xl" />, title: "Node.js" },
    { icon: <FaHtml5 className="text-orange-500 text-4xl" />, title: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 text-4xl" />, title: "CSS" },
    { icon: <SiTailwindcss className="text-teal-400 text-4xl" />, title: "Tailwind" },
    { icon: <SiAngular className="text-red-600 text-4xl" />, title: "Angular" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-900 text-white font-sans">


      {/* Hero Section Full + Code Block */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            width={1000}
            height={1000}
            src="https://i.pinimg.com/originals/c5/9a/d2/c59ad2bd4ad2fbacd04017debc679ddb.gif"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl flex flex-col items-center justify-center animate-fadeIn">
          <h1 className="text-6xl font-bold mb-6">
            <TypingText texts={heroTexts} />
          </h1>
          <p className="text-lg mb-8 text-gray-200 text-center">
            Hands-on tutorials, beautiful code examples, and step-by-step guides to master modern programming.
          </p>

          {/* Code Block on Hero */}
          <div className="w-full max-w-2xl mb-8">
            <CodeBlock code={codeExample} />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-green-500 rounded-xl shadow hover:bg-green-600 transition transform hover:-translate-y-1 hover:scale-105">
              Start Learning
            </button>
            <button className="px-6 py-3 bg-gray-700 rounded-xl shadow hover:bg-gray-600 transition transform hover:-translate-y-1 hover:scale-105">
              Explore Tutorials
            </button>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="px-6 py-16 bg-gray-800">
        <h3 className="text-3xl font-bold text-center mb-12 text-green-400">Popular Languages & Frameworks</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {topics.map((topic, idx) => (
            <div key={idx} className="p-6 bg-gray-700 rounded-3xl shadow-lg hover:bg-gray-600 transition transform hover:-translate-y-1 hover:scale-105 flex flex-col items-center justify-center">
              {topic.icon}
              <h4 className="text-lg font-semibold mt-2">{topic.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 py-16 bg-gray-900 text-center">
        <h3 className="text-3xl font-bold mb-10 text-green-400">Why Learn with CodeSpace?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Modern Tutorials", desc: "Stay updated with latest tech & frameworks." },
            { title: "Hands-on Code", desc: "Every tutorial includes real coding examples." },
            { title: "Developer Friendly", desc: "Designed for learners to become pro developers." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:bg-gray-700 transition transform hover:-translate-y-1 flex flex-col items-center justify-center">
              <h4 className="text-xl font-semibold mb-3 text-green-400">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
    </main>
  );
}
