"use client";

import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-64 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-green-400 mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-gray-300 text-lg max-w-2xl"
        >
          Have questions or want to collaborate? Send us a message and we’ll get back to you ASAP.
        </motion.p>
      </section>

      {/* Contact Form + Info */}
      <section className="px-4 sm:px-6 lg:px-12 py-20 flex flex-col md:flex-row justify-center gap-12">
        
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-lg bg-gray-800 p-8 rounded-3xl shadow-2xl flex flex-col gap-6"
        >
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400 text-lg" />
            <input
              type="text"
              placeholder="Your Name"
              className="pl-12 p-4 rounded-xl bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition w-full"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400 text-lg" />
            <input
              type="email"
              placeholder="Your Email"
              className="pl-12 p-4 rounded-xl bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition w-full"
            />
          </div>

          <div className="relative">
            <FaCommentDots className="absolute left-4 top-4 text-green-400 text-lg" />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="pl-12 p-4 rounded-xl bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition w-full resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #22c55e' }}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-lg flex flex-col gap-6"
        >
          <div className="p-6 bg-gray-800 rounded-3xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-4">
            <FaEnvelope className="text-green-400 text-2xl" />
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-1">Email</h3>
              <p className="text-gray-300">contact@codespace.com</p>
            </div>
          </div>
          <div className="p-6 bg-gray-800 rounded-3xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-4">
            <FaPhone className="text-green-400 text-2xl" />
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-1">Phone</h3>
              <p className="text-gray-300">+1 234 567 890</p>
            </div>
          </div>
          <div className="p-6 bg-gray-800 rounded-3xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-4">
            <FaMapMarkerAlt className="text-green-400 text-2xl" />
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-1">Address</h3>
              <p className="text-gray-300">123 Code Street, Dev City, World</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-12 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Collaborate?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px #22c55e' }}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg transition-all"
        >
          Lets Talk
        </motion.button>
      </section>

    </main>
  );
}
