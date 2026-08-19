"use client";

// ============================================================
// IMPORTS
// ============================================================
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { motion } from "framer-motion";

// ============================================================
// CONTACT CARD COMPONENT
// ============================================================
function ContactCard({
  icon,
  title,
  info,
  color = "from-amber-400 to-orange-400",
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  info: string;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex items-center gap-5 cursor-pointer"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl text-gray-900 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
          {title}
        </h3>
        <p className="text-gray-300 text-sm group-hover:text-white transition-colors">{info}</p>
      </div>
    </motion.div>
  );
}

// ============================================================
// SOCIAL LINK COMPONENT
// ============================================================
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-amber-400 text-2xl transition-all hover:scale-125 hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "contact@codespace.com",
      color: "from-amber-400 to-orange-400",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      color: "from-emerald-400 to-cyan-400",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "123 Code Street, Dev City, World",
      color: "from-rose-400 to-pink-400",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      info: "Mon-Fri: 9AM - 6PM EST",
      color: "from-blue-400 to-indigo-400",
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "#", label: "GitHub" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ==========================================================
      HERO SECTION
      ========================================================== */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-28 pt-36 overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            Get in Touch
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            <span className="text-white">Contact</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">
              Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6"
          >
            Have questions, ideas, or just want to say hello? Wed love to hear from you.
            Reach out and lets build something amazing together.
          </motion.p>
        </div>
      </section>

      {/* ==========================================================
      CONTACT SECTION - FORM + INFO
      ========================================================== */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ==========================================================
          CONTACT INFO - LEFT
          ========================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">
                <span className="text-white">Lets</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 ml-2">
                  Connect
                </span>
              </h2>
              <p className="text-gray-400 text-sm">
                Were here to help. Choose the best way to reach us.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((item, idx) => (
                <ContactCard
                  key={idx}
                  icon={item.icon}
                  title={item.title}
                  info={item.info}
                  color={item.color}
                  delay={idx * 0.1}
                />
              ))}
            </div>

            {/* Social links */}
            <div className="pt-4 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-4">Connect with us socially</p>
              <div className="flex gap-5">
                {socialLinks.map((social, idx) => (
                  <SocialLink key={idx} href={social.href} icon={social.icon} label={social.label} />
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <FaCheckCircle className="text-emerald-400 text-xl" />
              <div>
                <p className="text-sm font-medium text-white">We respond within 24 hours</p>
                <p className="text-xs text-gray-500">Average response time: 6 hours</p>
              </div>
            </div>
          </motion.div>

          {/* ==========================================================
          FORM - RIGHT
          ========================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-amber-400/30 transition-all duration-500">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-white">Send us a</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 ml-2">
                  Message
                </span>
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Fill in the form and well get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 group-focus-within:text-orange-400 transition-colors">
                    <FaUser className="text-sm" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 group-focus-within:text-orange-400 transition-colors">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="relative group">
                  <div className="absolute left-4 top-4 text-amber-400 group-focus-within:text-orange-400 transition-colors">
                    <FaCommentDots className="text-sm" />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl font-bold text-gray-900 text-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitted ? (
                      <>
                        <FaCheckCircle className="text-green-700" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <MdSend />
                        Send Message
                        <FaArrowRight className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
                      </>
                    )}
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>
              </form>

              {/* Success message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm text-center"
                >
                  ✨ Thank you for reaching out! Well get back to you soon.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================
      FAQ / QUICK HELP SECTION
      ========================================================== */}
      <section className="px-6 py-16 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-white">Frequently Asked</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 ml-2">
                Questions
              </span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">Quick answers to common questions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: "Is CodeSpace free?", a: "Yes! All tutorials are completely free." },
              { q: "Do I need prior experience?", a: "No, we cover everything from beginner to advanced." },
              { q: "How long are the courses?", a: "Courses range from 2 to 10 hours." },
              { q: "Is there a certificate?", a: "Yes, you get a certificate upon completion." },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-amber-400/30 transition-all group"
              >
                <h4 className="font-medium text-white group-hover:text-amber-300 transition-colors">
                  {faq.q}
                </h4>
                <p className="text-gray-400 text-sm mt-1">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}