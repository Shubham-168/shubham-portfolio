import React from "react";
import { Card } from "@/components/ui/card";

export default function Experience() {
  return (
    <div>
      <h2 id="experience" className="text-2xl font-semibold mt-12 mb-4 text-center md:text-left">Experience</h2>
      <Card className="p-4 bg-gray-800">
        <h3 className="text-lg font-medium">Frontend Developer Intern</h3>
        <p className="text-sm text-gray-400">Mark Anthony Ventures, Bengaluru – Jun 2025 – Present</p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-gray-300">
          <li>Built responsive web apps using React.js, Redux Toolkit, and Tailwind CSS.</li>
          <li>Developed reusable UI components with cross-browser support.</li>
          <li>Implemented dynamic features using React hooks and API integrations.</li>
          <li>Assisted in micro frontend module integration.</li>
          <li>Followed Git workflows and Agile development practices.</li>
        </ul>
      </Card>
    </div>
  );
}