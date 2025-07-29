import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import shubhamPic from "@/assets/images/shubam_pic.jpg";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.section
      id="hero"
      className="max-w-screen-lg mx-auto px-4 py-12 flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={shubhamPic}
        alt="Shubham Saini"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg border-4 border-white object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">Shubham Saini</h2>
        <p className="text-lg mt-2 text-blue-400">Full Stack Developer based in Amroha, India</p>
        <p className="text-sm text-gray-400 mt-1 max-w-xl">
          Skilled in React.js, Node.js, Express, Redux, and more. Passionate about building fast,
          responsive, and user-friendly applications.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button className="hover:bg-green-400 hover:text-black" asChild>
            <a href="/Shubham_Saini_Resume.pdf" download>
              Download Resume
            </a>
          </Button>
          <Button
            variant="outline"
            className="hover:bg-green-400 hover:text-black hover:cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Get in Touch
          </Button>
        </div>
      </motion.div>

      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </motion.section>
  );
}
