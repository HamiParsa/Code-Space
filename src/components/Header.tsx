"use client";

import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoCodeWorkingSharp } from "react-icons/io5";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-950 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl flex items-center font-bold text-green-400">
            CodeSpace
            <IoCodeWorkingSharp className="mt-1 ml-1" />

        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-green-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://github.com/hamiparsa"
            target="_blank"
            className="hover:text-gray-200 transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-950 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-green-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://github.com/hamiparsa"
            target="_blank"
            className="hover:text-gray-200 transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
        </motion.div>
      )}
    </header>
  );
}
