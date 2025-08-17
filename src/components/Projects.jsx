import React from "react";
import { Card } from "@/components/ui/card";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function Projects() {
  return (
    <div>
      <h2
        id="projects"
        className="text-3xl font-bold mt-16 mb-8 text-center text-blue-500"
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map(({ title, tech, desc, live }, i) => (
          <motion.div
            key={title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomIn}
          >
            <Card className="p-4 bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition h-68 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-400">{tech}</p>
                <p className="text-sm mt-2">{desc}</p>
              </div>
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 mt-2 block"
              >
                Live Demo
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
