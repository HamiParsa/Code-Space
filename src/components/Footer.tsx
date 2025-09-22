"use client";

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-green-400 text-xl font-bold mb-2">CodeSpace</h2>
          <p className="text-gray-400 max-w-sm">
            Learn modern programming with hands-on tutorials, interactive examples, and real projects.
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <a href="https://github.com/hamiparsa" target="_blank" className="hover:text-white transition-colors">
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} CodeSpace. All rights reserved.
      </p>
    </footer>
  );
}
