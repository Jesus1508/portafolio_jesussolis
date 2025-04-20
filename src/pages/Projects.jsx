import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="proyectos"
      className="bg-white py-16 px-6 md:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section id="proyectos" className="py-20 px-6 md:px-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 border-b-4 border-orange-400 inline-block mb-10">
            Proyectos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Projects;
