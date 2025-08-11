import React from "react";
import { Card } from "@/components/ui/card";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <div>
      <h2
        id="skills"
        className="text-2xl font-semibold mt-12 mb-4 text-center md:text-left"
      >
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Object.entries(skills).map(([title, list], index) => (
          <motion.div
            key={title}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Card className="p-4 bg-gray-800 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-medium mb-3">{title}</h3>
              <ul className="text-sm space-y-2">
                {list.map(({ name, logo }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-200"
                  >
                    <img
                      src={logo}
                      alt={name}
                      className="w-6 h-6 object-contain"
                    />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
