import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiRedux, SiExpress, SiTailwindcss, SiMysql, SiJest } from "react-icons/si";

export const skills = {
  Languages: [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt  }, 
    { name: "JavaScript", icon: SiJavascript  },
    { name: "Python", icon: FaPython  },
  ],
  Frameworks: [
    { name: "React", icon: FaReact  },
    { name: "Redux", icon: SiRedux  },
    { name: "Node.js", icon: FaNodeJs  },
    { name: "Express.js", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss  },
  ],
  Databases: [
    { name: "MongoDB", icon: SiMongodb  },
    { name: "MySQL", icon: SiMysql  },
  ],
  Tools: [
    { name: "Git", icon: FaGitAlt  },
    { name: "Jest", icon: SiJest  },
  ],
};
