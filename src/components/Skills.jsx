import React from "react";
import { Card } from "@/components/ui/card";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  return (
    <div>
      <h2 id="skills" className="text-3xl font-bold mt-16 mb-8 text-center text-blue-500">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={category}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-md hover:shadow-lg p-6 transition">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                {category}
              </h3>
              <ul className="space-y-3">
                {skillList.map(({ name, icon: Icon }) => (
                  <li key={name} className="flex items-center gap-3">
                    <Icon className="text-blue-400 text-xl shrink-0" />
                    <span className="text-sm">{name}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
