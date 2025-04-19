import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="proyectos" className="bg-gray-100 py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 border-b-4 border-yellow-400 inline-block">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
