import { motion } from "framer-motion";
import skillsData from "../data/skills";
import skillIcons from "../components/icons/skillIcons";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  return (
    <motion.section
      id="habilidades"
      className="py-20 px-6 md:px-24 bg-slate-50 dark:bg-slate-900 transition-colors"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 border-b-4 border-orange-400 inline-block mb-10">
            Habilidades
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
              {category.items.map((skill, i) => {
                const Icon = skill.icon && skillIcons[skill.icon];
                return (
                  <span
                      key={i}
                      className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-slate-600 transition-colors"
                  >
                      {Icon && <span aria-hidden="true" className="text-blue-400 dark:text-blue-300"><Icon /></span>}
                      {skill.name}
                  </span>
                );
              })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
