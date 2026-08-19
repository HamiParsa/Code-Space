"use client";

// ============================================================
// IMPORTS
// ============================================================
import { useState, useEffect } from "react";
import { FaGithub, FaBars, FaTimes, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";

// ============================================================
// HEADER COMPONENT
// ============================================================
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ============================================================
  // Detect scroll for glass effect
  // ============================================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ============================================================
  // Navigation links
  // ============================================================
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-orange-300/20 shadow-2xl shadow-orange-300/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* ==========================================================
        Logo
        ========================================================== */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-300/20 blur-xl rounded-full group-hover:blur-2xl transition-all duration-500" />
            <IoMdRocket className="text-3xl text-orange-300 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
          </div>
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-200 group-hover:from-orange-400 group-hover:via-orange-300 group-hover:to-orange-200 transition-all duration-300">
            CodeSpace
          </span>
        </Link>

        {/* ==========================================================
        Desktop Navigation
        ========================================================== */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-gray-400 hover:text-orange-300 transition-colors duration-300 font-medium text-sm group"
            >
              {link.name}
              {/* Underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* ==========================================================
        Desktop Social Icons
        ========================================================== */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/hamiparsa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-300 text-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/hamiparsa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-300 text-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/hamiparsa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-300 text-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
          >
            <FaTwitter />
          </a>
          {/* CTA Button */}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2 bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg font-bold text-gray-900 text-sm shadow-lg shadow-orange-300/20 hover:shadow-orange-300/40 transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* ==========================================================
        Mobile Menu Button
        ========================================================== */}
        <button
          className="md:hidden text-gray-400 hover:text-orange-300 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* ==========================================================
      Mobile Menu
      ========================================================== */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-orange-300/20 overflow-hidden"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-orange-300 text-lg font-medium transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Divider */}
            <div className="border-t border-orange-300/10 pt-4" />

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/hamiparsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-300 text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/hamiparsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-300 text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/hamiparsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-300 text-2xl transition-all duration-300 hover:scale-110"
              >
                <FaTwitter />
              </a>
            </div>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              className="w-full text-center px-5 py-3 bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg font-bold text-gray-900 shadow-lg shadow-orange-300/20 transition-all duration-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}