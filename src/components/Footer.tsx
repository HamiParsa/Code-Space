"use client";

// ============================================================
// IMPORTS
// ============================================================
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import Link from "next/link";

// ============================================================
// FOOTER COMPONENT
// ============================================================
export default function Footer() {
  // ==========================================================
  // Footer links data
  // ==========================================================
  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/hamiparsa", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/hamiparsa", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com/hamiparsa", label: "Twitter" },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
  ];

  // ==========================================================
  // RENDER
  // ==========================================================
  return (
    <footer className="relative bg-black/80 backdrop-blur-xl border-t border-orange-300/20">
      {/* ==========================================================
      Glow effect at top - matches header
      ========================================================== */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* ==========================================================
        Main Footer Grid
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* ==========================================================
          Brand Column - Matches header logo
          ========================================================== */}
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-300/20 blur-xl rounded-full group-hover:blur-2xl transition-all duration-500" />
                <IoMdRocket className="text-3xl text-orange-300 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-200 group-hover:from-orange-400 group-hover:via-orange-300 group-hover:to-orange-200 transition-all duration-300">
                CodeSpace
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
              Learn modern programming with hands-on tutorials, interactive examples,
              and real-world projects. Join thousands of developers building their future.
            </p>

            {/* Social Icons - Matches header social icons */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-500 hover:text-orange-300 text-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ==========================================================
          Product Links - Same style as header nav
          ========================================================== */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="relative text-gray-400 hover:text-orange-300 text-sm transition-colors duration-300 inline-block group"
                  >
                    {link.name}
                    {/* Underline animation - matches header */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==========================================================
          Company Links
          ========================================================== */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="relative text-gray-400 hover:text-orange-300 text-sm transition-colors duration-300 inline-block group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ==========================================================
          Legal Links
          ========================================================== */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="relative text-gray-400 hover:text-orange-300 text-sm transition-colors duration-300 inline-block group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ==========================================================
        Divider - Matches header border
        ========================================================== */}
        <div className="border-t border-orange-300/10 my-10" />

        {/* ==========================================================
        Bottom Bar - Matches header style
        ========================================================== */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} CodeSpace.
            <span className="hidden sm:inline"> All rights reserved.</span>
            <span className="flex items-center gap-1 text-xs">
              Built with
              <FaHeart className="text-orange-300 text-xs animate-pulse" />
              using Next.js
            </span>
          </p>

          <div className="flex gap-6 text-xs">
            <Link 
              href="#" 
              className="relative text-gray-500 hover:text-orange-300 transition-colors duration-300 group"
            >
              Privacy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-300 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="#" 
              className="relative text-gray-500 hover:text-orange-300 transition-colors duration-300 group"
            >
              Terms
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-300 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="#" 
              className="relative text-gray-500 hover:text-orange-300 transition-colors duration-300 group"
            >
              Cookies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-300 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              href="#" 
              className="relative text-gray-500 hover:text-orange-300 transition-colors duration-300 group"
            >
              Sitemap
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-300 group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}