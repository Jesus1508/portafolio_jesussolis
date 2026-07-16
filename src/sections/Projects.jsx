import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="proyectos"
      className="py-20 px-6 md:px-24 bg-slate-50 dark:bg-slate-900 transition-colors"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 border-b-4 border-orange-400 mb-10 inline-block mx-auto text-center">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
