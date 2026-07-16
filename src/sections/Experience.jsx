import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import experience from "../data/experience";

const Experience = () => {
  return (
    <motion.section
      id="experiencia"
      className="py-20 px-6 md:px-24 bg-white dark:bg-slate-800 shadow-md rounded-lg my-10 transition-colors"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 border-b-4 border-orange-400 inline-block mb-14">
            Experiencia
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-[11px] top-1 flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-slate-800">
                <FaBriefcase className="text-white text-[10px]" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {job.role} · <span className="text-blue-700 dark:text-blue-400">{job.company}</span>
                </h3>
                <span className="text-sm font-medium text-orange-500">
                  {job.period}
                </span>
              </div>
              <p className="text-sm text-slate-400 dark:text-slate-500 mb-3">{job.location}</p>

              <ul className="space-y-1.5">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-slate-600 dark:text-slate-300 text-sm md:text-base flex gap-2"
                  >
                    <span className="text-orange-400 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
