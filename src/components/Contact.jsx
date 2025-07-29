import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      id="contact"
      className="mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">Contact</h2>
      <div className="text-center space-y-2 text-gray-300 text-sm">
        <p>📍 Amroha, Uttar Pradesh – 244221</p>
        <p>📞 9368208014</p>
        <p>📧 8014.shubham@gmail.com</p>
        <div className="flex justify-center gap-4 mt-3 text-xl">
          <a href="https://github.com/Shubham-168" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/shubham-saini-6ab01a264" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
        </div>
      </div>
    </motion.div>
  );
}
