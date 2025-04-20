import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Vue.js", "React", "Angular", "Bootstrap", "Figma"],
  },
  {
    title: "Backend",
    items: ["PHP", "Laravel", "Node.js", "Java", "Symfony", "C#", "Python"],
  },
  {
    title: "Bases de Datos",
    items: ["MySQL", "SQL Server", "MongoDB"],
  },
  {
    title: "Dev Tools",
    items: ["Git", "Jenkins", "Postman", "Jest", "WordPress"],
  },
  {
    title: "Metodologías",
    items: ["SCRUM", "Principios SOLID", "UI/UX"],
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
                    className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
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
