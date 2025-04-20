import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaVuejs,
    FaReact,
    FaAngular,
    FaPhp,
    FaLaravel,
    FaNodeJs,
    FaJava,
    FaPython,
    FaDatabase,
    FaGitAlt,
    FaJenkins,
    FaWordpress,
    FaFigma,
  } from "react-icons/fa";

const skillsData = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "Figma", icon: <FaFigma /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "PHP", icon: <FaPhp /> },
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: "Bases de Datos",
    items: [
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "SQL Server", icon: <FaDatabase /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Dev Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Jenkins", icon: <FaJenkins /> },
      { name: "WordPress", icon: <FaWordpress /> },
    ],
  },
  {
    title: "Metodologías",
    items: [
      { name: "SCRUM" },
      { name: "Principios SOLID" },
      { name: "UI/UX" },
    ],
  },
];

const Skills = () => {
  return (
    <motion.section
      id="habilidades"
      className="py-20 px-6 md:px-24 bg-slate-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-700 border-b-4 border-orange-400 inline-block mb-10">
            Habilidades
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
              {category.items.map((skill, i) => (
                <span
                    key={i}
                    className="flex items-center gap-2 bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full"
                >
                    {skill.icon && <span className="text-blue-300">{skill.icon}</span>}
                    {skill.name}
                </span>
              ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
